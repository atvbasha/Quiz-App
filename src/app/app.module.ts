import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuizComponent } from '@app/_modules/quiz/quiz.component';
import { AccountModule } from './_modules/account/account.module';
import { EmailService } from './_services/email.service';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    AccountModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
