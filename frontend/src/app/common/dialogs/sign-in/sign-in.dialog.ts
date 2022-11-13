import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'sign-in-dialog',
    templateUrl: './sign-in.dialog.html',
    styleUrls: ['../global-dialog.scss', './sign-in.dialog.scss'],
})
export class SignInDialog {
  
  constructor(
    public dialogRef: MatDialogRef<SignInDialog>,
    @Inject(MAT_DIALOG_DATA) data?: any
  ) { }
    
}
