import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswerCreateComponent } from './question-answer-create.component';

describe('QuestionAnswerCreateComponent', () => {
  let component: QuestionAnswerCreateComponent;
  let fixture: ComponentFixture<QuestionAnswerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAnswerCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionAnswerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
