import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './../helpers/must-match.validators';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private service:HeroService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        contact: ['', Validators.required],

        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        // acceptTerms: [false, Validators.requiredTrue]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

   this.service.signupRequest(this.registerForm.value).subscribe((res)=>{

    console.log(res)
   })
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
}
