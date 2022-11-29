import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-answer-create',
  templateUrl: './question-answer-create.component.html',
  styleUrls: ['./question-answer-create.component.scss'],
})
export class QuestionAnswerCreateComponent implements OnInit {
  QAForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    content: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  createQuestionAndAnswerPost() {
    const result = this.QAForm.getRawValue();
    console.log(result);
  }
}
