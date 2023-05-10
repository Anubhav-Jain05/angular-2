import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-jqueryimmpl',
  templateUrl: './jqueryimmpl.component.html',
  styleUrls: ['./jqueryimmpl.component.css']
})
export class JqueryimmplComponent implements OnInit {
ngOnInit(){
  $(document).ready(function(){
    $("button").click(function(){
      $("p").hide().show(2000);
     
    });
  });
}
}
