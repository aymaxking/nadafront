import { Compte } from "./Comptes.models";
import { Participant } from "./Participant.models";

export class Depense {

    id: number;
    date: string;
    montant: string;
    idparticipant: number;
    idcompte: number;
    participant : Participant;
    compte:  Compte;


    constructor(id : number,date : string,montant : string, idparticipant : number,
        idcompte :number,participant : Participant,compte : Compte)
    {

         this.id = id,
         this.date = date,
         this.montant = montant,
         this.idparticipant = idparticipant,
         this.idcompte = idcompte,
         this.participant =  participant,
         this.compte =  compte





    }





}
