import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';

import { AddEmployeesComponent } from './components/add-employees/add-employees.component';
import { EmployeesDetailComponent } from './components/employees-detail/employees-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// ANGULAR MATERIAL

import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AddEmployeesComponent,
    AppComponent,
    EmployeesDetailComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
