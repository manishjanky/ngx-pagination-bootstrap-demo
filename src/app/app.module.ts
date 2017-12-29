import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {PaginationModule} from 'ngx-pagination-bootstrap';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
