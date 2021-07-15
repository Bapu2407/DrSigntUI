import { Component, OnInit, NgZone, ViewChild, TemplateRef, ElementRef} from '@angular/core';

import { ToastrManager } from 'ng6-toastr-notifications';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordion,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router , ActivatedRoute} from '@angular/router';
import *  as moment from 'moment';
import { DataAccess } from 'src/app/services/data-access';
import { Config } from '../../config';


import { BaseComponent } from 'src/BaseComponent';
import { FormBuilder, FormGroup, FormControl, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss'],
  providers : [NgbModal]
})
export class DiscountComponent extends BaseComponent implements OnInit {
  loadingCustomeMsg:any = "Loading..."
  @ViewChild('fileInputDemoPhoto') fileInputDemoPhoto :ElementRef;;
  public loading:boolean = true;
  discountType:any = {delivery_discount:[]}
  public isPrescriptionUploaded = false
  showOldPrescription:any = ''
  discountTypes:any = 
  [
    {'name':'Direct Discounts','value':'delivery_discount'},
    {'name':'Discounts ON Order Volume','value':'order_volume'},
    {'name':'Coupon','value':'coupon'}

    ]
  logicTypes:any = [
    {'name':'Order Value Greater Than(>)','value':'greater_than'},
    //{'name':'Less Than(<)','value':'less_than'},
    {'name':'Order Value IN Between((> <)','value':'in_between'},
    {'name':'Order Value Greater Than Equal To(>=)','value':'greater_than_equal_to'},
    //{'name':'Less Than Equal To(<=)','value':'less_than_equal_to'},
    {'name':'Order Value Equal To(=)','value':'equal_to'}
  ]
  byPercentAmounts:any = [
    {'name':'By Percentage','value':'by_percent'},
    {'name':'By Amount','value':'by_value'},
   
  ]
  

  public closeResult: string;
  enlargedPic:any
  enlargedPrescPic:any
  allDynaFilter = null
  patientList:any = []
  customerList:any = []
  discountStatus:string
  discountId:string
  discountDate:string
  states = Config.states
  keywordCustomer:string = "name"
  fetchDiscountByCustomer:boolean = false
  discountList:any = []
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
  public userKind:string="discount"
  normalFiltereduserListArr:any = [];
  customerOldPrescriptionListArr:any = [];
  
  modalSearchFilerReference: NgbModalRef;

