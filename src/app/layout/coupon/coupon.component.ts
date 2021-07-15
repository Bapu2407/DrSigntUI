import { Component, OnInit, NgZone, ViewChild, TemplateRef, ElementRef} from '@angular/core';

import { ToastrManager } from 'ng6-toastr-notifications';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordion,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router , ActivatedRoute} from '@angular/router';
import *  as moment from 'moment';
import { DataAccess } from 'src/app/services/data-access';
import { Config } from '../../config';

import { DatePipe } from '@angular/common';
import { BaseComponent } from 'src/BaseComponent';
import { FormBuilder, FormGroup, FormControl, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
  providers : [NgbModal]
})
export class CouponComponent extends BaseComponent implements OnInit {
  loadingCustomeMsg:any = "Loading..."
  @ViewChild('fileInputDemoPhoto') fileInputDemoPhoto :ElementRef;;
  public loading:boolean = true;
  couponType:any = {delivery_coupon:[]}
  public isPrescriptionUploaded = false
  showOldPrescription:any = ''
 
  

  public closeResult: string;
  enlargedPic:any
  enlargedPrescPic:any
  allDynaFilter = null
  patientList:any = []
  customerList:any = []
  couponStatus:string
  couponId:string
  couponDate:string
  states = Config.states
  keywordCustomer:string = "name"
  fetchCouponByCustomer:boolean = false
  couponList:any = []
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
  public userKind:string="coupon"
  normalFiltereduserListArr:any = [];
  customerOldPrescriptionListArr:any = [];
  
  modalSearchFilerReference: NgbModalRef;

  modalReferenceCouponForm: NgbModalRef;
  @ViewChild('content') content: TemplateRef<any>;   
   items = [];
   @ViewChild('couponFormModal') couponFormModal: TemplateRef<any>;
   @ViewChild('searFiltersModal') searFiltersModal: TemplateRef<any>;
   @ViewChild('enlargedImageModal') enlargedImageModal: TemplateRef<any>;
   @ViewChild('enlargedPrescriptionModal') enlargedPrescriptionModal: TemplateRef<any>;

   
   pageOfItems: Array<any>;
  public pageSize = Config.RECORDSIZE;
  public pageNo = 1
  tempArray: any[] = [];
  totalDocRecords:any 
  couponFormGroup: FormGroup;
  totalPatientRecords:any
  customCoupontime : {
    hour: 10,
    minute: 20,

};
subLogicType:boolean = false


medicineName:any
keywordMedicine = "name"
  couponObject =  
  {    
    active : true,             
    coupon_amount:'',
    coupon_code:'',
    expiryDate : null,
    paymentMode:'Cash',
    couponUsageType:'single_use',
    maximumUseTimes:'0',
    alreadyTimes:'0'    
    
  }
  medicineArray:any = [[{
    medicineId: '',             
    medicineName : "",
    quantity : "",
    mg: ''
            
  }]]
  attendantList:any = []
  couponObjectBase =  
  {    
    active : true,         
    coupon_amount:'',
    coupon_code:'',
    expiryDate : null,
    paymentMode:'Cash',
    couponUsageType:'single_use',
    maximumUseTimes:'0',
    alreadyTimes:'0'    
  }
  customer:any
  customerName:any
  customerId:any
  doctorName:any
  medicineListItems: FormArray;
  openingMeridian : boolean = true;

  constructor(    
    private datePipe : DatePipe,
    public router: Router,
    private route: ActivatedRoute,
    private modal: NgbModal,
    public toastr: ToastrManager,
    private _fb: FormBuilder,    
    public dataService: DataAccess   
    
  ) {
    super(router)
  //  this.customCoupontime.hour = 9
   // this.customCoupontime.minute = 10

    if(!this.user.role.doctor.coupon.view){
      return
    }

    

    this.customerName =  this.route.snapshot.paramMap.get('name');

    this.fromCustomerPage = this.route.snapshot.paramMap.get('fromCustomerPage') =='fromCustomerPage';
    console.log("this.customerName  **"+this.customerName ) 
    //this.customerId =  "5ee8ea1158ea514eec6f6e18"//this.route.snapshot.paramMap.get('customerId');


    this.couponFormGroup = this.buildForm()
   
  }

