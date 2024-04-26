import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { CartSkipTestsService } from '../cart--skip-tests.service';


@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css']
})
export class WhishlistComponent  implements OnInit{

constructor(private _WishlistService:WishlistService,
  private _ToastrService:ToastrService,
  private _CartSkipTestsService:CartSkipTestsService){}

Products: any[] = [];


  ngOnInit(): void {
  this._WishlistService.getWhishList().subscribe({
    next:(respons)=> {
     this.Products =respons.data
    }
   
    
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
        this._WishlistService.getWhishList().subscribe({
          next:(respons)=>{
            this.Products =respons.data
          }

        })
    }
   
      
    })
  }

  addToCart(productId: string) {
    this._CartSkipTestsService.addToCart(productId).subscribe({
      next: (response) => {
        this._CartSkipTestsService.numberOfCarttems.next(response.numOfCartItems)
        console.log(response)
      },

      error: (err) => console.log(err),


    })
  }

}