  modalReferenceDiscountForm: NgbModalRef;
  @ViewChild('content') content: TemplateRef<any>;   
   items = [];
   @ViewChild('discountFormModal') discountFormModal: TemplateRef<any>;
   @ViewChild('searFiltersModal') searFiltersModal: TemplateRef<any>;
   @ViewChild('enlargedImageModal') enlargedImageModal: TemplateRef<any>;
   @ViewChild('enlargedPrescriptionModal') enlargedPrescriptionModal: TemplateRef<any>;

   
   pageOfItems: Array<any>;
  public pageSize = Config.RECORDSIZE;
  public pageNo = 1
  tempArray: any[] = [];
  totalDocRecords:any 
  discountFormGroup: FormGroup;
  totalPatientRecords:any
  customDiscounttime : {
    hour: 10,
    minute: 20,

};
subLogicType:boolean = false


medicineName:any
keywordMedicine = "name"
  discountObject =  
  {    
    active : true,         
    discountType : "",
    logicType:"",
    byPercentAmount:"by_percent",
    subLogicType:false,
    lower_value:"",
    upper_value:"",
    value:'',
    discount_amount:''
  }
  medicineArray:any = [[{
    medicineId: '',             
    medicineName : "",
    quantity : "",
    mg: ''
            
  }]]
  attendantList:any = []
  discountObjectBase =  
  {    
    active : true,         
    discountType : "",
    logicType:"",
    byPercentAmount:"by_percent",
    subLogicType:false,
    lower_value:"",
    upper_value:"",
    value:'',
    discount_amount:''
  }
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
    public dataService: DataAccess   
    
  ) {
    super(router)
  //  this.customDiscounttime.hour = 9
   // this.customDiscounttime.minute = 10

    if(!this.user.role.doctor.discount.view){
      return
    }

    this.customerName =  this.route.snapshot.paramMap.get('name');

    this.fromCustomerPage = this.route.snapshot.paramMap.get('fromCustomerPage') =='fromCustomerPage';
    console.log("this.customerName  **"+this.customerName ) 
    //this.customerId =  "5ee8ea1158ea514eec6f6e18"//this.route.snapshot.paramMap.get('customerId');


    this.discountFormGroup = this.buildForm()
   
  }

  buildForm(){
    return this._fb.group({
      discountType: new FormControl(this.discountObject.discountType, Validators.required),      
      logicType: new FormControl(this.discountObject.logicType), 
      byPercentAmount: new FormControl(this.discountObject.byPercentAmount), 
      subLogicType: new FormControl(this.discountObject.subLogicType), 
      lower_value: new FormControl(this.discountObject.lower_value), 
      upper_value: new FormControl(this.discountObject.upper_value),       
      value: new FormControl(this.discountObject.value) ,
      discount_amount: new FormControl(this.discountObject.discount_amount) 
      
    });
  }
  changeDiscountType(){

    if(this.discountObject.discountType == "as_is_basis"){
      this.discountObject.byPercentAmount = "by_value"
    }else{
      this.discountObject.byPercentAmount = "by_percent"
    }

    this.discountFormGroup.get('byPercentAmount').patchValue(this.discountObject.byPercentAmount);

  }
  changePercentAmount(){

  }

  convertToHumanDiscountTypeDesc(discountType){
    
    if(discountType == "delivery_discount"){
      return 'Direct Discounts'
    }

    if(discountType == "order_volume"){
      return 'Discounts ON Order Volume'
    }
    
    if(discountType == "coupon"){
      return 'Coupon'
    }

  }

  changeLogicType(){
    if(this.discountObject.logicType == 'in_between'){
      this.subLogicType = true

      this.discountObject.subLogicType = true
    }else{
      this.discountObject.lower_value = '0'
      this.discountObject.upper_value = '0'
      this.discountObject.subLogicType = false
      this.subLogicType = false
    }
  }

  getControls() {
    return (this.discountFormGroup.get('medicineListItems') as FormArray).controls;
  }
  gotoCustomerPage(){
    this.router.navigate(["/customer",{fromDiscountPage:'fromDiscountPage'}]);
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
  getDiscount(){

  }
  addItem(): void {
    this.medicineListItems = this.discountFormGroup.get('medicineListItems') as FormArray;
    this.medicineListItems.push(this.createMedicineItem());
  }

  removeItem(i){

     this.medicineListItems = this.discountFormGroup.get('medicineListItems') as FormArray;
    this.medicineListItems.removeAt(i)  

  }

  medicineSelectEvent(item,i) {
    if(item){
    //this.discountFormGroup.get('medicineID').patchValue(item['_id']);
   // this.discountObject.medicineList[i].medicineId = item['_id']
    this.medicineListItems.at(i).get('medicineId').patchValue(item['_id']);
    this.medicineListItems.at(i).get('medicineName').patchValue(item['name']);

    
   // this.discountObject.medicineList[i].medicineName = item['medicineName']

    //console.log(" inside discountSelectEvent "+JSON.stringify(item))
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
 
  openSearchFilter(){
    //this.reset()
    this.reinitialise()
    this.modalSearchFilerReference = this.modal.open(this.searFiltersModal); 
  }
  closeSearchModal(){
    //if(this.modalSearchFilerReference)
    //this.modalSearchFilerReference.close();
    if(this.modalSearchFilerReference)
    this.modalSearchFilerReference.dismiss()
  }
  openforAddDiscountDialog(){

    this.customerOldPrescriptionListArr = []; 
    this.customerId = ''
    /*
    if(this.customerId == undefined || !this.customerId || this.customerId == ''){
     alert("Please select a customer first, from the dropdown")
     return
    }
    */
    this.mode = "add"
    this.discountFormGroup = this.buildForm()
    
   // 
    //this.medicineListItems.push({})
    this.discountObject = Object.assign({}, this.discountObjectBase); 
    this.modalReferenceDiscountForm = this.modal.open(this.discountFormModal);
  }
  getPatient(){

  }
 

  closeModal() {
     
    if(this.modalReferenceDiscountForm)
      this.modalReferenceDiscountForm.close();
    
  }
  ngOnInit(){


    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(["/login"]);
    }
    
    this.fetchDiscountsCount()  
    this.fetchDiscounts()   

   
    
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

    if(!this.discountFormGroup.valid){
        this.submitAttempt = true;        
        this.validateFields(this.discountFormGroup.controls)                   
        return; 
    } 

    console.log("this.discountObject for add == "+JSON.stringify(this.discountObject))
   if(this.discountObject.upper_value && this.discountObject.upper_value ){
    let valueUpper = parseFloat(this.discountObject.upper_value)
    let valueLower = parseFloat(this.discountObject.upper_value)
    if(this.subLogicType && valueUpper < valueLower ){
      alert('The upper value should be greater than lower value')
      return
   }
  }
  
    
    if(this.mode == "add"){
      delete this.discountObject['customer']
      
      this.dataService.addDiscount(this.discountObject).then((result) => {                
        //  console.log("result after adduser == "+JSON.stringify(result))
        this.commonAfterSaveCode()
          this.reinitialise()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('New discount is added successfully');
          

      }, (err) => {        
      console.log(err);
      });
      
    }if(this.mode == "edit"){
      this.loading = true;
      //delete this.discountObject['patient']
      delete this.discountObject['customer']
      this.discountObject['discountId'] = this.discountObject['_id']
    //  console.log("this.discountObject for edit == "+JSON.stringify(this.discountObject))
      this.dataService.updateDiscount(this.discountObject).then((result) => {
        //  console.log("****** updatediscount result   ===== **"+JSON.stringify(result))
          
          this.commonAfterSaveCode()
          if(this.isPrescriptionUploaded){
            
            this.isPrescriptionUploaded = false
          }
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('discount is updated successfully'); 
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
            this.fetchDiscounts()
            
        }, 2000);
      
}

enlargePrescription(obj){
  //this.closeCustomModal()
  //this.enlargedPic = ''
  let image  = obj.uploadPhotoDiscountPrescriptionURL    
  this.enlargedPrescPic = image
  this.modalReferencePrescriptionImage = this.modal.open(this.enlargedPrescriptionModal); 
}

selectPrescription(obj){
 // let image  = obj.uploadPhotoDiscountPrescriptionURL    
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
  //this.getPhotoOLDPrescription(obj.uploadPhotoDiscountPrescriptionURL)
  //this.showOldPrescription  = 'url(' + obj.uploadPhotoDiscountPrescriptionURL + ')'
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
    let image  = obj.uploadPhotoDiscountPrescriptionURL
    
      image  = obj.uploadPhotoDiscountPrescriptionURL
      /*if(obj && obj.uploadPhotoDiscountPrescription){
        image = obj.uploadPhotoDiscountPrescription
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

  
  this.discountFormGroup = this.buildForm()
  console.log("this.medicineListItems **"+this.medicineListItems.length)

}
 openForeditDiscount(user){
  //this.modalReferenceDiscountForm = this.modal.open(this.discountFormModal);

  //this.loading = true
  this.loadingCustomeMsg == "Fetching old prescriptions, please wait.."
  this.mode = "edit"
  
  this.modalReferenceDiscountForm = this.modal.open(this.discountFormModal);
  this.customerId = user['customerId']
  this.discountObject = Object.assign({}, user); 

  this.changeLogicType()
  console.log("this.customerId == "+this.customerId)

  //if(this.customerId)
  //this.fetchAllDiscountPrescriptions()  

  let data ={customerId:this.customerId}
  console.log(" fetch old prescription for "+JSON.stringify(data))
  this.commonCodeDuringEdit()
  
  
}

  reinitialise(){
  
    this.discountDate = ''
    this.customerId = ''
    this.discountId = ''
    this.discountStatus = ''
    this.customerName = ''
    this.allDynaFilter = null
    this.fetchDiscountsCount()
    this.totalDocRecords = 0
    this.fetchDiscounts()
  }
  reset(){
    this.reinitialise()
    this.toastr.successToastr('Filters reset, discount list refreshed');
  }
  pageChanged(event){
    console.log("****** this.event   ===== **"+event)
    this.pageNo = event
    this.applyFilter()
  }
closeMainModal() {
     
  if(this.modalReferenceDiscountForm)
    this.modalReferenceDiscountForm.close();
  
}
  userKindChange(){
    this.pageNo = 1
    
    this.applyFilter()
  }
  applyFilter() {  
    if(this.customerId != undefined && this.customerId && this.customerId != ''){
      this.fetchDiscountByCustomer = true
    }else{
      this.fetchDiscountByCustomer = false
    }

    console.log("this.customerId "+this.customerId)    
        
    this.fetchDiscountsCount()  
    this.fetchDiscounts()    
    
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    this.pageNo = 1

}
 
  
customerSelectEvent(item) {
  if(item){
  this.discountFormGroup.get('customerId').patchValue(item['_id']);
  this.customerId = item['_id']

  if(this.customerId){
    this.loading = true
    this.loadingCustomeMsg == "Fetching old prescriptions, please wait.."
    this.fetchAllDiscountPrescriptions()   
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



  fetchDiscountsCount(){
  //  this.pageNo = 1
  //  this.pageSize = 10
   /* let data = {}
    if(this.fetchDiscountByCustomer){
      data['fetchDiscountByCustomer'] = true
      data['customerId'] = this.customerId
    }else{
      data['fetchDiscountByCustomer'] = false
    }
    this.dataService.fetchDiscountsCount(data).then((result) => {
        
        console.log("****** fetchdiscountsCount result   ===== **"+JSON.stringify(result))
      this.totalDocRecords = result;
      console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)

      this.loading = false;

    }, (err) => {
      this.loading = false;
      console.log(err);
    });

    */

   let data = {pageNo:this.pageNo,perPage:this.pageSize,filter : this.allDynaFilter}
   // this.fetchDiscountsCount({filter : allDynaFilter})  
    //this.fetchDiscountsByFilters({filter : allDynaFilter})   
    console.log(" inside data "+JSON.stringify(data))
  
    this.dataService.fetchDiscountsByFilterCount(data).then((result) => {
          
      console.log("****** fetchdiscountsCount result   ===== **"+JSON.stringify(result))
    this.totalDocRecords = result;
    this.loading = false;

    console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)
  
  }, (err) => {
    this.loading = false;
    console.log(err);
  });
  }
 
   fetchAllDiscountPrescriptions(){
    
    let data ={customerId:this.customerId}

    console.log(" fetch old prescription for "+JSON.stringify(data))
    
  }
  fetchDiscounts(){
  //  this.pageNo = 1
    //this.pageSize = 10
   // let data = {pageNo:this.pageNo,perPage:this.pageSize}
    //data['customerId'] = this.customerId

   // console.log("this.customerId   ===== **"+this.customerId)
    let data = {pageNo:this.pageNo,perPage:this.pageSize,filter : this.allDynaFilter}
 // this.fetchDiscountsCount({filter : allDynaFilter})  
  //this.fetchDiscountsByFilters({filter : allDynaFilter})   
  //console.log(" inside data "+JSON.stringify(data))
  this.dataService.fetchDiscounts(data).then((result:[]) => {        
    this.normalFiltereduserListArr = []; 
      this.normalFiltereduserListArr = result.map(element => {        
        return   element
      })
    //  console.log("****** this.fetchDiscountsByFilters   ===== **"+JSON.stringify(this.normalFiltereduserListArr))      
      this.loading = false;

  }, (err) => {
    this.normalFiltereduserListArr = []; 
    this.loading = false;
    console.log(err);
  });
        

/*
    if(this.fetchDiscountByCustomer){
      data['fetchDiscountByCustomer'] = true
      data['customerId'] = this.customerId
    }else{
      data['fetchDiscountByCustomer'] = false
    }
    
    this.dataService.fetchDiscounts(data).then((result:[]) => {
        
      this.normalFiltereduserListArr = []; 
     // this.customerList = []
        this.normalFiltereduserListArr = result.map(element => {
          
          return   element
        })
        console.log("****** this.fetchDiscounts   ===== **"+JSON.stringify(this.normalFiltereduserListArr))
        

       // this.normalFiltereduserListArr.forEach(function(discount, index){
         // console.log("****** active   ===== **"+ discount.active)
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
    
      userInfo.discountId = userInfo._id
      data['discountId'] = userInfo._id
      data['active'] = userInfo.active
      console.log("****** userInfo   ===== **"+JSON.stringify(data))

          this.dataService.updateDiscount(data).then((result) => {
          //  console.log("****** updatediscount result   ===== **"+JSON.stringify(result))
          this.fetchDiscounts()
            this.loading = false;
      
        }, (err) => {
          this.loading = false;
          console.log(err);
        });
    
    this.toastr.successToastr('Discount record updated successfully');
  }

  
}
