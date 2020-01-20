import { Component, OnInit } from '@angular/core';
import {LocalStorage} from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @LocalStorage('cart')
  public cart ;

  constructor() { }

  ngOnInit() {


  }

}
