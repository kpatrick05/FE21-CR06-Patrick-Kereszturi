import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : any;
  checkOutForm: any;
  total : number = 0;

  constructor(private CS: CartService, private FB : FormBuilder) {
    this.checkOutForm = this.FB.group({
      name : "",
      address : ""
    })
  }
  onSubmit(data: any) {
    alert("You order has been submitted");
    console.warn(data);
    this.cart = this.CS.cleanCard();
    this.checkOutForm.reset();
    this.total = 0;
  }
  calc() {
  for(let val of this.cart) {
      this.total += val.price;
    }
    if(this.total >= 200 && this.total <= 499) {
      this.total = this.total * 0.9;
      alert("You have got 10% discount");
    } else if (this.total >=500){
      this.total = this.total * 0.8;
      alert("You have got 20% discount");
    }
}
  
  
  ngOnInit(): void {
    this.cart = this.CS.getItems(); 
    this.calc();
  }

}
