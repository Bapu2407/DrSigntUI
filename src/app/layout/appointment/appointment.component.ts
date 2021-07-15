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
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
  providers : [NgbModal]
})
export class AppointmentComponent extends BaseComponent implements OnInit {

  @ViewChild('fileInputDemoPhoto') fileInputDemoPhoto :ElementRef;;
  public loading:boolean = true;
  public closeResult: string;
  keyword = 'name';
  disableSatusDropDown:boolean = false
  data = [
     {
       id: 1,
       name: 'Usa'
     },
     {
       id: 2,
       name: 'England'
     }
  ];
  keywordLocation = "name"
  keywordDoctor = "name"
  patientList:any = []
  locationList:any = []
  doctorList:any  = []
  public defaultPagination: number;
  public advancedPagination: number;
  public paginationSize: number;
  public itemsPerPage : number;
  public disabledPagination: number;
  public isDisabled: boolean;
  public collectionSize: number;
  public currentPage: number;
  paientName:any
  locationName:any
  doctorName:any
  @ViewChild('itemTemplate') itemTemplateRef: ElementRef;
  @ViewChild('acc') accordionComponent: NgbAccordion;
  public userKind:string="appointment"
  normalFiltereduserListArr:any = [];
  @ViewChild('content') content: TemplateRef<any>;   
   items = [];
   @ViewChild('appointmentFormModal') appointmentFormModal: TemplateRef<any>;
   pageOfItems: Array<any>;
  public pageSize = Config.RECORDSIZE;
  public pageNo = 1
  tempArray: any[] = [];
  totalDocRecords:any 
  appointmentFormGroup: FormGroup;
  totalPatientRecords:any
  customAppointmenttime : {
    hour: 10,
    minute: 20,

};
  appointmentObject =  
  {    
    locationId : "",
    patientId : "",
    doctorId : "",
    appointmentDate : null,
    appointmentTime : "10:30 am",
    status : "Requested",
    active : true    
  }

  appointmentObjectBase =  
  {    
    locationId : "",
    patientId : "",
    doctorId : "",
    appointmentDate : null,
    appointmentTime :  "10:30 am",
    status : "Requested",
    active : true    
  }
  
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
  //  this.customAppointmenttime.hour = 9
   // this.customAppointmenttime.minute = 10

