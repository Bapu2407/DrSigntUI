import { Component, OnInit,  ViewChild, TemplateRef, ElementRef} from '@angular/core';

import { ToastrManager } from 'ng6-toastr-notifications';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { Router,ActivatedRoute } from '@angular/router';
import *  as moment from 'moment';

import { Config } from '../../config';



import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BaseComponent } from 'src/BaseComponent';
import { DataAccess } from 'src/app/services/data-access';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers : [NgbModal]
})
export class CategoryComponent extends BaseComponent implements OnInit {

  
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
  
  public userKind:string="category"
  normalFiltereduserListArr:any = [];
  @ViewChild('content') content: TemplateRef<any>;   
   items = [];
   @ViewChild('categoryFormModal') categoryFormModal: TemplateRef<any>;
   pageOfItems: Array<any>;
  public pageSize = Config.RECORDSIZE;
  public pageNo = 1
  tempArray: any[] = [];
  totalDocRecords:any 
  
  categoryFormGroup: FormGroup;
  totalPatientRecords:any
  fromOrderPage:boolean = false
  sexList = ["Male","Female"]
  oldEmail:string
     categoryObject = {
    catValue:"",
      spclAttribute:"",      
      active:true      
        
    }
    categoryObjectBase = {
      catValue:"",
      spclAttribute:"",      
      active:true      
        
        
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

    if(!this.user.role.doctor.category.view){
      return
    }
    this.oldEmail = ''

    this.categoryFormGroup = _fb.group({
      catValue: new FormControl(this.categoryObject.catValue, Validators.required),
      active: new FormControl(this.categoryObject.active),            
      spclAttribute: new FormControl(this.categoryObject.spclAttribute),
      
    });

    this.loading = false;    
    this.fetchCategorys()   
   
  }
  ngAfterViewInit(){
    if(this.fromOrderPage){
      this.openAddCategoryDialog()
    }
   
  }
  
  openAddCategoryDialog(){
    this.mode = "add"
    this.categoryObject =Object.assign({}, this.categoryObjectBase); 
    this.modalReference = this.modal.open(this.categoryFormModal);
  }
  ngOnInit(){

    

    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(["/login"]);
    }

  

    //this.pageSize = Config.RECORDSIZE;
    //this.pageNo = 1
    this.fetchCategorysCount()      
    
 //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
  };

  save(){
//alert("mode: "+this.mode)
    

    if(!this.categoryFormGroup.valid){
        this.submitAttempt = true;        
        this.validateFields(this.categoryFormGroup.controls)                   
        return; 
    } 
    

    
    if(this.mode == "add"){
      console.log("this.categoryObject for add == "+JSON.stringify(this.categoryObject))
      this.dataService.addCategory(this.categoryObject).then((result) => {                
        //  console.log("result after adduser == "+JSON.stringify(result))
          this.fetchCategorys()
          this.mode = "add"
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('New Category is added successfully');
      }, (err) => {        
      console.log(err);
      });
    }if(this.mode == "edit"){
      this.categoryObject['categoryId'] = this.categoryObject['_id']
      console.log("this.categoryObject for edit == "+JSON.stringify(this.categoryObject))
      this.dataService.updateCategory(this.categoryObject).then((result) => {
        //  console.log("****** updateCategory result   ===== **"+JSON.stringify(result))
          //this.loading = false;
          this.mode = "add"   
          this.fetchCategorys()
          this.closeModal()
          this.form_fill_failure_msg = ""
          this.toastr.successToastr('Category is updated successfully'); 
      }, (err) => {
        this.mode = "add"
        //this.loading = false;
        console.log(err);
      });
    }
    
}
openForeditCategory(user){

  this.oldEmail = user['emailId']
  this.categoryObject = Object.assign({}, user); 

  

  //this.openAddCategoryDialog()
  this.mode = "edit"
  this.modalReference = this.modal.open(this.categoryFormModal);

  //console.log("this.categoryObject.dateOfBirth **"+this.categoryObject.dateOfBirth)
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
      
    
               
    if( this.userKind && this.userKind=="category")  {      
      this.fetchCategorys()
    }
 
   
    
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    this.pageNo = 1

}
  

  fetchCategorysCount(){
  //  this.pageNo = 1
  //  this.pageSize = 10
    this.dataService.fetchCategorysCount().then((result) => {
        
        console.log("****** fetchCategorysCount result   ===== **"+JSON.stringify(result))
      this.totalDocRecords = result;
      console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)

      this.loading = false;

    }, (err) => {
      this.loading = false;
      console.log(err);
    });
  }
  

  fetchCategorys(){
  //  this.pageNo = 1
    //this.pageSize = 10
    let data = {pageNo:this.pageNo,perPage:this.pageSize}
    this.dataService.fetchCategorys(data).then((result:[]) => {
        
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
    if( this.userKind && this.userKind=="category")  {    
      userInfo.categoryId = userInfo._id
      data['categoryId'] = userInfo._id
      data['active'] = userInfo.active
      console.log("****** userInfo   ===== **"+JSON.stringify(data))

          this.dataService.updateCategory(data).then((result) => {
          //  console.log("****** updateCategory result   ===== **"+JSON.stringify(result))

            this.loading = false;
      
        }, (err) => {
          this.loading = false;
          console.log(err);
        });
    }
 
  }

  
}