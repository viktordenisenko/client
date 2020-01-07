import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: any = {};
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.http.get("http://localhost:3000/products/" + params.productId).subscribe(response => {
        this.product = response;
        console.log(this.product);
      });
    });
  }

}
