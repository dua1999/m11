import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/component/cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  showSuccessMessage: boolean = false
    countries = ['USA', 'Canada','Oman','India', 'UK', 'Australia']
    customer = {
      firstname: '',
      lastname: '',
      address:'',
      zipcode:'',
      email: '',
      country: '',
      state: '',
      acceptTerms: false
    };
  cartService: any;

    constructor(private router: Router , cartService : CartService) {}

  onSubmit() {
    this.cartService.removeall();

  }


}
