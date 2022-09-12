import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/product';
import { productsService } from '../services/products.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  productList!: Product[];

  constructor(private productsservice: productsService, private router: Router ) {}
  @Input() search: String = ""
  ngOnInit(): void {
    this.productsservice.getallproducts().subscribe({
      next: (data) => {
        console.log(data);
        this.productList = data;
        console.log(this.productList);
      },
      error: (error) => {
        alert('error');
      },
    });
  }

  removeproduct(id: string, i: number): void {
    this.productsservice.deleteproduct(id).subscribe({
      next: (data) => {
        alert('product deleted');
        this.productList.splice(i, 1);
        console.log(data);
      },
      error: (error) => {
        alert('error');
      },
    });
  }

  gotodetails(id:string):void {

    this.router.navigateByUrl('/product/'+id);
  }

  addproduct ():void {
    this.router.navigateByUrl('addproduct');
  }

  searchProduct()
  {
    if (this.search != "")
    {
      this.productList = this.productList.filter(
        res=>{
          return res.name.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
        }
       )
    }
    else if (this.search==="")
    {
     this.ngOnInit()
    }
  }
}
