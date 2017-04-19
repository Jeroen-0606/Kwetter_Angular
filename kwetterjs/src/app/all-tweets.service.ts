import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AllTweetsService {
  private apiPrefix: string = "http://localhost:8079/Kwetter/resources/RestService";

  constructor(private http: Http) {

  }

  public getAllTweets(email : string) : Observable<any> {
    return this.http.get(`${this.apiPrefix}/getOwnTweets/${email}`)
      .map(response => response.json());
  }
}
