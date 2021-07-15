import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { PageHeaderModule } from './../../shared';
import { UsercreationAccessRightComponent } from './usercreateaccessright.component';
import { UserCreateAccessRoutingModule } from './usercreateaccessright-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
    imports: [CommonModule,ReactiveFormsModule,UiSwitchModule,
        NgxPaginationModule, UserCreateAccessRoutingModule, PageHeaderModule, FormsModule],
    declarations: [UsercreationAccessRightComponent]
})
export class UsercreationAccessModule {}
