import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleCheckOptionComponent } from './simple-check-option/simple-check-option.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCheckOptionsComponent } from './user-check-options/user-check-options.component';
import { MultiCheckFieldComponent } from './multi-check-field/multi-check-field.component';
import { CardCheckOptionComponent } from './card-check-option/card-check-option.component';



@NgModule({
  declarations: [
    SimpleCheckOptionComponent,
    UserCheckOptionsComponent,
    MultiCheckFieldComponent,
    CardCheckOptionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CheckBoxModule { }
