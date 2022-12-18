import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FreeBoardPost } from '../domain/freeboard';
import { GuestPost } from '../domain/guest';
import { QuestionAnswerPost } from '../domain/question-answer';
import {
  freeBoardPostSampleData,
  guestPostSampleData,
  questionAnswerPostSampleData,
} from '../sample-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  guestPostDataSource: MatTableDataSource<GuestPost> =
    new MatTableDataSource<GuestPost>([]);
  freeBoardPostDataSource: MatTableDataSource<FreeBoardPost> =
    new MatTableDataSource<FreeBoardPost>([]);
  QAPostDataSource: MatTableDataSource<QuestionAnswerPost> =
    new MatTableDataSource<QuestionAnswerPost>([]);

  guestPostDisplayedColumns: string[] = [
    'title',
    'region',
    'match_date',
    'status',
    'writer',
  ];
  freeBoardPostDisplayedColumns: string[] = ['title', 'created_date', 'writer'];
  QAPostDisplayedColumns: string[] = ['title', 'created_date', 'writer'];

  constructor() {
    this.guestPostDataSource.data = guestPostSampleData;
    this.freeBoardPostDataSource.data = freeBoardPostSampleData;
    this.QAPostDataSource.data = questionAnswerPostSampleData;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {}

  ngOnDestroy(): void {
    if (this.guestPostDataSource) this.QAPostDataSource.disconnect();
    if (this.freeBoardPostDataSource) this.QAPostDataSource.disconnect();
    if (this.QAPostDataSource) this.QAPostDataSource.disconnect();
  }
}
