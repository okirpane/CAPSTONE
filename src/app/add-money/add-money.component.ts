import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {
  addMoney: FormGroup;
  msg: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.addMoney = this.formBuilder.group({
      rad: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(2)]],
    });
  }
  SubmitForm(form: FormGroup) {

    if (this.addMoney.valid) {
      this.msg = "Success"
      this.router.navigateByUrl('/bank')
    }
    else {
      this.msg = "Try Again"
    }
  }
}
