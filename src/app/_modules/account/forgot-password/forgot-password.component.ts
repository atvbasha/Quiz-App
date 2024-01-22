import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '@app/_services/email.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  profileForm = new FormGroup({
    email: new FormControl('', Validators.required)
  });
  clientId="262091523626-tu5ffnitduakqqanvmf6m84rbg2co5ra.apps.googleusercontent.com";
  loading = false;
  submitted = false;
  hidePassword: boolean = true;
  errMsg: any;

  constructor(private emailService: EmailService){}

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
      this.emailService.sendEmail("Angay", "baluangayar@gmail.com", "Never regret", "Don't worry, everything will be alright").subscribe(
        (response: any) => {
          console.log("response: ", response)
          console.log('Email sent successfully!');
        },
        (error: any) => {
          console.log('Error sending email:', error);
        });
    }
  }
}
