import { Component, OnInit, NgZone, Host } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseComponent } from 'src/BaseComponent';
import { LayoutComponent } from '../../layout.component';
import { DataAccess } from 'src/app/services/data-access';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent extends BaseComponent {
    isActive: boolean = false;
    showMenu: string = '';
    showSideBar:boolean = false
    customWidth:any
    modified:any = {}
    pushRightClass: string = 'push-right';
    userId: string;    
    userData: any[] = [];
    constructor(
        private translate: TranslateService,
        public router: Router,
        public ngZone: NgZone,
        public dataService: DataAccess ,
        @Host() public parent: LayoutComponent
    ) {
        super(router)
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

/*
        this.router.events.subscribe(val => {
            
            this.expandSideBar()
        });
  */
 this.router.events.subscribe(val => {
    if (
        val instanceof NavigationEnd && window.innerWidth >= 992 // &&        this.isMenubeingShown()
    ) {
    console.log("the menu being sh own from LayoutComponent constructor")
        this.toggleSidebar();
    }

    if (val instanceof NavigationEnd &&
        window.innerWidth <= 992 
        
    ) {
        this.dontShowLeftRightArrowInSidebar();
    }else{
        this.showLeftRightArrowInSidebar();
    }
   
});     
    }

    ngAfterViewInit(){
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
    }
   
    expandSideBar(){
      

        let stringUser = localStorage.getItem('user')
        this.user =  JSON.parse(stringUser)    
        
        this.showSideBar =  !this.showSideBar 

        if(this.showSideBar){
            this.parent.activated[this.constructor.name] = true;
        }
        if(!this.showSideBar){
            this.parent.activated[this.constructor.name] = false;
        }
     
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    dontShowLeftRightArrowInSidebar(){
        const dom1: any = document.querySelector('.leftrightarrowbutton');        
        dom1.classList.add('leftrightarrowbutton_noshow');
        
    }
    showLeftRightArrowInSidebar(){
        const dom1: any = document.querySelector('.leftrightarrowbutton');
        dom1.classList.remove('leftrightarrowbutton_noshow');
    }
    /*
ngDoCheck(){
    
    if(this.modified['LayoutComponent'] == true){
        // alert("sidbar child component changed")
         this.showSideBar = true
         //this.activated['SidebarComponent'] = false
     }else{
        this.showSideBar = false
     }
    
}
*/
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
/*
    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
*/
toggleSidebar() {
    //this.showSideBar =  !this.showSideBar 
    this.expandSideBar()
    const dom: any = document.querySelector('.list-group');
    //dom.classList.toggle(this.menuDivClass);

    console.log("FIRST CLASS NAME "+dom.classList[0]); 

    dom.classList.add('customClass');

    console.log("CLASS  AFTER ADDING  "+dom.classList[1]); 

    const dom1: any = document.querySelector('.main-container');
    //dom.classList.toggle(this.menuDivClass);
    dom1.classList.add('customClassMainContainer');
    dom1.classList.remove('customClassHugeMarginMainContainer');
    
    
}

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
      //  localStorage.removeItem('isLoggedin');
        try {
            
         this.router.navigate(["/login"]);
          localStorage.removeItem('isLoggedin');
    
        }
        catch(error) {
            console.log('Error', error);
        }
    }

    ngOnInit() {
        
    }

}
