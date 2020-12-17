import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-form',
  templateUrl: './change-form.component.html',
  styleUrls: ['./change-form.component.css']
})
export class ChangeFormComponent implements OnInit {
  registerForm: FormGroup;
  msg: string;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.minLength(12)]],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
      address: ['', Validators.required]
    });
  }


  SubmitForm(form: FormGroup) {

    if (this.registerForm.valid) {
      this.msg = "Signup Successful"
    }
    else {
      this.msg = "Try again Later"
    }
  }
}
