import { MaterialModule } from './../material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  exports: [
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MaterialModule,
  ]
})
export class CoreModule { }
