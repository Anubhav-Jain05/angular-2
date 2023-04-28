import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  slidesStore=[
    {
      id: "1",
      src: "https://cdn.pixabay.com/photo/2020/03/09/06/18/camera-4914690__340.jpg",
      alt: "cameraimg",
      title: "selfie"
    },
    {
      id:"2",
      src: "https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762__340.jpg",
      alt: "img",
      title: "laptp"
    },
    {
      id:"3",
      src: "https://cdn.pixabay.com/photo/2021/01/22/16/55/camera-5940588__340.jpg",
      alt: "dualcam",
      title: "bjs"
    }
  ];
}
