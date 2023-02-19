import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleCheckOptionComponent } from './simple-check-option/simple-check-option.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SimpleCheckOptionComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CheckBoxModule { }
