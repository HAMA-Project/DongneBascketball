import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FreeBoardPost } from 'src/app/domain/freeboard';

@Component({
  selector: 'app-freeboard-detail',
  templateUrl: './freeboard-detail.component.html',
  styleUrls: ['./freeboard-detail.component.scss']
})
export class FreeboardDetailComponent implements OnInit {

  freeboardPost?: FreeBoardPost;

  constructor(
    private route: ActivatedRoute
  ) {
    this.freeboardPost = route.snapshot.data['freeboardPost'];
    console.log(this.freeboardPost);
  }

  ngOnInit(): void {
  }

}