    if(!this.user.role.doctor.appointment.view){
      return
    }
    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(["/login"]);
    }
    
    this.appointmentFormGroup = _fb.group({
      locationId: new FormControl(this.appointmentObject.locationId, Validators.required),
      locationName: new FormControl(''),
      doctorId: new FormControl(this.appointmentObject.doctorId, Validators.required),
      doctorName: new FormControl(''),
      patientId: new FormControl(this.appointmentObject.patientId, Validators.required),
      patientName: new FormControl(''),
      appointmentDate: new FormControl(this.appointmentObject.appointmentDate, Validators.required),
      appointmentTime: new FormControl(this.appointmentObject.appointmentTime, Validators.required),
      status: new FormControl(this.appointmentObject.status)
    });

    //this.appointmentFormGroup.valueChanges.subscribe(data => //console.log('form changes', data));
    this.loading = false;    
    this.fetchAppointments()   
    
  }
  getLocation(){

  }
  
  patientSelectEvent(item) {
    if(item){
    this.appointmentFormGroup.get('patientId').patchValue(item['_id']);
    this.appointmentObject.patientId = item['_id']
    ////console.log(" inside patientSelectEvent "+JSON.stringify(item))
    //console.log(" inside patientSelectEvent "+JSON.stringify(item))
    }
    // do something with selected item
  }
 
  onChangePatientSearch(val: string) {
    //console.log(" inside onChangePatientSearch val "+val)
    if(val && val.length >2 ){
    let data = {name:val}
    this.dataService.fetchAllPatients(data).then((result:[]) => {
      this.patientList = result.map(element => element)
    }, (err) => {
        //console.log(err);
    });
    }
  }
 
   
  locationSelectEvent(item) {
    if(item){
    this.appointmentFormGroup.get('locationId').patchValue(item['_id']);
    this.appointmentObject.locationId = item['_id']
    //console.log(" inside locationSelectEvent "+JSON.stringify(item))
    }
    // do something with selected item
  }
 
  onChangeLocationSearch(val: string) {
    //console.log(" inside onChangePatientSearch val "+val)
   // if(val && val.length >2 ){
    let data = {name:val}
    this.dataService.fetchAllLocations(data).then((result:[]) => {
      this.locationList = result.map(element => element)
    }, (err) => {
        //console.log(err);
    });
   // }
  }
 
  
  doctorSelectEvent(item) {
    if(item){
    this.appointmentFormGroup.get('doctorId').patchValue(item['_id']);
    this.appointmentObject.doctorId = item['_id']
    //console.log(" inside locationSelectEvent "+JSON.stringify(item))
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
  
  onFocusedLocation(e){

    //console.log(" inside onFocusedLocation e "+e)
    // do something w
  }

  onFocusedPAtient(e){

    //console.log(" inside onFocusedPAtient e "+e)
    // do something w
  }

  openAddAppointmentDialog(){
    this.mode = "add"
    this.disableSatusDropDown = true
    this.appointmentObject =Object.assign({}, this.appointmentObjectBase); 
    this.modalReference = this.modal.open(this.appointmentFormModal);
  }
  getPatient(){

  }
  /*
  ngAfterViewInit(){
    this.dataService.fetchAllPatients().then((result:[]) => {
      this.patientList = result.map(element => element)
    }, (err) => {
        //console.log(err);
    });

    this.dataService.fetchAllLocations().then((result:[]) => {
      this.locationList = result.map(element => element)
    }, (err) => {
    //console.log(err);
    });
  }
  */
 
  
  openAddappointmentDialog(){
    this.mode = "add"
    this.paientName = ''
    this.locationName = ''
    this.doctorName = ''
    this.modalReference = this.modal.open(this.appointmentFormModal);
  }
  ngOnInit(){


    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(["/login"]);
    }

  

    //this.pageSize = Config.RECORDSIZE;
    //this.pageNo = 1
    this.fetchAppointmentsCount()  
    this.fetchAppointments()    
    
 //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
  };
  save(){
//alert("mode: "+this.mode)
   

    if(!this.appointmentFormGroup.valid){
        this.submitAttempt = true;        
        this.validateFields(this.appointmentFormGroup.controls)                   
        return; 
    } 
    if(this.appointmentObject.appointmentDate && this.appointmentObject.appointmentDate!=""){
//      this.appointmentObject.dateOfBirth = this.fromJsDateToMongoDate(this.appointmentFormGroup.controls.dateOfBirth.value)
      this.appointmentObject.appointmentDate = this.fromJsDateToMongoDate(this.appointmentObject.appointmentDate)    
    }
   
    this.appointmentObject.appointmentTime = this.convertTimeFormogo(this.appointmentObject.appointmentTime)

    

    
    if(this.mode == "add"){
      this.appointmentObject.status = "Requested"
      //console.log("this.appointmentObject for add == "+JSON.stringify(this.appointmentObject))
      this.dataService.addAppointment(this.appointmentObject).then((result) => {                
        //  //console.log("result after adduser == "+JSON.stringify(result))
          this.fetchAppointments()
          this.mode = "add"
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('New appointment is added successfully');
          
      }, (err) => {        
      //console.log(err);
      });
      
    }if(this.mode == "edit"){
      delete this.appointmentObject['patient']
      delete this.appointmentObject['location']
    //  this.appointmentObject['appointmentId'] = this.appointmentObject['_id']
      //console.log("this.appointmentObject for edit == "+JSON.stringify(this.appointmentObject))
      this.dataService.updateAppointment(this.appointmentObject).then((result) => {
        //  //console.log("****** updateappointment result   ===== **"+JSON.stringify(result))
          //this.loading = false;
          this.mode = "add"   
          this.fetchAppointments()
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('appointment is updated successfully'); 
      }, (err) => {
        this.mode = "add"
        //this.loading = false;
        //console.log(err);
      });
    }
    
}
fetchPatientById(patientId){
  let data = {patientId:patientId}
  try {
      
      return new Promise((resolve) => {
    
            this.dataService.fetchPatientById(data).then((result) => {
              
            //console.log("****** patient  ===== **"+JSON.stringify(result))
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
fetchLocationById(locationId){
  let data = {practiceLocationId:locationId}
  try {      
      return new Promise((resolve) => {    
            this.dataService.fetchLocationById(data).then((result) => {
              
            //console.log("****** location  ===== **"+JSON.stringify(result))
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
fetchDoctrById(doctorId){
  let data = {doctorId:doctorId}
  try {      
      return new Promise((resolve) => {    
            this.dataService.fetchDoctrById(data).then((result) => {
              
            //console.log("****** location  ===== **"+JSON.stringify(result))
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
async openForeditappointment(user){
  this.mode = "edit"
  this.disableSatusDropDown = false
  this.paientName = ''
  this.locationName = ''
  this.doctorName = ''
  this.appointmentObject = Object.assign({}, user); 

  
  //let itemTemplateRefDiv = document.getElementById('itemTemplate');
  //itemTemplateRefDiv.innerHTML = 'madan kanto';
  this.paientName = await this.fetchPatientById(this.appointmentObject.patientId)  
  this.locationName = await this.fetchLocationById(this.appointmentObject.locationId)

  //console.log("this.appointmentObject **"+JSON.stringify(this.appointmentObject))

  this.doctorName = await this.fetchDoctrById(this.appointmentObject.doctorId)

  //this.patientList.push({name:'madan kanto'})

  this.appointmentObject.appointmentTime = this.backTONgTImeFOrmat(this.appointmentObject.appointmentTime)

  //console.log("this.appointmentObject.appointmentTime **"+JSON.stringify(this.appointmentObject.appointmentTime))

  //this.appointmentObject.dateOfBirth = new Date(this.appointmentObject.dateOfBirth)

  //this.appointmentObject.dateOfBirth =  moment(this.appointmentObject.dateOfBirth).format('DD-MMM-YYYY');

  this.appointmentObject.appointmentDate = this.datePipe.transform(this.appointmentObject.appointmentDate, 'yyyy-MM-dd')

  //this.openAddappointmentDialog()
  this.modalReference = this.modal.open(this.appointmentFormModal);
  
  

  //console.log("this.appointmentObject.appointmentDate **"+this.appointmentObject.appointmentDate)
  //this.userObject.userId = user._id
  //this.role = user.role

  
  
}
  pageChanged(event){
    //console.log("****** this.event   ===== **"+event)
    this.pageNo = event
    this.applyFilter()
  }
  userKindChange(){
    this.pageNo = 1
    
    this.applyFilter()
  }
  applyFilter() {
      
      this.fetchAppointments()
    
    
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
     // //console.log("****** this.normalFiltereduserListArr   ===== **"+JSON.stringify(this.normalFiltereduserListArr))

      this.loading = false;

    }, (err) => {
      this.loading = false;
      //console.log(err);
    });
  }
  


  fetchAppointmentsCount(){
  //  this.pageNo = 1
  //  this.pageSize = 10
    this.dataService.fetchAppointmentsCount().then((result) => {
        
        //console.log("****** fetchappointmentsCount result   ===== **"+JSON.stringify(result))
      this.totalDocRecords = result;
      //console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)

      this.loading = false;

    }, (err) => {
      this.loading = false;
      //console.log(err);
    });
  }
 

  fetchAppointments(){
  //  this.pageNo = 1
    //this.pageSize = 10
    let data = {pageNo:this.pageNo,perPage:this.pageSize}
    this.dataService.fetchAppointments(data).then((result:[]) => {
        
      this.normalFiltereduserListArr = [];  
        this.normalFiltereduserListArr = result.map(element => element)
        ////console.log("****** this.fetchAppointments   ===== **"+JSON.stringify(this.normalFiltereduserListArr))
        this.normalFiltereduserListArr.forEach(function(appointment, index){
          //console.log("****** active   ===== **"+ appointment.active)
        })
        
        this.loading = false;

    }, (err) => {
      this.loading = false;
      //console.log(err);
    });

  }
  
  updateStatus(value, userInfo) {
   // userInfo.active = value
  //  //console.log("****** userInfo   ===== **"+JSON.stringify(userInfo))
  let data ={}
  userInfo.active = !userInfo.active
  //console.log("******  userInfo.active   ===== **"+userInfo.active )
    
      userInfo.appointmentId = userInfo._id
      data['appointmentId'] = userInfo._id
      data['active'] = userInfo.active
      //console.log("****** userInfo   ===== **"+JSON.stringify(data))

          this.dataService.updateAppointment(data).then((result) => {
          //  //console.log("****** updateappointment result   ===== **"+JSON.stringify(result))
          this.fetchAppointments()
            this.loading = false;
      
        }, (err) => {
          this.loading = false;
          //console.log(err);
        });
    
    this.toastr.successToastr('Appointment record updated successfully');
  }

  
}
