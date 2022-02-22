import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/shared/compte.service';
import { UserService } from 'src/app/shared/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.css']
})
export class AddCompteComponent implements OnInit {


 constructor(public service: CompteService,private route:Router) { }

 ngOnInit(): void {}

 submit() {
   this.service.post().subscribe(() => {
       this.route.navigate(['/compte/list']);
     },
     err => {
       console.log(err);
     }
   );
 }


}

