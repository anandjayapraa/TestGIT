import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { ConverttospacesPipe } from './converttospaces.pipe';
import { StarratingComponent } from './starrating/starrating.component';



@NgModule({
  declarations: [
    AppComponent ,
    routingComponents,
    WelcomeComponent,
    PagenotfoundComponent,
    EmployeedetailsComponent,
    ConverttospacesPipe,
    StarratingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
