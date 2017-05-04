import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public data: any;
  public parentRouter : any;

  constructor(
    private router : Router,
    private userService : UserService) {
    this.data = {
      username: '',
      password: ''
    }
  }

  ngOnInit() {
  }

  public login() : void {
    this.userService.login(this.data.username, this.data.password)
      .subscribe(user => {
        if(user != null) {
          this.userService.setUsername(user.username);
          this.router.navigateByUrl('/home');
        }
      });

  }

}
