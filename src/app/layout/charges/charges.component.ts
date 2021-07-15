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
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.scss'],
  providers : [NgbModal]
})
export class ChargesComponent extends BaseComponent implements OnInit {

  
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
  
  public userKind:string="charges"
  normalFiltereduserListArr:any = [];
  @ViewChild('content') content: TemplateRef<any>;   
   items = [];
   @ViewChild('chargesFormModal') chargesFormModal: TemplateRef<any>;
   pageOfItems: Array<any>;
  public pageSize = Config.RECORDSIZE;
  public pageNo = 1
  tempArray: any[] = [];
  totalDocRecords:any 
  
  chargesFormGroup: FormGroup;
  totalPatientRecords:any
  fromOrderPage:boolean = false
  sexList = ["Male","Female"]
  oldEmail:string
     chargesObject = {
      serviceChargeName:"",
    serviceChargeAmount:"",      
      active:true      
        
    }
    chargesObjectBase = {
      serviceChargeName:"",
      serviceChargeAmount:"",      
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

    if(!this.user.role.doctor.charges.view){
      return
    }
    this.oldEmail = ''

    this.chargesFormGroup = _fb.group({
      serviceChargeName: new FormControl(this.chargesObject.serviceChargeName, Validators.required),
      active: new FormControl(this.chargesObject.active),            
      serviceChargeAmount: new FormControl(this.chargesObject.serviceChargeAmount, Validators.required),
      
    });

    this.loading = false;    
    this.fetchChargess()   
   
  }
  ngAfterViewInit(){
    if(this.fromOrderPage){
      this.openAddChargesDialog()
    }
   
  }
  
  openAddChargesDialog(){
    this.mode = "add"
    this.chargesObject =Object.assign({}, this.chargesObjectBase); 
    this.modalReference = this.modal.open(this.chargesFormModal);
  }
  ngOnInit(){

    

    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(["/login"]);
    }

  

    //this.pageSize = Config.RECORDSIZE;
    //this.pageNo = 1
    this.fetchChargessCount()      
    
 //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
  };

  save(){
//alert("mode: "+this.mode)
    

    if(!this.chargesFormGroup.valid){
        this.submitAttempt = true;        
        this.validateFields(this.chargesFormGroup.controls)                   
        return; 
    } 
    

    
    if(this.mode == "add"){
      console.log("this.chargesObject for add == "+JSON.stringify(this.chargesObject))
      this.dataService.addCharges(this.chargesObject).then((result) => {                
        //  console.log("result after adduser == "+JSON.stringify(result))
          this.fetchChargess()
          this.mode = "add"
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('New Charges is added successfully');
      }, (err) => {        
           console.log(err);
      });
    }if(this.mode == "edit"){
      this.chargesObject['chargesId'] = this.chargesObject['_id']
      console.log("this.chargesObject for edit == "+JSON.stringify(this.chargesObject))
      this.dataService.updateCharges(this.chargesObject).then((result) => {
        //  console.log("****** updateCharges result   ===== **"+JSON.stringify(result))
          //this.loading = false;
          this.mode = "add"   
          this.fetchChargess()
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('Charges is updated successfully'); 
      }, (err) => {
        this.mode = "add"
        //this.loading = false;
        console.log(err);
      });
    }
    
}
openForeditCharges(user){

  this.oldEmail = user['emailId']
  this.chargesObject = Object.assign({}, user); 

  

  //this.openAddChargesDialog()
  this.mode = "edit"
  this.modalReference = this.modal.open(this.chargesFormModal);

  //console.log("this.chargesObject.dateOfBirth **"+this.chargesObject.dateOfBirth)
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
      
    
               
    if( this.userKind && this.userKind=="charges")  {      
      this.fetchChargess()
    }
 
   
    
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    this.pageNo = 1

}
  

  fetchChargessCount(){
  //  this.pageNo = 1
  //  this.pageSize = 10
    this.dataService.fetchChargessCount().then((result) => {
        
        console.log("****** fetchChargessCount result   ===== **"+JSON.stringify(result))
      this.totalDocRecords = result;
      console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)

      this.loading = false;

    }, (err) => {
      this.loading = false;
      console.log(err);
    });
  }
  

  fetchChargess(){
  //  this.pageNo = 1
    //this.pageSize = 10
    let data = {pageNo:this.pageNo,perPage:this.pageSize}
    this.dataService.fetchChargess(data).then((result:[]) => {
        
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
    if( this.userKind && this.userKind=="charges")  {    
      userInfo.chargesId = userInfo._id
      data['chargesId'] = userInfo._id
      data['active'] = userInfo.active
      console.log("****** userInfo   ===== **"+JSON.stringify(data))

          this.dataService.updateCharges(data).then((result) => {
          //  console.log("****** updateCharges result   ===== **"+JSON.stringify(result))

            this.loading = false;
      
        }, (err) => {
          this.loading = false;
          console.log(err);
        });
    }
 
  }

  
}