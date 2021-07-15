import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicecrmComponent } from './invoicecrm.component';

const routes: Routes = [
    {
        path: '', component: InvoicecrmComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicecrmRoutingModule { }
