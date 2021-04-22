import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-controle-team',
  templateUrl: './controle-team.component.html',
  styleUrls: ['./controle-team.component.css']
})
export class ControleTeamComponent implements OnInit {
id:number;
dataPl:any;
pageSize:number=2;
page:number=1;

  constructor(public activatedRoute:ActivatedRoute, public router:Router,private userService: UserService,private authService: AuthService) { 
    this.id=activatedRoute.snapshot.params['id'];
    console.log(this.id);
  }

  ngOnInit(): void {
    this.userService.getPlayers(this.id)
    .subscribe(
      data => {
       this.dataPl= data;
       console.log(this.dataPl);
      },
      err => {
        console.log( JSON.parse(err.error).message);
      }
    )
  }

}
