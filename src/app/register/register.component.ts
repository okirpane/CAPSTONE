import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  msg: string;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.minLength(12)]],
      // gender: ['', Validators.required],
      password: ['', Validators.required],
      // passwordConfirm: ['', validate],
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

function validate(control: FormControl): { [key: string]: any } | null {
  const controlToCompare = control.parent.get(this.appConfirmEqualvalidator)
  if (controlToCompare && controlToCompare.value !== control.value) {
    return { 'notEqual': true }
  }
  return null
}