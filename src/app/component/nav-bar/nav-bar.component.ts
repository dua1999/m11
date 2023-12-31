import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/component/cart/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public totalItems: number = 0
  public searchTerm : string=''

  constructor(private cartService: CartService) {

  }
  ngOnInit(): void {
    this.cartService.getproduct()
      .subscribe(res => {
        this.totalItems = res.length
      })
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value
    console.log(this.searchTerm)
    this.cartService.search.next(this.searchTerm)

  }

}
