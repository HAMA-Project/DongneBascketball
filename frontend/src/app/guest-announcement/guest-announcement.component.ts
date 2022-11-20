import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-guest-announcement',
  templateUrl: './guest-announcement.component.html',
  styleUrls: ['./guest-announcement.component.scss']
})
export class GuestAnnouncementComponent implements OnInit {;
  readonly regionList: string[] = ['서울', '경기', '인천'];

  // guestForm: FormGroup = this.fb.group({
  //   title: ['', Validators.required],
  //   region: 
  // });

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onFilterRegions(event: MatSelectChange) {
    console.log(event);
    // TO DO : event.value에 선택한 값이 들어가므로 해당 값으로 지역 검색을 하도록 로직 구현
  }

}
