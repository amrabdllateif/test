import { Products } from './../products';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartSkipTestsService } from '../cart--skip-tests.service';
import { WishlistService } from '../wishlist.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  Products: any[] = [];
  categories: any[] = [];
  constructor(private _ProductsService: ProductsService,
    private _CartSkipTestsService: CartSkipTestsService, private _WishlistService:WishlistService, private _ToastrService:ToastrService) {

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

  addFav(productId: string | any): void {
    this._WishlistService.addToWhishList(productId).subscribe({
      next: (response) => {

        this._ToastrService.success(response.message)
        console.log(response)
      },


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

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({

      next: (response) => this.Products = response.data
    })

  }

}
