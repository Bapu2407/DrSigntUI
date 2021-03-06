import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';

const routes: Routes = [
    
    { path: '', loadChildren: () => import(`./layout/layout.module`).then(m => m.LayoutModule) },
    { path: 'digitalmarketing', loadChildren:() => import(`./layout/digitalmargeting/digitalmargeting.module`).then(m => m.DigitalmargetingModule) },
    { path: 'login', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule) },    
    { path: 'error', loadChildren: () => import(`./server-error/server-error.module`).then(m => m.ServerErrorModule)},
    { path: 'access-denied', loadChildren: () => import(`./access-denied/access-denied.module`).then(m => m.AccessDeniedModule)},
    { path: 'not-found', loadChildren:() => import(`./not-found/not-found.module`).then(m => m.NotFoundModule) },  
    { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
