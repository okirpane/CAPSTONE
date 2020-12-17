import { Component, OnInit } from '@angular/core';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OTPComponent implements OnInit {
  OTPmessage: string = ""
  msgHideAndShow: boolean;
  textMessage: string;
  constructor(
    private router: Router,
  ) {
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
  CopyToClipboard(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    this.router.navigateByUrl('/login')
  }

}
