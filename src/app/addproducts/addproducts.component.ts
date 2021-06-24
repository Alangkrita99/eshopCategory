import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';
import { Productdto } from '../productdto';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
   prods:Productdto= new Productdto();
   msg:string;
   @ViewChild("prodsform")
   form:NgForm;
   msgflag:boolean;
  constructor(public productservice:ProductService) { }

  ngOnInit() {
  }
  addprods():void{
    this.productservice.addproducts(this.prods).subscribe
      (
        data=>
        {
          console.log(data);
          this.msg=data.message;
          this.form.reset();
          this.msgflag=true;
        },
        error=>
        {
          console.log(error);
          this.msg=error.error.message;
          this.msgflag=false;
        }
      )
}
}
