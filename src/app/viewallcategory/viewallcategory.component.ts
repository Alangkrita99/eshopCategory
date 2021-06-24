import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewallcategory',
  templateUrl: './viewallcategory.component.html',
  styleUrls: ['./viewallcategory.component.css']
})
export class ViewallcategoryComponent implements OnInit {
   cat:any=[];

  constructor(public productservice:ProductService) { }

  ngOnInit() {
    this.productservice.viewallcategories().subscribe
    (
      data=>
      {
        console.log(data);
        this.cat=data;
      },
      error=>
      {
        console.log(error);
        this.cat=undefined;
      }
    )
  }

   
}
/*books:Book[]=[];

constructor(public cgservice:CgService) { }

ngOnInit() {
  this.cgservice.getBooks().subscribe(data=>{console.log("First Line");this.books=data});
   console.log("Second line");
}*/
