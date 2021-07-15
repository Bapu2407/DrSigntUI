import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



import { PageHeaderModule } from './../../shared';
//import { LoadingModule } from 'ngx-loading';
//import {NgxToggleModule} from "ngx-toggle";
import { UiSwitchModule } from 'ngx-toggle-switch';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {NgxPaginationModule} from 'ngx-pagination';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
//import {DataTableModule, SharedModule, InputTextModule} from 'primeng/primeng';
//import {PaginatorModule} from 'primeng/paginator';
//import {DropdownModule} from 'primeng/dropdown';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    NgxPaginationModule,
    InvoiceRoutingModule,
    FormsModule,
    PageHeaderModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
  }),
    UiSwitchModule,
    NgbModule.forRoot(),
  //  DropdownModule,
  //PaginatorModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  declarations: [InvoiceComponent]
})
export class InvoiceModule { }
