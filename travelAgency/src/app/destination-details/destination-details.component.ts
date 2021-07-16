import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { destinations } from '../destinations';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent implements OnInit {
  details: any;
  constructor(private route : ActivatedRoute, private CS : CartService) { }

  addToCart(prod : any) {
    alert("added to the cart");
    this.CS.addToCart(prod);
    console.log(this.CS.getItems())
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id : any = params.get("id");
      this.details = destinations[id];
    })
  }

}
