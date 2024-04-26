import { WishlistService } from './../wishlist.service';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartSkipTestsService } from '../cart--skip-tests.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoding:boolean = false;
  cartNumbers:number= 0;

  logout(){
    this._AuthService.logout();
  }
  constructor(private _AuthService:AuthService,
    private_CartSkipTestsService:CartSkipTestsService,
    private _WishlistService:WishlistService){

    
    _AuthService.userData.subscribe({

      next:()=>{
        if(_AuthService.userData.getValue() !==null)
        {
          this.isLoding =true;
        }
        else{
          this.isLoding = false;
        }
      }
    })
    

    private_CartSkipTestsService.numberOfCarttems.subscribe({
      next:(Value)=> this.cartNumbers = Value
      
      
    })
    
  }
 
  

}
