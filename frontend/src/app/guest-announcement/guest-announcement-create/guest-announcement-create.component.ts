import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
	selector: 'app-guest-announcement-create',
	templateUrl: './guest-announcement-create.component.html',
	styleUrls: ['./guest-announcement-create.component.scss']
})
export class GuestAnnouncementCreateComponent implements OnInit {

	readonly regionList: string[] = ['서울', '경기', '인천'];

	guestForm: FormGroup = this.fb.group({
		title: ['', Validators.required],
		content: [''],
		region: [[]],
		matchDate: [''],
		startTime: [''],
		endTime: [''],
	});

	constructor(
		private fb: FormBuilder
	) { }

	ngOnInit(): void {
	}

	onFilterRegions(event: MatSelectChange) {
		console.log(event);
		this.guestForm.get('region')?.setValue(event.value);
		// TO DO : event.value에 선택한 값이 들어가므로 해당 값으로 지역 검색을 하도록 로직 구현
	}

	createGuestPost() {
		const result = this.guestForm.getRawValue();
		console.log(result);
	}

}
