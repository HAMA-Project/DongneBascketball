import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionAnswerPost } from 'src/app/domain/question-answer';

@Component({
  selector: 'app-question-answer-detail',
  templateUrl: './question-answer-detail.component.html',
  styleUrls: ['./question-answer-detail.component.scss'],
})
export class QuestionAnswerDetailComponent implements OnInit {
  QAPost?: QuestionAnswerPost;

  constructor(private route: ActivatedRoute) {
	this.QAPost = route.snapshot.data['QAPost'];
	console.log(this.QAPost);
  }

  ngOnInit(): void {}
}
