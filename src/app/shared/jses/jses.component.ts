import { Component } from '@angular/core';

@Component({
  selector: 'app-jses',
  templateUrl: './jses.component.html',
  styleUrls: ['./jses.component.css']
})
export class JsesComponent {
  letkeyword() {
    let x = 10;
    {
      let x = 90;
      return x;
    }
    return x
  }
  constkeyword() {
    const y = 50;
    var k = 10;

    return y + k;
  }
  Arrowfunction() {
    const x = (x: any, y: any) => x * y;
    const k = (x: any, y: any) => x + y;
    return x(5, 6);
  }
  addition() {
    const x = (x: any, y: any) => x + y;
    return x(5, 6);
  }
  subtraction() {
    const x = (x: any, y: any) => x - y;
    return x(30, 10);
  }
  spreadfunction() {
    const x1 = ["jen", "feb", "mar"];
    const x2 = ["apr", "may", "june"];
    const x3 = ["july", "aug", "sep"];
    const month = [...x1, ...x2, ...x3];
    return month;
  }
  maxinumber() {
    const x = [23, 24, 25, 54, 65];
    let maximum = Math.max(...x);
    return maximum;

  }
  forof() {
    const cars = ["bmw", "nexon", "desire"];
    let text = "";
    // for(let x=0;x<cars.length;x++){
    //   text += cars[x] + ', ';
    // }
    for (let x of cars) {
      text += x + ', ';
    }
    return text;
  }
  loopoverstring() {
    const str = "helloworld";
    let text = ' ';
    for (let x of str) {
      text += x + ' ';
    }
    return text;
  }
  mapfunction() {
    const items = new Map([["pen", 10], ["pencil", 20], ["notebook", 50]]);
    return items.get("pen");
  }
  jsclass() {
    class Degree {
      course: any;
      branch: any
      constructor(course: any, branch: any) {
        this.course = course;
        this.branch = branch;
      }
    }
    const course1 = new Degree("B.tech", 55);
    const course2 = new Degree("BSc", 54);
    const ans = course1.course + ' ' + course2.course;
    return ans
  }
  comment=""
  promises() {
    let str="anubhav"
    let promise =new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("xyz")
      },3000)
    })
    promise.then((data:any)=>{
      this.comment=data
      str=data
      console.log(data)
      return data
    })
    
    return str
  }

}


