import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { LoginModule } from './login.module';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DataAccess } from '../services/data-access';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public emailValue: any;
    public email: any = ''//"user2@gmail.com";
    public password: any = ''// "password";   
    @ViewChild('email') emailRef: ElementRef;
    public loading: boolean;

    constructor(
        public router: Router,
        public ngZone: NgZone,
        public toastr: ToastrManager,
        public dataService: DataAccess
    ) {

        this.email = "admin@gmail.com"
          this.password = "password" //for local DB
        //this.password = "AdminDrsignet@123" //for remote AWS DB
        if (localStorage.getItem('isLoggedin')) {
            this.router.navigate(["/dashboard"]);
        }

    }

    ngOnInit() { }

    onLoggedin() {

        //this.emailValue  = this.emailRef.nativeElement.value
        console.log('this.emailValue == ' + this.email);
        console.log('this.password == ' + this.password);


        let data = { emailPhone: this.email, password: this.password }
        this.dataService.loginUser(data).then((result: any) => {

            console.log("****** loginUser result   ===== **" + JSON.stringify(result))

            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('user', JSON.stringify(result));
            this.toastr.successToastr('Logged in successfully');
            this.router.navigate(["dashboard"]);
            this.loading = false;

        }, (err) => {
            this.toastr.errorToastr('This account is not valid');
            this.loading = false;
            console.log(err);
        });
        /*
        if(this.email == "admin" && this.password == "drSigNet#123") {
            console.log('Signed In');
            localStorage.setItem('isLoggedin', 'true');
            this.toastr.successToastr('Logged in successfully');
            this.router.navigate(["dashboard"]);
            this.loading = false;
        }
        else {
            this.toastr.errorToastr('This account is not valid');
            this.loading = false;
        }
*/

    }

}
