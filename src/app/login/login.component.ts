import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginVO } from '../model/LoginVO';
import { AuthenticationResponse } from '../model/AuthenticationResponse';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  jwtToken = ""
  userName = ''
  password = ''
  AuthenticationResponse = new AuthenticationResponse("");
  loginVO = new LoginVO("");
  isLoginErrorNeeded = false
  constructor(private router:Router,
    private authentication : AuthenticationService) { }

  ngOnInit() {
  }

  handlelogin(){
    console.log("inside handle Login");
    console.log(this.AuthenticationResponse.jwt)
    if(this.AuthenticationResponse.jwt){
     // this.router.navigate(['searchBook',this.userName])
     this.router.navigate(['booksView'])
     
      this.isLoginErrorNeeded= false;
    }else{
      this.isLoginErrorNeeded= true;
    }
  }

  getAuthentecation(){
    console.log("inside authentication");
    this.authentication.getToken(this.userName,this.password).subscribe(
      response => {
        this.AuthenticationResponse=response;
        let tokenStr= 'Bearer '+this.AuthenticationResponse.jwt;
          sessionStorage.setItem('token', tokenStr);
        this.handlelogin();
      },
      (error) => {                              //Error callback
        console.error('error caught in component')
        this.isLoginErrorNeeded= true;
      }
    );
     }

}
