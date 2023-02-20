import { Component } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm !: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor(public snackbar: MatSnackBar) {

  }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl,
      password: new FormControl,
      remrememberMe: new FormControl
    })
  }; s: any;
  hide = true;
  get passwordInput() { return this.loginForm.get('password'); }


  login() {
    this.snackbar.open('Login Successful', 'Close', {})
  }
}
