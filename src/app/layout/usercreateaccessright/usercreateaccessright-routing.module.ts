import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsercreationAccessRightComponent } from './usercreateaccessright.component';


const routes: Routes = [
    {
        path: '', component: UsercreationAccessRightComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UserCreateAccessRoutingModule {}
