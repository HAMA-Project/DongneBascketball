import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FreeBoardPost } from '../domain/freeboard';
import { freeBoardPostSampleData } from '../sample-data';
import { searchFilter } from '../utils/util-functions';

@Component({
  selector: 'app-freeboard',
  templateUrl: './freeboard.component.html',
  styleUrls: ['./freeboard.component.scss']
})
export class FreeboardComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  freeBoardPostDisplayedColumns: string[] = [
    'title', 'created_date', 'updated_date', 'writer'
  ];
  freeBoardPostDataSource: MatTableDataSource<FreeBoardPost> = new MatTableDataSource<FreeBoardPost>([]);

  constructor() {
    this.freeBoardPostDataSource.data = freeBoardPostSampleData;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.freeBoardPostDataSource.paginator = this.paginator;
    this.freeBoardPostDataSource.filterPredicate = searchFilter<FreeBoardPost>('writer');
  }
  
  ngOnDestroy(): void {
    if(this.freeBoardPostDataSource) this.freeBoardPostDataSource.disconnect();
  }

  onFilterWriter(event: MatCheckboxChange) {
    console.log(event);
    if(event.checked) {
      this.freeBoardPostDataSource.filter = "마한범";
      if(this.freeBoardPostDataSource.paginator) {
        this.freeBoardPostDataSource.paginator.firstPage();
      }
    } else {
      this.freeBoardPostDataSource.filter = '';
    }
  }

}
