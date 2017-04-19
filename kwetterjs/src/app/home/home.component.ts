import {Component, Output, EventEmitter} from "@angular/core";
import { AllTweetsService } from '../all-tweets.service';

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  private allTweets : Array<any>;

  constructor(private allTweetsService : AllTweetsService) {
    this.getAllTweets();
    console.log(this.allTweets);
  }

  private getAllTweets() : void {
    this.allTweetsService.getAllTweets('piet@gmail.com')
      .subscribe(allTweets => this.allTweets = allTweets);
  }
}
