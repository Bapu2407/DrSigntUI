import { Component, OnInit, SimpleChanges,Host } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Config } from 'src/app/config';
import { BaseComponent } from 'src/BaseComponent';
import { SidebarComponent } from './components/sidebar/sidebar.component';
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent   implements OnInit  {
    showSideBar:boolean = false
    activated: any = {};
    pushRightClass: string = 'push-right';

    menuDivClass: string = 'list-group';
    constructor(public router: Router) {
        this.activated['SidebarComponent'] == true
       // this.showSideBar = false

       

    }
    isMenubeingShown(): boolean {
      const dom: Element = document.querySelector('.list-group');
      return dom.classList.contains(this.menuDivClass);
  }

  

    
    ngOnInit() {

    }
    /*ngOnChanges(changes: SimpleChanges) {
        //console.log(`ngOnChanges - data is ${this.data}`);
        for (let key in changes) {
          console.log(`${key} changed.
      Current: ${changes[key].currentValue}.
      Previous: ${changes[key].previousValue}`);
        }
       
      }*/
      changeOfRoutes(){
        //this.showSideBar = false
       // if(this.showSideBar){
          //  this.sideBarCom.modified[this.constructor.name] = false;
        //}
      //  if(!this.showSideBar){
        //    this.parent.activated[this.constructor.name] = false;
      //  }
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

  /*  ngAfterContentChecked(){
        this.showSideBar =  !this.showSideBar 
    }
*/

ngDoCheck(){
    //console.log("at parent :: this.activated['SidebarComponent'] =="+this.activated['SidebarComponent'])
    if(this.activated['SidebarComponent'] == true){
        // alert("sidbar child component changed")
         this.showSideBar = true
         //this.activated['SidebarComponent'] = false
     }else{
        this.showSideBar = false
     }
    /*
    if(this.activated['SidebarComponent'] == true){
       // alert("sidbar child component changed")
        this.showSideBar =  !this.showSideBar 
        //this.activated['SidebarComponent'] = false
    }
    */
}

}
