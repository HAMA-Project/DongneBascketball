import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators, AsyncValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable, of } from "rxjs";
import { SignupUserIn } from "src/app/domain/user";
import { ApiService } from "src/app/service/api.service";
import { SignInDialog } from "../sign-in/sign-in.dialog";

export const checkPasswords: AsyncValidatorFn = async (group: AbstractControl): Promise<ValidationErrors | null> => {
	const password = group.get('password')?.value;
	const passwordChk = group.get('confirmPassword')?.value
	console.log(group);
	console.log(passwordChk);
	return password === passwordChk ? null : { notSame: true }
} // 다시 구현 필요...


@Component({
	selector: 'sign-up-dialog',
	templateUrl: './sign-up.dialog.html',
	styleUrls: ['../global-dialog.scss', './sign-up.dialog.scss'],
})
export class SignUpDialog {

	signUpForm: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		username: ['', Validators.required],
		password: ['', Validators.required],
		confirmPassword: ['', [Validators.required, checkPasswords]]
	});

	emailAuthentication: boolean = false;
	authenticationSuccessful: boolean = false;
	authenticationCode?: string;
	checkAuthenticationCode?: string;

	constructor(
		private fb: FormBuilder,
		private svcApi: ApiService,
		public dialogRef: MatDialogRef<SignUpDialog>,
		private dialog: MatDialog,
		@Inject(MAT_DIALOG_DATA) data?: any
	) {
		this.signUpForm.get('email')?.addAsyncValidators(this.checkEmailDup);
		this.signUpForm.get('username')?.addAsyncValidators(this.checkUsernameDup);
	}

	private checkEmailDup: AsyncValidatorFn = (email: AbstractControl): Observable<ValidationErrors | null> => {
		const emailValue = email.value;
		let emailDuplicate: boolean = false;
		if (!emailValue) return of(null);
		this.svcApi.checkEmail(emailValue).subscribe(res => {
			res.duplicate ? (emailDuplicate = true) : (emailDuplicate = false);
		});
		return of(emailDuplicate ? { duplicate: true } : null);
	}

	private checkUsernameDup: AsyncValidatorFn = (username: AbstractControl): Observable<ValidationErrors | null> => {
		const usernameValue = username.value;
		let usernameDuplicate: boolean = false;
		if (!usernameValue) return of(null);
		this.svcApi.checkUsername(usernameValue).subscribe(res => {
			res.duplicate ? (usernameDuplicate = true) : (usernameDuplicate = false);
		});
		return of(usernameDuplicate ? { duplicate: true } : null);
	}

	sendAuthenticationMail() {
		console.log("인증 메일 발송 성공");
		const email = this.signUpForm.get('email')?.value;
		this.svcApi.authEmail(email).subscribe({
			next: (res) => {
				this.checkAuthenticationCode = res.message;
				this.emailAuthentication = true;
			},
			error: (err) => {
				console.log(err);
			}
		});

		// TO DO: 제한 시간 시작
	}

	authenticationVerification() {
		if (!this.authenticationCode) return;
		if (this.authenticationCode === this.checkAuthenticationCode) {
			this.emailAuthentication = false;
			this.authenticationSuccessful = true;
		} else {
			return window.alert("인증에 실패하셨습니다.");
		}
	}

	signUp() {
		console.log(this.signUpForm.getRawValue());
		const rv = this.signUpForm.getRawValue();
		const finalForm: SignupUserIn = {
			"email": rv.email,
			"username": rv.username,
			"password": rv.password
		}
		this.svcApi.signUp(finalForm).subscribe({
			next: () => {
				this.dialogRef.close();
				this.dialog.open(SignInDialog);
			},
			error: (err) => {
				console.log(err);
			}
		})
	}

	// ===============================================================================
	// ERROR MESSAGE         
	// ===============================================================================

	getEmailErrorMessage() {
		const email = this.signUpForm.get('email');
		if (email?.hasError('duplicate')) return "* 이미 사용중인 이메일 입니다.";
		else if (email?.hasError('email')) return "* 이메일 형식에 맞게 입력해주세요.";
		else return "* 이메일 입력은 필수입니다.";
	}

	getUsernameErrorMessage() {
		const username = this.signUpForm.get('username');
		if (username?.hasError('duplicate')) return "* 이미 사용중인 닉네임 입니다.";
		else return "* 닉네임 입력은 필수입니다.";
	}

	getPasswordErrorMessage() {
		if (this.signUpForm.get('password')?.hasError('required')) return "* 비밀번호 입력은 필수입니다.";
		else return "";
	}

	getConfirmPasswordErrorMessage() {
		if (this.signUpForm.get('confirmPassword')?.hasError('notSame')) return "* 비밀번호가 일치하지 않습니다.";
		else if (this.signUpForm.get('confirmPassword')?.hasError('required')) return "* 비밀번호 확인 입력은 필수입니다.";
		else return "";
	}
}