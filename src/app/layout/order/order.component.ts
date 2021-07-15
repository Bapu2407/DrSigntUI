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
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers : [NgbModal]
})
export class OrderComponent extends BaseComponent implements OnInit {
  loadingCustomeMsg:any = "Loading..."
  @ViewChild('myname') input: ElementRef;
  @ViewChild('fileInputDemoPhoto') fileInputDemoPhoto :ElementRef;;
  fromOldImageList:boolean = false
  public loading:boolean = true;
  public isPrescriptionUploaded = false
  showOldPrescription:any = ''
  public closeResult: string;
  enlargedPic:any
  enlargedPrescPic:any
  allDynaFilter = null
  patientList:any = []
  customerList:any = []
  orderStatus:string
  orderId:string
  orderDate:string
  states = Config.states
  keywordCustomer:string = "name"
  fetchOrderByCustomer:boolean = false
  orderList:any = []
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
  public userKind:string="order"
  normalFiltereduserListArr:any = [];
  customerOldPrescriptionListArr:any = [];
  
  modalSearchFilerReference: NgbModalRef;
  delModeList:any = [
    {"value":"Express","name":"Express"},
    {"value":"General","name":"General"}  ]

  modalReferenceOrderForm: NgbModalRef;
  @ViewChild('content') content: TemplateRef<any>;   
   items = [];
   @ViewChild('orderFormModal') orderFormModal: TemplateRef<any>;
   @ViewChild('searFiltersModal') searFiltersModal: TemplateRef<any>;
   @ViewChild('enlargedImageModal') enlargedImageModal: TemplateRef<any>;
   @ViewChild('enlargedPrescriptionModal') enlargedPrescriptionModal: TemplateRef<any>;

   
   pageOfItems: Array<any>;
  public pageSize = Config.RECORDSIZE;
  public pageNo = 1
  tempArray: any[] = [];
  totalDocRecords:any 
  orderFormGroup: FormGroup;
  totalPatientRecords:any
  customOrdertime : {
    hour: 10,
    minute: 20,

};
searchByCustomer:boolean = false
searchByOrderDate:boolean = false
searchByOrderId:boolean = false
searchByStatus:boolean = false


medicineName:any
keywordMedicine = "name"
  orderObject =  
  {    
    active : true,       
    medicineList : [ 
      {
        medicineId: '',             
        medicineName : "",
        quantity : "",
        mg: '',
        mrp:0,      
        active:true,      
        "b2bPrice" : "",
        "gst" : "0",

        "hsnCode" : "0",
        "vat" : "0",
        "otherTax" : "0",
        "discounts" : "0",
        "medicineType" : "",      
        "category" : ""
                
      }
    ],    
    customerId : "",
    uploadedFile:"",
    uploadedFileURL:"",
    deliveryMode:"General",
    status : "OrderPlaced"    
  }

