import { Component, OnInit, NgZone, ViewChild, TemplateRef, ElementRef} from '@angular/core';

import { ToastrManager } from 'ng6-toastr-notifications';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import *  as moment from 'moment';

import { Config } from '../../config';



import { FormBuilder, FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BaseComponent } from 'src/BaseComponent';
import { DataAccess } from 'src/app/services/data-access';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
  providers : [NgbModal]
})
export class InvoiceComponent extends BaseComponent implements OnInit {

  @ViewChild('fileInputDemoPhoto') fileInputDemoPhoto :ElementRef;;
  public loading:boolean = true;
  public closeResult: string;
  patientList:any = []
  states = Config.states
  invoiceList:any = []
  public defaultPagination: number;
  public advancedPagination: number;
  public paginationSize: number;
  public itemsPerPage : number;
  public disabledPagination: number;
  public isDisabled: boolean;
  public collectionSize: number;
  public currentPage: number;
  @ViewChild('acc') accordionComponent: NgbAccordion;
  public userKind:string="invoice"
  normalFiltereduserListArr:any = [];
  @ViewChild('content') content: TemplateRef<any>;   
   items = [];
   @ViewChild('invoiceFormModal') invoiceFormModal: TemplateRef<any>;
   pageOfItems: Array<any>;
  public pageSize = Config.RECORDSIZE;
  public pageNo = 1
  tempArray: any[] = [];
  totalDocRecords:any 
  invoiceFormGroup: FormGroup;
  totalPatientRecords:any
  customInvoicetime : {
    hour: 10,
    minute: 20,

};
keywordDoctor = "name"
  invoiceObject =  
  {    
    active : true,   
    "invoiceDate" : null,
    "address" : "",
    "mobileNumber" : "",
    "billTo" : "",
    "doctorId" : "",
    "status" : "",
    "paymentMode" : "",
    "action" : "",
    "appointmentId" : "",
    "invoiceAmount" : ""
  }
  doctorList:any  = []
  attendantList:any = []
  invoiceObjectBase =  
  {    
    active : true,   
    "invoiceDate" : null,
    "address" : "",
    "mobileNumber" : "",
    "billTo" : "",
    "doctorId" : "",
    "status" : "",
    "paymentMode" : "",
    "action" : "",
    "appointmentId" : "",
    "invoiceAmount" : ""
  }
  doctorName:any
  dateTimeitems: FormArray;
  openingMeridian : boolean = true;

  constructor(
    private datePipe : DatePipe,
    public router: Router,
    private modal: NgbModal,
    public toastr: ToastrManager,
    private _fb: FormBuilder,    
    public dataService: DataAccess,
    
    
  ) {
    super(router)
  //  this.customInvoicetime.hour = 9
   // this.customInvoicetime.minute = 10

    if(!this.user.role.doctor.invoice.view){
      return
    }
   

    this.invoiceFormGroup = _fb.group({
      invoiceDate: new FormControl(this.invoiceObject.invoiceDate, Validators.required),
      doctorId: new FormControl(this.invoiceObject.doctorId, Validators.required),
      mobileNumber: new FormControl(''),
      billTo: new FormControl(this.invoiceObject.billTo, Validators.required),
      address: new FormControl(this.invoiceObject.address, Validators.required),
      status: new FormControl(this.invoiceObject.status, Validators.required),
      paymentMode: new FormControl(this.invoiceObject.paymentMode),
      action: new FormControl(this.invoiceObject.action),
      appointmentId: new FormControl(this.invoiceObject.appointmentId, Validators.required),
      invoiceAmount: new FormControl(this.invoiceObject.invoiceAmount, Validators.required)
    });

    //this.invoiceFormGroup.valueChanges.subscribe(data => console.log('form changes', data));
    this.loading = false;    
    this.fetchInvoices()   
    
  }
  createdateTimeItem(): FormGroup {
    return this._fb.group({
      date: '',
      time: ''
    });
  }
  
/*
  ngAfterViewInit(){
    this.dataService.fetchAllPatients().then((result:[]) => {
      this.patientList = result.map(element => element)
    }, (err) => {
        //console.log(err);
    });

   
  }
  */
 