  buildForm(){
    
    return this._fb.group({
      
      couponUsageType: new FormControl(this.couponObject.couponUsageType, Validators.required), 
      alreadyTimes: new FormControl(this.couponObject.alreadyTimes), 
      maximumUseTimes: new FormControl(this.couponObject.maximumUseTimes), 
      paymentMode: new FormControl(this.couponObject.paymentMode),       
      expiryDate: new FormControl(this.couponObject.expiryDate, Validators.required) ,
      coupon_code: new FormControl(this.couponObject.coupon_code, Validators.required), 
      coupon_amount: new FormControl(this.couponObject.coupon_amount, Validators.required), 
    });
  }
  changePercentAmount(){

  }

  convertToHumanCouponTypeDesc(couponType){
    
    if(couponType == "delivery_coupon"){
      return 'Direct Coupons on Delivery'
    }

    if(couponType == "order_volume"){
      return 'Coupons ON Order Volume'
    }
    
    if(couponType == "coupon"){
      return 'Coupon'
    }

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
  getCoupon(){

  }
  
  openforAddCouponDialog(){

    this.customerOldPrescriptionListArr = []; 
    this.customerId = ''
    /*
    if(this.customerId == undefined || !this.customerId || this.customerId == ''){
     alert("Please select a customer first, from the dropdown")
     return
    }
    */
    this.mode = "add"
    this.couponFormGroup = this.buildForm()
    
   // 
    //this.medicineListItems.push({})
    this.couponObject = Object.assign({}, this.couponObjectBase);

    this.couponObject.coupon_code = "COUPO"+Math.random().toString(5).substr(2, 5)
    this.modalReferenceCouponForm = this.modal.open(this.couponFormModal);
  }
  getPatient(){

  }
 

  closeModal() {
     
    if(this.modalReferenceCouponForm)
      this.modalReferenceCouponForm.close();
    
  }
  ngOnInit(){


    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(["/login"]);
    }
    
    this.fetchCouponsCount()  
    this.fetchCoupons()   

   
    
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
    
  save(){

    if(!this.couponFormGroup.valid){
        this.submitAttempt = true;        
        this.validateFields(this.couponFormGroup.controls)                   
        return; 
    } 
    this.couponObject.expiryDate = this.fromJsDateToMongoDate(this.couponObject.expiryDate)
    
    if(this.couponObject.couponUsageType == 'single_use'){
      this.couponObject.maximumUseTimes = '1'      
    
    }

    //alert(parseInt(this.couponObject.maximumUseTimes))
    if(this.couponObject.couponUsageType == 'multiple_use' && parseInt(this.couponObject.maximumUseTimes) < 2 ){
      alert("For the multi use coupon, the maximum use number must be greater than 1")  
      return
    }
    

    if(this.mode == "add"){
      delete this.couponObject['customer']
      console.log("this.couponObject for add == "+JSON.stringify(this.couponObject))
      this.dataService.addCoupon(this.couponObject).then((result) => {                
        //  console.log("result after adduser == "+JSON.stringify(result))
        this.commonAfterSaveCode()
          
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('New coupon is added successfully');
          

      }, (err) => {        
      console.log(err);
      });
      
    }if(this.mode == "edit"){
      this.loading = true;
      //delete this.couponObject['patient']
      delete this.couponObject['customer']
      this.couponObject['couponId'] = this.couponObject['_id']
    //  console.log("this.couponObject for edit == "+JSON.stringify(this.couponObject))
      this.dataService.updateCoupon(this.couponObject).then((result) => {
        //  console.log("****** updatecoupon result   ===== **"+JSON.stringify(result))
          
          this.commonAfterSaveCode()
          if(this.isPrescriptionUploaded){
            
            this.isPrescriptionUploaded = false
          }
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('coupon is updated successfully'); 
      }, (err) => {
        //this.mode = "add"
        this.loading = false;
        console.log(err);
      });
      
    }
    
}
commonAfterSaveCode(){
  this.customerId = ''
          this.loading = true;
         // this.normalFiltereduserListArr = []; 
          this.closeMainModal()
          setTimeout(() => {
            this.loading = false;
            this.mode = "add"   
            this.fetchCoupons()
            
        }, 2000);
      
}

enlargePrescription(obj){
  //this.closeCustomModal()
  //this.enlargedPic = ''
  let image  = obj.uploadPhotoCouponPrescriptionURL    
  this.enlargedPrescPic = image
  this.modalReferencePrescriptionImage = this.modal.open(this.enlargedPrescriptionModal); 
}

selectPrescription(obj){
 // let image  = obj.uploadPhotoCouponPrescriptionURL    
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
  //this.getPhotoOLDPrescription(obj.uploadPhotoCouponPrescriptionURL)
  //this.showOldPrescription  = 'url(' + obj.uploadPhotoCouponPrescriptionURL + ')'
}

getPhotoOLDPrescription(image) {
  try {
    
    
    return 'url(' + image + ')'
  }
  catch(error) {
   console.log('Error', error);
  }
}


getPhotoOldPrescription(obj) {
  try {
    let image  = obj.uploadPhotoCouponPrescriptionURL
    
      image  = obj.uploadPhotoCouponPrescriptionURL
      /*if(obj && obj.uploadPhotoCouponPrescription){
        image = obj.uploadPhotoCouponPrescription
      }
    */
  //  this.enlargedPic = image
   
    
    return 'url(' + image + ')'
  }
  catch(error) {
   // //console.log('Error', error);
  }
}

commonCodeDuringEdit(){

  
  this.couponFormGroup = this.buildForm()
  console.log("this.medicineListItems **"+this.medicineListItems.length)

}
 openForeditCoupon(user){
  //this.modalReferenceCouponForm = this.modal.open(this.couponFormModal);

  //this.loading = true
  this.loadingCustomeMsg == "Fetching old prescriptions, please wait.."
  this.mode = "edit"
  
  this.modalReferenceCouponForm = this.modal.open(this.couponFormModal);
  this.customerId = user['customerId']
  this.couponObject = Object.assign({}, user); 

  this.couponObject.expiryDate = this.datePipe.transform(this.couponObject.expiryDate, 'yyyy-MM-dd')
  console.log("this.customerId == "+this.customerId)

  //if(this.customerId)
  //this.fetchAllCouponPrescriptions()  

  let data ={customerId:this.customerId}
  console.log(" fetch old prescription for "+JSON.stringify(data))
  this.commonCodeDuringEdit()
  
  
}

  reinitialise(){
  
    this.couponDate = ''
    this.customerId = ''
    this.couponId = ''
    this.couponStatus = ''
    this.customerName = ''
    this.allDynaFilter = null
    this.fetchCouponsCount()
    this.totalDocRecords = 0
    this.fetchCoupons()
  }
  reset(){
    this.reinitialise()
    this.toastr.successToastr('Filters reset, coupon list refreshed');
  }
  pageChanged(event){
    console.log("****** this.event   ===== **"+event)
    this.pageNo = event
    this.applyFilter()
  }
closeMainModal() {
     
  if(this.modalReferenceCouponForm)
    this.modalReferenceCouponForm.close();
  
}
  userKindChange(){
    this.pageNo = 1
    
    this.applyFilter()
  }
  applyFilter() {  
    if(this.customerId != undefined && this.customerId && this.customerId != ''){
      this.fetchCouponByCustomer = true
    }else{
      this.fetchCouponByCustomer = false
    }

    console.log("this.customerId "+this.customerId)    
        
    this.fetchCouponsCount()  
    this.fetchCoupons()    
    
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    this.pageNo = 1

}
 
  
customerSelectEvent(item) {
  if(item){
  this.couponFormGroup.get('customerId').patchValue(item['_id']);
  this.customerId = item['_id']

  if(this.customerId){
    this.loading = true
    this.loadingCustomeMsg == "Fetching old prescriptions, please wait.."
    this.fetchAllCouponPrescriptions()   
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



  fetchCouponsCount(){
  //  this.pageNo = 1
  //  this.pageSize = 10
   /* let data = {}
    if(this.fetchCouponByCustomer){
      data['fetchCouponByCustomer'] = true
      data['customerId'] = this.customerId
    }else{
      data['fetchCouponByCustomer'] = false
    }
    this.dataService.fetchCouponsCount(data).then((result) => {
        
        console.log("****** fetchcouponsCount result   ===== **"+JSON.stringify(result))
      this.totalDocRecords = result;
      console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)

      this.loading = false;

    }, (err) => {
      this.loading = false;
      console.log(err);
    });

    */

   let data = {pageNo:this.pageNo,perPage:this.pageSize,filter : this.allDynaFilter}
   // this.fetchCouponsCount({filter : allDynaFilter})  
    //this.fetchCouponsByFilters({filter : allDynaFilter})   
    console.log(" inside data "+JSON.stringify(data))
  
    this.dataService.fetchCouponsCount().then((result) => {
          
      console.log("****** fetchcouponsCount result   ===== **"+JSON.stringify(result))
    this.totalDocRecords = result;
    this.loading = false;

    console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)
  
  }, (err) => {
    this.loading = false;
    console.log(err);
  });
  }
 
   fetchAllCouponPrescriptions(){
    
    let data ={customerId:this.customerId}

    console.log(" fetch old prescription for "+JSON.stringify(data))
    
  }
  fetchCoupons(){
  //  this.pageNo = 1
    //this.pageSize = 10
   // let data = {pageNo:this.pageNo,perPage:this.pageSize}
    //data['customerId'] = this.customerId

   // console.log("this.customerId   ===== **"+this.customerId)
    let data = {pageNo:this.pageNo,perPage:this.pageSize,filter : this.allDynaFilter}
 // this.fetchCouponsCount({filter : allDynaFilter})  
  //this.fetchCouponsByFilters({filter : allDynaFilter})   
  //console.log(" inside data "+JSON.stringify(data))
  this.dataService.fetchCoupons(data).then((result:[]) => {        
    this.normalFiltereduserListArr = []; 
      this.normalFiltereduserListArr = result.map(element => {        
        return   element
      })
    //  console.log("****** this.fetchCouponsByFilters   ===== **"+JSON.stringify(this.normalFiltereduserListArr))      
      this.loading = false;

  }, (err) => {
    this.normalFiltereduserListArr = []; 
    this.loading = false;
    console.log(err);
  });
        

/*
    if(this.fetchCouponByCustomer){
      data['fetchCouponByCustomer'] = true
      data['customerId'] = this.customerId
    }else{
      data['fetchCouponByCustomer'] = false
    }
    
    this.dataService.fetchCoupons(data).then((result:[]) => {
        
      this.normalFiltereduserListArr = []; 
     // this.customerList = []
        this.normalFiltereduserListArr = result.map(element => {
          
          return   element
        })
        console.log("****** this.fetchCoupons   ===== **"+JSON.stringify(this.normalFiltereduserListArr))
        

       // this.normalFiltereduserListArr.forEach(function(coupon, index){
         // console.log("****** active   ===== **"+ coupon.active)
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
    
      userInfo.couponId = userInfo._id
      data['couponId'] = userInfo._id
      data['active'] = userInfo.active
      console.log("****** userInfo   ===== **"+JSON.stringify(data))

          this.dataService.updateCoupon(data).then((result) => {
          //  console.log("****** updatecoupon result   ===== **"+JSON.stringify(result))
          this.fetchCoupons()
            this.loading = false;
      
        }, (err) => {
          this.loading = false;
          console.log(err);
        });
    
    this.toastr.successToastr('Coupon record updated successfully');
  }

  
}
