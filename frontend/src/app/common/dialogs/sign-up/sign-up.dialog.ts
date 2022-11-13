import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'sign-up-dialog',
    templateUrl: './sign-up.dialog.html',
    styleUrls: ['../global-dialog.scss', './sign-up.dialog.scss'],
})
export class SignUpDialog {
  
  constructor(
    public dialogRef: MatDialogRef<SignUpDialog>,
    @Inject(MAT_DIALOG_DATA) data?: any
  ) { }

  signUp() {
    this.dialogRef.close({
      "email": "test@gmail.com",
      "nickName": "mahanbeom",
      "password": "1234"
    });
  }
    
}