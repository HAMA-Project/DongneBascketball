import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-freeboard-create',
  templateUrl: './freeboard-create.component.html',
  styleUrls: ['./freeboard-create.component.scss']
})
export class FreeboardCreateComponent implements OnInit {

  freeboardForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    content: ['']
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
