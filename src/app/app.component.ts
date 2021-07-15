import { Component, OnInit,Inject } from '@angular/core';
declare var device;
import { Router } from '@angular/router';
//import * as $ from 'jquery';
import { DOCUMENT } from '@angular/common';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  forwardToOdhisa:boolean = false
    constructor(public router: Router,@Inject(DOCUMENT) private document: Document) {

      console.log("documentURL =="+this.document.location.href);

      let documentURL = this.document.location.href

      console.log("documentURL =="+this.document.location.href);

      console.log("digitalmarketing =="+documentURL.indexOf("digitalmargeting"));

      if (documentURL.indexOf("digitalmarketing") > 0) {
            this.forwardToOdhisa = true;
      }

      if(this.forwardToOdhisa){
        this.router.navigate(["/digitalmarketing"]);
      }else{
          if (!localStorage.getItem('isLoggedin')) {
              this.router.navigate(["/login"]);
            }else{
              //this.router.navigate(["/order"]);
              //this.router.navigate(["/coupon"]);
              //this.router.navigate(["/customer"]);
              //this.router.navigate(["/invoicecrm"]);
              //this.router.navigate(["/listdigitalmakt"]);
              
              //this.router.navigate(["/charges"]);
            //  this.router.navigate(["/delivery"]);
            // this.router.navigate(["/discount"]);
            //this.router.navigate(["/medicine"]);
            this.router.navigate(["/dashboard"]);
            }
         }

      console.log("this.forwardToOdhisa == " + this.forwardToOdhisa);
    }
    ngOnInit() {

    
     
        document.addEventListener("deviceready", function() {
            alert(device.platform);
            }, false);
    }
}
