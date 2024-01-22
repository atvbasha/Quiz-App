import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '@app/_services/alert.service';
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

  constructor(private emailService: EmailService, private alertService: AlertService){}
  
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
      let email: any = this.profileForm?.value.email;
      this.emailService.sendEmail("Angay", email, "Never regret", "Don't worry, everything will be alright").subscribe(
        (response: any) => {
          console.log("response: ", response)
          if(response.status === true){
            this.alertService.success("Email sent successfully!", "EMAIL");
          }
          console.log('Email sent successfully!');
        },
        (error: any) => {
          console.log('Error sending email:', error);
        });
    }
  }
}
