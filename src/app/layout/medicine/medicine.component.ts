import { Component, OnInit,  ViewChild, TemplateRef, ElementRef} from '@angular/core';

import { ToastrManager } from 'ng6-toastr-notifications';
//import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Router,ActivatedRoute } from '@angular/router';
import *  as moment from 'moment';

import { Config } from '../../config';

import * as XLSX from 'xlsx';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { BaseComponent } from 'src/BaseComponent';
import { DataAccess } from 'src/app/services/data-access';
//import { timeStamp } from 'console';
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
  //providers : [NgbModal]
})
export class MedicineComponent extends BaseComponent implements OnInit {

  loadingCustomeMsg:any = "Excel Data Reading In Progress, Please Wait."
  @ViewChild('emptycellValuesAlert') emptycellValuesAlert: TemplateRef<any>;
  @ViewChild('searFiltersModal') searFiltersModal: TemplateRef<any>;
  notYetDoneMapping:boolean = true
  public loading:boolean = true;
  public closeResult: string;
  public defaultPagination: number;
  public advancedPagination: number;
  public paginationSize: number;
  public itemsPerPage : number;
  medicineNameSearch:any
  medicineIDSearch:any
  modalSearchFilerReference: NgbModalRef;
  public disabledPagination: number;
  public isDisabled: boolean;
  public collectionSize: number;
  public currentPage: number;
  public exceltoJson:any = {}
  public excelheader:any = []
  public excelheaderMapping:any = []
  public dataArray:any = []
  public userKind:string="medicine"
  normalFiltereduserListArr:any = [];
  @ViewChild('content') content: TemplateRef<any>;   
   items = [];
   @ViewChild('medicineFormModal') medicineFormModal: TemplateRef<any>;
   @ViewChild('mymodal') mymodal: TemplateRef<any>;
   keywordMedicine = "name"
   
