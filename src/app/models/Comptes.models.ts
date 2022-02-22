import { Participant } from "./Participant.models";

export class Compte {

    id: number;
    titre: string;
    description: string;
    budget: number;
    adminid:number;
    participants: Participant[];



    constructor(id: number, titre: string, description: string, budget: number, adminid:number,participants: Participant[]) {
            this.id = id,
            this.titre = titre,
            this.description = description,
            this.budget = budget,
            this.participants = participants
            this.adminid=adminid
    }


}
