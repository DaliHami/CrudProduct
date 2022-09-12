import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product, ProductPost } from '../Models/product';
import { productsService } from '../services/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product : ProductPost = {
    name : "",
    description : "",
    date :  new Date(),
    price : 0
   }
  constructor(public datepipe: DatePipe, private productservice:productsService, private router: Router) { }
  addproductForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
  }
  addProduct(data:any):void
  {
    console.log(data)
    this.product.name = data.name;
    this.product.description = data.description;
    this.product.date = new Date(Date.parse(this.datepipe.transform((new Date()), 'MM-dd-yyyy h:mm:ss')|| ''));
    this.product.price = Number.parseFloat(data.price);
    console.log(this.product+"////////////////////////////");

    this.productservice.addProduct(this.product).subscribe({
      next: (data) => {
        this.router.navigateByUrl('/home');
        console.log(data.price+"DATA ////////////////////////////////////////");
      },
      error: (error) => {
        alert("error")
      }
    });
  }
}
