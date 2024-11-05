import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MustMatch } from '../../_helpers/must-match.validator';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  userDetailForm!: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder) {

  }
   ngOnInit(): void {
    this.userDetailForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
        gender: ['', Validators.required],
        address: ['', Validators.required]
    });
   }
   
  get f() { 
    return this.userDetailForm.controls; 
  }

  onSubmit() {
      this.submitted = true;
      if (this.userDetailForm.invalid) {
          return;
      }
      alert(JSON.stringify(this.userDetailForm.value));
  }

  onReset() {
      this.submitted = false;
      this.userDetailForm.reset();
  }

}
