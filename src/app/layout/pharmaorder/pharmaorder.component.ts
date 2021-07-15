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
  selector: 'app-pharmaorder',
  templateUrl: './pharmaorder.component.html',
  styleUrls: ['./pharmaorder.component.scss'],
  providers : [NgbModal]
})
export class PharmaOrderComponent extends BaseComponent implements OnInit {
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
  pharmaorderStatus:string
  orderId:string
  orderDate:string
  states = Config.states
  keywordCustomer:string = "name"
  fetchPharmaOrderByCustomer:boolean = false
  pharmaorderList:any = []
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
  public userKind:string="pharmaorder"
  normalFiltereduserListArr:any = [];
  customerOldPrescriptionListArr:any = [];
  
  modalSearchFilerReference: NgbModalRef;
  delModeList:any = [
    {"value":"Express","name":"Express"},
    {"value":"General","name":"General"}  ]

  modalReferencePharmaOrderForm: NgbModalRef;
  @ViewChild('content') content: TemplateRef<any>;   
   items = [];
   @ViewChild('pharmaorderFormModal') pharmaorderFormModal: TemplateRef<any>;
   @ViewChild('searFiltersModal') searFiltersModal: TemplateRef<any>;
   @ViewChild('enlargedImageModal') enlargedImageModal: TemplateRef<any>;
   @ViewChild('enlargedPrescriptionModal') enlargedPrescriptionModal: TemplateRef<any>;

   
   pageOfItems: Array<any>;
  public pageSize = Config.RECORDSIZE;
  public pageNo = 1
  tempArray: any[] = [];
  totalDocRecords:any 
  pharmaorderFormGroup: FormGroup;
  totalPatientRecords:any
  customPharmaOrdertime : {
    hour: 10,
    minute: 20,

};
searchByCustomer:boolean = false
searchByorderDate:boolean = false
searchByOrderId:boolean = false
searchByStatus:boolean = false


medicineName:any
keywordMedicine = "name"
  pharmaorderObject =  
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
    status : "PharmaOrderPlaced"    
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
  pharmaorderObjectBase =  
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
    status : "PharmaOrderPlaced"    
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
  //  this.customPharmaOrdertime.hour = 9
   // this.customPharmaOrdertime.minute = 10

    if(!this.user.role.doctor.order.view){
      return
    }

    this.customerName =  this.route.snapshot.paramMap.get('name');

    this.fromCustomerPage = this.route.snapshot.paramMap.get('fromCustomerPage') =='fromCustomerPage';

    this.route.queryParams.subscribe((res)=>{
      console.log("query param"+JSON.parse(res.value));
  });
    console.log("this.customerName  **"+this.customerName ) 
    this.customerId =  "5ee8ea1158ea514eec6f6e18"//this.route.snapshot.paramMap.get('customerId');

    let dynaFilterArry = []
    this.customerId = this.route.snapshot.paramMap.get('customerId');
    console.log("this.customerId  **"+this.customerId ) 
    if(this.customerId != undefined && this.customerId && this.customerId != ''){
      this.fetchPharmaOrderByCustomer = true
      this.allDynaFilter = {$and:dynaFilterArry} 
      dynaFilterArry.push({customerId:this.customerId }) 
    }else{
      this.fetchPharmaOrderByCustomer = false
    }

    this.pharmaorderFormGroup = _fb.group({
      customerId: new FormControl(this.customerId, Validators.required),      
      uploadedFile: new FormControl(this.pharmaorderObject.uploadedFile, Validators.required),
      //medicineName: new FormControl(this.pharmaorderObject.attendantID, Validators.required),
      //quantity: new FormControl(this.pharmaorderObject.name, Validators.required),
      status: new FormControl(this.pharmaorderObject.status, Validators.required),      
      deliveryMode: new FormControl(this.pharmaorderObject.deliveryMode, Validators.required),      
      medicineListItems: this._fb.array([this.createMedicineItem()])
    });
    //this.createMedicineItem()

