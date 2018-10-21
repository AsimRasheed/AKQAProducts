import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRouteModule } from './routing/app-route.module';
import { ProductComponent } from './products/product.component';
import { ProductService } from './services/product.service';

import { HttpModule } from '@angular/http';
import { CardComponent } from './products/card.component';
import { PageNotFoundComponent } from './pagenotfound/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CardComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRouteModule,
    BrowserModule,
  
    HttpModule,
        
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
