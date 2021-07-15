import { Component, OnInit, NgZone, ViewChild, TemplateRef, ElementRef} from '@angular/core';

import { ToastrManager } from 'ng6-toastr-notifications';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import *  as moment from 'moment';
import { DataAccess } from 'src/app/services/data-access';
import { Config } from '../../config';


import { BaseComponent } from 'src/BaseComponent';
import { FormBuilder, FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  providers : [NgbModal]
})
export class LocationComponent extends BaseComponent implements OnInit {

  @ViewChild('fileInputDemoPhoto') fileInputDemoPhoto :ElementRef;;
  public loading:boolean = true;
  public closeResult: string;
  patientList:any = []
  states = Config.states
  locationList:any = []
  public defaultPagination: number;
  public advancedPagination: number;
  public paginationSize: number;
  public itemsPerPage : number;
  public disabledPagination: number;
  public isDisabled: boolean;
  public collectionSize: number;
  public currentPage: number;
  @ViewChild('acc') accordionComponent: NgbAccordion;
  public userKind:string="location"
  normalFiltereduserListArr:any = [];
  @ViewChild('content') content: TemplateRef<any>;   
   items = [];
   @ViewChild('locationFormModal') locationFormModal: TemplateRef<any>;
   pageOfItems: Array<any>;
  public pageSize = Config.RECORDSIZE;
  public pageNo = 1
  tempArray: any[] = [];
  totalDocRecords:any 
  locationFormGroup: FormGroup;
  totalPatientRecords:any
  customLocationtime : {
    hour: 10,
    minute: 20,

};
keywordDoctor = "name"
  locationObject =  
  {    
    active : true,   
    doctorID : "", 
    dateTime : [ 
      {
          date : "25-03-2020",
          time : "05:30 am"
      }
    ],    
    addByID : this.user['_id'],
    name : "",
    area : "",
    address : "",
    city : "",
    attendantID : "",
    state : "",
    nearByLocation : "",
    latitude : 22.604298,
    longitude : 88.421425,    
    slot : 3
  }
  doctorList:any  = []
  attendantList:any = []
  locationObjectBase =  
  {    
    active : true,   
    doctorID : "", 
    dateTime : [ 
      {
          date : "25-03-2020",
          time : "05:30 am"
      }
    ],    
    addByID : this.user['_id'],
    name : "",
    area : "",
    address : "",
    city : "",
    attendantID : "",
    state : "",
    nearByLocation : "",
    latitude : 22.604298,
    longitude : 88.421425,    
    slot : 3
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
  //  this.customLocationtime.hour = 9
   // this.customLocationtime.minute = 10

    if(!this.user.role.doctor.location.view){
      return
    }
   
    this.locationFormGroup = _fb.group({
      doctorID: new FormControl(this.locationObject.doctorID, Validators.required),
      doctorName: new FormControl(''),
      attendantID: new FormControl(this.locationObject.attendantID, Validators.required),
      name: new FormControl(this.locationObject.name, Validators.required),
      city: new FormControl(this.locationObject.city, Validators.required),
      area: new FormControl(this.locationObject.area),
      nearByLocation: new FormControl(this.locationObject.nearByLocation),
      address: new FormControl(this.locationObject.address, Validators.required),
      state: new FormControl(this.locationObject.state, Validators.required),
      slot: new FormControl(this.locationObject.slot)  ,    
      dateTimeitems: this._fb.array([ this.createdateTimeItem() ])
    });

    //this.locationFormGroup.valueChanges.subscribe(data => console.log('form changes', data));
    this.loading = false;    
    this.fetchLocations()   
    
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
  getLocation(){

  }
  addItem(): void {
    this.dateTimeitems = this.locationFormGroup.get('dateTimeitems') as FormArray;
    this.dateTimeitems.push(this.createdateTimeItem());
  }

  getControls() {
    return (this.locationFormGroup.get('dateTimeitems') as FormArray).controls;
  }

  removeItem(i){

     this.dateTimeitems = this.locationFormGroup.get('dateTimeitems') as FormArray;
    this.dateTimeitems.removeAt(i)  

  }

  doctorSelectEvent(item) {
    if(item){
    this.locationFormGroup.get('doctorID').patchValue(item['_id']);
    this.locationObject.doctorID = item['_id']

    this.dataService.fetchAttendantList({doctorID:this.locationObject.doctorID}).then((result:[]) => {
      this.attendantList = result.map(element => element)
    }, (err) => {
        //console.log(err);
    });

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
  openAddLocationDialog(){
    this.mode = "add"
    this.locationFormGroup = this._fb.group({
      doctorID: new FormControl(this.locationObject.doctorID, Validators.required),
      doctorName: new FormControl(''),
      attendantID: new FormControl(this.locationObject.attendantID, Validators.required),
      name: new FormControl(this.locationObject.name, Validators.required),
      city: new FormControl(this.locationObject.city, Validators.required),
      area: new FormControl(this.locationObject.area),
      nearByLocation: new FormControl(this.locationObject.nearByLocation),
      address: new FormControl(this.locationObject.address, Validators.required),
      state: new FormControl(this.locationObject.state, Validators.required),
      slot: new FormControl(this.locationObject.slot)  ,    
      dateTimeitems: this._fb.array([ this.createdateTimeItem() ])
    });
    this.dateTimeitems = this.locationFormGroup.get('dateTimeitems') as FormArray;
   // 
    //this.dateTimeitems.push({})
    this.locationObject = Object.assign({}, this.locationObjectBase); 
    this.modalReference = this.modal.open(this.locationFormModal);
  }
  getPatient(){

  }
 
  ngOnInit(){


    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(["/login"]);
    }

  

    //this.pageSize = Config.RECORDSIZE;
    //this.pageNo = 1
    this.fetchLocationsCount()  
    this.fetchLocations()    
    
 //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
  };
  save(){
//alert("mode: "+this.mode)
   

    if(!this.locationFormGroup.valid){
        this.submitAttempt = true;        
        this.validateFields(this.locationFormGroup.controls)                   
        return; 
    } 

    this.locationObject.addByID = this.user['_id']

   let dateTime = []
    for(var i = 0 ; i< this.dateTimeitems.length ; i++){      
      let formObject = this.dateTimeitems.at(i)      

       // if(formObject && formObject.get('time').value != undefined && formObject.get('date').value != undefined ){
            
            console.log("time before conversion**"+JSON.stringify(formObject.get('time').value)) 
            let time = this.convertTimeFormogo(formObject.get('time').value)
            console.log("time after conversion **"+time) 

            console.log(" date before conversion **"+JSON.stringify(formObject.get('date').value)) 

          let convertDate = this.fromJsDateToLocationdateTimeFormat(formObject.get('date').value)
          console.log("convertDate **"+convertDate)             
          dateTime.push({date:convertDate,time:time})
       // }
   
  }

    this.locationObject.dateTime = dateTime
    if(this.mode == "add"){
      delete this.locationObject['doctor']
      console.log("this.locationObject for add == "+JSON.stringify(this.locationObject))
      this.dataService.addLocation(this.locationObject).then((result) => {                
        //  console.log("result after adduser == "+JSON.stringify(result))
          this.fetchLocations()
          this.mode = "add"
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('New location is added successfully');
          
      }, (err) => {        
      console.log(err);
      });
      
    }if(this.mode == "edit"){
      //delete this.locationObject['patient']
      delete this.locationObject['doctor']
      this.locationObject['practiceLocationId'] = this.locationObject['_id']
      console.log("this.locationObject for edit == "+JSON.stringify(this.locationObject))
      this.dataService.updateLocation(this.locationObject).then((result) => {
        //  console.log("****** updatelocation result   ===== **"+JSON.stringify(result))
          //this.loading = false;
          this.mode = "add"   
          this.fetchLocations()
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('location is updated successfully'); 
      }, (err) => {
        this.mode = "add"
        //this.loading = false;
        console.log(err);
      });
      
    }
    
}
async openForeditLocation(user){

  
  this.locationObject = Object.assign({}, user); 

  //console.log("dateTimeArray LENGTH **"+dateTimeArray.length)


  this.locationFormGroup = this._fb.group({
    doctorID: new FormControl(this.locationObject.doctorID, Validators.required),
    doctorName: new FormControl(''),
    attendantID: new FormControl(this.locationObject.attendantID, Validators.required),
    name: new FormControl(this.locationObject.name, Validators.required),
    city: new FormControl(this.locationObject.city, Validators.required),
    area: new FormControl(this.locationObject.area),
    nearByLocation: new FormControl(this.locationObject.nearByLocation),
    address: new FormControl(this.locationObject.address, Validators.required),
    state: new FormControl(this.locationObject.state, Validators.required),
    slot: new FormControl(this.locationObject.slot)  ,    
    dateTimeitems: this._fb.array([ this.createdateTimeItem() ])
  });


  console.log("this.locationObject =="+JSON.stringify(this.locationObject))
  let dateTimeArray = []
  this.dateTimeitems = this.locationFormGroup.get('dateTimeitems') as FormArray;
    this.dateTimeitems.removeAt(0)  
  for(var i in this.locationObject.dateTime){
      let dateTime = this.locationObject.dateTime[i]
      let time = this.backTONgTImeFOrmat(dateTime.time)
      console.log("time **"+JSON.stringify(time)) 
      let convertDate = this.convertFromddmmyyy(dateTime.date)
      console.log("convertDate **"+convertDate) 
      let date = this.datePipe.transform( convertDate, 'yyyy-MM-dd')
      dateTimeArray.push({date:date,time:time})
    //this.dateTimeitems.push({date:date,time:time})
    
    this.dateTimeitems.push(this._fb.group({
      date: date,
      time: time
    }))
  }

  console.log("dateTimeArray LENGTH **"+dateTimeArray.length)
  let earlierAttendent = this.locationObject.attendantID
  this.doctorName = await this.fetchDoctrById(this.locationObject.doctorID)

  this.dataService.fetchAttendantList({doctorID:this.locationObject.doctorID}).then((result:[]) => {
    this.attendantList = result.map(element => element)
  }, (err) => {
      //console.log(err);
  });

  //this.locationObject.attendantID = earlierAttendent

  //this.locationFormGroup.get('dateTimeitems').patchValue(dateTimeArray)
  //addItem

  this.mode = "edit"
  this.modalReference = this.modal.open(this.locationFormModal);

  //this.userObject.userId = user._id
  //this.role = user.role

  
  
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
      
      this.fetchLocations()
    
    
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
  


  fetchLocationsCount(){
  //  this.pageNo = 1
  //  this.pageSize = 10
    this.dataService.fetchLocationsCount().then((result) => {
        
        console.log("****** fetchlocationsCount result   ===== **"+JSON.stringify(result))
      this.totalDocRecords = result;
      console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)

      this.loading = false;

    }, (err) => {
      this.loading = false;
      console.log(err);
    });
  }
 

  fetchLocations(){
  //  this.pageNo = 1
    //this.pageSize = 10
    let data = {pageNo:this.pageNo,perPage:this.pageSize}
    this.dataService.fetchLocations(data).then((result:[]) => {
        
      this.normalFiltereduserListArr = [];  
        this.normalFiltereduserListArr = result.map(element => element)
        //console.log("****** this.fetchLocations   ===== **"+JSON.stringify(this.normalFiltereduserListArr))
        this.normalFiltereduserListArr.forEach(function(location, index){
          console.log("****** active   ===== **"+ location.active)
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
    
      userInfo.locationId = userInfo._id
      data['locationId'] = userInfo._id
      data['active'] = userInfo.active
      console.log("****** userInfo   ===== **"+JSON.stringify(data))

          this.dataService.updateLocation(data).then((result) => {
          //  console.log("****** updatelocation result   ===== **"+JSON.stringify(result))
          this.fetchLocations()
            this.loading = false;
      
        }, (err) => {
          this.loading = false;
          console.log(err);
        });
    
    this.toastr.successToastr('Location record updated successfully');
  }

  
}
