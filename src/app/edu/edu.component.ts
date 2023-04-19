import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent {
  title = "Angular Reactive form"
  SignUpForm = new FormGroup({
    // 10thClass:new FormControl('',[Validators.required,Validators.pattern("[0-9]*")]),
    Board:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    School:new FormControl('',[Validators.required,Validators.pattern("[a-zA-z].*")]),
    Percentage:new FormControl('',[Validators.required,Validators.pattern("[0-9].*")]),
    board:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    school:new FormControl('',[Validators.required,Validators.pattern("[a-zA-z].*")]),
    percentage:new FormControl('',[Validators.required,Validators.pattern("[0-9].*")]),
    UniversityName:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    // Termandconditions:new FormControl('',Validators.required),
    Course:new FormControl('',[Validators.required,Validators.pattern("[a-zA-z].*")]),
    Branch:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    percentagee:new FormControl('',[Validators.required,Validators.pattern("[0-9].*")]),
    
  })
  // constructor(private routing: Router) { }
  SignUpUser()
  {
    //alert("submitted")
    console.log(this.SignUpForm.value)
    // this.routing.navigate(['/EduComponent'])
  }
  // get Class()
  // {
  //   return this.SignUpForm.get("Class");
  // }
  get Board()
  {
    return this.SignUpForm.get("Board");
  }
  get School()
  {
    return this.SignUpForm.get("School");
  }
  get Percentage()
  {
    return this.SignUpForm.get("Percentage");
  }
  get board()
  {
    return this.SignUpForm.get("board");
  }
  get school()
  {
    return this.SignUpForm.get("school");
  }
  get percentage()
  {
    return this.SignUpForm.get("percentage");
  }
  get UniversityName()
  {
    return this.SignUpForm.get("UniversityName");
  }
  get Course()
  {
    return this.SignUpForm.get("Course");
  }
  get Branch()
  {
    return this.SignUpForm.get("Branch");
  }
  get percentagee()
  {
    return this.SignUpForm.get("percentagee");
  }
  // get Termandconditions()
  // {
  //   return this.SignUpForm.get("Termandconditions");
  // }
}
