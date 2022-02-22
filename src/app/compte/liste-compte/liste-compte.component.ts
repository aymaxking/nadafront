import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/models/Participant.models';
import { CompteService } from 'src/app/shared/compte.service';
import { UserService } from 'src/app/shared/user.service';
import {Compte} from "../../models/Comptes.models";
import {DepenseService} from "../../shared/depense.service";

@Component({
  selector: 'app-liste-compte',
  templateUrl: './liste-compte.component.html',
  styleUrls: ['./liste-compte.component.css']
})
export class ListeCompteComponent implements OnInit {


 // personnel = this.uow.get(this.id);

  constructor(public service: CompteService, public uow: UserService,public service2: DepenseService) { }

  ngOnInit(): void {
    this.getall();
    this.uow.getall();

  }
  getall() {
    this.service.getByUser().subscribe(r => {
      this.service.comptes = r as Compte[];
      console.log(r);
    });
  }

  addparticipant() {
    this.service.addparticipant().subscribe(res => {
      this.getall();
      console.log(res);
    },
      err => {
        console.log(err);
      }
    );
  }

  adddepense() {
    this.service2.adddepense().subscribe(res => {
        this.getall();
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  modifier() {

    this.service.put().subscribe(res => {
      this.getall();
    },
      err => {
        console.log(err);
      }
    );
  }

  supprimer() {

    this.service.delete().subscribe(res => {
      this.getall();
    },
      err => {
        console.log(err);
      }
    );
  }




}

