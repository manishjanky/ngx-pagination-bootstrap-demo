import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import {PaginationModule} from 'ngx-pagination-bootstrap';



import { AppComponent } from './app.component';
//import { PaginationComponent } from './ngx-pagination-bootstrap-component/ngx-pagination-bootstrap.component';


@NgModule({
  declarations: [
    AppComponent
    //PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
