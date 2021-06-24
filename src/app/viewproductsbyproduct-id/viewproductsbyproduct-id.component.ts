import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewproductsbyproduct-id',
  templateUrl: './viewproductsbyproduct-id.component.html',
  styleUrls: ['./viewproductsbyproduct-id.component.css']
})
export class ViewproductsbyproductIdComponent implements OnInit {
   
  prodId:number;
  prods:any=undefined;
  msg:string;
  constructor(public productservice:ProductService) { }

  ngOnInit() {
  }

  viewbyprodId():void{
    if(this.prodId==undefined||this.prodId==null||this.prodId<=0)
    {
      this.msg="Enter the Product Id greater than 0";
      return ;
    }
    this.productservice.viewproductsbyproductId(this.prodId).subscribe
    (
      data=>
      {
        console.log(data);
        this.prods=data;
        this.msg=undefined;
      },
      error=>
      {
        console.log(error);
        this.msg=error.error.message;
        this.prods=undefined;
      }
    )
  }
}
