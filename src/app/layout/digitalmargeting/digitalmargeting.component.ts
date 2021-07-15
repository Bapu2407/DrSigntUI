import { Component, OnInit, NgZone, ViewChild, TemplateRef, ElementRef} from '@angular/core';

import { ToastrManager } from 'ng6-toastr-notifications';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordion,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router , ActivatedRoute} from '@angular/router';
import *  as moment from 'moment';
import { DataAccess } from 'src/app/services/data-access';
import { Config } from '../../config';


import { BaseComponentDM } from 'src/BaseComponentDM';
import { FormBuilder, FormGroup, FormControl, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-digitalmargeting',
  templateUrl: './digitalmargeting.component.html',
  styleUrls: ['./digitalmargeting.component.scss'],
  providers : [NgbModal]
})
export class DigitalmargetingComponent extends BaseComponentDM implements OnInit {
  loadingCustomeMsg:any = "Loading..."
  otpVerified:boolean = false
  randomOTP:any
  sendOTPflag:boolean = false
  verifyActionStart:boolean = false
  
  otpEnteredByUser:any = ''
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
  digitalmargetingStatus:string
  digitalmargetingId:string
  digitalmargetingDate:string
  states = Config.states
  keywordCustomer:string = "name"
  fetchDigitalmargetingByCustomer:boolean = false
  digitalmargetingList:any = []
  public defaultPagination: number;
  public advancedPagination: number;
  public paginationSize: number;
  public itemsPerPage : number;
  public disabledPagination: number;
  public isDisabled: boolean;
  public collectionSize: number;
  public currentPage: number;
  prescriptionSource:any
  fromCustomerPage:boolean = false
  @ViewChild('acc') accordionComponent: NgbAccordion;
  public userKind:string="digitalmargeting"
  normalFiltereduserListArr:any = [];
  customerOldPrescriptionListArr:any = [];
  
  modalSearchFilerReference: NgbModalRef;
  delModeList:any = [
    {"value":"Express","name":"Express"},
    {"value":"General","name":"General"}  ]

