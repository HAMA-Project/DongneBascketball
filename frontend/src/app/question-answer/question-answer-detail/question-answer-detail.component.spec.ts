import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswerDetailComponent } from './question-answer-detail.component';

describe('QuestionAnswerDetailComponent', () => {
  let component: QuestionAnswerDetailComponent;
  let fixture: ComponentFixture<QuestionAnswerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAnswerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionAnswerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
