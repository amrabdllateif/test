import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) 
  {
  }
  isLoading:boolean =false;

  loginForm: FormGroup = new FormGroup({
  
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [ Validators.required,Validators.pattern(/[A-Z][a-z0-9]{5,10}$/)]),
  })

  submitlogin(loginForm: FormGroup) {
    this.isLoading = true;

    if(loginForm.valid){

      console.log(loginForm.value);
      this._AuthService.login(loginForm.value).subscribe({
        next:(Response)=>{
          if(Response.message ==="success")
          {

            this.isLoading = false;
            localStorage.setItem('userToken' , Response.token)
            this._AuthService.decodedUserData();
          this._Router.navigate(['/home'])
          }
        },
        error:(err)=>
        {
          this.isLoading = false;
          console.log(err)}
        
        
      })
   
      }

       
  }
}
