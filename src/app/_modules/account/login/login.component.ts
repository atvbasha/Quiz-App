import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleSignInService } from '@app/_services/google-sign-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  clientId="262091523626-tu5ffnitduakqqanvmf6m84rbg2co5ra.apps.googleusercontent.com";
  loading = false;
  submitted = false;
  hidePassword: boolean = true;
  errMsg: any;

  constructor(private auth: GoogleSignInService) { }

  ngOnInit(): void {
    
  }

  get f() { return this.profileForm.controls; }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(){
    this.submitted = true;
    this.errMsg = '';

    if (this.profileForm.invalid) {
      return;
    }
    else{
      alert("submitted!")
    }
  }

  onGoogleSignIn(){
    setTimeout(()=>{this.googleAuthenticate()},50);
  }

  googleAuthenticate(){
    this.auth.authenticateUser(this.clientId);
  }
}
