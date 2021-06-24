
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorydto } from './categorydto';
import { Productdto } from './productdto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) {
  }

  viewproductsbyproductId(prodId:number):Observable<any>{
    return this.http.get("http://localhost:8082/elecapp/viewproductdetailbyproductid/"+ prodId );
  }
  viewproductsbycategoryName(catName:string):Observable<any>{
    return this.http.get("http://localhost:8082/elecapp/viewallproductsbycategory/"+ catName );
  }
  viewallcategories():Observable<any>{
    return this.http.get("http://localhost:8082/elecapp/viewallcategory");
  }
  addcategory(cat:Categorydto):Observable<any>{
    return this.http.post("http://localhost:8082/elecapp/addcategory",cat);
  }
  addproducts(prods:Productdto):Observable<any>{
    return this.http.post("http://localhost:8082/elecapp/addproductdetails",prods);
  }
}
