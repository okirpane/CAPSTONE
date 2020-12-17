import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-form',
  templateUrl: './change-form.component.html',
  styleUrls: ['./change-form.component.css']
})
export class ChangeFormComponent implements OnInit {
  registerForm: FormGroup;
  msg: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });
  }


  SubmitForm(form: FormGroup) {

    if (this.registerForm.valid) {
      this.msg = "Signup Successful"
      this.router.navigateByUrl('/login')
    }
    else {
      this.msg = "Try again Later"
    }
  }
}
