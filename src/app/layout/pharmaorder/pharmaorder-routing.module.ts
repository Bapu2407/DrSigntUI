import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmaOrderComponent } from './pharmaorder.component';

const routes: Routes = [
    {
        path: '', component: PharmaOrderComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmaOrderRoutingModule { }
