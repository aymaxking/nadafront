import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Compte} from "../models/Comptes.models";
import {Participant} from "../models/Participant.models";
import {UserService} from "./user.service";
import {User} from "../models/Users.models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  url = 'http://localhost:8181/comptes';
  comptes: Compte[] = [];
  compte: Compte = Object();
  par: Participant = Object();
  participant: Participant = Object();
  u: User = Object()

  constructor(private http: HttpClient, private userService: UserService,private route:Router) {
  }


  get(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  getByUser() {
    return this.http.get(this.url + '/user/' + localStorage.getItem("currentuser"));
  }

  getall() {
    return this.http.get(this.url);
  }

  // @ts-ignore
  post():Observable<any>{
    // @ts-ignore
    this.compte.adminid=localStorage.getItem("currentuser")
      return this.http.post(this.url, this.compte);
  }

  addparticipant() {
    return this.http.put(this.url + "/" + this.compte.id + "/addparticipant", this.participant);
  }


  put() {
    return this.http.put(this.url + '/' + this.compte.id, this.compte);
  }

  delete() {
    return this.http.delete(this.url + '/' + this.compte.id);
  }
}
