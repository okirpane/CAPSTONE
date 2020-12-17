import { Component, OnInit } from '@angular/core';
import { OtpChangeComponent } from '../otp-change/otp-change.component'
import { NgForm } from '@angular/forms';
import {MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  constructor(private dialog: MatDialog) { }
  submitForgotForm(form: NgForm) {
    console.log(form.value.email);
    console.log("Verifying")
    this.onGen()
  }
  onGen(){
    console.log ("This is happening")
    this.dialog.open(OtpChangeComponent);
  }
  ngOnInit() {
  }

}
