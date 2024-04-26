import { Products } from './../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartSkipTestsService } from '../cart--skip-tests.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent  implements OnInit{
  constructor(
    private _ActivatedRoute:ActivatedRoute  , 
    private _ProductsService:ProductsService ,
     private _CartSkipTestsService:CartSkipTestsService,
     private _ToastrService:ToastrService){
  }
Productdetails:any
ProductId:any;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.ProductId = params.get('id')
    });
    this._ProductsService.getproductdetails(this.ProductId).subscribe({

      next:(Response)=> this.Productdetails = Response.data
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
  

    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1,
       
        },
      },
     nav: true
  };
}