    //this.pharmaorderFormGroup.valueChanges.subscribe(data => console.log('form changes', data));
   // this.loading = false;    
    //this.fetchPharmaOrders()   
    
  }

  getControls() {
    return (this.pharmaorderFormGroup.get('medicineListItems') as FormArray).controls;
  }
  gotoCustomerPage(){
    this.router.navigate(["/customer",{fromPharmaOrderPage:'fromPharmaOrderPage'}]);
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
  getPharmaOrder(){

  }
  addItem(): void {
    this.medicineListItems = this.pharmaorderFormGroup.get('medicineListItems') as FormArray;
    this.medicineListItems.push(this.createMedicineItem());
  }

  removeItem(i){

     this.medicineListItems = this.pharmaorderFormGroup.get('medicineListItems') as FormArray;
    this.medicineListItems.removeAt(i)  

  }

  medicineSelectEvent(item,i) {
    if(item){
    //this.pharmaorderFormGroup.get('medicineID').patchValue(item['_id']);
   // this.pharmaorderObject.medicineList[i].medicineId = item['_id']
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

    
   // this.pharmaorderObject.medicineList[i].medicineName = item['medicineName']

    
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
  enableSearchByorderDate(){
    this.searchByorderDate = !this.searchByorderDate
  }
  enablesearchByOrderId(){
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
 
   openforAddPharmOrderDialog(){

try{
     //this.medicineListItems.push({})
     this.pharmaorderObject = Object.assign({}, this.pharmaorderObjectBase); 

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
    this.modalReferencePharmaOrderForm = this.modal.open(this.pharmaorderFormModal);
    
    this.pharmaorderFormGroup = this._fb.group({
      customerId: new FormControl(this.customerId, Validators.required),      
      uploadedFile: new FormControl(this.pharmaorderObject.uploadedFile, Validators.required),
      deliveryMode: new FormControl(this.pharmaorderObject.deliveryMode, Validators.required),  
      //medicineName: new FormControl(this.pharmaorderObject.attendantID, Validators.required),
      //quantity: new FormControl(this.pharmaorderObject.name, Validators.required),
      status: new FormControl(this.pharmaorderObject.status, Validators.required),      
      medicineListItems: this._fb.array([ this.createMedicineItem() ])
    });
    this.medicineListItems = this.pharmaorderFormGroup.get('medicineListItems') as FormArray;
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
    
    this.fetchPharmaOrdersCount()  
    this.fetchPharmaOrders()   

    if(this.customerId)
    this.fetchAllPharmaOrderPrescriptions()   
    
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

    if(!this.pharmaorderFormGroup.valid){
        this.submitAttempt = true;        
        this.validateFields(this.pharmaorderFormGroup.controls)                   
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
    this.pharmaorderObject.medicineList = []
    this.pharmaorderObject.medicineList = medicineListItems
    this.pharmaorderObject.customerId = this.customerId
  

//    console.log("pharmaorder this.pharmaorderObject **"+JSON.stringify(this.pharmaorderObject))
//this.fromOldImageList = false

    if(this.mode == "add"){
      delete this.pharmaorderObject['customer']
      console.log("this.pharmaorderObject for add == "+JSON.stringify(this.pharmaorderObject))
      this.dataService.addPharmaOrder(this.pharmaorderObject).then((result) => {                
        //  console.log("result after adduser == "+JSON.stringify(result))
        this.commonAfterSaveCode()
          this.reinitialise()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('New pharmaorder is added successfully');
          this.saveUploadedPrescription()

        //  this.fromOldImageList = false

      }, (err) => {        
      console.log(err);
      });
      
    }if(this.mode == "edit"){
      this.loading = true;
      //delete this.pharmaorderObject['patient']
      delete this.pharmaorderObject['customer']
      this.pharmaorderObject['orderId'] = this.pharmaorderObject['_id']
      console.log("this.pharmaorderObject for EDIT  == "+JSON.stringify(this.pharmaorderObject))
      this.dataService.updatePharmaOrder(this.pharmaorderObject).then((result) => {
          //console.log("****** updatepharmaorder result   ===== **"+JSON.stringify(result))
          
          this.commonAfterSaveCode()
          if(this.isPrescriptionUploaded){
            this.saveUploadedPrescription()
            this.isPrescriptionUploaded = false
          }
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('pharmaorder is updated successfully'); 
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
  let pharmaorderPrescriptiondata = {customerId:this.pharmaorderObject.customerId,uploadPhotoPharmaOrderPrescription:this.pharmaorderObject.uploadedFile}
          this.dataService.addOrderPrescription(pharmaorderPrescriptiondata).then((result) => {                
              
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
            this.fetchPharmaOrders()
            
        }, 2000);
      
}
enlargePic(){
  let image  = this.pharmaorderObject.uploadedFileURL   
  this.enlargedPic = image
  //this.enlargedPrescPic = ''
  //this.closeCustomModal2()
  this.modalReferenceImage = this.modal.open(this.enlargedImageModal); 
}
enlargePrescription(obj){
  //this.closeCustomModal()
  //this.enlargedPic = ''
  let image  = obj.uploadPhotoPharmaOrderPrescriptionURL    
  this.enlargedPrescPic = image
  this.modalReferencePrescriptionImage = this.modal.open(this.enlargedPrescriptionModal); 
}

selectPrescription(obj){
 // let image  = obj.uploadPhotoPharmaOrderPrescriptionURL    
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
  this.pharmaorderObject.uploadedFile = obj.uploadPhotoPharmaOrderPrescription
  this.pharmaorderObject.uploadedFile = "data:image/jpg;base64,"+this.pharmaorderObject.uploadedFile
  this.pharmaorderObject.uploadedFileURL = obj.uploadPhotoPharmaOrderPrescriptionURL

  this.pharmaorderFormGroup.get('uploadedFile').patchValue(this.pharmaorderObject.uploadedFile);

  console.log("obj =="+JSON.stringify(obj))
  //this.getPhotoOLDPrescription(obj.uploadPhotoPharmaOrderPrescriptionURL)
  //this.showOldPrescription  = 'url(' + obj.uploadPhotoPharmaOrderPrescriptionURL + ')'
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
    console.log("this.pharmaorderObject.uploadedFileURL == "+this.pharmaorderObject.uploadedFileURL)
    //let image  = this.pharmaorderObject.uploadedFileURL

    //let image  = this.pharmaorderObject.uploadedFile
    
    let image  = this.pharmaorderObject.uploadedFileURL


    //alert(this.fromOldImageList)

    this.enlargedPic = image
    if(this.fromOldImageList){
      //image  = "data:image/jpg;base64,"+this.pharmaorderObject.uploadedFile
      image  = this.pharmaorderObject.uploadedFile      
      this.enlargedPic = this.pharmaorderObject.uploadedFile
    }    
    //this.fromOldImageList = false


   //let  image = "data:image/jpg;base64,"+this.pharmaorderObject.uploadedFile
   /* if(photoType == 'prescription'){
      image  = this.pharmaorderObject.uploadedFileURL
      if(!image && this.pharmaorderObject.uploadedFile){
        image = "data:image/jpg;base64,"+this.pharmaorderObject.uploadedFile

        this.pharmaorderObject.uploadedFile = "data:image/jpg;base64,"+this.pharmaorderObject.uploadedFile

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
          this.pharmaorderObject.uploadedFile =  imageData;

          //var dataURL = reader.result;
          //this.pharmaorderObject.uploadedFileURL  =  imageData;

          this.pharmaorderFormGroup.get('uploadedFile').patchValue(this.pharmaorderObject.uploadedFile);
          this.isPrescriptionUploaded = true

      };

      
//      this.pharmaorderObject.uploadedFileURL = event.target.files[0]

      console.log("capturePhoto this.pharmaorderObject.uploadedFileURL == "+this.pharmaorderObject.uploadedFileURL)


      reader.readAsDataURL(event.target.files[0]);

      
    }
    catch(error) {
     console.log('Error', error);
    }
  }

getPhotoOldPrescription(obj) {
  try {
    let image  = obj.uploadPhotoPharmaOrderPrescriptionURL
    
      image  = obj.uploadPhotoPharmaOrderPrescriptionURL
      /*if(obj && obj.uploadPhotoPharmaOrderPrescription){
        image = obj.uploadPhotoPharmaOrderPrescription
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

  
  this.pharmaorderFormGroup = this._fb.group({
    customerId: new FormControl(this.customerId, Validators.required),      
    uploadedFile: new FormControl(this.pharmaorderObject.uploadedFile, Validators.required),
    deliveryMode: new FormControl(this.pharmaorderObject.deliveryMode, Validators.required),      
    //medicineName: new FormControl(this.pharmaorderObject.attendantID, Validators.required),
    //quantity: new FormControl(this.pharmaorderObject.name, Validators.required),
    status: new FormControl(this.pharmaorderObject.status, Validators.required),      
    medicineListItems: this._fb.array([ this.createMedicineItem() ])
  });
  

  this.pharmaorderFormGroup.get('uploadedFile').patchValue(this.pharmaorderObject.uploadedFile);

  //console.log("this.pharmaorderObject =="+JSON.stringify(this.pharmaorderObject))
  let dateTimeArray = []
  this.medicineListItems = this.pharmaorderFormGroup.get('medicineListItems') as FormArray;
  this.medicineListItems.removeAt(0)  


    
  for(var i in this.pharmaorderObject.medicineList){
      let medicine = this.pharmaorderObject.medicineList[i]      
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
  
  
  //this.pharmaorderObject.attendantID = earlierAttendent

  //this.pharmaorderFormGroup.get('medicineListItems').patchValue(dateTimeArray)
  //addItem
 //setTimeout(() => {
  //try{
  //  this.modalReferencePharmaOrderForm = this.modal.open(this.pharmaorderFormModal);
  //}catch(error){
//    console.log(error)
  //}
//}, 2000);
  //setTimeout(() => {
   
}
checkStatusChange(){
  console.log("status **"+this.pharmaorderObject['status'] )
}
checkDeliveryMode(){
  console.log("deliverymode **"+this.pharmaorderObject.deliveryMode )
}
 openForeditPharmaOrder(user){

  //this.input.nativeElement.focus();
  //this.fromOldImageList = false

//  console.log("pharmaorder object **"+JSON.stringify(user))
  //this.modalReferencePharmaOrderForm = this.modal.open(this.pharmaorderFormModal);

  this.loading = true
  this.loadingCustomeMsg == "Fetching old prescriptions, please wait.."
  this.mode = "edit"
  
  //this.pharmaorderObject = Object.assign({}, this.pharmaorderObjectBase); 
  this.customerId = user['customerId']
  this.pharmaorderObject = Object.assign({}, user); 


  console.log("deliverymode **"+this.pharmaorderObject['deliveryMode'] )

  this.modalReferencePharmaOrderForm = this.modal.open(this.pharmaorderFormModal);

  //console.log("pharmaorder in EDIT this.pharmaorderObject **"+JSON.stringify(this.pharmaorderObject))

  console.log("this.customerId == "+this.customerId)

  //if(this.customerId)
  //this.fetchAllPharmaOrderPrescriptions()  

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
    this.searchByorderDate = false
    this.searchByOrderId = false
    this.searchByCustomer = false
    this.searchByStatus = false
    this.orderDate = ''
    this.customerId = ''
    this.orderId = ''
    this.pharmaorderStatus = ''
    this.customerName = ''
    this.allDynaFilter = null
    this.fetchPharmaOrdersCount()
    this.totalDocRecords = 0
    this.fetchPharmaOrders()
  }
  reset(){
    this.reinitialise()
    this.toastr.successToastr('Filters reset, pharmaorder list refreshed');
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
  if(this.searchByorderDate && this.orderDate){
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
  if(this.searchByStatus && this.pharmaorderStatus){
    //dynaFilter['status'] = this.pharmaorderStatus   
    dynaFilterArry.push({status:this.pharmaorderStatus})    
  }
  this.allDynaFilter = {$and:dynaFilterArry} 
  
  
  this.fetchPharmaOrdersCount()  
  this.fetchPharmaOrders()     
  

  this.closeSearchModal()
  this.toastr.successToastr('Searching Done');
          

  
}
closeMainModal() {
     
  if(this.modalReferencePharmaOrderForm)
    this.modalReferencePharmaOrderForm.close();

    this.fromOldImageList = false
  
}
  userKindChange(){
    this.pageNo = 1
    
    this.applyFilter()
  }
  applyFilter() {  
    if(this.customerId != undefined && this.customerId && this.customerId != ''){
      this.fetchPharmaOrderByCustomer = true
    }else{
      this.fetchPharmaOrderByCustomer = false
    }

    console.log("this.customerId "+this.customerId)    
        
    this.fetchPharmaOrdersCount()  
    this.fetchPharmaOrders()    
    
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    this.pageNo = 1

}
 
  
customerSelectEvent(item) {
  if(item){
  this.pharmaorderFormGroup.get('customerId').patchValue(item['_id']);
  this.customerId = item['_id']

  if(this.customerId){
    this.loading = true
    this.loadingCustomeMsg == "Fetching old prescriptions, please wait.."
    this.fetchAllPharmaOrderPrescriptions()   
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



  fetchPharmaOrdersCount(){
  //  this.pageNo = 1
  //  this.pageSize = 10
   /* let data = {}
    if(this.fetchPharmaOrderByCustomer){
      data['fetchPharmaOrderByCustomer'] = true
      data['customerId'] = this.customerId
    }else{
      data['fetchPharmaOrderByCustomer'] = false
    }
    this.dataService.fetchPharmaOrdersCount(data).then((result) => {
        
        console.log("****** fetchpharmaordersCount result   ===== **"+JSON.stringify(result))
      this.totalDocRecords = result;
      console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)

      this.loading = false;

    }, (err) => {
      this.loading = false;
      console.log(err);
    });

    */

   let data = {pageNo:this.pageNo,perPage:this.pageSize,filter : this.allDynaFilter}
   // this.fetchPharmaOrdersCount({filter : allDynaFilter})  
    //this.fetchPharmaOrdersByFilters({filter : allDynaFilter})   
    console.log(" inside data "+JSON.stringify(data))
  
    this.dataService.fetchPharmaOrdersByFilterCount(data).then((result) => {
          
      console.log("****** fetchpharmaordersCount result   ===== **"+JSON.stringify(result))
    this.totalDocRecords = result;
    this.loading = false;

    console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)
  
  }, (err) => {
    this.loading = false;
    console.log(err);
  });
  }
 
   fetchAllPharmaOrderPrescriptions(){
    
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
  fetchPharmaOrders(){
  //  this.pageNo = 1
    //this.pageSize = 10
   // let data = {pageNo:this.pageNo,perPage:this.pageSize}
    //data['customerId'] = this.customerId

   // console.log("this.customerId   ===== **"+this.customerId)
    let data = {pageNo:this.pageNo,perPage:this.pageSize,filter : this.allDynaFilter}
 // this.fetchPharmaOrdersCount({filter : allDynaFilter})  
  //this.fetchPharmaOrdersByFilters({filter : allDynaFilter})   
  //console.log(" inside data "+JSON.stringify(data))
  this.dataService.fetchPharmaOrdersByFilters(data).then((result:any) => {        
    this.normalFiltereduserListArr = []; 
      //this.normalFiltereduserListArr = result.map(element => {        
       // return   element
     // })

    for(var i in result){
      let pharmaorderObj = result[i]
     // if(!pharmaorderObj['deliveryMode'] || pharmaorderObj['deliveryMode'] == undefined ){
    //    pharmaorderObj['deliveryMode'] = "General"
    //  }

     // console.log("****** pharmaorderObj   ===== **"+JSON.stringify(pharmaorderObj))    
      this.normalFiltereduserListArr.push(pharmaorderObj)
    }


    //  console.log("****** this.fetchPharmaOrdersByFilters   ===== **"+JSON.stringify(this.normalFiltereduserListArr))      
      this.loading = false;

  }, (err) => {
    this.normalFiltereduserListArr = []; 
    this.loading = false;
    console.log(err);
  });
        

/*
    if(this.fetchPharmaOrderByCustomer){
      data['fetchPharmaOrderByCustomer'] = true
      data['customerId'] = this.customerId
    }else{
      data['fetchPharmaOrderByCustomer'] = false
    }
    
    this.dataService.fetchPharmaOrders(data).then((result:[]) => {
        
      this.normalFiltereduserListArr = []; 
     // this.customerList = []
        this.normalFiltereduserListArr = result.map(element => {
          
          return   element
        })
        console.log("****** this.fetchPharmaOrders   ===== **"+JSON.stringify(this.normalFiltereduserListArr))
        

       // this.normalFiltereduserListArr.forEach(function(pharmaorder, index){
         // console.log("****** active   ===== **"+ pharmaorder.active)
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

          this.dataService.updatePharmaOrder(data).then((result) => {
          //  console.log("****** updatepharmaorder result   ===== **"+JSON.stringify(result))
          this.fetchPharmaOrders()
            this.loading = false;
      
        }, (err) => {
          this.loading = false;
          console.log(err);
        });
    
    this.toastr.successToastr('PharmaOrder record updated successfully');
  }

  
}
