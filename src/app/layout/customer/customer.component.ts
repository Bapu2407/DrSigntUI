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
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers : [NgbModal]
})
export class CustomerComponent extends BaseComponent implements OnInit {

  
  states = Config.states
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
  
  public userKind:string="customer"
  normalFiltereduserListArr:any = [];
  @ViewChild('content') content: TemplateRef<any>;   
   items = [];
   @ViewChild('customerFormModal') customerFormModal: TemplateRef<any>;
   pageOfItems: Array<any>;
  public pageSize = Config.RECORDSIZE;
  public pageNo = 1
  tempArray: any[] = [];
  totalDocRecords:any 
  
  customerFormGroup: FormGroup;
  totalPatientRecords:any
  fromOrderPage:boolean = false
  sexList = ["Male","Female"]
  oldEmail:string
  customerObject = {
      name:"",
      emailId:"",      
      active:true,      
      "age" : "",
      "sex" : "",
      "addressline1" : "",
      "addressline2" : "",
      "area" : "",
      "po" : "",
      "pin" : "",
      "district" : "",
      "state" : "",
      "landmark" : "",
      "mobileNumber" : "",
      "alternateMobileNumber" : ""  
        
    }
    keywordPin:string = "pinCode"
    customerObjectBase = {
      name:"",
      emailId:"",      
      active:true,      
      "age" : "",
      "sex" : "",
      "addressline1" : "",
      "addressline2" : "",
      "area" : "",
      "po" : "",
      "pin" : "",
      "district" : "",
      "state" : "",
      "landmark" : "",
      "mobileNumber" : "",
      "alternateMobileNumber" : ""  
        
    }
    pinCode:string
    pinCodeList:any = []
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

    if(!this.user.role.doctor.customer.view){
      return
    }
    this.oldEmail = ''

    this.customerFormGroup = _fb.group({
      name: new FormControl(this.customerObject.name, Validators.required),
      age: new FormControl(this.customerObject.age, Validators.required),      
      sex: new FormControl(this.customerObject.sex, Validators.required),      
      active: new FormControl(this.customerObject.active),      
      addressline1: new FormControl(this.customerObject.addressline1, Validators.required),
      addressline2: new FormControl(this.customerObject.addressline2),
      area: new FormControl(this.customerObject.area, Validators.required),
      po: new FormControl(this.customerObject.po, Validators.required),
      state: new FormControl(this.customerObject.state, Validators.required),
      mobileNumber: new FormControl(this.customerObject.mobileNumber, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10),
      ]),
      alternateMobileNumber: new FormControl(this.customerObject.alternateMobileNumber,[        
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10)
      ]),
      pin: new FormControl(this.customerObject.pin, Validators.required),
      district: new FormControl(this.customerObject.district),
      landmark: new FormControl(this.customerObject.landmark),
      emailId: new FormControl(this.customerObject.emailId, [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    });

    //this.customerFormGroup.valueChanges.subscribe(data => console.log('form changes', data));
    this.fromOrderPage = this.route.snapshot.paramMap.get('fromOrderPage') =='fromOrderPage';
    this.loading = false;    
    this.fetchCustomers()   
   
  }
  ngAfterViewInit(){
    if(this.fromOrderPage){
      this.openAddCustomerDialog()
    }
   
  }
  
  openOrderPage(customerObj){
    console.log("customerObj =="+JSON.stringify(customerObj))
    //this.router.navigate(["/order",{customer:{name:customerObj.name,customerId:customerObj._id}}]);
    this.router.navigate(["/order",{name:customerObj.name,customerId:customerObj._id,fromCustomerPage:'fromCustomerPage'}]);
  }
  openAddCustomerDialog(){
    this.mode = "add"
    this.customerObject =Object.assign({}, this.customerObjectBase); 
    this.modalReference = this.modal.open(this.customerFormModal);
  }

  
  pincodeSelectEvent(item) {
  if(item){
  this.customerFormGroup.get('pin').patchValue(item['pinCode']);
  this.customerObject.pin = item['pinCode']
  this.pinCode = item['pinCode']

  
  //console.log(" inside customerSelectEvent "+JSON.stringify(item))
  }
  // do something with selected item
}