  medicineArray:any = [[{
    medicineId: '',             
    medicineName : "",
    quantity : "",
    mg: '',
    mrp:"",      
    active:true,      
    b2bPrice : "",
    gst : "0",
    hsnCode : "0",
    vat : "0",
    otherTax : "0",
    discounts : "0",
    medicineType : "",      
    category : ""
            
  }]]
  attendantList:any = []
  orderObjectBase =  
  {    
    active : true,       
    medicineList : [ 
      {
        medicineId: '',             
        medicineName : "",
        quantity : "",
        mg: '',
        mrp:0,      
        active:true,      
        "b2bPrice" : "",
        "gst" : "0",
        "hsnCode" : "0",
        "vat" : "0",
        "otherTax" : "0",
        "discounts" : "0",
        "medicineType" : "",      
        "category" : ""
                
      }
    ],    
    customerId : "",
    uploadedFile:"",
    uploadedFileURL:"",
    deliveryMode:"General",
    status : "OrderPlaced"    
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
  //  this.customOrdertime.hour = 9
   // this.customOrdertime.minute = 10

    if(!this.user.role.doctor.order.view){
      return
    }

    this.customerName =  this.route.snapshot.paramMap.get('name');

    this.fromCustomerPage = this.route.snapshot.paramMap.get('fromCustomerPage') =='fromCustomerPage';

    this.route.queryParams.subscribe((res)=>{
      console.log("query param"+JSON.parse(res.value));
  });
    console.log("this.customerName  **"+this.customerName ) 
    //this.customerId =  "5ee8ea1158ea514eec6f6e18"//this.route.snapshot.paramMap.get('customerId');

    let dynaFilterArry = []
    this.customerId = this.route.snapshot.paramMap.get('customerId');
    console.log("this.customerId  **"+this.customerId ) 
    if(this.customerId != undefined && this.customerId && this.customerId != ''){
      this.fetchOrderByCustomer = true
      this.allDynaFilter = {$and:dynaFilterArry} 
      dynaFilterArry.push({customerId:this.customerId }) 
    }else{
      this.fetchOrderByCustomer = false
    }

    this.orderFormGroup = _fb.group({
      customerId: new FormControl(this.customerId, Validators.required),      
      uploadedFile: new FormControl(this.orderObject.uploadedFile, Validators.required),
      //medicineName: new FormControl(this.orderObject.attendantID, Validators.required),
      //quantity: new FormControl(this.orderObject.name, Validators.required),
      status: new FormControl(this.orderObject.status, Validators.required),      
      deliveryMode: new FormControl(this.orderObject.deliveryMode, Validators.required),      
      medicineListItems: this._fb.array([this.createMedicineItem()])
    });
    //this.createMedicineItem()

    //this.orderFormGroup.valueChanges.subscribe(data => console.log('form changes', data));
   // this.loading = false;    
    //this.fetchOrders()   
    
  }

  getControls() {
    return (this.orderFormGroup.get('medicineListItems') as FormArray).controls;
  }
  gotoCustomerPage(){
    this.router.navigate(["/customer",{fromOrderPage:'fromOrderPage'}]);
  }
  openCustomerPage(){
    this.router.navigate(["/customer"]);
  }
  createMedicineItem(): FormGroup {
    return this._fb.group({
      medicineId: new FormControl(),
      medicineName: new FormControl(),
      mg: new FormControl(),
      quantity: new FormControl(),      
      mrp:new FormControl(),            
       b2bPrice : new FormControl() ,
       hsnCode : new FormControl(),
        gst : new FormControl(),
        //vat : "0",
        otherTax : new FormControl(),
        discounts : new FormControl(),
        medicineType : new FormControl(),      
        category : new FormControl()
    });
  }

