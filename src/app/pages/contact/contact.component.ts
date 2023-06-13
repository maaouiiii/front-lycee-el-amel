import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/model/contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  contact: Contact = new Contact();
  api: string = 'https://formspree.io/f/mzbqejrv';
  submited: boolean = false;
  successMsg!: string;
  errorMsg!: string;

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
    this.submited = true;
    // remplir object contact
    this.contact.name = this.contactForm.value.name;
    this.contact.email = this.contactForm.value.email;
    this.contact.subject = this.contactForm.value.subject;
    this.contact.message = this.contactForm.value.message;

    console.info(this.contact)
    this.SendEmail(this.contact);

  }

  SendEmail(input: Contact) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(this.api,
      { name: this.contact.name, replyto: this.contact.email, subject: this.contact.subject, message: this.contact.message },
      { 'headers': headers }).subscribe({
        next: (
          (response => {
            console.info(response);
            this.initForm();
            this.successMsg = 'Your message has been sent. Thank you!'
          })
        ),
        error: (
          (error) => {
            this.errorMsg = error.error.error;
          }
        )
      }
      );
  }
}

