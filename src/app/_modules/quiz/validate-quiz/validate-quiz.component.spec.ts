import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateQuizComponent } from './validate-quiz.component';

describe('ValidateQuizComponent', () => {
  let component: ValidateQuizComponent;
  let fixture: ComponentFixture<ValidateQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidateQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