  createMedicineItemDuringEdit(medicine): FormGroup {
    return this._fb.group({
      medicineId: new FormControl(),
      medicineName: new FormControl(),
      mg: new FormControl(),
      quantity: new FormControl(),      
      mrp:new FormControl(),            
       b2bPrice : new FormControl() ,
       hsnCode : new FormControl(),
        gst : new FormControl(),
        //vat : "0",
        otherTax : new FormControl(),
        discounts : new FormControl(),
        medicineType : new FormControl(),      
        category : new FormControl()
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
  getOrder(){

  }
  addItem(): void {
    this.medicineListItems = this.orderFormGroup.get('medicineListItems') as FormArray;
    this.medicineListItems.push(this.createMedicineItem());
  }

  removeItem(i){

     this.medicineListItems = this.orderFormGroup.get('medicineListItems') as FormArray;
    this.medicineListItems.removeAt(i)  

  }

  medicineSelectEvent(item,i) {
    if(item){
    //this.orderFormGroup.get('medicineID').patchValue(item['_id']);
   // this.orderObject.medicineList[i].medicineId = item['_id']
   try{
     //if(item['_id'] != null && item['_id'])
    this.medicineListItems.at(i).get('medicineId').patchValue(item['_id']);

    //if(item['name'] != null && item['name'] )
    this.medicineListItems.at(i).get('medicineName').patchValue(item['name']);

    console.log("his.medicineListItems.at(i).get('medicineName') "+this.medicineListItems.at(i).get('medicineName').value)
 
    //if(item['mrp'] != null && item['mrp'] )
    this.medicineListItems.at(i).get('mrp').patchValue(item['mrp']);

 
    
 //   if(item['active'] != null && item['active'])
   // this.medicineListItems.at(i).get('active').patchValue(item['active']);
    
    //if(item['b2bPrice'] != null && item['b2bPrice'] )
    this.medicineListItems.at(i).get('b2bPrice').patchValue(item['b2bPrice']);
    
    //if(item['gst'] != null && item['gst'] )
    this.medicineListItems.at(i).get('gst').patchValue(item['gst']);
    

    console.log("his.medicineListItems.at(i).get('gst') "+this.medicineListItems.at(i).get('gst').value)

    //if(item['hsnCode'] != null && item['hsnCode'])
    this.medicineListItems.at(i).get('hsnCode').patchValue(item['hsnCode']);

    //if(item['vat'] != null && item['vat'] && this.medicineListItems.at(i).get('vat'))
    //this.medicineListItems.at(i).get('vat').patchValue(item['vat']);
    
    if(item['otherTax'] != null && item['otherTax'])
    this.medicineListItems.at(i).get('otherTax').patchValue(item['otherTax']);
    
    if(item['discounts'] != null && item['discounts'] )
    this.medicineListItems.at(i).get('discounts').patchValue(item['discounts']);
    
    if(item['medicineType'] != null && item['medicineType'] )
    this.medicineListItems.at(i).get('medicineType').patchValue(item['medicineType']);
    
    if(item['category'] != null && item['category'] )
     this.medicineListItems.at(i).get('category').patchValue(item['category']);

    
   // this.orderObject.medicineList[i].medicineName = item['medicineName']

    
   //console.log(" this.medicineListItems "+JSON.stringify(this.medicineListItems))

   console.log(" this.medicineListItems "+this.medicineListItems)
    } catch(e){
     console.log(e)
   }
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
      console.log("this.medicineArray=="+JSON.stringify(this.medicineArray[i]))
    }, (err) => {
        //console.log(err);
    });
   // }
  }
  enableSearchByCutomer(){
    this.searchByCustomer = !this.searchByCustomer
  }
  enableSearchByOrderDate(){
    this.searchByOrderDate = !this.searchByOrderDate
  }
  enableSearchByOrderId(){
    this.searchByOrderId = !this.searchByOrderId
  }
  enableSearchByStatus(){
    this.searchByStatus = !this.searchByStatus
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
 
   openforAddOrderDialog(){

try{
     //this.medicineListItems.push({})
     this.orderObject = Object.assign({}, this.orderObjectBase); 

    this.fromOldImageList = true

    this.customerOldPrescriptionListArr = []; 
    this.customerId = ''
    /*
    if(this.customerId == undefined || !this.customerId || this.customerId == ''){
     alert("Please select a customer first, from the dropdown")
     return
    }
    */
    this.mode = "add"
    this.modalReferenceOrderForm = this.modal.open(this.orderFormModal);
    
    this.orderFormGroup = this._fb.group({
      customerId: new FormControl(this.customerId, Validators.required),      
      uploadedFile: new FormControl(this.orderObject.uploadedFile, Validators.required),
      deliveryMode: new FormControl(this.orderObject.deliveryMode, Validators.required),  
      //medicineName: new FormControl(this.orderObject.attendantID, Validators.required),
      //quantity: new FormControl(this.orderObject.name, Validators.required),
      status: new FormControl(this.orderObject.status, Validators.required),      
      medicineListItems: this._fb.array([ this.createMedicineItem() ])
    });
    this.medicineListItems = this.orderFormGroup.get('medicineListItems') as FormArray;
   // 
  }catch(e){
    console.log(e)
  }
 
  }
  getPatient(){

  }
 
  ngOnInit(){


    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(["/login"]);
    }
    
    this.fetchOrdersCount()  
    this.fetchOrders()   

    if(this.customerId)
    this.fetchAllOrderPrescriptions()   
    
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
  
          //this.customerList = result.map(element => element)
         // if(!this.fromCustomerPage){
           // this.customerId = this.customerList[0]
         // }
  
      }, (err) => {
        this.loading = false;
        console.log(err);
      });
  
    }
    
