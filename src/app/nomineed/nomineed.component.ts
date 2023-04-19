import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nomineed',
  templateUrl: './nomineed.component.html',
  styleUrls: ['./nomineed.component.css']
})
export class NomineedComponent {
  title = "Angular Reactive form"
  SignUpForm = new FormGroup({
    FirstName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    LastName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    MobileNo:new FormControl('',[Validators.required,Validators.pattern("[6-9][0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
    Email:new FormControl('',[Validators.required,Validators.email]),
    DateOfBirth:new FormControl('',[Validators.required]),
    Gender:new FormControl('',[Validators.required]),
  })
  constructor(private routing: Router) { }
  SignUpUser()
  {
    //alert("submitted")
    console.log(this.SignUpForm.value)
    this.routing.navigate(['/EduComponent'])
    window.localStorage.setItem("nominee", JSON.stringify(this. SignUpForm.value));
  }
  get FirstName()
  {
    return this.SignUpForm.get("FirstName");
  }
  get LastName()
  {
    return this.SignUpForm.get("LastName");
  }
  get MobileNo()
  {
    return this.SignUpForm.get("MobileNo");
  }
  get Email()
  {
    return this.SignUpForm.get("Email");
  }
 
  get SignUp()
  {
    return this.SignUpForm.get("SignUp");
  }
  get Gender()
  {
    return this.SignUpForm.get("Gender");
  }
  get DateOfBirth()
  {
    return this.SignUpForm.get("DateOfBirth");
  }
 
}
