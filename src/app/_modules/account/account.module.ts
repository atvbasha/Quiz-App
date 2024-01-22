import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AccountRoutingModule } from './account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmailService } from '@app/_services/email.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    EmailService
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent
  ]
})
export class AccountModule { }
