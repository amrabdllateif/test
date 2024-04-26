import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { WishlistService } from '../wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { CartSkipTestsService } from '../cart--skip-tests.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit{
  Products: any[] = [];
constructor(private _ProductsService:ProductsService,
  private _WishlistService:WishlistService,
  private _ToastrService:ToastrService,private _CartSkipTestsService:CartSkipTestsService){}

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({

      next: (response) => this.Products = response.data
    })
  };
  addFav(productId: string | any): void {
    this._WishlistService.addToWhishList(productId).subscribe({
      next: (response) => {

        this._ToastrService.success(response.message)
        console.log(response)
      },


    })

  }

  addToCart(productId: string) {
    this._CartSkipTestsService.addToCart(productId).subscribe({
      next: (response) => {
        this._CartSkipTestsService.numberOfCarttems.next(response.numOfCartItems)
        console.log(response)
        this._ToastrService.success(response.message
          )
      },

      error: (err) => console.log(err),


    })
  }

  removeFav(productId:string |any){
    this._WishlistService.removeWhishList(productId).subscribe({
    next:(respons)=>{
      console.log(respons),
      this._ToastrService.success(respons.message
        )
    }
   
      
    })
  }

} 
  


