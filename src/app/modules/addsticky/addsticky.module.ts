import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddstickyComponent } from './addsticky.component';
import { RouterModule, Routes } from '@angular/router';
import { StickyModule } from 'src/app/modules/sticky/sticky.module';
import { MaterialModule } from 'src/app/material/material.module';
import {  SharedService } from 'src/app/app.service';


const routes: Routes = [
  {
    path : '',
    component : AddstickyComponent
  }
]



@NgModule({
  declarations: [
    AddstickyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StickyModule,
    MaterialModule
  ],providers:[],
})
export class AddstickyModule { }
