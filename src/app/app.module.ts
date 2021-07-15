import { CommonModule, DatePipe, HashLocationStrategy } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
//import { JwPaginationComponent } from 'jw-angular-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { environment } from '../environments/environment';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastrModule } from 'ng6-toastr-notifications';
import { NgbModule, NgbActiveModal, NgbModal, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
//import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { PathLocationStrategy,LocationStrategy } from '@angular/common';
import 'core-js/es/reflect';
import 'core-js/es/reflect';
import 'zone.js/dist/zone';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { DataAccess } from './services/data-access';
import { ActivateDeactivateModule } from './layout/activate-deactivate/activate-deactivate.module';
import { ChartsModule } from 'ng2-charts';
import { GlobalErrorHandler } from './GlobalErrorHandler';
import { AlertModule } from 'ngx-alerts';
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        AutocompleteLibModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        NgxPaginationModule,
        ActivateDeactivateModule,
        NgbModule.forRoot(),
        ChartsModule,
        
    // Specify your library as an import (set timeout to -1 for unlimited timeout, the message can only be closed by the user clicking on it)
    AlertModule.forRoot({maxMessages: 5, timeout: 10000, position: 'right'}),
        ToastrModule.forRoot(), // for toast notifications 
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),      
        AppRoutingModule,
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff', 
            secondaryColour: '#ffffff', 
            tertiaryColour: '#ffffff'
        }),
        NgbModule
    ],
//    exports: [JwPaginationComponent],
    declarations: [AppComponent
        ],
    providers: [DataAccess,AuthGuard,DatePipe, NgbActiveModal, NgbDatepickerConfig, NgbModal,
        {provide: LocationStrategy, useClass: HashLocationStrategy},{provide: ErrorHandler, useClass: GlobalErrorHandler}],
    bootstrap: [AppComponent
        ],
    entryComponents: [
    // ModalComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
