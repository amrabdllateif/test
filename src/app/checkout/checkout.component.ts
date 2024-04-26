import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartSkipTestsService } from '../cart--skip-tests.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private _CartSkipTestsService: CartSkipTestsService) {

  }
  shippingAddress: FormGroup = new FormGroup({

    details:new FormControl(null),
    phone:new FormControl(null),
    city:new FormControl(null),

  });
  navigateToPage(url:string){
    window.location.href = url;

  }

  handlesubmit(shippingAddress: FormGroup)
   {
    console.log(shippingAddress.value);

    this._CartSkipTestsService.onlinePayment(shippingAddress.value, "652bfeb95498989cc809ba91").subscribe({

      next: (response:any) => {
        this.navigateToPage(response.session.url)

      },
      error: (err) => console.log(err)



    })


  }


}
