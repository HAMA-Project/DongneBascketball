import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DeleteDialog } from 'src/app/common/dialogs/dialog.component';
import { QuestionAnswerPost } from 'src/app/domain/question-answer';

@Component({
	selector: 'app-question-answer-detail',
	templateUrl: './question-answer-detail.component.html',
	styleUrls: ['./question-answer-detail.component.scss'],
})
export class QuestionAnswerDetailComponent implements OnInit {
	QAPost?: QuestionAnswerPost;
	edit: boolean = false;
	
	QAEditForm: FormGroup = this.fb.group({
		title: ['', Validators.required],
		content: ['']
	});

	constructor(
		private route: ActivatedRoute,
		private fb: FormBuilder,
		private dialog: MatDialog
	) {
		this.QAPost = route.snapshot.data['QAPost'];
		if(this.QAPost) {
			this.QAEditForm.get('title')?.setValue(this.QAPost.title);
			this.QAEditForm.get('content')?.setValue(this.QAPost.content);
			this.QAEditForm.get('title')?.disable();
			this.QAEditForm.get('content')?.disable();
		}
	}

	ngOnInit(): void {

	}

	editQAPost() {
		if(this.QAEditForm.get('title')?.invalid) return;

		this.edit = !this.edit;
		if(this.edit) {
			this.QAEditForm.get('title')?.enable();
			this.QAEditForm.get('content')?.enable();
		} else {
			// TO DO: 게시물 수정 API 호출
			this.QAEditForm.get('title')?.disable();
			this.QAEditForm.get('content')?.disable();
		}
	}

	openDeleteDialog() {
		const message = '해당 게시글을 삭제하시겠습니까?';
		this.dialog.open(DeleteDialog, { width: '25vw',
			data: message
		}).afterClosed().subscribe( data => {
			if(!data) return;
			else this.deleteQAPost();
		});
	}

	deleteQAPost() {
		console.log("delete!!!!!!");
	}
}
