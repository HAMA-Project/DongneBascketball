import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { LoginUserIn } from "src/app/domain/user";
import { ApiService } from "src/app/service/api.service";

@Component({
	selector: 'sign-in-dialog',
	templateUrl: './sign-in.dialog.html',
	styleUrls: ['../global-dialog.scss', './sign-in.dialog.scss'],
})
export class SignInDialog {

	signInForm: FormGroup = this.fb.group({
		email: [''],
		password: ['']
	});

	constructor(
		private fb: FormBuilder,
		private svcApi: ApiService,
		public dialogRef: MatDialogRef<SignInDialog>,
		@Inject(MAT_DIALOG_DATA) data?: any,
	) {

	}

	openUrlLink(url: string) {
		window.open(url, '_blank');
	}

	signIn() {
		const rv = this.signInForm.getRawValue();
		console.log(rv);
		const finalForm: LoginUserIn = {
			"email": rv.email,
			"password": rv.password
		};
		this.svcApi.signIn(finalForm).subscribe({
			next: (res) => {
				// auth 설정 및 세션 또는 토큰 로컬 스토리지에 등록 후 로그인 되도록 구현
				this.dialogRef.close();
			},
			error: (err) => {
				console.log(err);
			}
		})
	}

}
