import { Component } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service.service';

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
  requestData$!: Observable<any>;

  constructor(public snackbar: MatSnackBar,private authService: AuthService, private router: Router) {

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
    const formData: any = this.loginForm.value;
    this.authService.login(formData?.email, formData?.password)
      .subscribe((res: any) => {
        console.log(res)
        this.snackbar.open('Login Successful', 'Close', {});
        this.router.navigate(['/']);
        // handle success message and redirect to next page
      }, (err) => {
        console.log(err)
        this.snackbar.open(`Error \n ${err}`, 'Close', {});
        // handle invalid user message
      });
  }
    
  }

