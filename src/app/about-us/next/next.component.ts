import { Component } from '@angular/core';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent {
   heightI(_target:any,value:any) {
    // console.log(value)
    // console.log(_target)
    let im=document.getElementById(_target)
    im ? im.style["height"] = value: null
  }
  widthI(_target:any,value:any) {
    // console.log(value)
    // console.log(_target)
    let im1=document.getElementById(_target)
    im1 ? im1.style["width"] = value: null
  }
  reset()
  {
    let reset= document.getElementById("smile")
    reset ? reset.style["height"]="100px":null
    reset ? reset.style["width"]="100px":null
    document.getElementById("height") ?(<HTMLInputElement>document.getElementById("height")).value="1" :null
    document.getElementById("width") ?(<HTMLInputElement>document.getElementById("width")).value="1" :null
  }
}
