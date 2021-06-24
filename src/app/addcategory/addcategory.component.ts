import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categorydto } from '../categorydto';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
    cat:Categorydto=new Categorydto();
    msg:string;
    @ViewChild("catform")
    form:NgForm;
    msgflag:boolean;
  constructor(public productservice:ProductService) { }

  ngOnInit() {
  }
addcat():void{
  this.productservice.addcategory(this.cat).subscribe
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
