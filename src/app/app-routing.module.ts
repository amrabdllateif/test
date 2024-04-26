import { Title } from '@angular/platform-browser';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WhishlistComponent } from './whishlist/whishlist.component';




const routes: Routes = [
{path:"", redirectTo:"home", pathMatch:"full"},
{path:"home", canActivate:[authGuard], component:HomeComponent},
{path:'cart',canActivate:[authGuard],component:CartComponent},
{path:'checkout',canActivate:[authGuard],component:CheckoutComponent},
{path:'products',canActivate:[authGuard],component:ProductComponent},
{path:'whislist',canActivate:[authGuard],component:WhishlistComponent},
{path:'Productdetails/:id', canActivate:[authGuard],component:ProductdetailsComponent},
{path:'categories', canActivate:[authGuard],component:CategoriesComponent},
{path:'brands',canActivate:[authGuard],component:BrandsComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:"**", component:NotFoundComponent,},


];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
