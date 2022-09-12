import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { productsService } from '../services/products.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private productservice:productsService, private route: ActivatedRoute, private router: Router) { }

   product : Product = {
    id : "",
    name : "",
    description : "",
    date : new Date(),
    price : 0
   }

   updateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
   this.productservice.getproductdetail(id).subscribe({
    next:(data:any)=>{
      this.product=data

      console.log(this.product)
    }
   })
  }

  updateProduct(data:any):void {
    console.log(this.product)
    this.product.name = data.name;
    this.product.description = data.description;
    this.product.price =  Number.parseFloat(data.price);
    this.productservice.updateproduct(this.product).subscribe({
      next: (data) => {
        this.router.navigateByUrl('/home');
        console.log(data);
      },
      error: (error) => {
        alert("error")
      }
    });

  }

}
