import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

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
    // sign-in API
    /*
      this.api.post('user/sign-in', {
        "email": rv.email,
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
