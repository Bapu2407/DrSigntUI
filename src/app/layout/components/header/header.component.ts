import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseComponent } from 'src/BaseComponent';
import { Config } from 'src/app/config';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit  {
    pushRightClass: string = 'push-right';

    userId: string;
    accountAsync$: Observable<any>;
    basePath: string = '/accounts';
   
    constructor(
        private translate: TranslateService,
        public router: Router
    ) {
        super(router)
        
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });

       

    }

   
    ngOnInit() {
              
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        try {
            
                this.router.navigate(["/login"]);
                localStorage.removeItem('isLoggedin');
            
        }
        catch(error) {
            console.log('Error', error);
        }

    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
