import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/Users.models';
import {Depense} from '../models/Depenses.models';
import {CompteService} from "./compte.service";


@Injectable({
  providedIn: 'root'
})
export class DepenseService {
  url = 'http://localhost:8181/depenses';
  depenses!: Depense[];
  depense: Depense = Object();

  constructor(public service: CompteService, private http: HttpClient) {
  }


  get(id: number) {
    return this.http.get(this.url + '/' + id);

  }

  adddepense() {
    this.depense.idcompte=this.service.compte.id;
    // @ts-ignore
    this.depense.idparticipant=this.service.par.id
    return this.http.post(this.url , this.depense);
  }

  getall() {
    return this.http.get(this.url + '/getAll');
  }

  post() {
    // delete this.depense.personnel;

    return this.http.post(this.url, this.depense);
  }

  put() {
    //delete this.depense.personnel;

    return this.http.put(this.url + '/' + this.depense.id, this.depense);
  }

  delete() {
    return this.http.delete(this.url + '/' + this.depense.id);
  }
}
