import { Component, OnInit, Input, NgZone, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { routerTransition } from '../../router.animations';
import *  as moment from 'moment';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { HttpClient } from  '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataAccess } from 'src/app/services/data-access';
import { BaseComponent } from 'src/BaseComponent';

@Component({
    selector: 'app-usercreateaccessright',
    templateUrl: './usercreateaccessright.component.html',
    styleUrls: ['./usercreateaccessright.component.scss'],
    animations: [routerTransition()],
    providers: [NgbModal]
})
export class UsercreationAccessRightComponent extends BaseComponent implements OnInit {
    user1 = false
  
    normalFiltereduserListArr:any = [];    
    //form_fill_failure_msg:string
    userGroup: FormGroup;
    

    role:any ={
       doctor: { 
            user : {
              create:true,view:true,edit:true
            },
            doctor: {
              create:true,view:true,edit:true
            },
            appointment: {
              create:false,view:false,edit:false,statuschange:false
            },
            invoice: {
              create:false,view:false,edit:false
            },
            location:{
              create:false,view:false,edit:false
            },
            customer:{
              create:false,view:false,edit:false
            },
            order:{
              create:false,view:false,edit:false
            },            
            medicine:{
              create:false,view:false,edit:false
            },
            category:{
              create:false,view:false,edit:false
            },
            delivery:{
              create:false,view:false,edit:false
            },
            charges:{
              create:false,view:false,edit:false
            } ,
            discount:{
              create:false,view:false,edit:false
            } ,
            coupon:{
              create:false,view:false,edit:false
            } ,
            invoicecrm:{
              create:false,view:false,edit:false
            },
            listdigitalmakt:{
              view:false
            }
        }
      }

    
    module:string  ="doctor"
    textSave:string = "Add User"
    totalUserRecords:any
    

    
    userObject = {
       // _id:'',
        userId: 'user1',
        userName: 'user1',
        email: 'user1@gmail.com',
        password: 'password',
        role: '',
        active:true
    }
    constructor(
        public router: Router,
        private _fb: FormBuilder,
        public toastr: ToastrManager,
        public http:HttpClient,
        public dataService: DataAccess        
    ) {
        super(router)

        if(!this.user.role.doctor.user.view){
          return
        }
        this.userGroup = _fb.group({
            userName: new FormControl(this.userObject.userName, Validators.required),
            password: new FormControl(this.userObject.password, Validators.required),
            role: new FormControl(this.role),
            email: new FormControl(this.userObject.email, [
                Validators.required,
                Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
        });

        this.fetchUsers()
        
    }
    cancelEdit(){
      this.mode = "add"
      this.textSave = "Add User"
    }
    moduleNameChange(){
      //this.pageNo = 1
      
      //this.applyFilter()
    }
    editUser(user){
      this.userObject = Object.assign({}, user); 
      this.mode = "edit"
      this.textSave = "Save"
    }

    openForeditUser(user){
      this.userObject = Object.assign({}, user); 
      this.userObject.userId = user._id
      this.mode = "edit"
      if(user.role && user.role.doctor){
       // this.role = Object.assign({}, user.role      ); 

        if(user.role.doctor.user){
          this.role.doctor.user.create = user.role.doctor.user.create
          this.role.doctor.user.view = user.role.doctor.user.view
          this.role.doctor.user.edit = user.role.doctor.user.edit
        }else{
          this.role.doctor.user.create = false
          this.role.doctor.user.view = false
          this.role.doctor.user.edit = false
        }
        if(user.role.doctor.doctor){
          this.role.doctor.doctor.create = user.role.doctor.doctor.create
          this.role.doctor.doctor.view = user.role.doctor.doctor.view
          this.role.doctor.doctor.edit = user.role.doctor.doctor.edit
        }else{
          this.role.doctor.doctor.create = false
          this.role.doctor.doctor.view = false
          this.role.doctor.doctor.edit = false
        }
        if(user.role.doctor.invoice){
          this.role.doctor.invoice.create = user.role.doctor.invoice.create
          this.role.doctor.invoice.view = user.role.doctor.invoice.view
          this.role.doctor.invoice.edit = user.role.doctor.invoice.edit
        }else{
          this.role.doctor.invoice.create = false
          this.role.doctor.invoice.view = false
          this.role.doctor.invoice.edit = false
        }
        if(user.role.doctor.location){
          this.role.doctor.location.create = user.role.doctor.location.create
          this.role.doctor.location.view = user.role.doctor.location.view
          this.role.doctor.location.edit = user.role.doctor.location.edit
        }else{
          this.role.doctor.location.create = false
          this.role.doctor.location.view = false
          this.role.doctor.location.edit = false
        }
        if(user.role.doctor.appointment){
          this.role.doctor.appointment.create = user.role.doctor.appointment.create
          this.role.doctor.appointment.view = user.role.doctor.appointment.view
          this.role.doctor.appointment.edit = user.role.doctor.appointment.edit
          this.role.doctor.appointment.statuschange = user.role.doctor.appointment.statuschange
        } else{
          this.role.doctor.appointment.create = false
          this.role.doctor.appointment.view = false
          this.role.doctor.appointment.edit = false
        }    
        
        if(user.role.doctor.customer){
          this.role.doctor.customer.create = user.role.doctor.customer.create
          this.role.doctor.customer.view = user.role.doctor.customer.view
          this.role.doctor.customer.edit = user.role.doctor.customer.edit
        }else{
          this.role.doctor.customer.create = false
          this.role.doctor.customer.view = false
          this.role.doctor.customer.edit = false
        }
        
        if(user.role.doctor.order){
          this.role.doctor.order.create = user.role.doctor.order.create
          this.role.doctor.order.view = user.role.doctor.order.view
          this.role.doctor.order.edit = user.role.doctor.order.edit
        }else{
          this.role.doctor.order.create = false
          this.role.doctor.order.view = false
          this.role.doctor.order.edit = false
        }

        
        if(user.role.doctor.medicine){
          this.role.doctor.medicine.create = user.role.doctor.medicine.create
          this.role.doctor.medicine.view = user.role.doctor.medicine.view
          this.role.doctor.medicine.edit = user.role.doctor.medicine.edit
        }else{
          this.role.doctor.medicine.create = false
          this.role.doctor.medicine.view = false
          this.role.doctor.medicine.edit = false
        }
        
        if(user.role.doctor.category){
          this.role.doctor.category.create = user.role.doctor.category.create
          this.role.doctor.category.view = user.role.doctor.category.view
          this.role.doctor.category.edit = user.role.doctor.category.edit
        }else{
          this.role.doctor.category.create = false
          this.role.doctor.category.view = false
          this.role.doctor.category.edit = false
        }

          
        if(user.role.doctor.delivery){
          this.role.doctor.delivery.create = user.role.doctor.delivery.create
          this.role.doctor.delivery.view = user.role.doctor.delivery.view
          this.role.doctor.delivery.edit = user.role.doctor.delivery.edit
        }else{
          this.role.doctor.delivery.create = false
          this.role.doctor.delivery.view = false
          this.role.doctor.delivery.edit = false
        }
        if(user.role.doctor.charges){
          this.role.doctor.charges.create = user.role.doctor.charges.create
          this.role.doctor.charges.view = user.role.doctor.charges.view
          this.role.doctor.charges.edit = user.role.doctor.charges.edit
        }else{
          this.role.doctor.charges.create = false
          this.role.doctor.charges.view = false
          this.role.doctor.charges.edit = false
        }

        if(user.role.doctor.discount){
          this.role.doctor.discount.create = user.role.doctor.discount.create
          this.role.doctor.discount.view = user.role.doctor.discount.view
          this.role.doctor.discount.edit = user.role.doctor.discount.edit
        }else{
          this.role.doctor.discount.create = false
          this.role.doctor.discount.view = false
          this.role.doctor.discount.edit = false
        }
        
        if(user.role.doctor.coupon){
          this.role.doctor.coupon.create = user.role.doctor.coupon.create
          this.role.doctor.coupon.view = user.role.doctor.coupon.view
          this.role.doctor.coupon.edit = user.role.doctor.coupon.edit
        }else{
          this.role.doctor.coupon.create = false
          this.role.doctor.coupon.view = false
          this.role.doctor.coupon.edit = false
        }
        if(user.role.doctor.invoicecrm){
          this.role.doctor.invoicecrm.create = user.role.doctor.invoicecrm.create
          this.role.doctor.invoicecrm.view = user.role.doctor.invoicecrm.view
          this.role.doctor.invoicecrm.edit = user.role.doctor.invoicecrm.edit
        }else{
          this.role.doctor.invoicecrm.create = false
          this.role.doctor.invoicecrm.view = false
          this.role.doctor.invoicecrm.edit = false
        }


        if(user.role.doctor.listdigitalmakt){

          this.role.doctor.listdigitalmakt.view = user.role.doctor.listdigitalmakt.view

        }else{

          this.role.doctor.listdigitalmakt.view = false

        }

      }
      this.textSave = "Save"
    }
    
    pageChanged(event){
      console.log("****** this.event   ===== **"+event)
      this.pageNo = event
      this.applyFilter()
    }
    applyFilter() {     
        this.fetchUsers()      
    }
    fetchUsers(){
      //  this.pageNo = 1
        //this.pageSize = 10
        let data = {pageNo:this.pageNo,perPage:this.pageSize}
        this.dataService.fetchUsers(data).then((result:[]) => {
            
          this.normalFiltereduserListArr = [];      
    
            this.normalFiltereduserListArr = result.map(element => element)
          // console.log("****** this.normalFiltereduserListArr   ===== **"+JSON.stringify(this.normalFiltereduserListArr))
        }, (err) => {          
          console.log(err);
        });
    
      }
    ngOnInit() {

      if (!localStorage.getItem('isLoggedin')) {
        this.router.navigate(["/login"]);
      }
      this.fetchUsersCount()

    }

    fetchUsersCount(){
      //  this.pageNo = 1
      //  this.pageSize = 10
        this.dataService.fetchUsersCount().then((result) => {
            
        //    console.log("****** fetchDoctorsCount result   ===== **"+JSON.stringify(result))
          this.totalUserRecords = result;
      //    console.log("****** this.totalUserRecords ===== **"+this.totalUserRecords)
    
          //this.loading = false;
    
        }, (err) => {
          //this.loading = false;
          console.log(err);
        });
      }

    
    convertToHumanDate(dbDate){
      return  moment(dbDate).format('DD-MMM-YYYY');
    }

    addUser(){
        let email  = this.userGroup.controls.email.value

        for(var i in this.normalFiltereduserListArr){
          if(email == this.normalFiltereduserListArr[i].email){
            this.submitAttempt = true;
            this.form_fill_failure_msg = "This email id already used by another user";
            return; 
          }
        }

        if(!this.userGroup.valid){
            this.submitAttempt = true;
            
            this.validateFields(this.userGroup.controls)                   
            return; 
        }        
        this.userObject = {
        //  _id:'',
          userId:'',
          userName: this.userGroup.controls.userName.value,
          email: this.userGroup.controls.email.value,
          password: this.userGroup.controls.password.value,
          role: this.userGroup.controls.role.value,
          active:true
        }
        console.log("this.userObject == "+JSON.stringify(this.userObject))
        this.dataService.addUser(this.userObject).then((result) => {                
            console.log("result after adduser == "+JSON.stringify(result))
            this.fetchUsers()
        }, (err) => {        
        console.log(err);
        });
    }
    
    modifyUser() {
      //userInfo.role = this.role
      //this.userObject.role = this.role

      this.userObject.role = Object.assign({}, this.role); 

      this.updateUser(this.userObject)

      //console.log(" this.user._id  "+this.user._id)  
      console.log(" this.userObject  "+JSON.stringify(this.userObject.role))  
        

      if(this.user._id == this.userObject['_id']){
        //console.log(" this.userObject  "+JSON.stringify(this.userObject))  
      //  console.log(" user  "+JSON.stringify(this.user))  
        
        localStorage.setItem('user', JSON.stringify(this.userObject));
      }
          
    }
    updateUserStatus(event, userInfo) {

      console.log(" userInfo  "+JSON.stringify(userInfo))     
      let data = {}
      data['userId'] = userInfo._id
      data['active'] = !userInfo.active

       this.updateUser(data)
    }

    updateUser(data) {
   
       // console.log("******  data   ===== **"+JSON.stringify(data) )          

        this.dataService.editUser(data).then((result) => {           

          this.toastr.successToastr('User status updated successfully','Success',{toastTimeout: 3000});
          this.fetchUsers()

          let stringUser = localStorage.getItem('user')
          let user =  JSON.parse(stringUser)    
          
          let data  = {emailPhone:user['email'],password:user['password']}
  
          console.log("****** loginUser data   ===== **"+JSON.stringify(data))          
  
          this.dataService.loginUser(data).then((result:any) => {
              
          
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('user', JSON.stringify(result));          
      
          }, (err) => {          
            
            console.log(err);
          });
          
          }, (err) => {
        
            console.log(err);
          });
        
   }
 
    

    // Removing the promocode
    removeCode(code, isEnable) {
       
        this.toastr.successToastr('Promo code status updated successfully');
    }
    restrictMinus(e) {
        var inputKeyCode = e.keyCode ? e.keyCode : e.which;
        if (inputKeyCode != null) {
            if (inputKeyCode == 45) e.preventDefault();
        }
    }
}
