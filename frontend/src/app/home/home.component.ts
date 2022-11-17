import { Component, OnInit } from '@angular/core';
import { freeBoardPostSampleData, guestPostSampleData, questionAnswerPostSampleData } from '../sample-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  guestPostDisplayedColumns: string[] = ['title', 'region', 'match_date', 'status', 'writer'];
  guestPostDataSource = guestPostSampleData;

  freeBoardPostDisplayedColumns: string[] = ['title', 'created_date', 'writer'];
  freeBoardPostDataSource = freeBoardPostSampleData;

  questionAnswerPostDisplayedColumns: string[] = ['title', 'created_date', 'writer'];
  questionAnswerPostDataSource = questionAnswerPostSampleData;



  constructor() { }

  ngOnInit(): void {
  }

}
