import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  
  BaseUrl: string = `https://ecommerce.routemisr.com/api/v1/`

  constructor(private _HttpClient: HttpClient) { }

  headers: any = {
    token: localStorage.getItem('userToken')
  }



  addToWhishList(productId: string | any): Observable<any> {

    return this._HttpClient.post(`${this.BaseUrl + `wishlist`}`,
      {
        productId: productId  },{
      headers: this.headers
    }
    )

  }

  getWhishList(): Observable<any> {

    return this._HttpClient.get(`${this.BaseUrl + `wishlist`}`,
      
      {
        headers: this.headers
      }
    )
  }
  removeWhishList(prodId:string): Observable<any> {

    return this._HttpClient.delete(`${this.BaseUrl + `wishlist/${prodId}`}`,
      
      {
        headers: this.headers
      }


    )

  }

  

}
