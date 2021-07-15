import { Component, OnInit,  ViewChild, TemplateRef, ElementRef} from '@angular/core';

import { ToastrManager } from 'ng6-toastr-notifications';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { Router,ActivatedRoute } from '@angular/router';
import *  as moment from 'moment';

import { Config } from '../../config';



import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BaseComponent } from 'src/BaseComponent';
import { DataAccess } from 'src/app/services/data-access';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
  providers : [NgbModal]
})
export class DeliveryComponent extends BaseComponent implements OnInit {

  
  public loading:boolean = true;
  public closeResult: string;
  public defaultPagination: number;
  public advancedPagination: number;
  public paginationSize: number;
  public itemsPerPage : number;
  public disabledPagination: number;
  public isDisabled: boolean;
  public collectionSize: number;
  public currentPage: number;
  
  public userKind:string="delivery"
  normalFiltereduserListArr:any = [];
  @ViewChild('content') content: TemplateRef<any>;   
   items = [];
   @ViewChild('deliveryFormModal') deliveryFormModal: TemplateRef<any>;
   pageOfItems: Array<any>;
  public pageSize = Config.RECORDSIZE;
  public pageNo = 1
  tempArray: any[] = [];
  totalDocRecords:any 
  
  deliveryFormGroup: FormGroup;
  totalPatientRecords:any
  fromOrderPage:boolean = false
  sexList = ["Male","Female"]
  oldEmail:string
     deliveryObject = {
      pinCode:"",
      distanceRange:"",      
      expressDeliveryPrice:"0.0",      
      generalDeliveryPrice:"0.0",      
      active:true
    }
    deliveryObjectBase = {
      pinCode:"",
      distanceRange:"",      
      expressDeliveryPrice:"0.0",      
      generalDeliveryPrice:"0.0",      
      active:true      
        
        
    }
  constructor(
    private datePipe : DatePipe,
    public router: Router,
    private route: ActivatedRoute,
    private modal: NgbModal,
    public toastr: ToastrManager,
    private _fb: FormBuilder,    
    public dataService: DataAccess,
    
    
  ) {
    super(router)

    if(!this.user.role.doctor.delivery.view){
      return
    }
    this.oldEmail = ''

    this.deliveryFormGroup = _fb.group({
      pinCode: new FormControl(this.deliveryObject.pinCode, Validators.required),
      distanceRange: new FormControl(this.deliveryObject.distanceRange),
      expressDeliveryPrice: new FormControl(this.deliveryObject.expressDeliveryPrice, Validators.required),
      generalDeliveryPrice: new FormControl(this.deliveryObject.generalDeliveryPrice, Validators.required),
      active: new FormControl(this.deliveryObject.active),            
      
      
    });

    this.loading = false;    
    this.fetchDeliverys()   
   
  }
  ngAfterViewInit(){
    if(this.fromOrderPage){
      this.openAddDeliveryDialog()
    }
   
  }
  
  openAddDeliveryDialog(){
    this.mode = "add"
    this.deliveryObject =Object.assign({}, this.deliveryObjectBase); 
    this.modalReference = this.modal.open(this.deliveryFormModal);
  }
  ngOnInit(){

    

    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(["/login"]);
    }

  

    //this.pageSize = Config.RECORDSIZE;
    //this.pageNo = 1
    this.fetchDeliverysCount()      
    
 //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
  };

  save(){
//alert("mode: "+this.mode)
    

    if(!this.deliveryFormGroup.valid){
        this.submitAttempt = true;        
        this.validateFields(this.deliveryFormGroup.controls)                   
        return; 
    } 
    

    
    if(this.mode == "add"){
      console.log("this.deliveryObject for add == "+JSON.stringify(this.deliveryObject))
      this.dataService.addDelivery(this.deliveryObject).then((result) => {                
        //  console.log("result after adduser == "+JSON.stringify(result))
          this.fetchDeliverys()
          this.mode = "add"
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('New Delivery is added successfully');
      }, (err) => {        
      console.log(err);
      });
    }if(this.mode == "edit"){
      this.deliveryObject['deliveryId'] = this.deliveryObject['_id']
      console.log("this.deliveryObject for edit == "+JSON.stringify(this.deliveryObject))
      this.dataService.updateDelivery(this.deliveryObject).then((result) => {
        //  console.log("****** updateDelivery result   ===== **"+JSON.stringify(result))
          //this.loading = false;
          this.mode = "add"   
          this.fetchDeliverys()
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('Delivery is updated successfully'); 
      }, (err) => {
        this.mode = "add"
        //this.loading = false;
        console.log(err);
      });
    }
    
}
openForeditDelivery(user){

  this.oldEmail = user['emailId']
  this.deliveryObject = Object.assign({}, user); 

  

  //this.openAddDeliveryDialog()
  this.mode = "edit"
  this.modalReference = this.modal.open(this.deliveryFormModal);

  //console.log("this.deliveryObject.dateOfBirth **"+this.deliveryObject.dateOfBirth)
  //this.userObject.userId = user._id
  //this.role = user.role

  
  
}
  pageChanged(event){
    console.log("****** this.event   ===== **"+event)
    this.pageNo = event
    this.applyFilter()
  }
  userKindChange(){
    this.pageNo = 1
    
    this.applyFilter()
  }
  applyFilter() {
      
    
               
    if( this.userKind && this.userKind=="delivery")  {      
      this.fetchDeliverys()
    }
 
   
    
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    this.pageNo = 1

}
  

  fetchDeliverysCount(){
  //  this.pageNo = 1
  //  this.pageSize = 10
    this.dataService.fetchDeliverysCount().then((result) => {
        
        console.log("****** fetchDeliverysCount result   ===== **"+JSON.stringify(result))
      this.totalDocRecords = result;
      console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)

      this.loading = false;

    }, (err) => {
      this.loading = false;
      console.log(err);
    });
  }
  

  fetchDeliverys(){
  //  this.pageNo = 1
    //this.pageSize = 10
    let data = {pageNo:this.pageNo,perPage:this.pageSize}
    this.dataService.fetchDeliverys(data).then((result:[]) => {
        
      this.normalFiltereduserListArr = [];      

        this.normalFiltereduserListArr = result.map(element => element)
       // console.log("****** this.normalFiltereduserListArr   ===== **"+JSON.stringify(this.normalFiltereduserListArr))

        this.loading = false;

    }, (err) => {
      this.loading = false;
      console.log(err);
    });

  }
  
  updateStatus(value, userInfo) {
   // userInfo.active = value
  //  console.log("****** userInfo   ===== **"+JSON.stringify(userInfo))
  let data ={}
  userInfo.active = !userInfo.active
  console.log("******  userInfo.active   ===== **"+userInfo.active )
    if( this.userKind && this.userKind=="delivery")  {    
      userInfo.deliveryId = userInfo._id
      data['deliveryId'] = userInfo._id
      data['active'] = userInfo.active
      console.log("****** userInfo   ===== **"+JSON.stringify(data))

          this.dataService.updateDelivery(data).then((result) => {
          //  console.log("****** updateDelivery result   ===== **"+JSON.stringify(result))

            this.loading = false;
      
        }, (err) => {
          this.loading = false;
          console.log(err);
        });
    }
 
  }

  
}