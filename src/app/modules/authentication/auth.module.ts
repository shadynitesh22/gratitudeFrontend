import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { InputFieldModule } from '../input-field/input-field.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';


const routes : Routes = [
  {path:"login", component: LoginFormComponent},
  {path:"signup", component: SignUpFormComponent}]

@NgModule({
  declarations: [
    LoginFormComponent,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    InputFieldModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],exports:[
    LoginFormComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule { }
