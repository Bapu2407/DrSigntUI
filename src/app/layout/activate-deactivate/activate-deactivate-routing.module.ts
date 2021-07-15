import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivateDeactivateComponent } from './activate-deactivate.component';

const routes: Routes = [
    {
        path: '', component: ActivateDeactivateComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivateDeactivateRoutingModule { }
