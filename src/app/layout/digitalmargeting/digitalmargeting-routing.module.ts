import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalmargetingComponent } from './digitalmargeting.component';

const routes: Routes = [
    {
        path: '', component: DigitalmargetingComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalmargetingRoutingModule { }
