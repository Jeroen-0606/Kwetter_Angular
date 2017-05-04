import {Component, Output, EventEmitter} from "@angular/core";
import { AllTweetsService } from '../all-tweets.service';
import { UserService } from '../user.service';

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  private allTweets : Array<any>;
  private userList : Array<any>;
  public data : any;
  private listNr : number;
  private followersNr : number;
  private followingNr : number;

  constructor(private allTweetsService : AllTweetsService, private userService : UserService) {
    this.data = {
      tweet: ''
    }
    this.data = {
      search: ''
    }
    this.getAllTweets();
  }

  private getAllTweets() : void {
    this.allTweets = [];
    this.allTweetsService.getAllTweets(this.userService.getUsername())
      .subscribe(allTweets => this.allTweets = allTweets);
  }

  private createTweet() : void {
    this.allTweetsService.createTweet(this.userService.getUsername(), this.data.tweet)
      .subscribe(k => {
        this.getAllTweets();
      });
    this.data.tweet = '';
  }

  private checkArray() {
    console.log(this.allTweets);
    console.log(this.data);
  }

  private setListNr(nr: number) {
    this.listNr = nr;
    this.getUserList();
  }

  private getUserList() : void {
    switch(this.listNr) {
      case 1:
        this.userService.getFollowing(this.userService.getUsername())
          .subscribe(userList => this.userList = userList);
        break;
      case 2:
        this.userService.getFollowers(this.userService.getUsername())
          .subscribe(userList => this.userList = userList);
        break;
      case 3:
        this.userService.searchUsers(this.data.search)
          .subscribe(userList => this.userList = userList);
        break;
      default:
    }
  }

  public logout() : void {
    this.userService.resetUser();
  }
}
