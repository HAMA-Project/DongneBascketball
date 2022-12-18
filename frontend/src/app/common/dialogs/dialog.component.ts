import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm.dialog.html',
  styleUrls: ['./global-dialog.scss']
})
export class ConfirmDialog implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public message: string,
  ) { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete.dialog.html',
  styleUrls: ['./global-dialog.scss']
})
export class DeleteDialog implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public message: string,
  ) { }

  ngOnInit(): void {
  }

}

