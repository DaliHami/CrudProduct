import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductPost } from '../Models/product';


@Injectable()
export class productsService
{

  endPoint = 'http://localhost:8000/api/products.json';
  constructor(private httpclient:HttpClient){

  }

  getallproducts(): Observable<any>
  {
    return this.httpclient.get(this.endPoint);
  }

  deleteproduct(id:string):Observable<any> {

   return this.httpclient.delete('http://localhost:8000/api/products/'+id)

  }

  getproductdetail(id:string):Observable<any>
  {

      return this.httpclient.get('http://localhost:8000/api/products/'+id)

  }

 updateproduct(product:Product) : Observable<any>
  {
   return  this.httpclient.put('http://localhost:8000/api/products/'+product.id,product);
  }

  addProduct(product:ProductPost):Observable<any> {

    return this.httpclient.post('http://localhost:8000/api/products',product);
    }



}


