import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeesDetailComponent } from './components/employees-detail/employees-detail.component';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';


const routes: Routes = [
  { path: 'employees', component: HomeComponent },
  { path: 'employees/:id', component: EmployeesDetailComponent },
  { path: 'addemployee', component: AddEmployeesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'employees' },
  { path: '**', pathMatch: 'full', redirectTo: 'employees' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
