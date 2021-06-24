import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ViewallcategoryComponent } from './viewallcategory/viewallcategory.component';
import { ViewproductsbycategorynameComponent } from './viewproductsbycategoryname/viewproductsbycategoryname.component';
import { ViewproductsbyproductIdComponent } from './viewproductsbyproduct-id/viewproductsbyproduct-id.component';

const routes: Routes = [{path:'viewbycategoryname',component:ViewproductsbycategorynameComponent},
                       {path:'viewbyproductId',component:ViewproductsbyproductIdComponent},
                       {path:'addproducts',component:AddproductsComponent},
                       {path:'addcategory',component:AddcategoryComponent},
                      {path:'viewall',component:ViewallcategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