 doctorSelectEvent(item) {
  //console.log(" inside doctorSelectEvent "+JSON.stringify(item))
  if(item){
  this.invoiceFormGroup.get('doctorId').patchValue(item['_id']);
  this.invoiceObject.doctorId = item['_id']
 

  console.log(" this.invoiceObject.doctorId "+this.invoiceObject.doctorId)

  }
  // do something with selected item
}

doctorLocationSearch(val: string) {
  //console.log(" inside onChangePatientSearch val "+val)
 // if(val && val.length >2 ){
  let data = {name:val}
  this.dataService.fetchAllDoctors(data).then((result:[]) => {
    this.doctorList = result.map(element => element)
  }, (err) => {
      //console.log(err);
  });
 // }
}
  getInvoice(){

  }
  addItem(): void {
    this.dateTimeitems = this.invoiceFormGroup.get('dateTimeitems') as FormArray;
    this.dateTimeitems.push(this.createdateTimeItem());
  }

  removeItem(i){

     this.dateTimeitems = this.invoiceFormGroup.get('dateTimeitems') as FormArray;
    this.dateTimeitems.removeAt(i)  

  }

  openAddInvoiceDialog(){
    this.mode = "add"
    this.invoiceFormGroup = this._fb.group({
      invoiceDate: new FormControl(this.invoiceObject.invoiceDate, Validators.required),
      doctorId: new FormControl(this.invoiceObject.doctorId, Validators.required),
      mobileNumber: new FormControl(''),
      billTo: new FormControl(this.invoiceObject.billTo, Validators.required),
      address: new FormControl(this.invoiceObject.address, Validators.required),
      status: new FormControl(this.invoiceObject.status, Validators.required),
      paymentMode: new FormControl(this.invoiceObject.paymentMode),
      action: new FormControl(this.invoiceObject.action),
      appointmentId: new FormControl(this.invoiceObject.appointmentId, Validators.required),
      invoiceAmount: new FormControl(this.invoiceObject.invoiceAmount, Validators.required)
    });
    this.dateTimeitems = this.invoiceFormGroup.get('dateTimeitems') as FormArray;
   // 
    //this.dateTimeitems.push({})
    this.invoiceObject = Object.assign({}, this.invoiceObjectBase); 
    this.modalReference = this.modal.open(this.invoiceFormModal);
  }
  getPatient(){

  }
 
  ngOnInit(){


    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(["/login"]);
    }
 

    //this.pageSize = Config.RECORDSIZE;
    //this.pageNo = 1
    this.fetchInvoicesCount()  
    this.fetchInvoices()    
    
