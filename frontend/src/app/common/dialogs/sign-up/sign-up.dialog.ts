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
    
}