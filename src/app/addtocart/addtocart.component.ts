import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit, OnDestroy{

  currentCartValue:any = [];
  totalPrice:number = 0;
  private unsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    private commonService: CommonService,
    private router: Router,
    private toster: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.commonService.cartData.subscribe(res=> {
      this.currentCartValue = res;
      this.checkTotalAmout(this.currentCartValue);
    })
  }

  gotoHome() {
    this.router.navigateByUrl('/shopping')
  }

  checkTotalAmout(item: any) {
    item.forEach((element: any) => {
      this.totalPrice += (parseInt(element.qty) * (element.price));
    });
  }

  placeOrder(amount:any) {
    this.toster.success('Your order successfully placed ', '');
    setTimeout(() => {
      this.router.navigateByUrl('/shopping')
    }, 2000);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next('');
    this.unsubscribe$.complete();
  }

}
