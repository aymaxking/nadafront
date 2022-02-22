import { Component, OnInit } from '@angular/core';
import {User} from "../../models/Users.models";
import {UserService} from "../../shared/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  new:User = Object();
  found =0;

  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
  }

  login(email:string,password:string){
    this.userService.currentuser= Object()
    this.userService.currentuser.login=email;
    this.userService.currentuser.password=password;
    this.userService.login().subscribe(
      (value:User) => {
        if(value.id==null){
          this.found=1;
        }
        else{
          this.userService.currentuser=value;
          localStorage.setItem("currentuser",value.id.toString())
          this.route.navigate(['/compte/list']);
        }
      }
    )

  }

}
