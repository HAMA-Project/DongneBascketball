import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuestPost } from 'src/app/domain/guest';

@Component({
	selector: 'app-guest-announcement-detail',
	templateUrl: './guest-announcement-detail.component.html',
	styleUrls: ['./guest-announcement-detail.component.scss']
})
export class GuestAnnouncementDetailComponent implements OnInit {

	guestPost?: GuestPost;

	constructor(
		private route: ActivatedRoute
	) {
		this.guestPost = route.snapshot.data['GuestPost'];
		console.log(this.guestPost);
	}

	ngOnInit(): void {
	}

}