 //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
  };
  save(){
//alert("mode: "+this.mode)
   

    if(!this.invoiceFormGroup.valid){
        this.submitAttempt = true;        
        this.validateFields(this.invoiceFormGroup.controls)                   
        return; 
    } 
    if(this.invoiceObject.invoiceDate && this.invoiceObject.invoiceDate!=""){
        this.invoiceObject.invoiceDate  = this.fromJsDateToMongoDate(this.invoiceObject.invoiceDate )    
    }
    
    if(this.mode == "add"){
      //delete this.invoiceObject['doctor']
      console.log("this.invoiceObject for add == "+JSON.stringify(this.invoiceObject))
      this.dataService.addInvoice(this.invoiceObject).then((result) => {                
        //  console.log("result after adduser == "+JSON.stringify(result))
          this.fetchInvoices()
          this.mode = "add"
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('New invoice is added successfully');
          
      }, (err) => {        
        if(err && err.message)
        alert(err.message)
        //console.log(err);
      });
      
    }if(this.mode == "edit"){
      //delete this.invoiceObject['patient']
      //delete this.invoiceObject['doctor']
      this.invoiceObject['invoiceId'] = this.invoiceObject['_id']
      console.log("this.invoiceObject for edit == "+JSON.stringify(this.invoiceObject))
      this.dataService.updateInvoice(this.invoiceObject).then((result) => {
        //  console.log("****** updateinvoice result   ===== **"+JSON.stringify(result))
          //this.loading = false;
          this.mode = "add"   
          this.fetchInvoices()
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('invoice is updated successfully'); 
      }, (err) => {
        this.mode = "add"
        //this.loading = false;
        console.log(err);
      });
      
    }
    
}
async openForeditInvoice(user){

  
  this.invoiceObject = Object.assign({}, user); 

  //console.log("dateTimeArray LENGTH **"+dateTimeArray.length)


  this.invoiceFormGroup = this._fb.group({
    invoiceDate: new FormControl(this.invoiceObject.invoiceDate, Validators.required),
      mobileNumber: new FormControl(''),
      billTo: new FormControl(this.invoiceObject.billTo, Validators.required),
      address: new FormControl(this.invoiceObject.address, Validators.required),
      status: new FormControl(this.invoiceObject.status, Validators.required),
      paymentMode: new FormControl(this.invoiceObject.paymentMode),
      action: new FormControl(this.invoiceObject.action),
      appointmentId: new FormControl(this.invoiceObject.appointmentId, Validators.required),
      invoiceAmount: new FormControl(this.invoiceObject.invoiceAmount, Validators.required)
  });


  console.log("this.invoiceObject =="+JSON.stringify(this.invoiceObject))
  let dateTimeArray = []
  this.dateTimeitems = this.invoiceFormGroup.get('dateTimeitems') as FormArray;
    
  this.invoiceObject.invoiceDate = this.datePipe.transform(this.invoiceObject.invoiceDate, 'yyyy-MM-dd')
  console.log("dateTimeArray LENGTH **"+dateTimeArray.length)
  //let earlierAttendent = this.invoiceObject.attendantID
  //this.doctorName = await this.fetchDoctrById(this.invoiceObject.doctorID)

  //this.invoiceObject.attendantID = earlierAttendent

  //this.invoiceFormGroup.get('dateTimeitems').patchValue(dateTimeArray)
  //addItem

  this.mode = "edit"
  this.modalReference = this.modal.open(this.invoiceFormModal);

  //this.userObject.userId = user._id
  //this.role = user.role

  
  
}
fetchDoctrById(doctorId){
  let data = {doctorId:doctorId}
  try {      
      return new Promise((resolve) => {    
            this.dataService.fetchDoctrById(data).then((result) => {
              
            //console.log("****** invoice  ===== **"+JSON.stringify(result))
                resolve(result['name'])                 
        
            }, (err) => {
              resolve('')                 
            //this.loading = false;
            
            //console.log(err);
            });
        });
  }
  catch(error) {
      //console.log('Error', error);
  }
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
      
      this.fetchInvoices()
    
    
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    this.pageNo = 1

}
  

  fetchInvoicesCount(){
  //  this.pageNo = 1
  //  this.pageSize = 10
    this.dataService.fetchInvoicesCount().then((result) => {
        
        console.log("****** fetchinvoicesCount result   ===== **"+JSON.stringify(result))
      this.totalDocRecords = result;
      console.log("****** this.totalIvoice Records ===== **"+this.totalDocRecords)

      this.loading = false;

    }, (err) => {
      this.loading = false;
      console.log(err);
    });
  }
 

  fetchInvoices(){
  //  this.pageNo = 1
    //this.pageSize = 10
    let data = {pageNo:this.pageNo,perPage:this.pageSize}
    this.dataService.fetchInvoices(data).then((result:[]) => {
        
      this.normalFiltereduserListArr = [];  
        this.normalFiltereduserListArr = result.map(element => element)
      //  console.log("****** this.normalFiltereduserListArr   ===== **"+JSON.stringify(this.normalFiltereduserListArr))
        this.normalFiltereduserListArr.forEach(function(invoice, index){
          console.log("****** active   ===== **"+ invoice.active)
        })
        
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
    
      userInfo.invoiceId = userInfo._id
      data['invoiceId'] = userInfo._id
      data['active'] = userInfo.active
      console.log("****** userInfo   ===== **"+JSON.stringify(data))

          this.dataService.updateInvoice(data).then((result) => {
          //  console.log("****** updateinvoice result   ===== **"+JSON.stringify(result))
          this.fetchInvoices()
            this.loading = false;
      
        }, (err) => {
          this.loading = false;
          console.log(err);
        });
    
    this.toastr.successToastr('Invoice record updated successfully');
  }

  
}
