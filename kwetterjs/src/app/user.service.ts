import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {
  private apiPrefix: string = "http://localhost:8079/Kwetter/resources/RestService";

  private username : string;

  constructor(private http: Http) {

  }

  public login(email : string, password : string) {
    return this.http.get(`${this.apiPrefix}/login/${email}/${password}`)
      .map(response => response.json());
  }

  public setUsername(username : string) : void {
    this.username = username;
  }

  public getUsername() : string {
    return this.username;
  }

  public searchUsers(search : string) : Observable<any> {
    return this.http.get(`${this.apiPrefix}/searchUsers/${search}`)
      .map(response => response.json());
  }

  public getFollowing(email : string) : Observable<any> {
    return this.http.get(`${this.apiPrefix}/getFollowing/${email}`)
      .map(response => response.json());
  }

  public getFollowers(email : string) : Observable<any> {
    return this.http.get(`${this.apiPrefix}/getFollowers/${email}`)
      .map(response => response.json());
  }

  public getUser(email : string) : Observable<any> {
    return this.http.get(`${this.apiPrefix}/getUser/${email}`)
      .map(response => response.json());
  }

  public updateUser(email : string, name : string, bio : string, location : string) : Observable<any> {
    return this.http.get(`${this.apiPrefix}/updateUser/${email}/${name}/${bio}/${location}`)
      .map(response => response.json());
  }

  public resetUser() {
    this.username = '';
  }
}
