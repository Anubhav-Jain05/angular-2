import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor() { }

  ngOnInit(): void {
    this.cartDet();
    this.loadcart();
  }
  getCartDet: any = [];
  cartDet() {
    if (localStorage.getItem('localCart')) {
      // JSON.parse(localStorage.getItem('localCart')|| '[]' );
      this.getCartDet.push(...JSON.parse(localStorage.getItem('localCart') || '[]'));

      console.log(this.getCartDet);
    }
  }
  incQnt(prodId: any, qnt: any) {
    // console.log(prodId);
    // console.log(qnt);
    for (let i = 0; i < this.getCartDet.length; i++) {
      if (this.getCartDet[i].prodId === prodId) {
        // qnt + 1;
        if (qnt != 5)
          this.getCartDet[i].qnt = parseInt(qnt) + 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDet));
    this.loadcart();

  }
  decQnt(prodId: any, qnt: any) {
    // console.log(prodId);
    // console.log(qnt);
    for (let i = 0; i < this.getCartDet.length; i++) {
      if (this.getCartDet[i].prodId === prodId) {
        // qnt + 1;
        if (qnt != 1)
          this.getCartDet[i].qnt = parseInt(qnt) - 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDet));
    this.loadcart();

  }
  total: number = 0;
  loadcart() {
    if (localStorage.getItem('localCart')) {
      // this.getCartDet=JSON.parse(localStorage.getItem('localCart'));
      // this.getCartDet.push({...JSON.parse(localStorage.getItem('localCart')|| '[]' )})
      this.total = this.getCartDet.reduce(function (acc: any, val: any) {
        return acc + (val.amt * val.qnt);
      }, 0)
    }
  }
  removeall() {
    localStorage.removeItem('localCart');
    this.getCartDet = [];
    this.total = 0;
  }
  model = "none"
  delete(getCartDets: any) {
    this.model = "block";
    this.singleitemdelete = getCartDets;

  }
  close() {
    this.model = "none";
  }
  singleitemdelete: {} = {}
  singledelete(singledlt: any) {
    console.log(singledlt);
    singledlt.qnt = 0;
    for (let i = 0; i < this.getCartDet.length; i++) {
      if (this.getCartDet[i].prodId === singledlt.prodId) {
        this.getCartDet.splice(i, 1);
        localStorage.setItem('localCart', JSON.stringify(this.getCartDet));
        this.loadcart();
      }
    }

    //   console.log(getCartDets);
    //   if(localStorage.getItem('localCart')){
    //         // this.getCartDet.push({...JSON.parse(localStorage.getItem('localCart')|| '[]' )})

    //     // this.getCartDet.push({...JSON.parse(localStorage.getItem('localCart') || '[]')});
    //     for(let i=0;i<this.getCartDet.length;i++){
    //       if(this.getCartDet[i].prodId === getCartDets){
    //         this.getCartDet.splice(i,1);
    //         localStorage.setItem('localCart',JSON.stringify(this.getCartDet));
    //         this.loadcart();
    //       }
    //     }
    //   }
    this.close()
  }
}