  medicineArray:any = [[{
    medicineId: '',             
    medicineName : "",
    quantity : "",
    mg: '',
    mrp:"",      
    active:true,      
    "b2bPrice" : "",
    "gst" : "0",
    "hsnCode" : "0",
    "vat" : "0",
    "otherTax" : "0",
    "discounts" : "0",
    "medicineType" : "",      
    "category" : ""
            
  }]]
   searchByMedicineName:boolean = true
   allDynaFilter = null
   pageOfItems: Array<any>;
  public pageSize = Config.RECORDSIZE;
  public pageNo = 1
  tempArray: any[] = [];
  totalMedicineRecords:any 
  medicineFormGroup: FormGroup;
  errorText:any = ''
  xcelFuntionOn:boolean = false  
  oldEmail:string
  catList:any = []
  fieldMapValue:any
  predefineHeader:any  = Config.xcelPredefinedHeaders
  bulkMedicineObject:any = []
  medicineObject = {
      name:"",
      mrp:"",      
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
    modalOptions:NgbModalOptions;
    medicineObjectBase = {
      name:"",
      mrp:"",      
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
  constructor(
    private datePipe : DatePipe,
    public router: Router,
    private route: ActivatedRoute,
    private modal: NgbModal,
    public toastr: ToastrManager,
    private _fb: FormBuilder,    
    public dataService: DataAccess,
    
    
    
  ) {
    super(router)
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }

    console.log("Todays date in mongoformat "+moment(new Date()).format('YYYY-MM-DD'))
    if(!this.user.role.doctor.medicine.view){
      return
    }
    this.oldEmail = ''
    this.predefineHeader = [] 
    this.predefineHeader = Config.xcelPredefinedHeaders

    console.log("predefineHeader == "+JSON.stringify(this.predefineHeader))

    this.medicineFormGroup = _fb.group({
      name: new FormControl(this.medicineObject.name, Validators.required),
      mrp: new FormControl(this.medicineObject.mrp, Validators.required),      
      b2bPrice: new FormControl(this.medicineObject.b2bPrice, Validators.required),      
      active: new FormControl(this.medicineObject.active),      
      gst: new FormControl(this.medicineObject.gst, Validators.required),
     // vat: new FormControl(this.medicineObject.otherTax),
      hsnCode: new FormControl(this.medicineObject.hsnCode, Validators.required),
     
      otherTax: new FormControl(this.medicineObject.otherTax),
      discounts: new FormControl(this.medicineObject.discounts, Validators.required),   
      medicineType: new FormControl(this.medicineObject.medicineType, Validators.required),
      category: new FormControl(this.medicineObject.category)
    });

    //this.medicineFormGroup.valueChanges.subscribe(data => console.log('form changes', data));
    //this.fromOrderPage = this.route.snapshot.paramMap.get('fromOrderPage') =='fromOrderPage';
    this.loading = false;    
  //  this.fetchMedicines()   
   
  }

  closeSearchModal(){
    //if(this.modalSearchFilerReference)
    //this.modalSearchFilerReference.close();
    if(this.modalSearchFilerReference)
    this.modalSearchFilerReference.dismiss()
  }
  medicineSelectEvent(item) {
    if(item){
    //this.orderFormGroup.get('medicineID').patchValue(item['_id']);
   // this.orderObject.medicineList[i].medicineId = item['_id']
   try{
   
   this.medicineIDSearch =  item['_id']
    
   console.log(" inside this.medicineIDSearch "+JSON.stringify(item))
    } catch(e){
     console.log(e)
   }
    }
    // do something with selected item
  }
 
  doctorMedcineSearch(val: string) {
    console.log(" inside onChangePatientSearch val "+val)

   // console.log(" component count "+ i)

   // if(val && val.length >2 ){
    let data = {name:val}

    //let medicineArray = []
    this.dataService.fetchAllMedicines(data).then((result:[]) => {
      this.medicineArray = result.map(element => element)
      //this.medicineArray[i] = medicineArray
      //this.medicineArray = medicineArray.map(element => element)
    //  console.log("this.medicineArray=="+JSON.stringify(this.medicineArray[i]))
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

  open(content) {
    this.modal.open(this.mymodal, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  enableSearchByMedicine(){
    this.searchByMedicineName = !this.searchByMedicineName
  }

  
  fetchMedicinesByFilterCount(){
   
  
     let data = {pageNo:this.pageNo,perPage:this.pageSize,filter : this.allDynaFilter}
     // this.fetchMedicinesCount({filter : allDynaFilter})  
      //this.fetchMedicinesByFilters({filter : allDynaFilter})   
      console.log(" inside data "+JSON.stringify(data))
    
      this.dataService.fetchMedicinesByFilterCount(data).then((result) => {
            
        console.log("****** fetchordersCount result   ===== **"+JSON.stringify(result))
      this.totalMedicineRecords = result;
      this.loading = false;
  
      console.log("****** this.totalDocRecords ===== **"+this.totalMedicineRecords)
    
    }, (err) => {
      this.loading = false;
      console.log(err);
    });
    }
   
  fetchMedicinesByFilters(){
      let data = {pageNo:this.pageNo,perPage:this.pageSize,filter : this.allDynaFilter}
      this.dataService.fetchMedicinesByFilters(data).then((result:any) => {        
      this.normalFiltereduserListArr = []; 
     
      for(var i in result){
        let orderObj = result[i]
         this.normalFiltereduserListArr.push(orderObj)
      }
        this.loading = false;
  
    }, (err) => {
      this.normalFiltereduserListArr = []; 
      this.loading = false;
      console.log(err);
    });
    }
    
  reinitialise(){

    try{
    this.searchByMedicineName = true
  
    this.allDynaFilter = null
    this.fetchMedicinesCount()
    this.totalMedicineRecords = 0
    this.fetchMedicines()
    }catch(e){
      console.log(e)
    }
  }
  reset(){
    this.reinitialise()
    this.toastr.successToastr('Filters reset, order list refreshed');
  }
 
searchByFilters(){
  let dynaFilterArry = []
  let dynaFilter = {}
 // let allDynaFilter = {}
  
  if(this.searchByMedicineName && this.medicineIDSearch){
    //dynaFilter['customerId'] = this.customerId   
    dynaFilterArry.push({medicineIDSearch:this.medicineIDSearch }) 
  }
 
  this.allDynaFilter = {$and:dynaFilterArry} 
  
  
  this.fetchMedicinesByFilterCount()  
  this.fetchMedicinesByFilters()     
  

  this.closeSearchModal()
  this.toastr.successToastr('Searching Done');
          

  
}
  EanbleImportButton(){

    this.loading = true
    try{
    
      if(this.excelheaderMapping.length == 0){
        alert(" No Mapping Done Yet! Please Finish The Field Mapping First.")
        this.loading = false
        return
      }

      let checkIfMandatoryFieldsWereMapped:any = []
      for (let j = 0; j < this.excelheaderMapping.length; j++) {
        var fieldMappingObj = this.excelheaderMapping[j]
        checkIfMandatoryFieldsWereMapped.push(fieldMappingObj['fieldMapValue'])
      }

      console.log("this.checkIfMandatoryFieldsWereMapped == "+JSON.stringify(checkIfMandatoryFieldsWereMapped))

      if(checkIfMandatoryFieldsWereMapped && checkIfMandatoryFieldsWereMapped.length > 0 
        && ( !checkIfMandatoryFieldsWereMapped.includes("name")
        || !checkIfMandatoryFieldsWereMapped.includes("mrp")
      //  || !checkIfMandatoryFieldsWereMapped.includes("b2bPrice")
       // || !checkIfMandatoryFieldsWereMapped.includes("gst")
        || !checkIfMandatoryFieldsWereMapped.includes("hsnCode"))
        ){
          alert("The Field mapping For All These Mandatory Fields Have to be Done First Including NAME, MRP,B2B Price,GST and HSN CODE")
          this.loading = false
          return
      }

      console.log("this.dataArray == "+JSON.stringify(this.dataArray))
      setTimeout(() => {
        
  
    //for(var i in this.dataArray){
      for (let i = 0; i < this.dataArray.length; i++) {
      let rowData = this.dataArray[i]          
      //console.log("header == "+rowData[header['xFileHeaderName']])
      let actualDataObj = {}
      let errorText = ''
      //for(var j in this.excelheaderMapping){
        for (let j = 0; j < this.excelheaderMapping.length; j++) {
        var fieldMappingObj = this.excelheaderMapping[j]
        
     /*   if(rowData[fieldMappingObj['xFileHeaderName']] == undefined){
          rowData[fieldMappingObj['xFileHeaderName']] = ''
        }*/
       // if(rowData[fieldMappingObj['xFileHeaderName']]){
         
        console.log("fieldMappingObj['fieldMapValue'] == "+fieldMappingObj['fieldMapValue'])
        

              actualDataObj[fieldMappingObj['fieldMapValue']] = rowData[fieldMappingObj['xFileHeaderName']]
            
              console.log("rowData[fieldMappingObj['xFileHeaderName']]== "+rowData[fieldMappingObj['xFileHeaderName']])
        

              if(
              (fieldMappingObj['fieldMapValue'] == "name"
              || fieldMappingObj['fieldMapValue'] == "mrp"
              || fieldMappingObj['fieldMapValue'] == "b2bPrice"
              || fieldMappingObj['fieldMapValue'] == "gst"
              || fieldMappingObj['fieldMapValue'] == "hsnCode"
              ) && ( actualDataObj[fieldMappingObj['fieldMapValue']] == undefined
              || (actualDataObj[fieldMappingObj['fieldMapValue']] && actualDataObj[fieldMappingObj['fieldMapValue']] ==''))){

                console.log("actualDataObj[fieldMappingObj['fieldMapValue']] == "+actualDataObj[fieldMappingObj['fieldMapValue']])

                console.log("fieldMappingObj['fieldMapValue'] == "+fieldMappingObj['fieldMapValue'])
        
                  errorText = errorText + ", Row "+(i+1)+" has no value for "+ fieldMappingObj['fieldMapValue']
              }
             console.log("actualDataObj == "+JSON.stringify(actualDataObj)) 
       // }
      }

      //this.bulkMedicineObject.push(actualDataObj)
      if(errorText == ''){
        actualDataObj['active'] = true

        actualDataObj['createdDate'] = moment(new Date()).format('DD-MM-YYYY');

        

        this.bulkMedicineObject.push(actualDataObj)
      }else{
        this.errorText = this.errorText + errorText
      }
      console.log("this.errorText == "+this.errorText) 

      console.log("bulkMedicineObject == "+JSON.stringify(this.bulkMedicineObject))
    }
    if(this.errorText ){
      this.fielMappingModalReference =  this.modal.open(this.emptycellValuesAlert);
     }else{
       this.loading = false
       this.forceImport()
     }   
  }, 1000);

    console.log("AFTER FOR LOOPS")
    

    console.log("AFTER FOR LOOPS  222222")

   // setTimeout(() => {
     
  //}, 3000);

   

    console.log("bulkMedicineObject == "+JSON.stringify(this.bulkMedicineObject))

    } catch (err) {

      console.log(err)
    }
  }

  closeFieldMappingErrorDialog(){
    this.errorText = ''
    this.bulkMedicineObject = []
    
    if(this.fielMappingModalReference)
    this.fielMappingModalReference.close();
    this.openMedicinePage()
  }
  StartImport(){
   // this.errorText = ''

   this.loading = true
   this.loadingCustomeMsg = "Bulk Medicine Import Is In Progress, Please Wait."
   this.dataService.insertBulkMedicine(this.bulkMedicineObject).then((result) => {                
     //  console.log("result after adduser == "+JSON.stringify(result))
       this.fetchMedicines()
       this.mode = "add"
       this.closeModal()
       this.loading = false
       this.form_fill_failure_msg = ""
       this.toastr.successToastr("Bulk Medicine Import Has Succeeded...")//result['message']);

       setTimeout(() => {
        this.openMedicinePage()
      }, 2000);

   }, (err) => {        
     this.loading = false

     this.toastr.successToastr("Bulk Medicine Import has failed..")//err['message']);
       console.log(err);
   });

  }
  forceImport(){

    alert("Please click on the button at the bottom to Start with the Import")
    this.notYetDoneMapping = false
    //this.closeFieldMappingErrorDialog()
    this.errorText = ''   
    
    if(this.fielMappingModalReference)
    this.fielMappingModalReference.close();
  }

  onChangeFielMap(header){

    console.log("inside changed value dropdown")
    
   // let predefineHeaderNameValue = this.fieldMapValue

    console.log("header == "+JSON.stringify(header))

    //if(this.excelheaderMapping.length ==0){
     // this.excelheaderMapping.push(header)
   // }
    if(this.excelheaderMapping.length > 0){
      for(var j in this.excelheaderMapping){
        let headerMapping = this.excelheaderMapping[j]          
        //console.log("header == "+rowData[header['xFileHeaderName']])
        if(headerMapping['xFileHeaderName'] == header['xFileHeaderName']){

          console.log("headerMapping xFileHeaderName == "+headerMapping['xFileHeaderName'])
          console.log("header  xFileHeaderName == "+header['xFileHeaderName'])
          this.excelheaderMapping.splice(j,1)
          

        }
       // this.bulkMedicineObject.push()
      }
    }
    this.excelheaderMapping.push(header)

    console.log("excelheaderMapping == "+JSON.stringify(this.excelheaderMapping))
  }
  
  /*
  ngAfterViewInit(){
    if(this.fromOrderPage){
      this.openAddMedicineDialog()
    }
   
  }
  */
 openXcelFunctions(){
   this.xcelFuntionOn = true
 }
 captureXcelFile(event){

  this.bulkMedicineObject = []
 
  this.excelheader = []
  this.errorText = ''
  this.notYetDoneMapping = true
  this.excelheaderMapping = []
   let exceltoJson = {};
   let headerJson = {};
   /* wire up file reader */
   const target: DataTransfer = <DataTransfer>(event.target);
   // if (target.files.length !== 1) {
   //   throw new Error('Cannot use multiple files');
   // }
   const reader: FileReader = new FileReader();
   reader.readAsBinaryString(target.files[0]);
   console.log("filename", target.files[0].name);
   exceltoJson['filename'] = target.files[0].name;
   reader.onload = (e: any) => {
     /* create workbook */
     const binarystr: string = e.target.result;
     const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

     console.log("wb.SheetNames.length", wb.SheetNames.length);

    // for (var i = 0; i < wb.SheetNames.length; ++i) {
       const wsname: string = wb.SheetNames[0];

       console.log("wsname", wsname);

       const ws: XLSX.WorkSheet = wb.Sheets[wsname];
       const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
       //exceltoJson[`sheet${i + 1}`] = data;
       exceltoJson[`sheet${1}`] = data;

       this.dataArray = data
       const headers = this.get_header_row(ws);
       headerJson[`header${1}`] = headers;
       //  console.log("json",headers)
    // }
     exceltoJson['headers'] = headerJson;
     
     this.exceltoJson = exceltoJson

     for(var i in headerJson['header1']){
      let header = headerJson['header1'][i]
      this.excelheader.push({"xFileHeaderName":header,fieldMapValue:"somevalue"})

     }


     //console.log("exceltoJson =="+JSON.stringify(exceltoJson));
    // console.log("this.excelheader =="+JSON.stringify(this.excelheader));
   };
  }
  get_header_row(sheet) {
    var headers = [];
    var range = XLSX.utils.decode_range(sheet['!ref']);
    var C, R = range.s.r; /* start in the first row */
    /* walk every column in the range */
    for (C = range.s.c; C <= range.e.c; ++C) {
      var cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })] /* find the cell in the first row */
      // console.log("cell",cell)
      var hdr = "UNKNOWN " + C; // <-- replace with your desired default 
      if (cell && cell.t) {
        hdr = XLSX.utils.format_cell(cell);
        headers.push(hdr);
      }
    }
    return headers;
  }
 openMedicinePage(){

  this.fetchMedicinesCount()
  this.fetchMedicines()   
  this.excelheader = []
  this.excelheaderMapping = []
  
  this.notYetDoneMapping = true
  this.xcelFuntionOn = false
 }
  openOrderPage(medicineObj){
    console.log("medicineObj =="+JSON.stringify(medicineObj))
    //this.router.navigate(["/order",{medicine:{name:medicineObj.name,medicineId:medicineObj._id}}]);
    this.router.navigate(["/order",{name:medicineObj.name,medicineId:medicineObj._id,fromMedicinePage:'fromMedicinePage'}]);
  }
  openAddMedicineDialog(){
    this.mode = "add"
    this.medicineObject =Object.assign({}, this.medicineObjectBase); 
    this.modalReference = this.modal.open(this.medicineFormModal);
/*
    this.modal.open(this.medicineFormModal, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
*/
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit(){

    

    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(["/login"]);
    }

  

    //this.pageSize = Config.RECORDSIZE;
    //this.pageNo = 1
    this.fetchMedicinesCount()      
    this.fetchMedicines()

    this.fetMedicineCategories()
    
 //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
  };

  save(){
//alert("mode: "+this.mode)
    
    if(!this.medicineFormGroup.valid){
        this.submitAttempt = true;        
        this.validateFields(this.medicineFormGroup.controls)                   
        return; 
    } 
    

    
    if(this.mode == "add"){
      console.log("this.medicineObject for add == "+JSON.stringify(this.medicineObject))
      this.dataService.addMedicine(this.medicineObject).then((result) => {                
        //  console.log("result after adduser == "+JSON.stringify(result))
          this.fetchMedicines()
          this.mode = "add"
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('New Medicine is added successfully');
      }, (err) => {        
      console.log(err);
      });
    }if(this.mode == "edit"){
      this.medicineObject['medicineId'] = this.medicineObject['_id']
      console.log("this.medicineObject for edit == "+JSON.stringify(this.medicineObject))
      this.dataService.updateMedicine(this.medicineObject).then((result) => {
        //  console.log("****** updateMedicine result   ===== **"+JSON.stringify(result))
          //this.loading = false;
          this.mode = "add"   
          this.fetchMedicines()
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('Medicine is updated successfully'); 
      }, (err) => {
        this.mode = "add"
        //this.loading = false;
        console.log(err);
      });
    }
    
}
openForeditMedicine(user){

  this.oldEmail = user['emailId']
  this.medicineObject = Object.assign({}, user); 

  

  //this.openAddMedicineDialog()
  this.mode = "edit"
  this.modalReference = this.modal.open(this.medicineFormModal);

  //console.log("this.medicineObject.dateOfBirth **"+this.medicineObject.dateOfBirth)
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
      
    
               
    if( this.userKind && this.userKind=="medicine")  {      
      this.fetchMedicines()
    }
 
   
    
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    this.pageNo = 1

}
  
fetMedicineCategories(){
  //  this.pageNo = 1
    //this.pageSize = 10
    
    this.dataService.fetchMedicineCategory().then((result:[]) => {
        
      this.catList = [];      

        this.catList = result.map(element => element)
       // console.log("****** this.catList   ===== **"+JSON.stringify(this.catList))
       

    }, (err) => {
      this.loading = false;
      console.log(err);
    });

  }

  fetchMedicinesCount(){
  //  this.pageNo = 1
  //  this.pageSize = 10
    this.dataService.fetchMedicinesCount().then((result) => {
        
        console.log("****** fetchMedicinesCount result   ===== **"+JSON.stringify(result))
      this.totalMedicineRecords = result;
      console.log("****** this.totalDocRecords ===== **"+this.totalMedicineRecords)

      this.loading = false;

    }, (err) => {
      this.loading = false;
      console.log(err);
    });
  }
  

  fetchMedicines(){
  //  this.pageNo = 1
    //this.pageSize = 10
    let data = {pageNo:this.pageNo,perPage:this.pageSize}
    this.dataService.fetchMedicines(data).then((result:[]) => {
        
      this.normalFiltereduserListArr = [];      

        this.normalFiltereduserListArr = result.map(element => element)
        console.log("****** this.normalFiltereduserListArr   ===== **"+JSON.stringify(this.normalFiltereduserListArr))

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
    if( this.userKind && this.userKind=="medicine")  {    
      userInfo.medicineId = userInfo._id
      data['medicineId'] = userInfo._id
      data['active'] = userInfo.active
      console.log("****** userInfo   ===== **"+JSON.stringify(data))

          this.dataService.updateMedicine(data).then((result) => {
          //  console.log("****** updateMedicine result   ===== **"+JSON.stringify(result))

            this.loading = false;
      
        }, (err) => {
          this.loading = false;
          console.log(err);
        });
    }
 
  }

  
}