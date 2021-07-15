import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PageHeaderModule } from './../../shared';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
//import { LoadingModule } from 'ngx-loading';
import { MatCardModule } from '@angular/material/card';
import { RptModule } from '../../shared';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        PageHeaderModule,
        RptModule,
        Ng2Charts,
        MatCardModule,
        //  LoadingModule,
        FormsModule,
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
        })
    ],
    declarations: [
        DashboardComponent,
    ]
})
export class DashboardModule { }
