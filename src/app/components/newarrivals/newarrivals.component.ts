import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-newarrivals',
  templateUrl: './newarrivals.component.html',
  styleUrls: ['./newarrivals.component.css']
})
export class NewarrivalsComponent implements OnInit {
  public lastproducts: any = [];
  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/products').subscribe( response => {
      this.lastproducts = response;
      const lastFor = this.lastproducts.length - 4;
      this.lastproducts = this.lastproducts.slice(+lastFor);
    });
  }

}
