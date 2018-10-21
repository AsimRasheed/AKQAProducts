import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ProductComponent } from '../products/product.component';
import { PageNotFoundComponent } from '../pagenotfound/page-not-found.component';


const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },  // default
    { path: 'products', component: ProductComponent }, // valid		
    { path: '**', component: PageNotFoundComponent }, // page not found
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRouteModule { }