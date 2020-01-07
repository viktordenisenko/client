import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public departments: any = {};
  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/departments").subscribe(response => {
      this.departments = response;
      console.log(this.departments);
    })

  }

}
