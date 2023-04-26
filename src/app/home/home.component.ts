import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 title = "Angular Reactive form"
  SignUpForm = new FormGroup({
    FirstName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    LastName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    MobileNo:new FormControl('',[Validators.required,Validators.pattern("[6-9][0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
    Email:new FormControl('',[Validators.required,Validators.email]),
    Password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    DateOfBirth:new FormControl('',[Validators.required]),
    Gender:new FormControl('',[Validators.required]),
    Country:new FormControl('',[Validators.required])
  })
  constructor(private toastr: ToastrService) { } 
  tabledet={
    fname:'',
    lname:'',
    email:'',
    pass:'',
    dob:'',
    gender:'',
    number:'',
    country:'',

  }
  ngOnInit(): void {
  }
  
  // constructor(private routing: Router) { }
  SignUpUser()
  {
    //alert("submitted")
    window.localStorage.setItem("signup", JSON.stringify(this.SignUpForm.value));
    console.log(this.SignUpForm.value);
    this.toastr.success('Form Successfully Submitted', 'Submitted',{timeOut:1000});
    this.toastr.error('Form Successfully Submitted', 'Submitted',{timeOut:1000});
    this.toastr.warning('Form Successfully Submitted', 'Submitted',{timeOut:1000});
    this.toastr.info('Form Successfully Submitted', 'Submitted',{timeOut:1000});
    
    let tabledetails=window.localStorage.getItem("signup");
   if(tabledetails != null)
   {
    let details=JSON.parse(tabledetails);
    this.tabledet.fname=details.FirstName +' '+ details.LastName;
    this.tabledet.email=details.Email;
    this.tabledet.dob=details.DateOfBirth;
    this.tabledet.gender=details.Gender;
    this.tabledet.number=details.MobileNo;
    this.tabledet.country=details.Country
  }

    // this.toastr.success('Hello world!', 'Toastr fun!');
    // this.routing.navigate(['/UseradComponent'])
    this.onshow()
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
  get Password()
  {
    return this.SignUpForm.get("Password");
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
  get Country()
  {
    return this.SignUpForm.get("Country");
  }
  
  show=true;
  onshow()
  {
    this.show=false;
  }
 
}
