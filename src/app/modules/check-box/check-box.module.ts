import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleCheckOptionComponent } from './simple-check-option/simple-check-option.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';




@NgModule({
  declarations: [
    SimpleCheckOptionComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],exports:[
    SimpleCheckOptionComponent
  ]
})
export class CheckBoxModule { }
