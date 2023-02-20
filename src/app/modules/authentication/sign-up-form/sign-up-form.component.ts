import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {

  RegisterForm !: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  constructor(public snackbar:MatSnackBar){

  }
  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      email: new FormControl(),
      first_name: new FormControl(),
      last_name: new FormControl(),
      password: new FormControl(),
      password2: new FormControl()
      
    })
    
  }
  signUp(){
    this.snackbar.open('Sign Up Successful','Close',{})
  }

}
