import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedriveform',
  templateUrl: './templatedriveform.component.html',
  styleUrls: ['./templatedriveform.component.css']
})
export class TemplatedriveformComponent implements OnInit{

  userDetailForm = {
    user_name: '',
    email_id: '',
    pwd: ''
  };
  selectedFile: any = null;

  constructor(
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(JSON.stringify(this.userDetailForm));
  }

  onReset(form: NgForm): void {
    form.reset();
  }

}
