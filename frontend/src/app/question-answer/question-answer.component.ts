import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { QuestionAnswerPost } from '../domain/question-answer';
import { questionAnswerPostSampleData } from '../sample-data';
import { searchFilter } from '../utils/util-functions';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  QAPostDisplayedColumns: string[] = [
    'title', 'created_date', 'updated_date', 'writer'
  ];
  QAPostDataSource: MatTableDataSource<QuestionAnswerPost> = new MatTableDataSource<QuestionAnswerPost>([]);

  constructor() {
    this.QAPostDataSource.data = questionAnswerPostSampleData;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.QAPostDataSource.paginator = this.paginator;
    this.QAPostDataSource.filterPredicate = searchFilter<QuestionAnswerPost>('writer');
  }

  ngOnDestroy(): void {
    if(this.QAPostDataSource) this.QAPostDataSource.disconnect();
  }

  onFilterWriter(event: MatCheckboxChange) {
    console.log(event);
    if(event.checked) {
      this.QAPostDataSource.filter = "마한범";
      if(this.QAPostDataSource.paginator) {
        this.QAPostDataSource.paginator.firstPage();
      }
    } else {
      this.QAPostDataSource.filter = '';
    }
  }

}
