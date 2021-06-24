import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewproductsbycategoryname',
  templateUrl: './viewproductsbycategoryname.component.html',
  styleUrls: ['./viewproductsbycategoryname.component.css']
})
export class ViewproductsbycategorynameComponent implements OnInit {
  prods:any=[];
  msg:string;
  catName:string;
  constructor(public productservice:ProductService) { }

  ngOnInit() {
  }

  viewbycatName():void {
    if(this.catName==undefined||this.catName==null)
    {
      this.msg="Enter the Category Name";
      return ;
    }
    this.productservice.viewproductsbycategoryName(this.catName).subscribe
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
