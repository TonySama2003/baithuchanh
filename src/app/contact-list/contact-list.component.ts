import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Output() contactSelect = new EventEmitter<any>();
  contacts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.http.get<any[]>('assets/contacts.json').subscribe(data => {
      this.contacts = data;
    });
  }

  selectContact(contact: any) {
    this.contactSelect.emit(contact);
  }
}


