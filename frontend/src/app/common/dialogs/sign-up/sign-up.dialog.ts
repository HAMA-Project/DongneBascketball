import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

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
    confirmPassword: ['', Validators.required]
  });

  emailAuthentication: boolean = false;
  authenticationSuccessful: boolean = false;
  authenticationCode: number = 0;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SignUpDialog>,
    @Inject(MAT_DIALOG_DATA) data?: any
  ) { }

  sendAuthenticationMail() {
    console.log("인증 메일 발송 성공");
    console.log(this.signUpForm.get('email')?.value);
    this.emailAuthentication = true;
    // sendAuthenticationMail API
    /*
      this.api.post("/auth/send~", {
        "email": this.signUpForm.get('email')?.value
      }).subscribe((auth) => {
        if(auth) ~
        else ~
      });
    */
   
    // TO DO: 제한 시간 시작
  }

  authenticationVerification() {
    this.emailAuthentication = false;
    this.authenticationSuccessful = true;
  }

  signUp() {
    console.log(this.signUpForm.getRawValue());
    // sign-up API
    /*
      const rv = this.signUpForm.getRawValue();
      this.api.post("/user/sign-up", {
        "email": rv.email,
        "username": rv.username,
        "password": rv.password
      }).subscribe({
        next: () => {
          this.dialogRef.close();
        },
        error: (err) => {
          console.log(err);
        }
      })
    */
  }

  // ===================================
  //           Error Message          
  // ===================================

  getEmailErrorMessage() {
    const email = this.signUpForm.get('email');
    if (email?.hasError('duplicate'))  return "* 이미 사용중인 이메일 입니다.";
    else if (email?.hasError('email')) return "* 이메일 형식에 맞게 입력해주세요.";
    else                               return "* 이메일 입력은 필수입니다.";
  }

  getNameErrorMessage() {
    if (this.signUpForm.get('username')?.hasError('required')) return "* 닉네임 입력은 필수입니다.";
    else                                                       return "";
  }

  getPasswordErrorMessage() {
    if (this.signUpForm.get('password')?.hasError('required')) return "* 비밀번호 입력은 필수입니다.";
    else                                                       return "";
  }

  getConfirmPasswordErrorMessage() {
    if (this.signUpForm.get('confirmPassword')?.hasError('required')) return "* 비밀번호 확인 입력은 필수입니다.";
    else                                                              return "";
  }
}