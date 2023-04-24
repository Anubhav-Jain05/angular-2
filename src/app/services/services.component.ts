import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
 constructor() { }
 
 ngOnInit()  {
   
 }  
 productArray = [
  {
    prodId:1,
    img: "https://cdn.pixabay.com/photo/2020/03/09/06/18/camera-4914690__340.jpg",
    amt: 400,
    qnt: 1
  },
  {
    prodId:2,
    img: "https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762__340.jpg",
    amt: 500,
    qnt: 1
  },
  {
    prodId:3,
    img: "https://cdn.pixabay.com/photo/2021/01/22/16/55/camera-5940588__340.jpg",
    amt: 600,
    qnt: 1
  }
 ];
 inc(prod:any) {
  console.log(prod);
  if(prod.qnt != 5){
    prod.qnt += 1;
  }
 
 }
 dec(prod:any){
  console.log(prod);
  if(prod.qnt !=1){
    prod.qnt -= 1
  } 
 }
 itemsCart:any=[];
 addCart(category:any){
  console.log(category);
  let cartDataNull = localStorage.getItem('localCart');
  if(cartDataNull == null){
    let storeDataGet:any=[];
    storeDataGet.push(category);
    localStorage.setItem('localCart',JSON.stringify(storeDataGet));
  }
  else{
    var id=category.prodId;
    let index:number=-1;
    // this.itemsCart=JSON.parse(localStorage.getItem('localCart'));
    this.itemsCart.push(...JSON.parse(localStorage.getItem('localCart')|| '[]' ));


    for(let i=0;i<this.itemsCart.length;i++){
      if(parseInt(id)=== parseInt(this.itemsCart[i].prodId)){
          this.itemsCart[i].qnt=category.qnt;
          index=i;
          break;
      }
    }
    if(index==-1){
      this.itemsCart.push(category);
      localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
    }
    else{
      localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
    }
  }
  // localStorage.setItem('localCart',JSON.stringify(category));

 }
}
