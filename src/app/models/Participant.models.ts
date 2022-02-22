export class Participant {


  id?: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  depenses: number;

  constructor(nom: string, prenom: string, telephone: string, email: string, depenses: number, id?: number) {
    if (id != undefined) {
      this.id = id
    }
    this.nom = nom,
      this.prenom = prenom,
      this.telephone = telephone,
      this.email = email
    this.depenses = depenses;
  }
}


