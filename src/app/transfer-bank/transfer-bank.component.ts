import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-bank',
  templateUrl: './transfer-bank.component.html',
  styleUrls: ['./transfer-bank.component.css']
})
export class TransferBankComponent implements OnInit {
  transBank: FormGroup;
  msg: string
  uname: any = /[a-zA-Z]{4}\d{7}$/
  bname: any = /^[0-9]*$/
  cname: any = /^[a-zA-Z ]*$/

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.transBank = this.formBuilder.group({
      IFSC: ['', [Validators.required, Validators.pattern(this.uname)]],
      accNumber: ['', [Validators.required, Validators.pattern(this.bname)]],
      userName: ['', [Validators.required, Validators.pattern(this.cname)]],
      pAmount: ['', [Validators.required, Validators.min(0.01)]]
    })
  }

  SubmitForm(form: FormGroup) {

    if (this.transBank.valid) {
      this.msg = "Success"
    }
    else {
      this.msg = "Try Again"
    }
  }

}
