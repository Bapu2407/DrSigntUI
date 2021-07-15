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
  selector: 'app-listdigitalmakt',
  templateUrl: './listdigitalmakt.component.html',
  styleUrls: ['./listdigitalmakt.component.scss'],
  providers : [NgbModal]
})
export class ListdigitalmaktComponent extends BaseComponentDM implements OnInit {
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
  listdigitalmaktStatus:string
  listdigitalmaktId:string
  listdigitalmaktDate:string
  states = Config.states
  keywordCustomer:string = "name"
  fetchListdigitalmaktByCustomer:boolean = false
  listdigitalmaktList:any = []
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
  public userKind:string="listdigitalmakt"
  normalFiltereduserListArr:any = [];
  customerOldPrescriptionListArr:any = [];
  
  modalSearchFilerReference: NgbModalRef;
  delModeList:any = [
    {"value":"Express","name":"Express"},
    {"value":"General","name":"General"}  ]

  modalReferenceListdigitalmaktForm: NgbModalRef;
  @ViewChild('content') content: TemplateRef<any>;   
   items = [];
   @ViewChild('listdigitalmaktFormModal') listdigitalmaktFormModal: TemplateRef<any>;
   @ViewChild('searFiltersModal') searFiltersModal: TemplateRef<any>;
   @ViewChild('enlargedImageModal') enlargedImageModal: TemplateRef<any>;
   @ViewChild('enlargedPrescriptionModal') enlargedPrescriptionModal: TemplateRef<any>;

   
   pageOfItems: Array<any>;
  public pageSize = Config.RECORDSIZE;
  public pageNo = 1
  tempArray: any[] = [];
  totalDocRecords:any 
  listdigitalmaktFormGroup: FormGroup;
  totalPatientRecords:any
  customListdigitalmakttime : {
    hour: 10,
    minute: 20,

};
searchByCustomer:boolean = false
searchByListdigitalmaktDate:boolean = false
searchByListdigitalmaktId:boolean = false
searchByStatus:boolean = false


medicineName:any
keywordMedicine = "name"
  listdigitalmaktObject =  
  {     
     name:"",
  emailId:"",  
  mobileNumber : "9134683936",
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
    status : "ListdigitalmaktPlaced"    
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
  listdigitalmaktObjectBase =  
  {    
    name:"",
    emailId:"",  
    mobileNumber : "9134683936",
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
    status : "ListdigitalmaktPlaced"    
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
  //  this.customListdigitalmakttime.hour = 9
   // this.customListdigitalmakttime.minute = 10


      
    

     //this.listdigitalmaktFormGroup = this.buildForm()

    //this.openforAddListdigitalmaktDialog()

    this.loading = false
    //this.createMedicineItem()

    //this.listdigitalmaktFormGroup.valueChanges.subscribe(data => console.log('form changes', data));
   // this.loading = false;    
    this.fetchDigitalmargetingsCount()   
    this.fetchDigitalmargetings()
    
  }
   gfg() { 
    var minm = 10000; 
    var maxm = 99999; 
    this.randomOTP = Math.floor(Math 
    .random() * (maxm - minm + 1)) + minm; 
} 

  getControls() {
    return (this.listdigitalmaktFormGroup.get('medicineListItems') as FormArray).controls;
  }
  gotoCustomerPage(){
    this.router.navigate(["/customer",{fromListdigitalmaktPage:'fromListdigitalmaktPage'}]);
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
  getListdigitalmakt(){

  }
  addItem(): void {
    this.medicineListItems = this.listdigitalmaktFormGroup.get('medicineListItems') as FormArray;
    this.medicineListItems.push(this.createMedicineItem());
  }

  removeItem(i){

     this.medicineListItems = this.listdigitalmaktFormGroup.get('medicineListItems') as FormArray;
    this.medicineListItems.removeAt(i)  

  }

 
  closeSearchModal(){
    //if(this.modalSearchFilerReference)
    //this.modalSearchFilerReference.close();
    if(this.modalSearchFilerReference)
    this.modalSearchFilerReference.dismiss()
  }
 
   openforAddListdigitalmaktDialog(){

try{
     //this.medicineListItems.push({})
     this.listdigitalmaktObject = Object.assign({}, this.listdigitalmaktObjectBase); 

    this.customerOldPrescriptionListArr = []; 
    this.customerId = ''
    /*
    if(this.customerId == undefined || !this.customerId || this.customerId == ''){
     alert("Please select a customer first, from the dropdown")
     return
    }
    */
    this.mode = "add"
    //this.modalReferenceListdigitalmaktForm = this.modal.open(this.listdigitalmaktFormModal);
    
    
    this.medicineListItems = this.listdigitalmaktFormGroup.get('medicineListItems') as FormArray;
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

  

    //this.pageSize = Config.RECORDSIZE;
    //this.pageNo = 1
    this.fetchDigitalmargetings()     

    

  };

  
    
enlargePic(){
  //alert("trying to enlarge")
  //let image  = this.listdigitalmaktObject.uploadedFileURL   
  //this.enlargedPic = image
  //this.enlargedPrescPic = ''
  //this.closeCustomModal2()
  this.modalReferenceImage = this.modal.open(this.enlargedImageModal); 
}
enlargePrescription(obj){
  //this.closeCustomModal()
  //this.enlargedPic = ''
  let image  = obj.uploadPhotoListdigitalmaktPrescriptionURL    
  this.enlargedPrescPic = image
  this.modalReferencePrescriptionImage = this.modal.open(this.enlargedPrescriptionModal); 
}

selectPrescription(obj){
 // let image  = obj.uploadPhotoListdigitalmaktPrescriptionURL    
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
  this.listdigitalmaktObject.uploadedFile = obj.uploadPhotoListdigitalmaktPrescription
  this.listdigitalmaktObject.uploadedFile = "data:image/jpg;base64,"+this.listdigitalmaktObject.uploadedFile
  this.listdigitalmaktObject.uploadedFileURL = obj.uploadPhotoListdigitalmaktPrescriptionURL

  this.listdigitalmaktFormGroup.get('uploadedFile').patchValue(this.listdigitalmaktObject.uploadedFile);

  console.log("obj =="+JSON.stringify(obj))
  //this.getPhotoOLDPrescription(obj.uploadPhotoListdigitalmaktPrescriptionURL)
  //this.showOldPrescription  = 'url(' + obj.uploadPhotoListdigitalmaktPrescriptionURL + ')'
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
    console.log("in getPhoto == this.listdigitalmaktObject.uploadedFileURL == "+this.listdigitalmaktObject.uploadedFileURL)
    let image  = this.listdigitalmaktObject.uploadedFileURL


    image  = this.listdigitalmaktObject.uploadedFile
    
    


    //alert(this.fromOldImageList)

    this.enlargedPic = image
   
    //this.fromOldImageList = false


   //let  image = "data:image/jpg;base64,"+this.listdigitalmaktObject.uploadedFile
   /* if(photoType == 'prescription'){
      image  = this.listdigitalmaktObject.uploadedFileURL
      if(!image && this.listdigitalmaktObject.uploadedFile){
        image = "data:image/jpg;base64,"+this.listdigitalmaktObject.uploadedFile

        this.listdigitalmaktObject.uploadedFile = "data:image/jpg;base64,"+this.listdigitalmaktObject.uploadedFile

      }
    }*/
    
   
    
    return 'url(' + image + ')'
  }
  catch(error) {
   console.log('Error', error);
  }
}

getPhotoOldPrescription(obj) {
  try {
    let image  = obj.uploadPhotoListdigitalmaktPrescriptionURL
    
      image  = obj.uploadPhotoListdigitalmaktPrescriptionURL
      /*if(obj && obj.uploadPhotoListdigitalmaktPrescription){
        image = obj.uploadPhotoListdigitalmaktPrescription
      }
    */
  //  this.enlargedPic = image
   
    
    return 'url(' + image + ')'
  }
  catch(error) {
   // //console.log('Error', error);
  }
}


checkStatusChange(){
  console.log("status **"+this.listdigitalmaktObject['status'] )
}
checkDeliveryMode(){
  console.log("deliverymode **"+this.listdigitalmaktObject.deliveryMode )
}


closeMainModal() {
     
  if(this.modalReferenceListdigitalmaktForm)
    this.modalReferenceListdigitalmaktForm.close();

    this.fromOldImageList = false
  
}
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    this.pageNo = 1

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


viewPrescription(obj){

  this.enlargedPic = obj.uploadedFileURL
  this.modalReferenceImage = this.modal.open(this.enlargedImageModal); 

}

pageChanged(event){
  console.log("****** this.event   ===== **"+event)
  this.pageNo = event
  this.applyFilter()
}

applyFilter() {
      
    
               
  
    this.fetchDigitalmargetings()
  

 
  
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

    console.log("****** digitalmargetingObj   ===== **"+JSON.stringify(digitalmargetingObj))    
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
