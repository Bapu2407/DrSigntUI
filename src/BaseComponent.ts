import { FormBuilder, AbstractControl,FormGroup, FormControl, Validators, FormArray,ValidationErrors } from '@angular/forms';
import { Config } from './app/config';
import {  NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import *  as moment from 'moment';
import { Router } from '@angular/router';

export class BaseComponent {
     
    user:any = {}
    mode:string = "add"
    form_fill_failure_msg:string
    pageSize = Config.RECORDSIZE;
    pageNo = 1    
  modalReference: NgbModalRef;
    fielMappingModalReference: NgbModalRef;
    modalReferenceImage: NgbModalRef;
    modalReferencePrescriptionImage: NgbModalRef;
    submitAttempt:boolean = false

   // showSideBar:boolean = false //Config.showSideBar

    constructor(public router: Router
    ) {

      
      
        let stringUser = localStorage.getItem('user')
        this.user =  JSON.parse(stringUser)    
        //console.log("this.user id =="+this.user['_id'])
        if (!localStorage.getItem('isLoggedin')) {
          this.router.navigate(["/login"]);
        }    
    }
    
    closeModal() {
     
      if(this.modalReference)
        this.modalReference.close();
      
    }
    closeCustomModal() {
      if(this.modalReferenceImage)
        this.modalReferenceImage.close();
     
    }
    closeCustomModal2() {
      if(this.modalReferencePrescriptionImage)
      this.modalReferencePrescriptionImage.close(); 
    }
    

    convertFromddmmyyy(date){
      return moment(date,"DD-MM-YYYY")
    }
    backTONgTImeFOrmat(time){
      if(time && time !=""){
        
        console.log("time = "+JSON.stringify(time))

        let newTIme  = time.split(" ")
        let newTImeTImePart = newTIme[0]
        let newTImeAmPmPart = newTIme[1]
        console.log("newTImeTImePart = "+newTImeTImePart)
        console.log("newTImeAmPmPart = "+newTImeAmPmPart)

        let ngTIme = {}
        let hourMinValue = newTImeTImePart.split(":")
        let hour:any = hourMinValue[0]
        let min:any = hourMinValue[1]
        hour =  Number(hour)
        min =  Number(min)
        console.log("hour = "+hour)
        console.log("min = "+min)
        if(newTImeAmPmPart && newTImeAmPmPart.trim() == "pm"){
          hour = hour + 12
        }
        
        ngTIme['hour'] = Number(hour)
        ngTIme['minute'] = Number(min)
        ngTIme['second'] = 0
        console.log("ngTIme = "+JSON.stringify(ngTIme))
        return ngTIme//{"hour":10,"minute":30,"second":0}
      }else{
        return time
      }
    }
    convertTimeFormogo(time){
//":{"hour":22,"minute":20,"second":0}
      let hour  = time['hour']
      let min  = time['minute']
      let amPm = "am"

      if(hour >= 12){
        hour = hour - 12
        amPm = "pm"
      }
      
      if(hour ==24 ){
        hour = hour - 24
        amPm = "am"
      }
      return hour+":"+min+" "+amPm
    }
    
    fromJsDateToMongoDate(jsDate){

      console.log(" jsDate ="+jsDate)
      var dateParts = jsDate.split(Config.dateDelimitor);    
    
      console.log("before 1 add dateParts[0] ="+dateParts[0])
      console.log("dateParts[1] ="+dateParts[1])
      console.log(" dateParts[2] ="+dateParts[2])
      return  dateParts[2]+Config.dateDelimitor+dateParts[1]+Config.dateDelimitor+dateParts[0]
    
      /*let utcD =   Date.UTC(dateParts[2], dateParts[1] - 1, dateParts[0],
   0, 0, 0);

       // return new Date(utcD); 


      var momentDate = moment(jsDate).format('YYYY-MM-DD[T00:00:00.000Z]')
     // return momentDate; 
     return new Date(momentDate); 
     */

    }
    fromJsDateToLocationdateTimeFormat(jsDate){

      console.log(" jsDate ="+jsDate)
      var dateParts = jsDate.split(Config.dateDelimitor);    
    
      console.log("before 1 add dateParts[0] ="+dateParts[0])
      console.log("dateParts[1] ="+dateParts[1])
      console.log(" dateParts[2] ="+dateParts[2])
      return  dateParts[2]+Config.dateDelimitor+dateParts[1]+Config.dateDelimitor+dateParts[0]   

    }
    convertToHumanDate(dbDate){
      return  moment(dbDate).format('DD-MMM-YYYY');
    }
    validateFields(controls){
        const error: AllValidationErrors = getFormValidationErrors(controls).shift();
  
        if (error) {
          let text;
      
          console.log("error.control_name == "+error.control_name)
      
          let controlName =  error.control_name //this.getText(error.
         console.log("controlName == "+controlName)
          switch (error.error_name) {
            case 'required': text =controlName+` is required!`; break;
            case 'pattern': text = `${error.control_name} has wrong pattern!`; break;
            case 'email': text = `${error.control_name} has wrong email format!`; break;
            case 'minlength': text = `${error.control_name} has wrong length! Required length: ${error.error_value.requiredLength}`; break;
            case 'areEqual': text = `${error.control_name} must be equal!`; break;
            default: text = `${error.control_name}: ${error.error_name}: ${error.error_value}`;
          }
          this.form_fill_failure_msg = text;
        }
      
      }
      
}

export interface AllValidationErrors {
    control_name: string;
    error_name: string;
    error_value: any;
  }
  
  export interface FormGroupControls {
    [key: string]: AbstractControl;
  }
  
 export  function getFormValidationErrors(controls: FormGroupControls): AllValidationErrors[] {
    let errors: AllValidationErrors[] = [];
  
   
    Object.keys(controls).forEach(key => {
      const control = controls[ key ];
      console.log("key :=="+ key)
      if (control instanceof FormGroup) {
        errors = errors.concat(getFormValidationErrors(control.controls));
      }
      const controlErrors: ValidationErrors = controls[ key ].errors;
      if (controlErrors !== null) {
        Object.keys(controlErrors).forEach(keyError => {
          
          errors.push({
            control_name: key,
            error_name: keyError,
            error_value: controlErrors[ keyError ]
          });
        });
      }
    });
    return errors;
  }

