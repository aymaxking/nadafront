import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participant } from '../models/Participant.models';



@Injectable({
    providedIn: 'root'
})
export class ParticipantService {
    url = 'http://localhost:5505/rest/participants';
    participants!: Participant[];
    participant!: Participant;

    constructor(private http: HttpClient) { }


    get(id:number) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
        return this.http.get(this.url + '/getAll');
     }

    post() {
       // delete this.participant.personnel;

        return this.http.post(this.url, this.participant);
    }

    put() {
        //delete this.participant.personnel;

        return this.http.put(this.url + '/' + this.participant.id, this.participant);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.participant.id);
    }
}
