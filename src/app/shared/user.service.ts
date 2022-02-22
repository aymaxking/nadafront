import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/Users.models';
import {Observable} from "rxjs";



@Injectable({
    providedIn: 'root'
})
export class UserService {
    url = 'http://localhost:8181/users';
    users!: User[];
    user: User = Object();
    // @ts-ignore
  currentuser: User ;


    constructor(private http: HttpClient) {

    }


  login():Observable<any> {
    return this.http.post('http://localhost:8181/login' ,this.currentuser)
  }

  get(id: string) :Observable<any> {
        return this.http.get(this.url + '/' + id);
    }

    getall() {
        return this.http.get(this.url + '/getAll');
     }

    post() {
        return this.http.post(this.url, this.user);
    }

    put() {
        return this.http.put(this.url + '/' + this.user.id, this.user);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.user.id);
    }
}
