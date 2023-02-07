import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/model/contact';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  contact: Contact = new Contact();
  api: string = 'https://mailthis.to/haykel.maaoui@gmail.com';
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  submit() {
    if (this.contactForm.invalid) {
      return;
    }
    // remplir object contact
    this.contact.name = this.contactForm.value.name;
    this.contact.email = this.contactForm.value.email;
    this.contact.subject = this.contactForm.value.subject;
    this.contact.message = this.contactForm.value.message;

    console.info(this.contact)
    this.SendEmail(this.contact);

  }

  SendEmail(input: any) {
    this.http.post(this.api, input.name).subscribe(
    )
  }
}