import { Component, OnInit, NgZone, ViewChild, TemplateRef, ElementRef} from '@angular/core';

import { ToastrManager } from 'ng6-toastr-notifications';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import *  as moment from 'moment';
import { DataAccess } from 'src/app/services/data-access';
import { Config } from '../../config';


import { BaseComponent } from 'src/BaseComponent';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-activate-deactivate',
  templateUrl: './activate-deactivate.component.html',
  styleUrls: ['./activate-deactivate.component.scss'],
  providers : [NgbModal]
})
export class ActivateDeactivateComponent extends BaseComponent implements OnInit {

  @ViewChild('fileInputDemoPhoto') fileInputDemoPhoto :ElementRef;;
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
  @ViewChild('acc') accordionComponent: NgbAccordion;
  public userKind:string="doctor"
  normalFiltereduserListArr:any = [];
  @ViewChild('content') content: TemplateRef<any>;   
   items = [];
   @ViewChild('doctorFormModal') doctorFormModal: TemplateRef<any>;
   pageOfItems: Array<any>;
  public pageSize = Config.RECORDSIZE;
  public pageNo = 1
  tempArray: any[] = [];
  totalDocRecords:any 
  doctorFormGroup: FormGroup;
  totalPatientRecords:any
  oldEmail:string
  doctorObject = {
      name:"",
      emailId:"",
      password:"",
      active:true,
      designation:"",
      dateOfBirth:null,
      dateOfBirth1:"",
      issueingAuthority:"",
      issueingDate:null,
      fcmId:"",
      deviceId:"",
      validTill:null,
      uploadPhotoDemographicURL:"",
      uploadPhotoProfessionalURL:"",
      registeredAddress:"",
      practiceCategory:"",
      mobileNumber:"",
      uploadPhotoDemographic:"",
      degreeDiploma:"",
      generalPractice:"",
      professionalPracticeExperience:"",
      currentPracticeInformation:"",
      doctorRegistrationInformation:"",
      uploadPhotoProfessional:"",
      otp:""
    }
    doctorObjectBase = {
      name:"",
      emailId:"",
      password:"",
      active:true,
      designation:"",
      dateOfBirth:null,
      dateOfBirth1:"",
      issueingAuthority:"",
      issueingDate:null,
      fcmId:"",
      deviceId:"",
      validTill:null,
      uploadPhotoDemographicURL:"",
      uploadPhotoProfessionalURL:"",
      registeredAddress:"",
      practiceCategory:"",
      mobileNumber:"",
      uploadPhotoDemographic:"",
      degreeDiploma:"",
      generalPractice:"",
      professionalPracticeExperience:"",
      currentPracticeInformation:"",
      doctorRegistrationInformation:"",
      uploadPhotoProfessional:"",
      otp:""
    }
  constructor(
    private datePipe : DatePipe,
    public router: Router,
    private modal: NgbModal,
    public toastr: ToastrManager,
    private _fb: FormBuilder,    
    public dataService: DataAccess,
    
    
  ) {
    super(router)

    if(!this.user.role.doctor.doctor.view){
      return
    }
   
    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(["/login"]);
    }
    this.oldEmail = ''

