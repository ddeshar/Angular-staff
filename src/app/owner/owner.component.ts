import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  contacts: any[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
	this.contactService.getContacts().subscribe((data : any[])=>{
		console.log(data);
		this.contacts = data;
    })
  }

}
