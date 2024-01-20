import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { ViewQuizComponent } from './view-quiz/view-quiz.component';
import { ValidateQuizComponent } from './validate-quiz/validate-quiz.component';
import { QuizComponent } from './quiz.component';

@NgModule({
  declarations: [
    CreateQuizComponent,
    QuizListComponent,
    ViewQuizComponent,
    ValidateQuizComponent,
    QuizComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuizModule { }
