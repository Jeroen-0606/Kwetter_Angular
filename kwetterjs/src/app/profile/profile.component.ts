import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private user : any;

  constructor(private userService : UserService) {
    this.user = {
      username: '',
      name: '',
      bio: '',
      location: ''
    }
    this.getUser();
  }

  ngOnInit() {
  }

  public getUser() {
    this.userService.getUser(this.userService.getUsername())
      .subscribe(user => {
        this.user = user;
      });
  }

  public updateUser() {
    this.userService.updateUser(this.userService.getUsername(), this.user.name, this.user.bio, this.user.location)
      .subscribe(k => {
        this.getUser();
      });
  }

  public logout() : void {
    this.userService.resetUser();
  }
}
