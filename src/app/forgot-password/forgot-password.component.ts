import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']

})
export class ForgotPasswordComponent implements OnInit {
  constructor() { }
  submitForgotForm(form: NgForm) {
    console.log(form.value.email);
    console.log(form.value.password);
    console.log("Verifying")

  }
  ngOnInit() {
  }
}