    this.doctorFormGroup = _fb.group({
      name: new FormControl(this.doctorObject.name, Validators.required),
      designation: new FormControl(this.doctorObject.designation, Validators.required),
      dateOfBirth: new FormControl(this.doctorObject.dateOfBirth),
      issueingAuthority: new FormControl(this.doctorObject.issueingAuthority),
      issueingDate: new FormControl(this.doctorObject.issueingDate),
      active: new FormControl(this.doctorObject.active),
      fcmId: new FormControl(this.doctorObject.fcmId),
      password:new FormControl(this.doctorObject.password),
      deviceId: new FormControl(this.doctorObject.deviceId),
      validTill: new FormControl(this.doctorObject.validTill),
      registeredAddress: new FormControl(this.doctorObject.registeredAddress, Validators.required),
      practiceCategory: new FormControl(this.doctorObject.practiceCategory, Validators.required),
      mobileNumber: new FormControl(this.doctorObject.mobileNumber, Validators.required),
      
      uploadPhotoDemographic: new FormControl(this.doctorObject.uploadPhotoDemographic),
      degreeDiploma: new FormControl(this.doctorObject.degreeDiploma, Validators.required),
      generalPractice: new FormControl(this.doctorObject.generalPractice, Validators.required),
      professionalPracticeExperience: new FormControl(this.doctorObject.professionalPracticeExperience, Validators.required),
      currentPracticeInformation: new FormControl(this.doctorObject.currentPracticeInformation, Validators.required),
      doctorRegistrationInformation: new FormControl(this.doctorObject.doctorRegistrationInformation, Validators.required),
      
      uploadPhotoProfessional: new FormControl(this.doctorObject.uploadPhotoProfessional),
      
      emailId: new FormControl(this.doctorObject.emailId, [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    });

    //this.doctorFormGroup.valueChanges.subscribe(data => console.log('form changes', data));
    this.loading = false;    
    this.fetchDoctors()   
    
  }
 /* processWebImage(event) {
    let reader = new FileReader();
    try {
      reader.onload = (readerEvent) => {

        let imageData = (readerEvent.target as any).result;
        this.doctorObject.uploadPhotoDemographic = imageData;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
    catch(error) {
     console.log('Error', error);
    }
  }
  
  getPicture(){
    this.fileInputDemoPhoto.nativeElement.click();
  }
  */
  capturePhoto(event,photoType){
  //  alert("I am clicked")
    let reader = new FileReader();
    try {
      reader.onload = (readerEvent) => {

        let imageData = (readerEvent.target as any).result;
        if(photoType == 'demographic')
          this.doctorObject.uploadPhotoDemographic = imageData;

        if(photoType == 'profesional')
          this.doctorObject.uploadPhotoProfessional = imageData;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    catch(error) {
     console.log('Error', error);
    }
  }

 
  getPhoto(photoType) {
    try {
      let image  = this.doctorObject.uploadPhotoDemographicURL
      if(photoType == 'demographic'){
        image  = this.doctorObject.uploadPhotoDemographicURL
        if(this.doctorObject.uploadPhotoDemographic){
          image = this.doctorObject.uploadPhotoDemographic
        }
      }

       if(photoType == 'profesional'){
        image  = this.doctorObject.uploadPhotoProfessionalURL
          if(this.doctorObject.uploadPhotoProfessional){
            image = this.doctorObject.uploadPhotoProfessional
          }
       }
      

      return 'url(' + image + ')'
    }
    catch(error) {
     // //console.log('Error', error);
    }
  }
  
  
  openAddDoctorDialog(){
    this.mode = "add"
    this.doctorObject =Object.assign({}, this.doctorObjectBase); 
    this.modalReference = this.modal.open(this.doctorFormModal);
  }
  ngOnInit(){


    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(["/login"]);
    }

  

    //this.pageSize = Config.RECORDSIZE;
    //this.pageNo = 1
    this.fetchDoctorsCount()      
    this.fetchPatientsCount()      
 //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
  };

  save(){
//alert("mode: "+this.mode)
    if((this.oldEmail != this.doctorObject.emailId && this.doctorFormGroup.controls['emailId'].touched && this.mode == "edit") || this.mode=="add" ){
      let email  = this.doctorFormGroup.controls.emailId.value

      for(var i in this.normalFiltereduserListArr){
        if(email == this.normalFiltereduserListArr[i].emailId){
          this.submitAttempt = true;
          this.form_fill_failure_msg = "This email id already used by another user";
          return; 
        }
      }
    }

    if(!this.doctorFormGroup.valid){
        this.submitAttempt = true;        
        this.validateFields(this.doctorFormGroup.controls)                   
        return; 
    } 
    if(this.doctorObject.dateOfBirth && this.doctorObject.dateOfBirth!=""){
//      this.doctorObject.dateOfBirth = this.fromJsDateToMongoDate(this.doctorFormGroup.controls.dateOfBirth.value)
      this.doctorObject.dateOfBirth = this.fromJsDateToMongoDate(this.doctorObject.dateOfBirth)    
    }
    if(this.doctorObject.dateOfBirth == null){
      this.doctorObject.dateOfBirth = ""
    }
    if(this.doctorObject.issueingDate && this.doctorObject.issueingDate!=""){
            this.doctorObject.issueingDate = this.fromJsDateToMongoDate(this.doctorObject.issueingDate)
    }
    if(this.doctorObject.issueingDate == null){
      this.doctorObject.issueingDate = ""
    }
    if(this.doctorObject.validTill && this.doctorObject.validTill!=""){
            this.doctorObject.validTill = this.fromJsDateToMongoDate(this.doctorObject.validTill)
     }
     if(this.doctorObject.validTill == null){
      this.doctorObject.validTill = ""
    }
    

    
    if(this.mode == "add"){
      console.log("this.doctorObject for add == "+JSON.stringify(this.doctorObject))
      this.dataService.addDoctor(this.doctorObject).then((result) => {                
        //  console.log("result after adduser == "+JSON.stringify(result))
          this.fetchDoctors()
          this.mode = "add"
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('New Doctor is added successfully');
      }, (err) => {        
      console.log(err);
      });
    }if(this.mode == "edit"){
      this.doctorObject['doctorId'] = this.doctorObject['_id']
      console.log("this.doctorObject for edit == "+JSON.stringify(this.doctorObject))
      this.dataService.updateDoctor(this.doctorObject).then((result) => {
        //  console.log("****** updateDoctor result   ===== **"+JSON.stringify(result))
          //this.loading = false;
          this.mode = "add"   
          this.fetchDoctors()
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('Doctor is updated successfully'); 
      }, (err) => {
        this.mode = "add"
        //this.loading = false;
        console.log(err);
      });
    }
    
}
openForeditDoctor(user){

  this.oldEmail = user['emailId']
  this.doctorObject = Object.assign({}, user); 

  console.log("this.doctorObject.dateOfBirth **"+this.doctorObject.dateOfBirth)

  //this.doctorObject.dateOfBirth = new Date(this.doctorObject.dateOfBirth)

  //this.doctorObject.dateOfBirth =  moment(this.doctorObject.dateOfBirth).format('DD-MMM-YYYY');

  this.doctorObject.dateOfBirth = this.datePipe.transform(this.doctorObject.dateOfBirth, 'yyyy-MM-dd')

  this.doctorObject.issueingDate = this.datePipe.transform(this.doctorObject.issueingDate, 'yyyy-MM-dd')
  this.doctorObject.validTill = this.datePipe.transform(this.doctorObject.validTill, 'yyyy-MM-dd')


  //this.openAddDoctorDialog()
  this.mode = "edit"
  this.modalReference = this.modal.open(this.doctorFormModal);

  console.log("this.doctorObject.dateOfBirth **"+this.doctorObject.dateOfBirth)
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
      
    
               
    if( this.userKind && this.userKind=="doctor")  {      
      this.fetchDoctors()
    }
 
   if( this.userKind && this.userKind=="patient")  {      
      this.fetchPatients()     
    } 

    
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    this.pageNo = 1

}
  fetchPatients(){
    let data = {pageNo:this.pageNo,perPage:this.pageSize}
    this.dataService.fetchPatients(data).then((result:[]) => {
        
      this.normalFiltereduserListArr = [];      
      this.normalFiltereduserListArr = result.map(element => element)
     // console.log("****** this.normalFiltereduserListArr   ===== **"+JSON.stringify(this.normalFiltereduserListArr))

      this.loading = false;

    }, (err) => {
      this.loading = false;
      console.log(err);
    });
  }
  


  fetchDoctorsCount(){
  //  this.pageNo = 1
  //  this.pageSize = 10
    this.dataService.fetchDoctorsCount().then((result) => {
        
        console.log("****** fetchDoctorsCount result   ===== **"+JSON.stringify(result))
      this.totalDocRecords = result;
      console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)

      this.loading = false;

    }, (err) => {
      this.loading = false;
      console.log(err);
    });
  }
  fetchPatientsCount(){
    //  this.pageNo = 1
    //  this.pageSize = 10
      this.dataService.fetchPatientsCount().then((result) => {
          
          console.log("****** fetchDoctorsCount result   ===== **"+JSON.stringify(result))
        this.totalPatientRecords = result;
        console.log("****** this.totalPatientRecords ===== **"+this.totalPatientRecords)
  
        this.loading = false;
  
      }, (err) => {
        this.loading = false;
        console.log(err);
      });
    }

  fetchDoctors(){
  //  this.pageNo = 1
    //this.pageSize = 10
    let data = {pageNo:this.pageNo,perPage:this.pageSize}
    this.dataService.fetchDoctors(data).then((result:[]) => {
        
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
    if( this.userKind && this.userKind=="doctor")  {    
      userInfo.doctorId = userInfo._id
      data['doctorId'] = userInfo._id
      data['active'] = userInfo.active
      console.log("****** userInfo   ===== **"+JSON.stringify(data))

          this.dataService.updateDoctor(data).then((result) => {
          //  console.log("****** updateDoctor result   ===== **"+JSON.stringify(result))

            this.loading = false;
      
        }, (err) => {
          this.loading = false;
          console.log(err);
        });
    }
 
   if( this.userKind && this.userKind=="patient")  {      
    userInfo.patientId = userInfo._id

    data['patientId'] = userInfo._id
    data['active'] = userInfo.active
    console.log("****** userInfo   ===== **"+JSON.stringify(data))
      

        this.dataService.updatePatient(data).then((result) => {
                
         // this.normalFiltereduserListArr = result.map(element => element)
        //  console.log("****** updatePatient result   ===== **"+JSON.stringify(result))

          this.loading = false;

      }, (err) => {
        this.loading = false;
        console.log(err);
      });
    } 
    
    this.toastr.successToastr('User status updated successfully');
  }

  
}