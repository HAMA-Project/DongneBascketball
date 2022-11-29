import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { GuestPost } from '../domain/guest';
import { guestPostSampleData } from '../sample-data';
import { searchFilter } from '../utils/util-functions';

@Component({
  selector: 'app-guest-announcement',
  templateUrl: './guest-announcement.component.html',
  styleUrls: ['./guest-announcement.component.scss'],
})
export class GuestAnnouncementComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  readonly regionList: string[] = ['서울', '경기', '인천'];

  // guestForm: FormGroup = this.fb.group({
  //   title: ['', Validators.required],
  //   region:
  // });

  guestPostDisplayedColumns: string[] = [
    'title',
    'region',
    'match_date',
    'start_time',
    'end_time',
    'created_date',
    'updated_date',
    'status',
    'writer',
  ];
  guestPostDataSource: MatTableDataSource<GuestPost> =
    new MatTableDataSource<GuestPost>([]);

  constructor() {
    this.guestPostDataSource.data = guestPostSampleData;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.guestPostDataSource.paginator = this.paginator;
    this.guestPostDataSource.filterPredicate =
      searchFilter<GuestPost>('writer');
  }

  ngOnDestroy(): void {
    if (this.guestPostDataSource) this.guestPostDataSource.disconnect();
  }

  onFilterRegions(event: MatSelectChange) {
    console.log(event);
    // TO DO : event.value에 선택한 값이 들어가므로 해당 값으로 지역 검색을 하도록 로직 구현
  }

  onFilterWriter(event: MatCheckboxChange) {
    console.log(event);
    if (event.checked) {
      this.guestPostDataSource.filter = '마한범';
      if (this.guestPostDataSource.paginator) {
        this.guestPostDataSource.paginator.firstPage();
      }
    } else {
      this.guestPostDataSource.filter = '';
    }
  }
}
