import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInDialog } from '../dialogs/sign-in/sign-in.dialog';
import { SignUpDialog } from '../dialogs/sign-up/sign-up.dialog';

@Component({
  selector: 'app-global-nav-bar',
  templateUrl: './global-nav-bar.component.html',
  styleUrls: ['./global-nav-bar.component.scss']
})
export class GlobalNavBarComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openSignInDialog() {
    this.dialog.open(SignInDialog, { width: '25vw', disableClose: true }).afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSignUpDialog() {
    this.dialog.open(SignUpDialog, { width: '25vw', disableClose: true }).afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
