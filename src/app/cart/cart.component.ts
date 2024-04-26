import { Component, OnInit } from '@angular/core';
import { CartSkipTestsService } from '../cart--skip-tests.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
 
  constructor(private _CartSkipTestsService: CartSkipTestsService,private _ToastrService:ToastrService) {
  }
 cartData:any =null

  ubdatItemCount(productId:string , count:number){
    this._CartSkipTestsService.ubdatItemCount(productId,count).subscribe({

      next:(Response)=>{this.cartData = Response.data
      console.log(Response.data);
      
      },
      error:(err)=>console.log(err)
    })
  }

  renoveItem(productId:string){

this._CartSkipTestsService.removeCartItem(productId).subscribe({
next:(Response)=>{
  this.cartData = Response.data
  console.log(Response.data);
  
},
error:(err)=>console.log(err)

})
  }

  ngOnInit(): void {
    this._CartSkipTestsService.getLoggedusercart().subscribe({
      next: (response) =>{
        this.cartData =response.data;

       console.log(response.data)},
      error:(err)=>console.log(err),
    })
  }

  addToCart(productId: string) {
    this._CartSkipTestsService.addToCart(productId).subscribe({
      next: (response) => {
        this._ToastrService.success(response.message)
        console.log(response)
      },

      error: (err) => console.log(err),


    })
  }
}
