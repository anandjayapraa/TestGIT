import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';

const routes: Routes = [
 
  { path: 'addemployee', component: EmployeeComponentComponent },
  {path: 'employeedetails/:id', component: EmployeedetailsComponent},
  { path: 'employees', component: EmployeeListComponent },
  { path: 'welcome', component: WelcomeComponent },
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeComponentComponent, EmployeeListComponent];