  modalReferenceDigitalmargetingForm: NgbModalRef;
  @ViewChild('content') content: TemplateRef<any>;   
   items = [];
   @ViewChild('digitalmargetingFormModal') digitalmargetingFormModal: TemplateRef<any>;
   @ViewChild('searFiltersModal') searFiltersModal: TemplateRef<any>;
   @ViewChild('enlargedImageModal') enlargedImageModal: TemplateRef<any>;
   @ViewChild('enlargedPrescriptionModal') enlargedPrescriptionModal: TemplateRef<any>;

   
   pageOfItems: Array<any>;
  public pageSize = Config.RECORDSIZE;
  public pageNo = 1
  tempArray: any[] = [];
  totalDocRecords:any 
  digitalmargetingFormGroup: FormGroup;
  totalPatientRecords:any
  customDigitalmargetingtime : {
    hour: 10,
    minute: 20,

};
searchByCustomer:boolean = false
searchByDigitalmargetingDate:boolean = false
searchByDigitalmargetingId:boolean = false
searchByStatus:boolean = false


medicineName:any
keywordMedicine = "name"
  digitalmargetingObject =  
  {     
     name:"",
  emailId:"",  
  mobileNumber : "",
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
    
    uploadedFile:"",
    uploadedFileURL:"",
    deliveryMode:"General",
    status : "DigitalmargetingPlaced"    
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
  digitalmargetingObjectBase =  
  {    
    name:"",
    emailId:"",  
    mobileNumber : "",
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
    
    uploadedFile:"",
    uploadedFileURL:"",
    deliveryMode:"General",
    status : "DigitalmargetingPlaced"    
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
  //  this.customDigitalmargetingtime.hour = 9
   // this.customDigitalmargetingtime.minute = 10


      
    

     this.digitalmargetingFormGroup = this.buildForm()

    this.openforAddDigitalmargetingDialog()

    this.loading = false
    //this.createMedicineItem()

    //this.digitalmargetingFormGroup.valueChanges.subscribe(data => console.log('form changes', data));
   // this.loading = false;    
    //this.fetchDigitalmargetings()   
    
  }
   gfg() { 
    var minm = 10000; 
    var maxm = 99999; 
    this.randomOTP = Math.floor(Math 
    .random() * (maxm - minm + 1)) + minm; 
} 

buildForm(){
 return this._fb.group({
    name: new FormControl(this.digitalmargetingObject.name, Validators.required),
    emailId: new FormControl(this.digitalmargetingObject.emailId, [
      
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),    
  mobileNumber: new FormControl(this.digitalmargetingObject.mobileNumber, [
    Validators.required,
    Validators.pattern("^[0-9]*$"),
    Validators.minLength(10),
  ]),
  otpEnteredByUser:new FormControl(''),
    uploadedFile: new FormControl(this.digitalmargetingObject.uploadedFile, Validators.required),
    //medicineName: new FormControl(this.digitalmargetingObject.attendantID, Validators.required),
    //quantity: new FormControl(this.digitalmargetingObject.name, Validators.required),
    medicineListItems: this._fb.array([this.createMedicineItem()])
  });
}
  sendOTP()
  {


    try{    
      this.otpEnteredByUser = ''
      this.sendOTPflag = true
      this.verifyActionStart = false
      
      this.gfg()
      let mobileNUmber  =  this.digitalmargetingFormGroup.controls.mobileNumber.value

    
    console.log("this.mobileNumber =="+ mobileNUmber)

    console.log("this.digitalmargetingObject.mobileNumber =="+this.digitalmargetingObject.mobileNumber)

    console.log("this.digitalmargetingFormGroup.get('mobileNumber').valid =="+this.digitalmargetingFormGroup.get('mobileNumber').valid)

    console.log("this.digitalmargetingFormGroup.get('mobileNumber').touched ) =="+this.digitalmargetingFormGroup.get('mobileNumber').touched )

   
    console.log("this.randomOTP =="+this.randomOTP )
    // 
    if(this.digitalmargetingObject.mobileNumber && this.digitalmargetingObject.mobileNumber.length >=0 && this.digitalmargetingFormGroup.get('mobileNumber').valid && this.digitalmargetingFormGroup.get('mobileNumber').touched){
      
      this.loading = true
      let otpData = {otp:this.randomOTP,phone:this.digitalmargetingObject.mobileNumber}
      
      
      
      setTimeout(() => {
        this.dataService.sendOTP(otpData).then((result:any) => {
          this.loading = false;          
        }, (err) => {
          this.toastr.errorToastr('problem in sending OTP, please resend OTP,'+err.message);
          this.loading = false;          
        console.log(err);
        });      
    }, 3000);
  
  
    }else{
      alert("please enter a valid mobile number first")
    }

  }catch(err){
        
    console.log(err);
  }
  }
  verifyOTP(){

    this.verifyActionStart = true
    //console.log("this.randomOTP =="+this.randomOTP )
    //console.log("this.otpEnteredByUser =="+this.otpEnteredByUser )

    if(!this.otpVerified && this.otpEnteredByUser != this.randomOTP){
      alert("You've entered a wrong OTP ")

    }else{
      this.otpVerified = true
      
    }

  }
  getControls() {
    return (this.digitalmargetingFormGroup.get('medicineListItems') as FormArray).controls;
  }
  gotoCustomerPage(){
    this.router.navigate(["/customer",{fromDigitalmargetingPage:'fromDigitalmargetingPage'}]);
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
  getDigitalmargeting(){

  }
  addItem(): void {
    this.medicineListItems = this.digitalmargetingFormGroup.get('medicineListItems') as FormArray;
    this.medicineListItems.push(this.createMedicineItem());
  }

  removeItem(i){

     this.medicineListItems = this.digitalmargetingFormGroup.get('medicineListItems') as FormArray;
    this.medicineListItems.removeAt(i)  

  }

 
  closeSearchModal(){
    //if(this.modalSearchFilerReference)
    //this.modalSearchFilerReference.close();
    if(this.modalSearchFilerReference)
    this.modalSearchFilerReference.dismiss()
  }
 
   openforAddDigitalmargetingDialog(){

try{
     //this.medicineListItems.push({})
     this.digitalmargetingObject = Object.assign({}, this.digitalmargetingObjectBase); 

    this.customerOldPrescriptionListArr = []; 
    this.customerId = ''
    /*
    if(this.customerId == undefined || !this.customerId || this.customerId == ''){
     alert("Please select a customer first, from the dropdown")
     return
    }
    */
    this.mode = "add"
    //this.modalReferenceDigitalmargetingForm = this.modal.open(this.digitalmargetingFormModal);
    
    this.digitalmargetingFormGroup = this.buildForm()
    this.medicineListItems = this.digitalmargetingFormGroup.get('medicineListItems') as FormArray;
   // 
  }catch(e){
    console.log(e)
  }
 
  }
  getPatient(){

  }
 
  ngOnInit(){


    

  };

  
    
  save(){


    if(!this.otpVerified){
     // this.verifyOTP()
      alert("Please verify your mobile with an OTP first")
      return
    }
    if(!this.digitalmargetingFormGroup.valid){
        this.submitAttempt = true;        
        this.validateFields(this.digitalmargetingFormGroup.controls)                   
        return; 
    } 
   let medicineListItems = []
    for(var i = 0 ; i< this.medicineListItems.length ; i++){      
        let formObject = this.medicineListItems.at(i)              
        //let medicineObj = formObject.get('medicineName').value
         medicineListItems.push({
          //medicineId: formObject.get('medicineId')?.value,
          medicineName: formObject.get('medicineName')?.value,
          //mg: formObject.get('mg')?.value,
          quantity: formObject.get('quantity')?.value
          
          
         })        
        

    }
    this.digitalmargetingObject.medicineList = []
    this.digitalmargetingObject.medicineList = medicineListItems
    //this.digitalmargetingObject.customerId = this.customerId
  

//    console.log("digitalmargeting this.digitalmargetingObject **"+JSON.stringify(this.digitalmargetingObject))
//this.fromOldImageList = false

    if(this.mode == "add"){
      delete this.digitalmargetingObject['customer']
      console.log("this.digitalmargetingObject for add == "+JSON.stringify(this.digitalmargetingObject))
      this.dataService.addDigitalmargeting(this.digitalmargetingObject).then((result) => {                
        //  console.log("result after adduser == "+JSON.stringify(result))
        this.commonAfterSaveCode()

          this.reinitialise()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('New digitalmargeting is added successfully');

        //  this.fromOldImageList = false

      }, (err) => {        
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
          //  this.fetchDigitalmargetings()
            
        }, 2000);
      
}
enlargePic(){
  //alert("trying to enlarge")
  //let image  = this.digitalmargetingObject.uploadedFileURL   
  //this.enlargedPic = image
  //this.enlargedPrescPic = ''
  //this.closeCustomModal2()
  this.modalReferenceImage = this.modal.open(this.enlargedImageModal); 
}
enlargePrescription(obj){
  //this.closeCustomModal()
  //this.enlargedPic = ''
  let image  = obj.uploadPhotoDigitalmargetingPrescriptionURL    
  this.enlargedPrescPic = image
  this.modalReferencePrescriptionImage = this.modal.open(this.enlargedPrescriptionModal); 
}

selectPrescription(obj){
 // let image  = obj.uploadPhotoDigitalmargetingPrescriptionURL    
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
  this.digitalmargetingObject.uploadedFile = obj.uploadPhotoDigitalmargetingPrescription
  this.digitalmargetingObject.uploadedFile = "data:image/jpg;base64,"+this.digitalmargetingObject.uploadedFile
  this.digitalmargetingObject.uploadedFileURL = obj.uploadPhotoDigitalmargetingPrescriptionURL

  this.digitalmargetingFormGroup.get('uploadedFile').patchValue(this.digitalmargetingObject.uploadedFile);

  console.log("obj =="+JSON.stringify(obj))
  //this.getPhotoOLDPrescription(obj.uploadPhotoDigitalmargetingPrescriptionURL)
  //this.showOldPrescription  = 'url(' + obj.uploadPhotoDigitalmargetingPrescriptionURL + ')'
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
    console.log("in getPhoto == this.digitalmargetingObject.uploadedFileURL == "+this.digitalmargetingObject.uploadedFileURL)
    let image  = this.digitalmargetingObject.uploadedFileURL


    image  = this.digitalmargetingObject.uploadedFile
    
    


    //alert(this.fromOldImageList)

    this.enlargedPic = image
   
    //this.fromOldImageList = false


   //let  image = "data:image/jpg;base64,"+this.digitalmargetingObject.uploadedFile
   /* if(photoType == 'prescription'){
      image  = this.digitalmargetingObject.uploadedFileURL
      if(!image && this.digitalmargetingObject.uploadedFile){
        image = "data:image/jpg;base64,"+this.digitalmargetingObject.uploadedFile

        this.digitalmargetingObject.uploadedFile = "data:image/jpg;base64,"+this.digitalmargetingObject.uploadedFile

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

    
    try {
      reader.onload = (readerEvent) => {

        let imageData = (readerEvent.target as any).result;
        this.enlargedPic = imageData
        
      console.log("in capturePhoto imageData == "+imageData)


        if(photoType == 'prescription')
          this.digitalmargetingObject.uploadedFile =  imageData;

          //var dataURL = reader.result;
          //this.digitalmargetingObject.uploadedFileURL  =  imageData;

          this.digitalmargetingFormGroup.get('uploadedFile').patchValue(this.digitalmargetingObject.uploadedFile);
          //this.isPrescriptionUploaded = true

      };

      
      this.digitalmargetingObject.uploadedFileURL = event.target.files[0]

      console.log("in capturePhoto this.digitalmargetingObject.uploadedFileURL == "+this.digitalmargetingObject.uploadedFileURL)


      reader.readAsDataURL(event.target.files[0]);
      var image = document.getElementById('output');
      this.prescriptionSource = URL.createObjectURL(event.target.files[0]);
      document.getElementById('output').setAttribute( 'src',  URL.createObjectURL(event.target.files[0]));
      console.log("this.prescriptionSource == "+this.prescriptionSource)
      //this.prescriptionSource = event.target.files[0];

      
    }
    catch(error) {
     console.log('Error', error);
    }
  }

getPhotoOldPrescription(obj) {
  try {
    let image  = obj.uploadPhotoDigitalmargetingPrescriptionURL
    
      image  = obj.uploadPhotoDigitalmargetingPrescriptionURL
      /*if(obj && obj.uploadPhotoDigitalmargetingPrescription){
        image = obj.uploadPhotoDigitalmargetingPrescription
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

  
  this.digitalmargetingFormGroup = this._fb.group({
    customerId: new FormControl(this.customerId, Validators.required),      
    uploadedFile: new FormControl(this.digitalmargetingObject.uploadedFile, Validators.required),
    deliveryMode: new FormControl(this.digitalmargetingObject.deliveryMode, Validators.required),      
    //medicineName: new FormControl(this.digitalmargetingObject.attendantID, Validators.required),
    //quantity: new FormControl(this.digitalmargetingObject.name, Validators.required),
    status: new FormControl(this.digitalmargetingObject.status, Validators.required),      
    medicineListItems: this._fb.array([ this.createMedicineItem() ])
  });
  

  this.digitalmargetingFormGroup.get('uploadedFile').patchValue(this.digitalmargetingObject.uploadedFile);

  //console.log("this.digitalmargetingObject =="+JSON.stringify(this.digitalmargetingObject))
  let dateTimeArray = []
  this.medicineListItems = this.digitalmargetingFormGroup.get('medicineListItems') as FormArray;
  this.medicineListItems.removeAt(0)  


    
  for(var i in this.digitalmargetingObject.medicineList){
      let medicine = this.digitalmargetingObject.medicineList[i]      
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
  
  
  //this.digitalmargetingObject.attendantID = earlierAttendent

  //this.digitalmargetingFormGroup.get('medicineListItems').patchValue(dateTimeArray)
  //addItem
 //setTimeout(() => {
  //try{
  //  this.modalReferenceDigitalmargetingForm = this.modal.open(this.digitalmargetingFormModal);
  //}catch(error){
//    console.log(error)
  //}
//}, 2000);
  //setTimeout(() => {
   
}
checkStatusChange(){
  console.log("status **"+this.digitalmargetingObject['status'] )
}
checkDeliveryMode(){
  console.log("deliverymode **"+this.digitalmargetingObject.deliveryMode )
}
 openForeditDigitalmargeting(user){

  //this.input.nativeElement.focus();
  //this.fromOldImageList = false

//  console.log("digitalmargeting object **"+JSON.stringify(user))
  //this.modalReferenceDigitalmargetingForm = this.modal.open(this.digitalmargetingFormModal);

  this.loading = true
  this.loadingCustomeMsg == "Fetching old prescriptions, please wait.."
  this.mode = "edit"
  
  //this.digitalmargetingObject = Object.assign({}, this.digitalmargetingObjectBase); 
  this.customerId = user['customerId']
  this.digitalmargetingObject = Object.assign({}, user); 


  console.log("deliverymode **"+this.digitalmargetingObject['deliveryMode'] )

  this.modalReferenceDigitalmargetingForm = this.modal.open(this.digitalmargetingFormModal);

  //console.log("digitalmargeting in EDIT this.digitalmargetingObject **"+JSON.stringify(this.digitalmargetingObject))

  console.log("this.customerId == "+this.customerId)

  //if(this.customerId)
  //this.fetchAllDigitalmargetingPrescriptions()  

  let data ={customerId:this.customerId}
  this.commonCodeDuringEdit()
  console.log(" fetch old prescription for "+JSON.stringify(data))
  this.dataService.fetchAllDigitalmargetingPrescriptions(data).then((result:[]) => {        
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
    this.searchByDigitalmargetingDate = false
    this.searchByDigitalmargetingId = false
    this.searchByCustomer = false
    this.searchByStatus = false
    this.digitalmargetingDate = ''
    this.customerId = ''
    this.digitalmargetingId = ''
    this.digitalmargetingStatus = ''
    this.customerName = ''
    this.allDynaFilter = null
    this.fetchDigitalmargetingsCount()
    this.totalDocRecords = 0
    this.fetchDigitalmargetings()
    this.digitalmargetingObject = Object.assign({}, this.digitalmargetingObjectBase); 
    this.mode = "add"
    this.medicineListItems = this.digitalmargetingFormGroup.get('medicineListItems') as FormArray;
  }
  reset(){
    this.reinitialise()
    this.toastr.successToastr('Filters reset, digitalmargeting list refreshed');
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
  if(this.searchByDigitalmargetingDate && this.digitalmargetingDate){
    let converteddate = this.fromJsDateToLocationdateTimeFormat(this.digitalmargetingDate)
    dynaFilter['createdDate'] = converteddate
    dynaFilterArry.push({createdDate:converteddate}) 
    console.log("converteddate **"+converteddate) 
    //moment(new Date()).format('YYYY-MM-DD[T00:00:00.000Z]'

    //var dateTime = new Date(this.digitalmargetingDate);
    /*
    var dateTime1dayAgo = moment(this.digitalmargetingDate,"YYYY-MM-DD HH:mm:ss").subtract(1,'d').format('YYYY-MM-DD[T00:00:00.000Z]');
    var dateTime1dayLater = moment(this.digitalmargetingDate,"YYYY-MM-DD HH:mm:ss").add(1,'days').format('YYYY-MM-DD[T00:00:00.000Z]');
    dynaFilter['createdDate'] = {"$gt": dateTime1dayAgo}     
    //console.log("this.digitalmargetingDate **"+converteddate)    
    console.log("this.digitalmargetingDate **"+this.digitalmargetingDate) 
    dynaFilterArry.push({createdDate:{"$gt": dateTime1dayAgo} })     
    dynaFilterArry.push({createdDate:{"$lt": dateTime1dayLater} }) 
    */

  }
  if(this.searchByCustomer && this.customerId){
    //dynaFilter['customerId'] = this.customerId   
    dynaFilterArry.push({customerId:this.customerId }) 
  }
  if(this.searchByDigitalmargetingId && this.digitalmargetingId){
    //dynaFilter['digitalmargetingId'] = this.digitalmargetingId   
    dynaFilterArry.push({digitalmargetingId:this.digitalmargetingId }) 
  }
  if(this.searchByStatus && this.digitalmargetingStatus){
    //dynaFilter['status'] = this.digitalmargetingStatus   
    dynaFilterArry.push({status:this.digitalmargetingStatus})    
  }
  this.allDynaFilter = {$and:dynaFilterArry} 
  
  
  this.fetchDigitalmargetingsCount()  
  this.fetchDigitalmargetings()     
  

  this.closeSearchModal()
  this.toastr.successToastr('Searching Done');
          

  
}
closeMainModal() {
     
  if(this.modalReferenceDigitalmargetingForm)
    this.modalReferenceDigitalmargetingForm.close();

    this.fromOldImageList = false
  
}
  userKindChange(){
    this.pageNo = 1
    
    this.applyFilter()
  }
  applyFilter() {  
    if(this.customerId != undefined && this.customerId && this.customerId != ''){
      this.fetchDigitalmargetingByCustomer = true
    }else{
      this.fetchDigitalmargetingByCustomer = false
    }

    console.log("this.customerId "+this.customerId)    
        
    this.fetchDigitalmargetingsCount()  
    this.fetchDigitalmargetings()    
    
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    this.pageNo = 1

}
 
  
customerSelectEvent(item) {
  if(item){
  this.digitalmargetingFormGroup.get('customerId').patchValue(item['_id']);
  this.customerId = item['_id']

  if(this.customerId){
    this.loading = true
    this.loadingCustomeMsg == "Fetching old prescriptions, please wait.."
    this.fetchAllDigitalmargetingPrescriptions()   
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



  fetchDigitalmargetingsCount(){
  
   let data = {pageNo:this.pageNo,perPage:this.pageSize,filter : this.allDynaFilter}
   // this.fetchDigitalmargetingsCount({filter : allDynaFilter})  
    //this.fetchDigitalmargetingsByFilters({filter : allDynaFilter})   
    console.log(" inside data "+JSON.stringify(data))
  
    this.dataService.fetchDigitalmargetingsCount(data).then((result) => {
          
      console.log("****** fetchdigitalmargetingsCount result   ===== **"+JSON.stringify(result))
    this.totalDocRecords = result;
    this.loading = false;

    console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)
  
  }, (err) => {
    this.loading = false;
    console.log(err);
  });
  }
 
   fetchAllDigitalmargetingPrescriptions(){
    
    let data ={customerId:this.customerId}

    console.log(" fetch old prescription for "+JSON.stringify(data))
    this.dataService.fetchAllDigitalmargetingPrescriptions(data).then((result:[]) => {        
     
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
  fetchDigitalmargetings(){
  
    let data = {pageNo:this.pageNo,perPage:this.pageSize,filter : this.allDynaFilter}
 
  this.dataService.fetchDigitalmargetings(data).then((result:any) => {        
    this.normalFiltereduserListArr = []; 
      //this.normalFiltereduserListArr = result.map(element => {        
       // return   element
     // })

    for(var i in result){
      let digitalmargetingObj = result[i]
     // if(!digitalmargetingObj['deliveryMode'] || digitalmargetingObj['deliveryMode'] == undefined ){
    //    digitalmargetingObj['deliveryMode'] = "General"
    //  }

     // console.log("****** digitalmargetingObj   ===== **"+JSON.stringify(digitalmargetingObj))    
      this.normalFiltereduserListArr.push(digitalmargetingObj)
    }


    //  console.log("****** this.fetchDigitalmargetingsByFilters   ===== **"+JSON.stringify(this.normalFiltereduserListArr))      
      this.loading = false;

  }, (err) => {
    this.normalFiltereduserListArr = []; 
    this.loading = false;
    console.log(err);
  });
   
  }
  
  
}
