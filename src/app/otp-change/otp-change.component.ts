import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-otp-change',
  templateUrl: './otp-change.component.html',
  styleUrls: ['./otp-change.component.css']
})
export class OtpChangeComponent implements OnInit {
  OTPmessage: string = ""
  msgHideAndShow: boolean;
  textMessage: string;
  state: boolean = false;
  constructor() {
    this.OTPmessage = this.genOTP()
  }

  ngOnInit(): void {
  }

  genOTP() {
    for (let i = 0; i < 6; i++) {
      let randNumber = this.getRandomInt(10)
      this.OTPmessage = this.OTPmessage + randNumber
    }
    console.log(this.OTPmessage)
    return this.OTPmessage
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  changeState() {
    return !this.state;
  }
}
