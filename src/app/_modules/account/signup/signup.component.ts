import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  clientId="262091523626-tu5ffnitduakqqanvmf6m84rbg2co5ra.apps.googleusercontent.com";
  loading = false;
  submitted = false;
  hidePassword: boolean = true;
  errMsg: any;

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
}
