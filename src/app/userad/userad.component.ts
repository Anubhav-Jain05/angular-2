import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userad',
  templateUrl: './userad.component.html',
  styleUrls: ['./userad.component.css']
})
export class UseradComponent {
  title = "Angular Reactive form"
  UserAdd = new FormGroup({
    Address:new FormControl('',[Validators.required]),
    City:new FormControl('',[Validators.required]),
    State:new FormControl('',[Validators.required]),
    Pincode:new FormControl('',[Validators.required,Validators.pattern("[0-9]*")]),
  })
  // constructor(private routing: Router) { }
  AddressUser()
  {
    //alert("submitted")
    console.log(this.UserAdd.value)
    // this.routing.navigate(['/NomineedComponent'])

  }
  get Address()
  {
    return this.UserAdd.get("Address");
  }
  get City()
  {
    return this.UserAdd.get("City");
  }
  get State()
  {
    return this.UserAdd.get("State");
  }
  get Pincode()
  {
    return this.UserAdd.get("Pincode");
  }
}
