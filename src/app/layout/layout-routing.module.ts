import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [

            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren:() => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule) },
            { path: 'activate-deactivate', loadChildren: () => import(`./activate-deactivate/activate-deactivate.module`).then(m => m.ActivateDeactivateModule) },
            { path: 'user-create', loadChildren: () => import(`./usercreateaccessright/usercreateaccessright.module`).then(m => m.UsercreationAccessModule) },
            { path: 'appointment', loadChildren: () => import(`./appointment/appointment.module`).then(m => m.AppointmentModule) },
            { path: 'invoice', loadChildren: () => import(`./invoice/invoice.module`).then(m => m.InvoiceModule) },
            { path: 'customer', loadChildren: () => import(`./customer/customer.module`).then(m => m.CustomerModule) },
            { path: 'order', loadChildren: () => import(`./order/order.module`).then(m => m.OrderModule) },
            { path: 'pharmaorder', loadChildren: () => import(`./pharmaorder/pharmaorder.module`).then(m => m.PharmaOrderModule) },
            { path: 'location', loadChildren:() => import(`./location/location.module`).then(m => m.LocationModule) },
            { path: 'medicine', loadChildren:() => import(`./medicine/medicine.module`).then(m => m.MedicineModule) },
            { path: 'category', loadChildren:() => import(`./category/category.module`).then(m => m.CategoryModule) },
            { path: 'delivery', loadChildren:() => import(`./delivery/delivery.module`).then(m => m.DeliveryModule) },
            { path: 'charges', loadChildren:() => import(`./charges/charges.module`).then(m => m.ChargesModule) },
            { path: 'discount', loadChildren:() => import(`./discount/discount.module`).then(m => m.DiscountModule) },
            { path: 'coupon', loadChildren:() => import(`./coupon/coupon.module`).then(m => m.CouponModule) },
            { path: 'invoicecrm', loadChildren:() => import(`./invoicecrm/invoicecrm.module`).then(m => m.InvoicecrmModule) },
            { path: 'listdigitalmakt', loadChildren:() => import(`./listdigitalmakt/listdigitalmakt.module`).then(m => m.ListdigitalmaktModule) },

          
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