onChangePincodeSearch(val: string) {
  //console.log(" inside onChangePatientSearch val "+val)
 // if(val && val.length >2 ){
  let data = {pinCode:val}
  console.log("data  == "+JSON.stringify(data) )
  this.pinCodeList = []
  this.dataService.fetchAllPinCode(data).then((result:[]) => {

    console.log("this.pinCodeList  == "+JSON.stringify(result) )

    this.pinCodeList = result.map(element => element)
    //console.log("this.pinCodeList  == "+this.pinCodeList )
    if(this.pinCodeList.length == 0){
      alert("Please enter a valid pincode that belongs to a serviceable area")
    }

  }, (err) => {
    console.log(err);
    console.log("this.pinCodeList.length   == "+this.pinCodeList.length )
    if(this.pinCodeList.length == 0){
      alert("Please enter a valid pincode that belongs to a serviceable area")
    }
      
  });
 // }
}



  ngOnInit(){

    

    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(["/login"]);
    }

  

    //this.pageSize = Config.RECORDSIZE;
    //this.pageNo = 1
    this.fetchCustomersCount()      
    
 //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
  };

  save(){
//alert("mode: "+this.mode)
    if((this.oldEmail != this.customerObject.emailId && this.customerFormGroup.controls['emailId'].touched && this.mode == "edit") || this.mode=="add" ){
      let email  = this.customerFormGroup.controls.emailId.value

      for(var i in this.normalFiltereduserListArr){
        if(email == this.normalFiltereduserListArr[i].emailId){
          this.submitAttempt = true;
          this.form_fill_failure_msg = "This email id already used by another user";
          return; 
        }
      }
    }

    if(!this.customerFormGroup.valid){
        this.submitAttempt = true;        
        this.validateFields(this.customerFormGroup.controls)                   
        return; 
    } 
    

    
    if(this.mode == "add"){
      console.log("this.customerObject for add == "+JSON.stringify(this.customerObject))
      this.dataService.addCustomer(this.customerObject).then((result) => {                
        //  console.log("result after adduser == "+JSON.stringify(result))
          this.fetchCustomers()
          this.mode = "add"
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('New Customer is added successfully');
      }, (err) => {        
      console.log(err);
      });
    }if(this.mode == "edit"){
      this.customerObject['customerId'] = this.customerObject['_id']
      console.log("this.customerObject for edit == "+JSON.stringify(this.customerObject))
      this.dataService.updateCustomer(this.customerObject).then((result) => {
        //  console.log("****** updateCustomer result   ===== **"+JSON.stringify(result))
          //this.loading = false;
          this.mode = "add"   
          this.fetchCustomers()
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('Customer is updated successfully'); 
      }, (err) => {
        this.mode = "add"
        //this.loading = false;
        console.log(err);
      });
    }
    
}
openForeditCustomer(user){

  this.oldEmail = user['emailId']
  this.customerObject = Object.assign({}, user); 

  this.pinCode = this.customerObject.pin

  //this.openAddCustomerDialog()
  this.mode = "edit"
  this.modalReference = this.modal.open(this.customerFormModal);

  console.log("this.customerObject.pin **"+this.customerObject.pin)
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
      
    
               
    if( this.userKind && this.userKind=="customer")  {      
      this.fetchCustomers()
    }
 
   
    
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    this.pageNo = 1

}
  

  fetchCustomersCount(){
  //  this.pageNo = 1
  //  this.pageSize = 10
    this.dataService.fetchCustomersCount().then((result) => {
        
        console.log("****** fetchCustomersCount result   ===== **"+JSON.stringify(result))
      this.totalDocRecords = result;
      console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)

      this.loading = false;

    }, (err) => {
      this.loading = false;
      console.log(err);
    });
  }
  

  fetchCustomers(){
  //  this.pageNo = 1
    //this.pageSize = 10
    let data = {pageNo:this.pageNo,perPage:this.pageSize}
    this.dataService.fetchCustomers(data).then((result:[]) => {
        
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
    if( this.userKind && this.userKind=="customer")  {    
      userInfo.customerId = userInfo._id
      data['customerId'] = userInfo._id
      data['active'] = userInfo.active
      console.log("****** userInfo   ===== **"+JSON.stringify(data))

          this.dataService.updateCustomer(data).then((result) => {
          //  console.log("****** updateCustomer result   ===== **"+JSON.stringify(result))

            this.loading = false;
      
        }, (err) => {
          this.loading = false;
          console.log(err);
        });
    }
 
  }

  
}