  save(){

    if(!this.orderFormGroup.valid){
        this.submitAttempt = true;        
        this.validateFields(this.orderFormGroup.controls)                   
        return; 
    } 
   let medicineListItems = []
    for(var i = 0 ; i< this.medicineListItems.length ; i++){      
        let formObject = this.medicineListItems.at(i)              
        //let medicineObj = formObject.get('medicineName').value
         medicineListItems.push({
          medicineId: formObject.get('medicineId')?.value,
          medicineName: formObject.get('medicineName')?.value,
          mg: formObject.get('mg')?.value,
          quantity: formObject.get('quantity')?.value,
          mrp: formObject.get('mrp')?.value,
          active: formObject.get('active')?.value,
          b2bPrice: formObject.get('b2bPrice')?.value,
          gst: formObject.get('gst')?.value,
          vat: formObject.get('vat')?.value,
          otherTax: formObject.get('otherTax')?.value,
          discounts: formObject.get('discounts')?.value,
          medicineType: formObject.get('medicineType')?.value,
          category: formObject.get('category')?.value
          
         })        
        

    }
    this.orderObject.medicineList = []
    this.orderObject.medicineList = medicineListItems
    this.orderObject.customerId = this.customerId
  

   console.log("order this.orderObject **"+JSON.stringify(this.orderObject))
//this.fromOldImageList = false

    if(this.mode == "add"){
      delete this.orderObject['customer']
      console.log("this.orderObject for add == "+JSON.stringify(this.orderObject))
      this.dataService.addOrder(this.orderObject).then((result) => {                
        //  console.log("result after adduser == "+JSON.stringify(result))
        this.commonAfterSaveCode()
          this.reinitialise()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('New order is added successfully');
          this.saveUploadedPrescription()

        //  this.fromOldImageList = false

      }, (err) => {        
      console.log(err);
      });
      
    }if(this.mode == "edit"){
      this.loading = true;
      //delete this.orderObject['patient']
      delete this.orderObject['customer']
      this.orderObject['orderId'] = this.orderObject['_id']
      console.log("this.orderObject for EDIT  == "+JSON.stringify(this.orderObject))
      this.dataService.updateOrder(this.orderObject).then((result) => {
          //console.log("****** updateorder result   ===== **"+JSON.stringify(result))
          
          this.commonAfterSaveCode()
          if(this.isPrescriptionUploaded){
            this.saveUploadedPrescription()
            this.isPrescriptionUploaded = false
          }
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('order is updated successfully'); 
         // this.fromOldImageList = false
      }, (err) => {
        //this.mode = "add"
        this.loading = false;
        if(err && err.message)
          this.toastr.errorToastr(err.message); 
        console.log(err);
      });
      
    }
    
}
saveUploadedPrescription(){
  let orderPrescriptiondata = {customerId:this.orderObject.customerId,uploadPhotoOrderPrescription:this.orderObject.uploadedFile}
          this.dataService.addOrderPrescription(orderPrescriptiondata).then((result) => {                
              
          }, (err) => {        
          console.log(err);
          });
          
}
commonAfterSaveCode(){
  this.customerId = ''
          this.loading = true;
         // this.normalFiltereduserListArr = []; 
          this.closeMainModal()
          setTimeout(() => {
            this.loading = false;
            this.mode = "add"   
            this.fetchOrders()
            
        }, 2000);
      
}
enlargePic(){
  let image  = this.orderObject.uploadedFileURL   
  this.enlargedPic = image
  //this.enlargedPrescPic = ''
  //this.closeCustomModal2()
  this.modalReferenceImage = this.modal.open(this.enlargedImageModal); 
}
enlargePrescription(obj){
  //this.closeCustomModal()
  //this.enlargedPic = ''
  let image  = obj.uploadPhotoOrderPrescriptionURL    
  this.enlargedPrescPic = image
  this.modalReferencePrescriptionImage = this.modal.open(this.enlargedPrescriptionModal); 
}

selectPrescription(obj){
 // let image  = obj.uploadPhotoOrderPrescriptionURL    
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
  this.orderObject.uploadedFile = obj.uploadPhotoOrderPrescription
  this.orderObject.uploadedFile = "data:image/jpg;base64,"+this.orderObject.uploadedFile
  this.orderObject.uploadedFileURL = obj.uploadPhotoOrderPrescriptionURL

  this.orderFormGroup.get('uploadedFile').patchValue(this.orderObject.uploadedFile);

  console.log("obj =="+JSON.stringify(obj))
  //this.getPhotoOLDPrescription(obj.uploadPhotoOrderPrescriptionURL)
  //this.showOldPrescription  = 'url(' + obj.uploadPhotoOrderPrescriptionURL + ')'
}

getPhotoOLDPrescription(image) {
  try {
    
    
    return 'url(' + image + ')'
  }
  catch(error) {
   console.log('Error', error);
  }
}

getPhoto(photoType) {
  try {
    console.log("this.orderObject.uploadedFileURL == "+this.orderObject.uploadedFileURL)
    //let image  = this.orderObject.uploadedFileURL

    //let image  = this.orderObject.uploadedFile
    
    let image  = this.orderObject.uploadedFileURL


    //alert(this.fromOldImageList)

    this.enlargedPic = image
    if(this.fromOldImageList){
      //image  = "data:image/jpg;base64,"+this.orderObject.uploadedFile
      image  = this.orderObject.uploadedFile      
      this.enlargedPic = this.orderObject.uploadedFile
    }    
    //this.fromOldImageList = false


   //let  image = "data:image/jpg;base64,"+this.orderObject.uploadedFile
   /* if(photoType == 'prescription'){
      image  = this.orderObject.uploadedFileURL
      if(!image && this.orderObject.uploadedFile){
        image = "data:image/jpg;base64,"+this.orderObject.uploadedFile

        this.orderObject.uploadedFile = "data:image/jpg;base64,"+this.orderObject.uploadedFile

      }
    }*/
    
   
    
    return 'url(' + image + ')'
  }
  catch(error) {
   console.log('Error', error);
  }
}
capturePhoto(event,photoType){
  //  alert("I am clicked")
    let reader = new FileReader();

    this.fromOldImageList = true

    
    try {
      reader.onload = (readerEvent) => {

        let imageData = (readerEvent.target as any).result;
        if(photoType == 'prescription')
          this.orderObject.uploadedFile =  imageData;

          //var dataURL = reader.result;
          //this.orderObject.uploadedFileURL  =  imageData;

          this.orderFormGroup.get('uploadedFile').patchValue(this.orderObject.uploadedFile);
          this.isPrescriptionUploaded = true

      };

      
//      this.orderObject.uploadedFileURL = event.target.files[0]

      console.log("capturePhoto this.orderObject.uploadedFileURL == "+this.orderObject.uploadedFileURL)


      reader.readAsDataURL(event.target.files[0]);

      
    }
    catch(error) {
     console.log('Error', error);
    }
  }

getPhotoOldPrescription(obj) {
  try {
    let image  = obj.uploadPhotoOrderPrescriptionURL
    
      image  = obj.uploadPhotoOrderPrescriptionURL
      /*if(obj && obj.uploadPhotoOrderPrescription){
        image = obj.uploadPhotoOrderPrescription
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

  
  this.orderFormGroup = this._fb.group({
    customerId: new FormControl(this.customerId, Validators.required),      
    uploadedFile: new FormControl(this.orderObject.uploadedFile, Validators.required),
    deliveryMode: new FormControl(this.orderObject.deliveryMode, Validators.required),      
    //medicineName: new FormControl(this.orderObject.attendantID, Validators.required),
    //quantity: new FormControl(this.orderObject.name, Validators.required),
    status: new FormControl(this.orderObject.status, Validators.required),      
    medicineListItems: this._fb.array([ this.createMedicineItem() ])
  });
  

  this.orderFormGroup.get('uploadedFile').patchValue(this.orderObject.uploadedFile);

  //console.log("this.orderObject =="+JSON.stringify(this.orderObject))
  let dateTimeArray = []
  this.medicineListItems = this.orderFormGroup.get('medicineListItems') as FormArray;
  this.medicineListItems.removeAt(0)  


    
  for(var i in this.orderObject.medicineList){
      let medicine = this.orderObject.medicineList[i]      
     // dateTimeArray.push({date:date,time:time})
    //this.medicineListItems.push({date:date,time:time})
    
    this.medicineListItems.push(this._fb.group({      
          medicineId: medicine.medicineId,             
          medicineName : medicine.medicineName,
          quantity : medicine.quantity,
          mg: medicine.mg  ,
          mrp: medicine.mrp,
          active: medicine.active,
          b2bPrice: medicine.b2bPrice,
          gst: medicine.gst,          
          hsnCode: medicine.hsnCode,
          otherTax: medicine.otherTax,
          discounts: medicine.discounts,
          medicineType: medicine.medicineType,
          category: medicine.category                          
      
    }))
  }

  console.log("this.medicineListItems **"+this.medicineListItems.length)
  
  
  //this.orderObject.attendantID = earlierAttendent

  //this.orderFormGroup.get('medicineListItems').patchValue(dateTimeArray)
  //addItem
 //setTimeout(() => {
  //try{
  //  this.modalReferenceOrderForm = this.modal.open(this.orderFormModal);
  //}catch(error){
//    console.log(error)
  //}
//}, 2000);
  //setTimeout(() => {
   
}
checkStatusChange(){
  console.log("status **"+this.orderObject['status'] )
}
checkDeliveryMode(){
  console.log("deliverymode **"+this.orderObject.deliveryMode )
}
 openForeditOrder(user){

  //this.input.nativeElement.focus();
  //this.fromOldImageList = false

//  console.log("order object **"+JSON.stringify(user))
  //this.modalReferenceOrderForm = this.modal.open(this.orderFormModal);

  this.loading = true
  this.loadingCustomeMsg == "Fetching old prescriptions, please wait.."
  this.mode = "edit"
  
  //this.orderObject = Object.assign({}, this.orderObjectBase); 
  this.customerId = user['customerId']
  this.orderObject = Object.assign({}, user); 


  console.log("deliverymode **"+this.orderObject['deliveryMode'] )

  this.modalReferenceOrderForm = this.modal.open(this.orderFormModal);

  //console.log("order in EDIT this.orderObject **"+JSON.stringify(this.orderObject))

  console.log("this.customerId == "+this.customerId)

  //if(this.customerId)
  //this.fetchAllOrderPrescriptions()  

  let data ={customerId:this.customerId}
  this.commonCodeDuringEdit()
  console.log(" fetch old prescription for "+JSON.stringify(data))
  this.dataService.fetchAllOrderPrescriptions(data).then((result:[]) => {        
    this.customerOldPrescriptionListArr = []; 

    setTimeout(() => {
      if(result){
        for(var i in result){
          let obj:any = result[i]
          obj['selectValue'] = false
          this.customerOldPrescriptionListArr.push(obj)

        }
      }  
      this.loading = false
   //   this.commonCodeDuringEdit()
  },1000)
  }, (err) => {

    //this.commonCodeDuringEdit()
    this.customerOldPrescriptionListArr = []; 
    this.loading = false;
    console.log(err);
  });
 
  
  
}

  reinitialise(){
    this.searchByOrderDate = false
    this.searchByOrderId = false
    this.searchByCustomer = false
    this.searchByStatus = false
    this.orderDate = ''
    this.customerId = ''
    this.orderId = ''
    this.orderStatus = ''
    this.customerName = ''
    this.allDynaFilter = null
    this.fetchOrdersCount()
    this.totalDocRecords = 0
    this.fetchOrders()
  }
  reset(){
    this.reinitialise()
    this.toastr.successToastr('Filters reset, order list refreshed');
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
  if(this.searchByOrderDate && this.orderDate){
    let converteddate = this.fromJsDateToLocationdateTimeFormat(this.orderDate)
    dynaFilter['createdDate'] = converteddate
    dynaFilterArry.push({createdDate:converteddate}) 
    console.log("converteddate **"+converteddate) 
    //moment(new Date()).format('YYYY-MM-DD[T00:00:00.000Z]'

    //var dateTime = new Date(this.orderDate);
    /*
    var dateTime1dayAgo = moment(this.orderDate,"YYYY-MM-DD HH:mm:ss").subtract(1,'d').format('YYYY-MM-DD[T00:00:00.000Z]');
    var dateTime1dayLater = moment(this.orderDate,"YYYY-MM-DD HH:mm:ss").add(1,'days').format('YYYY-MM-DD[T00:00:00.000Z]');
    dynaFilter['createdDate'] = {"$gt": dateTime1dayAgo}     
    //console.log("this.orderDate **"+converteddate)    
    console.log("this.orderDate **"+this.orderDate) 
    dynaFilterArry.push({createdDate:{"$gt": dateTime1dayAgo} })     
    dynaFilterArry.push({createdDate:{"$lt": dateTime1dayLater} }) 
    */

  }
  if(this.searchByCustomer && this.customerId){
    //dynaFilter['customerId'] = this.customerId   
    dynaFilterArry.push({customerId:this.customerId }) 
  }
  if(this.searchByOrderId && this.orderId){
    //dynaFilter['orderId'] = this.orderId   
    dynaFilterArry.push({orderId:this.orderId }) 
  }
  if(this.searchByStatus && this.orderStatus){
    //dynaFilter['status'] = this.orderStatus   
    dynaFilterArry.push({status:this.orderStatus})    
  }
  this.allDynaFilter = {$and:dynaFilterArry} 
  
  
  this.fetchOrdersCount()  
  this.fetchOrders()     
  

  this.closeSearchModal()
  this.toastr.successToastr('Searching Done');
          

  
}
closeMainModal() {
     
  if(this.modalReferenceOrderForm)
    this.modalReferenceOrderForm.close();

    this.fromOldImageList = false
  
}
  userKindChange(){
    this.pageNo = 1
    
    this.applyFilter()
  }
  applyFilter() {  
    if(this.customerId != undefined && this.customerId && this.customerId != ''){
      this.fetchOrderByCustomer = true
    }else{
      this.fetchOrderByCustomer = false
    }

    console.log("this.customerId "+this.customerId)    
        
    this.fetchOrdersCount()  
    this.fetchOrders()    
    
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    this.pageNo = 1

}
 
  
customerSelectEvent(item) {
  if(item){
  this.orderFormGroup.get('customerId').patchValue(item['_id']);
  this.customerId = item['_id']

  if(this.customerId){
    this.loading = true
    this.loadingCustomeMsg == "Fetching old prescriptions, please wait.."
    this.fetchAllOrderPrescriptions()   
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



  fetchOrdersCount(){
  //  this.pageNo = 1
  //  this.pageSize = 10
   /* let data = {}
    if(this.fetchOrderByCustomer){
      data['fetchOrderByCustomer'] = true
      data['customerId'] = this.customerId
    }else{
      data['fetchOrderByCustomer'] = false
    }
    this.dataService.fetchOrdersCount(data).then((result) => {
        
        console.log("****** fetchordersCount result   ===== **"+JSON.stringify(result))
      this.totalDocRecords = result;
      console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)

      this.loading = false;

    }, (err) => {
      this.loading = false;
      console.log(err);
    });

    */

   let data = {pageNo:this.pageNo,perPage:this.pageSize,filter : this.allDynaFilter}
   // this.fetchOrdersCount({filter : allDynaFilter})  
    //this.fetchOrdersByFilters({filter : allDynaFilter})   
    console.log(" inside data "+JSON.stringify(data))
  
    this.dataService.fetchOrdersByFilterCount(data).then((result) => {
          
      console.log("****** fetchordersCount result   ===== **"+JSON.stringify(result))
    this.totalDocRecords = result;
    this.loading = false;

    console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)
  
  }, (err) => {
    this.loading = false;
    console.log(err);
  });
  }
 
   fetchAllOrderPrescriptions(){
    
    let data ={customerId:this.customerId}

    console.log(" fetch old prescription for "+JSON.stringify(data))
    this.dataService.fetchAllOrderPrescriptions(data).then((result:[]) => {        
     
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
  fetchOrders(){
  //  this.pageNo = 1
    //this.pageSize = 10
   // let data = {pageNo:this.pageNo,perPage:this.pageSize}
    //data['customerId'] = this.customerId

   // console.log("this.customerId   ===== **"+this.customerId)
    let data = {pageNo:this.pageNo,perPage:this.pageSize,filter : this.allDynaFilter}
 // this.fetchOrdersCount({filter : allDynaFilter})  
  //this.fetchOrdersByFilters({filter : allDynaFilter})   
  //console.log(" inside data "+JSON.stringify(data))
  this.dataService.fetchOrdersByFilters(data).then((result:any) => {        
    this.normalFiltereduserListArr = []; 
      //this.normalFiltereduserListArr = result.map(element => {        
       // return   element
     // })

    for(var i in result){
      let orderObj = result[i]
     // if(!orderObj['deliveryMode'] || orderObj['deliveryMode'] == undefined ){
    //    orderObj['deliveryMode'] = "General"
    //  }

     // console.log("****** orderObj   ===== **"+JSON.stringify(orderObj))    
      this.normalFiltereduserListArr.push(orderObj)
    }


    //  console.log("****** this.fetchOrdersByFilters   ===== **"+JSON.stringify(this.normalFiltereduserListArr))      
      this.loading = false;

  }, (err) => {
    this.normalFiltereduserListArr = []; 
    this.loading = false;
    console.log(err);
  });
        

/*
    if(this.fetchOrderByCustomer){
      data['fetchOrderByCustomer'] = true
      data['customerId'] = this.customerId
    }else{
      data['fetchOrderByCustomer'] = false
    }
    
    this.dataService.fetchOrders(data).then((result:[]) => {
        
      this.normalFiltereduserListArr = []; 
     // this.customerList = []
        this.normalFiltereduserListArr = result.map(element => {
          
          return   element
        })
        console.log("****** this.fetchOrders   ===== **"+JSON.stringify(this.normalFiltereduserListArr))
        

       // this.normalFiltereduserListArr.forEach(function(order, index){
         // console.log("****** active   ===== **"+ order.active)
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
    
      userInfo.orderId = userInfo._id
      data['orderId'] = userInfo._id
      data['active'] = userInfo.active
      console.log("****** userInfo   ===== **"+JSON.stringify(data))

          this.dataService.updateOrder(data).then((result) => {
          //  console.log("****** updateorder result   ===== **"+JSON.stringify(result))
          this.fetchOrders()
            this.loading = false;
      
        }, (err) => {
          this.loading = false;
          console.log(err);
        });
    
    this.toastr.successToastr('Order record updated successfully');
  }

  
}
