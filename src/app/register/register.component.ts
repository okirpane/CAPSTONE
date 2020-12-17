import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  msg: string;
  uname: any = /^[a-zA-Z ]*$/
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.minLength(12)]],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern(this.uname)]]
    });
  }


  SubmitForm(form: FormGroup) {

    if (this.registerForm.valid) {
      this.msg = "Signup Successful"
      this.router.navigateByUrl('/home')
    }
    else {
      this.msg = "Try again Later"
    }
  }
}