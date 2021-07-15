import { Component, OnInit, NgZone, ViewChild, TemplateRef, ElementRef} from '@angular/core';

import { ToastrManager } from 'ng6-toastr-notifications';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordion,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router , ActivatedRoute} from '@angular/router';
import *  as moment from 'moment';
import { DataAccess } from 'src/app/services/data-access';
import { Config } from '../../config';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { BaseComponent } from 'src/BaseComponent';
import { FormBuilder, FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { AlertService } from 'ngx-alerts';

 
@Component({
  selector: 'app-invoicecrm',
  templateUrl: './invoicecrm.component.html',
  styleUrls: ['./invoicecrm.component.scss'],
  providers : [NgbModal]
})
export class InvoicecrmComponent extends BaseComponent implements OnInit {
  type:any
  loadingCustomeMsg:any = "Loading..."
  @ViewChild('fileInputDemoPhoto') fileInputDemoPhoto :ElementRef;;
  public loading:boolean = true;
  public showALert:boolean = false;
  
  public isPrescriptionUploaded = false
  showOldPrescription:any = ''
  public closeResult: string;
  enlargedPic:any
  enlargedPrescPic:any
  allDynaFilter = null
  patientList:any = []
  customerList:any = []
  invoicecrmStatus:string
  invoicecrmId:string
  invoicecrmDate:string
  states = Config.states
  keywordCustomer:string = "name"
  fetchInvoicecrmByCustomer:boolean = false
  invoicecrmList:any = []
  public defaultPagination: number;
  public advancedPagination: number;
  public paginationSize: number;
  public itemsPerPage : number;
  public disabledPagination: number;
  public isDisabled: boolean;
  public collectionSize: number;
  public currentPage: number;
  fromCustomerPage:boolean = false
  @ViewChild('acc') accordionComponent: NgbAccordion;
  public userKind:string="invoicecrm"
  normalFiltereduserListArr:any = [];
  customerOldPrescriptionListArr:any = [];
  
  modalSearchFilerReference: NgbModalRef;
  modalInvoiceReference: NgbModalRef;

  modalReferenceInvoicecrmForm: NgbModalRef;
  @ViewChild('content') content: TemplateRef<any>;   
   items = [];
   @ViewChild('invoicecrmFormModal') invoicecrmFormModal: TemplateRef<any>;

   @ViewChild('showInvoiceModal') showInvoiceModal: TemplateRef<any>;

   
   @ViewChild('searFiltersModal') searFiltersModal: TemplateRef<any>;
   @ViewChild('enlargedImageModal') enlargedImageModal: TemplateRef<any>;
   @ViewChild('enlargedPrescriptionModal') enlargedPrescriptionModal: TemplateRef<any>;

   
   pageOfItems: Array<any>;
  public pageSize = Config.RECORDSIZE;
  public pageNo = 1
  tempArray: any[] = [];
  totalDocRecords:any 
  invoicecrmFormGroup: FormGroup;
  totalPatientRecords:any
  customInvoicecrmtime : {
    hour: 10,
    minute: 20,

};
//couponRecord:any ={}
isCouponValidated:boolean = false
couponIgnored:boolean = false
searchByCustomer:boolean = false
searchByInvoicecrmDate:boolean = false
searchByInvoicecrmId:boolean = false
searchByStatus:boolean = false


medicineName:any
keywordMedicine = "name"
  invoicecrmObject =  
  {    
    active : true,       
    "invoiceDate" : null,    
    "invoiceTime" : "",    
    "customerId" : "",
    "orderId" : "",
    "paymentStatus" : "",
    "paymentMode" : "",  
    transactionId:'',      
    couponCode:'',
    couponValue:'',
    alreadyTimes:'',
    couponId:'',
    
    "invoiceAmount" : "" 
  }
  medicineArray:any = [[{
    medicineId: '',             
    medicineName : "",
    quantity : "",
    mg: ''
            
  }]]
  term: string;
  attendantList:any = []
  invoicecrmObjectBase =  
  {    
    active : true,       
    "invoiceDate" : null,    
    "invoiceTime" : "",    
    "customerId" : "",
    "orderId" : "",
    "paymentStatus" : "",
    "paymentMode" : "",  
    transactionId:'',
    couponCode:'',    
    couponValue:'', 
    alreadyTimes:'',
    couponId:'',
    "invoiceAmount" : "" 
  }
  invoiceURL:SafeUrl
  customer:any
  customerName:any
  customerId:any
  doctorName:any
  medicineListItems: FormArray;
  openingMeridian : boolean = true;

  constructor(    
    public router: Router,
    private route: ActivatedRoute,
    private modal: NgbModal,
    public toastr: ToastrManager,
    private _fb: FormBuilder,    
    public dataService: DataAccess   ,
    private sanitizer: DomSanitizer,
    private alertService: AlertService  
    
    
  ) {
    super(router)
  //  this.customInvoicecrmtime.hour = 9
   // this.customInvoicecrmtime.minute = 10

    if(!this.user.role.doctor.invoicecrm.view){
      return
    }

    this.customerName =  this.route.snapshot.paramMap.get('name');

    this.fromCustomerPage = this.route.snapshot.paramMap.get('fromCustomerPage') =='fromCustomerPage';
    console.log("this.customerName  **"+this.customerName ) 
    //this.customerId =  "5ee8ea1158ea514eec6f6e18"//this.route.snapshot.paramMap.get('customerId');    
    this.customerId = this.route.snapshot.paramMap.get('customerId');
    console.log("this.customerId  **"+this.customerId ) 
    
    this.invoicecrmFormGroup = this.buildForm()
    //this.createMedicineItem()

    //this.invoicecrmFormGroup.valueChanges.subscribe(data => console.log('form changes', data));
   // this.loading = false;    
    //this.fetchInvoicecrms()   
    
  }

  buildForm(){
    return this._fb.group({      
      customerId: new FormControl(this.invoicecrmObject.customerId, Validators.required),
      orderId: new FormControl(this.invoicecrmObject.orderId, Validators.required),      
      transactionId: new FormControl(this.invoicecrmObject.transactionId),      
      couponCode: new FormControl(this.invoicecrmObject.couponCode),      
      
      paymentStatus: new FormControl(this.invoicecrmObject.paymentStatus, Validators.required),
      paymentMode: new FormControl(this.invoicecrmObject.paymentMode),            
      invoiceAmount: new FormControl(this.invoicecrmObject.invoiceAmount, Validators.required)
    });
  }
  validateCoupon(){

    //console.log("this.invoicecrmObject.couponCode  **"+this.invoicecrmObject.couponCode) 
    
    if(this.invoicecrmObject.couponCode && this.invoicecrmObject.couponCode.trim() !=''){

      this.loading = true
      let data = {couponCode:this.invoicecrmObject.couponCode,paymentMode:this.invoicecrmObject.paymentMode}

      console.log("data=="+JSON.stringify(data))

      this.dataService.validateCoupon(data).then((result:any) => {            
       
      this.toastr.successToastr('Valid Coupon');      
      this.loading = false;
      this.isCouponValidated = true
    //  this.couponRecord = Object.assign({}, result); 
    if(result && result['coupon_amount']){
     // this.invoicecrmObject.couponValue = this.couponRecord.coupon_amount
     this.invoicecrmObject.couponValue = result['coupon_amount']
     this.invoicecrmObject.alreadyTimes = result['alreadyTimes']
     this.invoicecrmObject.couponId = result['_id']
     

     console.log("result coupon  **"+JSON.stringify(result)) 

    }
      this.commonOperationDuringSave()

    }, (err) => {
        this.toastr.errorToastr(err.message);
        this.loading = false;      
        
        this.isCouponValidated = false
      console.log(err);
    });
      //alert(this.invoicecrmObject.couponCode)
    }else{
      this.isCouponValidated = true
    }

    
  }
  takeCoupon(){
    this.couponIgnored = !this.couponIgnored
    //if(this.couponIgnored){
      //this.ignoreCoupon()    
   // }

  }
  ignoreCoupon(){
    this.couponIgnored = true
    this.invoicecrmObject.couponCode = ''
    this.isCouponValidated = true
  }
  getControls() {
    return (this.invoicecrmFormGroup.get('medicineListItems') as FormArray).controls;
  }
  gotoCustomerPage(){
    this.router.navigate(["/customer",{fromInvoicecrmPage:'fromInvoicecrmPage'}]);
  }
  openCustomerPage(){
    this.router.navigate(["/customer"]);
  }
  createMedicineItem(): FormGroup {
    return this._fb.group({
      medicineId: '',
      medicineName: '',
      mg: '',
      quantity: ''
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
  getInvoicecrm(){

  }
  addItem(): void {
    this.medicineListItems = this.invoicecrmFormGroup.get('medicineListItems') as FormArray;
    this.medicineListItems.push(this.createMedicineItem());
  }

  removeItem(i){

     this.medicineListItems = this.invoicecrmFormGroup.get('medicineListItems') as FormArray;
    this.medicineListItems.removeAt(i)  

  }

  medicineSelectEvent(item,i) {
    if(item){
    //this.invoicecrmFormGroup.get('medicineID').patchValue(item['_id']);
   // this.invoicecrmObject.medicineList[i].medicineId = item['_id']
    this.medicineListItems.at(i).get('medicineId').patchValue(item['_id']);
    this.medicineListItems.at(i).get('medicineName').patchValue(item['name']);

    
   // this.invoicecrmObject.medicineList[i].medicineName = item['medicineName']

    //console.log(" inside invoicecrmSelectEvent "+JSON.stringify(item))
    }
    // do something with selected item
  }
 
  doctorMedcineSearch(val: string,i) {
    console.log(" inside onChangePatientSearch val "+val)

    console.log(" component count "+ i)

   // if(val && val.length >2 ){
    let data = {name:val}

    //let medicineArray = []
    this.dataService.fetchAllMedicines(data).then((result:[]) => {
      this.medicineArray = result.map(element => element)
      //this.medicineArray[i] = medicineArray
      //this.medicineArray = medicineArray.map(element => element)
     // console.log("this.medicineArray=="+JSON.stringify(this.medicineArray[i]))
    }, (err) => {
        //console.log(err);
    });
   // }
  }
  enableSearchByCutomer(){
    this.searchByCustomer = !this.searchByCustomer
  }
  enableSearchByInvoicecrmDate(){
    this.searchByInvoicecrmDate = !this.searchByInvoicecrmDate
  }
  enableSearchByInvoicecrmId(){
    this.searchByInvoicecrmId = !this.searchByInvoicecrmId
  }
  enableSearchByStatus(){
    this.searchByStatus = !this.searchByStatus
  }
  openSearchFilter(){
    //this.reset()
    this.reinitialise()
    this.modalSearchFilerReference = this.modal.open(this.searFiltersModal); 
  }

  openInvoice(obj){
    this.type = "application/pdf"
    //this.invoiceURL = this.sanitizer.bypassSecurityTrustResourceUrl(obj.pdfURL)

    this.invoiceURL = obj.pdfURL
    if(obj.paymentStatus !='Paid'){

      this.showALert = true
      let text = 'Please note that this is just an interim invoice because the payment is not yet made for this order, the final invoice is dependent on many other factors including Coupon, Card payment and all'
      //alert(text)
      //this.alerts.setMessage(text,'warn');
      this.alertService.info(text);
    }

    console.log("invoice URL:"+ this.invoiceURL)
    this.modalInvoiceReference = this.modal.open(this.showInvoiceModal, { size: 'lg' }); 
  }
  closeInvoice(){
    if(this.modalInvoiceReference)
    this.modalInvoiceReference.dismiss()
  }
  closeSearchModal(){
    //if(this.modalSearchFilerReference)
    //this.modalSearchFilerReference.close();
    if(this.modalSearchFilerReference)
    this.modalSearchFilerReference.dismiss()
  }
  openforAddInvoicecrmDialog(){

    this.customerOldPrescriptionListArr = []; 
    this.customerId = ''
    /*
    if(this.customerId == undefined || !this.customerId || this.customerId == ''){
     alert("Please select a customer first, from the dropdown")
     return
    }
    */
    this.mode = "add"
    this.invoicecrmFormGroup = this.buildForm()
    this.medicineListItems = this.invoicecrmFormGroup.get('medicineListItems') as FormArray;
   // 
    //this.medicineListItems.push({})
    this.invoicecrmObject = Object.assign({}, this.invoicecrmObjectBase); 
    this.modalReferenceInvoicecrmForm = this.modal.open(this.invoicecrmFormModal);
  }
  
  closeModal() {
     
    if(this.modalReferenceInvoicecrmForm)
      this.modalReferenceInvoicecrmForm.close();
    
  }
  getPatient(){

  }
 
  ngOnInit(){

    

    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(["/login"]);
    }
    
    this.fetchInvoicecrmsCount()  
    this.fetchInvoicecrms()   

    if(this.customerId)
    this.fetchAllInvoicecrmPrescriptions()   
    
    if(this.customerId == undefined || !this.customerId || this.customerId == ''){
      this.fetchCustomers() 
    }
    
 //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
  };

  fetchCustomers(){
    //  this.pageNo = 1
      //this.pageSize = 10
      
      this.dataService.fetchAllCustomersNotByName().then((result:[]) => {
          
        //this.customerList = [];      
  
          this.customerList = result.map(element => element)
         // if(!this.fromCustomerPage){
           // this.customerId = this.customerList[0]
         // }
  
      }, (err) => {
        this.loading = false;
        console.log(err);
      });
  
    }
   
    commonOperationDuringSave(){
      if(!this.invoicecrmFormGroup.valid){
        this.submitAttempt = true;        
        this.validateFields(this.invoicecrmFormGroup.controls)                   
        return; 
      }
    
    if(this.mode == "edit"){
      this.loading = true;
      //delete this.invoicecrmObject['patient']
      delete this.invoicecrmObject['customer']
      this.invoicecrmObject['invoicecrmId'] = this.invoicecrmObject['_id']
      //this.invoicecrmObject.couponValue = this.couponRecord.coupon_amount
    //  console.log("this.invoicecrmObject for edit == "+JSON.stringify(this.invoicecrmObject))
      this.dataService.updateInvoicecrm(this.invoicecrmObject).then((result) => {
        //  console.log("****** updateinvoicecrm result   ===== **"+JSON.stringify(result))
          
          this.commonAfterSaveCode()
          if(this.isPrescriptionUploaded){
            
            this.isPrescriptionUploaded = false
          }

          this.isCouponValidated = false
          this.couponIgnored = false
          this.form_fill_failure_msg = ""
          //this.loading = false;
          this.toastr.successToastr('invoicecrm is updated successfully'); 
      }, (err) => {
        //this.mode = "add"
        this.loading = false;
        console.log(err);
      });
      
    }
    }
  save(){

     
   if(this.invoicecrmObject.paymentStatus !='Paid'){
     alert("No payment done yet, please make sure that an invoice is paid first, then you can save edit")
     return
   }
    if(!this.isCouponValidated && !this.couponIgnored){
      this.validateCoupon()      
    }else{
      this.commonOperationDuringSave()
  }
    
}

commonAfterSaveCode(){
  this.customerId = ''
          this.loading = true;
         // this.normalFiltereduserListArr = []; 
          this.closeMainModal()
          setTimeout(() => {
            //this.loading = false;
            this.mode = "add"   
            this.fetchInvoicecrms()
            
        }, 2000);
      
}

enlargePrescription(obj){
  //this.closeCustomModal()
  //this.enlargedPic = ''
  let image  = obj.uploadPhotoInvoicecrmPrescriptionURL    
  this.enlargedPrescPic = image
  this.modalReferencePrescriptionImage = this.modal.open(this.enlargedPrescriptionModal); 
}

selectPrescription(obj){
 // let image  = obj.uploadPhotoInvoicecrmPrescriptionURL    
  //  this.enlargedPrescPic = image
  //this.modalReferenceImage = this.modal.open(this.enlargedPrescriptionModal); 
  obj.selectValue = true

  for ( var i in  this.customerOldPrescriptionListArr){
    let oldPresc = this.customerOldPrescriptionListArr[i]
    if(oldPresc._id == obj._id){
      continue
    }else{
      //this.customerOldPrescriptionListArr.splice(i, 1);
      oldPresc.selectValue = false
      //this.customerOldPrescriptionListArr.splice(i, 1,oldPresc);
    }
  }
  
  console.log("obj =="+JSON.stringify(obj))
  //this.getPhotoOLDPrescription(obj.uploadPhotoInvoicecrmPrescriptionURL)
  //this.showOldPrescription  = 'url(' + obj.uploadPhotoInvoicecrmPrescriptionURL + ')'
}

getPhotoOLDPrescription(image) {
  try {
    
    
    return 'url(' + image + ')'
  }
  catch(error) {
   console.log('Error', error);
  }
}


commonCodeDuringEdit(){

  
  this.invoicecrmFormGroup = this._fb.group({
    customerId: new FormControl(this.invoicecrmObject.customerId, Validators.required),
    orderId: new FormControl(this.invoicecrmObject.orderId, Validators.required),      
    transactionId: new FormControl(this.invoicecrmObject.transactionId),      
    paymentStatus: new FormControl(this.invoicecrmObject.paymentStatus, Validators.required),
    couponCode: new FormControl(this.invoicecrmObject.couponCode),      
    paymentMode: new FormControl(this.invoicecrmObject.paymentMode),            
    invoiceAmount: new FormControl(this.invoicecrmObject.invoiceAmount, Validators.required)
  });

  //console.log("this.invoicecrmObject =="+JSON.stringify(this.invoicecrmObject))
  let dateTimeArray = []
  this.medicineListItems = this.invoicecrmFormGroup.get('medicineListItems') as FormArray;
  this.medicineListItems.removeAt(0)  
    

  console.log("this.medicineListItems **"+this.medicineListItems.length)
  
  
  //this.invoicecrmObject.attendantID = earlierAttendent

  //this.invoicecrmFormGroup.get('medicineListItems').patchValue(dateTimeArray)
  //addItem

  //try{
    //this.modalReferenceInvoicecrmForm = this.modal.open(this.invoicecrmFormModal);
  //}catch(error){
//    console.log(error)
  //}
  //setTimeout(() => {
   
}
 openForeditInvoicecrm(user){
  this.modalReferenceInvoicecrmForm = this.modal.open(this.invoicecrmFormModal);

  this.loading = true
  this.loadingCustomeMsg == "Fetching old prescriptions, please wait.."
  this.mode = "edit"
  
  //this.modalReferenceInvoicecrmForm = this.modal.open(this.invoicecrmFormModal);
  //this.customerId = user['customerId']
  this.invoicecrmObject = Object.assign({}, user); 
  
 // console.log("this.customerId == "+this.customerId)

  //if(this.customerId)
  //this.fetchAllInvoicecrmPrescriptions()  

  //let data ={customerId:this.customerId}
  this.commonCodeDuringEdit()
  
  
  
}
  reinitialise(){
    this.searchByInvoicecrmDate = false
    this.searchByInvoicecrmId = false
    this.searchByCustomer = false
    this.searchByStatus = false
    this.invoicecrmDate = ''
    this.customerId = ''
    this.invoicecrmId = ''
    this.invoicecrmStatus = ''
    this.customerName = ''
    this.allDynaFilter = null
    this.fetchInvoicecrmsCount()
    this.totalDocRecords = 0
    this.fetchInvoicecrms()
  }
  reset(){
    this.reinitialise()
    this.toastr.successToastr('Filters reset, invoicecrm list refreshed');
  }
  pageChanged(event){
    console.log("****** this.event   ===== **"+event)
    this.pageNo = event
    this.applyFilter()
  }
searchByFilters(){
  let dynaFilterArry = []
  let dynaFilter = {}
 // let allDynaFilter = {}
  if(this.searchByInvoicecrmDate && this.invoicecrmDate){
    let converteddate = this.fromJsDateToLocationdateTimeFormat(this.invoicecrmDate)
    dynaFilter['createdDate'] = converteddate
    dynaFilterArry.push({createdDate:converteddate}) 
    console.log("converteddate **"+converteddate) 
    //moment(new Date()).format('YYYY-MM-DD[T00:00:00.000Z]'

    //var dateTime = new Date(this.invoicecrmDate);
    /*
    var dateTime1dayAgo = moment(this.invoicecrmDate,"YYYY-MM-DD HH:mm:ss").subtract(1,'d').format('YYYY-MM-DD[T00:00:00.000Z]');
    var dateTime1dayLater = moment(this.invoicecrmDate,"YYYY-MM-DD HH:mm:ss").add(1,'days').format('YYYY-MM-DD[T00:00:00.000Z]');
    dynaFilter['createdDate'] = {"$gt": dateTime1dayAgo}     
    //console.log("this.invoicecrmDate **"+converteddate)    
    console.log("this.invoicecrmDate **"+this.invoicecrmDate) 
    dynaFilterArry.push({createdDate:{"$gt": dateTime1dayAgo} })     
    dynaFilterArry.push({createdDate:{"$lt": dateTime1dayLater} }) 
    */

  }
  if(this.searchByCustomer && this.customerId){
    //dynaFilter['customerId'] = this.customerId   
    dynaFilterArry.push({customerId:this.customerId }) 
  }
  if(this.searchByInvoicecrmId && this.invoicecrmId){
    //dynaFilter['invoicecrmId'] = this.invoicecrmId   
    dynaFilterArry.push({invoicecrmId:this.invoicecrmId }) 
  }
  if(this.searchByStatus && this.invoicecrmStatus){
    //dynaFilter['status'] = this.invoicecrmStatus   
    dynaFilterArry.push({status:this.invoicecrmStatus})    
  }
  this.allDynaFilter = {$and:dynaFilterArry} 
  
  
  this.fetchInvoicecrmsCount()  
  this.fetchInvoicecrms()     
  

  this.closeSearchModal()
  this.toastr.successToastr('Searching Done');
          

  
}
closeMainModal() {
     
  if(this.modalReferenceInvoicecrmForm)
    this.modalReferenceInvoicecrmForm.close();
  
}
  userKindChange(){
    this.pageNo = 1
    
    this.applyFilter()
  }
  applyFilter() {  
    if(this.customerId != undefined && this.customerId && this.customerId != ''){
      this.fetchInvoicecrmByCustomer = true
    }else{
      this.fetchInvoicecrmByCustomer = false
    }

    console.log("this.customerId "+this.customerId)    
        
    this.fetchInvoicecrmsCount()  
    this.fetchInvoicecrms()    
    
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    this.pageNo = 1

}
 
  
customerSelectEvent(item) {
  if(item){
  this.invoicecrmFormGroup.get('customerId').patchValue(item['_id']);
  this.customerId = item['_id']

  if(this.customerId){
    this.loading = true
    this.loadingCustomeMsg == "Fetching old prescriptions, please wait.."
    this.fetchAllInvoicecrmPrescriptions()   
  }
  //console.log(" inside customerSelectEvent "+JSON.stringify(item))
  }
  // do something with selected item
}

onChangeCustomerSearch(val: string) {
  //console.log(" inside onChangePatientSearch val "+val)
 // if(val && val.length >2 ){
  let data = {name:val}
  this.dataService.fetchAllCustomers(data).then((result:[]) => {
    this.customerList = result.map(element => element)
  }, (err) => {
      //console.log(err);
  });
 // }
}



  fetchInvoicecrmsCount(){
  //  this.pageNo = 1
  //  this.pageSize = 10
   /* let data = {}
    if(this.fetchInvoicecrmByCustomer){
      data['fetchInvoicecrmByCustomer'] = true
      data['customerId'] = this.customerId
    }else{
      data['fetchInvoicecrmByCustomer'] = false
    }
    this.dataService.fetchInvoicecrmsCount(data).then((result) => {
        
        console.log("****** fetchinvoicecrmsCount result   ===== **"+JSON.stringify(result))
      this.totalDocRecords = result;
      console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)

      this.loading = false;

    }, (err) => {
      this.loading = false;
      console.log(err);
    });

    */

   let data = {pageNo:this.pageNo,perPage:this.pageSize,filter : this.allDynaFilter}
   // this.fetchInvoicecrmsCount({filter : allDynaFilter})  
    //this.fetchInvoicecrmsByFilters({filter : allDynaFilter})   
    console.log(" inside data "+JSON.stringify(data))
  
    this.dataService.fetchInvoicecrmsByFilterCount(data).then((result) => {
          
      console.log("****** fetchinvoicecrmsCount result   ===== **"+JSON.stringify(result))
    this.totalDocRecords = result;
    this.loading = false;

    console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)
  
  }, (err) => {
    this.loading = false;
    console.log(err);
  });
  }
 
   fetchAllInvoicecrmPrescriptions(){
    
    let data ={customerId:this.customerId}

    console.log(" fetch old prescription for "+JSON.stringify(data))
    this.dataService.fetchAllInvoicecrmPrescriptions(data).then((result:[]) => {        
     
     /* this.customerOldPrescriptionListArr = []; 
      if(this.customerOldPrescriptionListArr.length >0 ){
        this.customerOldPrescriptionListArr = result.map(element => {        
          //let obj = element 
         // element['selectValue'] = false

          //return   element
          return Object.assign({}, element, {
            selectValue: false
          })
        
        }
        )
      }
      */

     this.customerOldPrescriptionListArr = []; 
     if(result){
       for(var i in result){
         let obj:any = result[i]
         obj['selectValue'] = false
         this.customerOldPrescriptionListArr.push(obj)
 
       }
     }
     //   console.log("****** this.customerOldPrescriptionListArr   ===== **"+JSON.stringify(this.customerOldPrescriptionListArr))      
        this.loading = false;
  
    }, (err) => {
      this.customerOldPrescriptionListArr = []; 
      this.loading = false;
      console.log(err);
    });
  }
  fetchInvoicecrms(){
  //  this.pageNo = 1
    //this.pageSize = 10
   // let data = {pageNo:this.pageNo,perPage:this.pageSize}
    //data['customerId'] = this.customerId

   // console.log("this.customerId   ===== **"+this.customerId)
    let data = {pageNo:this.pageNo,perPage:this.pageSize,filter : this.allDynaFilter}
 // this.fetchInvoicecrmsCount({filter : allDynaFilter})  
  //this.fetchInvoicecrmsByFilters({filter : allDynaFilter})   
  //console.log(" inside data "+JSON.stringify(data))
  this.dataService.fetchInvoicecrms(data).then((result:[]) => {        
    this.normalFiltereduserListArr = []; 
      this.normalFiltereduserListArr = result.map(element => {        
        return   element
      })
     // console.log("****** this.fetchInvoicecrmsByFilters   ===== **"+JSON.stringify(this.normalFiltereduserListArr))      
      this.loading = false;

  }, (err) => {
    this.normalFiltereduserListArr = []; 
    this.loading = false;
    console.log(err);
  });
        

/*
    if(this.fetchInvoicecrmByCustomer){
      data['fetchInvoicecrmByCustomer'] = true
      data['customerId'] = this.customerId
    }else{
      data['fetchInvoicecrmByCustomer'] = false
    }
    
    this.dataService.fetchInvoicecrms(data).then((result:[]) => {
        
      this.normalFiltereduserListArr = []; 
     // this.customerList = []
        this.normalFiltereduserListArr = result.map(element => {
          
          return   element
        })
        console.log("****** this.fetchInvoicecrms   ===== **"+JSON.stringify(this.normalFiltereduserListArr))
        

       // this.normalFiltereduserListArr.forEach(function(invoicecrm, index){
         // console.log("****** active   ===== **"+ invoicecrm.active)
       // })
        
        this.loading = false;

    }, (err) => {
      this.normalFiltereduserListArr = []; 
      this.loading = false;
      console.log(err);
    });
*/
  }
  
  updateStatus(value, userInfo) {
   // userInfo.active = value
  //  console.log("****** userInfo   ===== **"+JSON.stringify(userInfo))
  let data ={}
  userInfo.active = !userInfo.active
  console.log("******  userInfo.active   ===== **"+userInfo.active )
    
      userInfo.invoicecrmId = userInfo._id
      data['invoicecrmId'] = userInfo._id
      data['active'] = userInfo.active
      console.log("****** userInfo   ===== **"+JSON.stringify(data))

          this.dataService.updateInvoicecrm(data).then((result) => {
          //  console.log("****** updateinvoicecrm result   ===== **"+JSON.stringify(result))
          this.fetchInvoicecrms()
            this.loading = false;
      
        }, (err) => {
          this.loading = false;
          console.log(err);
        });
    
    this.toastr.successToastr('Invoicecrm record updated successfully');
  }

  
}
