import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { signup, login } from '../contactmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
isshow=false;
  constructor(private formBuilder:FormBuilder, private httpclient:HttpClient, private router:Router) { }
signupform!:FormGroup;
loginform!:FormGroup;
  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['', Validators.required]
    })
    //login
this.loginform = this.formBuilder.group({
  email:['', Validators.required],
  password:['', Validators.required]
})
  }
  signup()
  {
    this.isshow=true;
  }

  login()
  {
    this.isshow=false;
  }

  submitsignup()
  {
    this.httpclient.post<signup>("http://localhost:3000/signup", this.signupform.value).subscribe(res=>{
      alert("user signup successfully")
      this.signupform.reset();
    })
  }
  loginuser()
  {
this.httpclient.get<login[]>("http://localhost:3000/signup").subscribe(res=>{
  //matching email & pwd
  const user = res.find((a:any)=>{
    return a.email === this.loginform.value.email && a.password === this.loginform.value.password;
  })
  //check cond for login
if(user)
{
  alert("successfully logged in!!");
  this.loginform.reset();
  this.router.navigate(['/contactlist'])
  //storing data in localstorage
  localStorage.setItem('logindata', JSON.stringify(user))
}else
{
  alert("user not found with these credentials")
  this.loginform.reset();
}
},err=>{
  alert("something went wrong try after sometime")
  this.loginform.reset();
})
  }
}
