import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', data: { breadcrumb: 'Crud' }, loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'empty', data: { breadcrumb: 'Empty' }, loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'help', data: { breadcrumb: 'Help' }, loadChildren: () => import('./help/help.module').then(m => m.HelpModule) },
        { path: 'invoice', data: { breadcrumb: 'Invoice' }, loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule) },
        { path: 'timeline', data: { breadcrumb: 'Timeline' }, loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },
        { path: 'faq', data: { breadcrumb: 'FAQ' }, loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) },
        { path: 'contact', data: { breadcrumb: 'Contact' }, loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
