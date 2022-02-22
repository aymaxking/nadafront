export class User {

    id : number;
    nom : string;
    prenom : string;
    telephone : string;
    login : string;
    password: string;

   constructor(id : number,nom : string,prenom : string, telephone : string,login :string,password : string)
   {

        this.id = id,
        this.nom = nom,
        this.prenom = prenom,
        this.telephone = telephone,
        this.login = login,
        this.password = password




   }
}
