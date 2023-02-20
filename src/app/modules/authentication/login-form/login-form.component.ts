import { Component } from '@angular/core';
import { InputFieldModule } from'../../input-field/input-field.module';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm !: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


constructor(private FormBuilder: FormBuilder,public snackbar:MatSnackBar){

}


ngOnInit(): void {
  this.loginForm = new FormGroup({
    email: new FormControl,
    password: new FormControl  })
};s: any;
hide = true;
get passwordInput() { return this.loginForm.get('password'); }  


login(){
  this.snackbar.open('Login Successful','Close',{})
}
}
