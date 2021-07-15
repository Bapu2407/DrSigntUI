import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
// import { ActivateDeactivateComponent } from './activate-deactivate/activate-deactivate.component';
//import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff', 
            secondaryColour: '#ffffff', 
            tertiaryColour: '#ffffff'
        })
       /* LoadingModule.forRoot({
            animationType: ANIMATION_TYPES.threeBounce,
            backdropBackgroundColour: 'rgba(255,255,255,.1)',
            fullScreenBackdrop: true,
            primaryColour: '#000',
            secondaryColour: '#000',
            tertiaryColour: '#000'
        }),*/
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
    
})
export class LayoutModule {}
