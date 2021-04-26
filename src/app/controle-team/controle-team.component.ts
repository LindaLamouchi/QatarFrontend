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
size:number;
coach:any; //team

listItems:any; //players list
coachList:any; //coach 

selectedObject:any;
selectedCoach:any; //coach

  constructor(public activatedRoute:ActivatedRoute, public router:Router,private userService: UserService,private authService: AuthService) { 
    this.id=activatedRoute.snapshot.params['id'];
    console.log(this.id);
  }

  ngOnInit(): void {
    
    this.userService.getTeamByID(this.id)
     .subscribe(
      data => {
        this.coach= data;
       console.log(this.coach);
      
      },
      err => {
        console.log( JSON.parse(err.error).message);
      }
    );
    
    this.dropdownRefresh();
    this.userService.getPlayers(this.id)
    .subscribe(
      data => {
       this.dataPl= data;
       console.log(this.dataPl);
        this.size=this.dataPl.length;
      },
      err => {
        console.log( JSON.parse(err.error).message);
      }
    )
    this.getallCoachs();
  }

  dropdownRefresh(){
    this.userService.getPlayersList().subscribe(data=>{
      this.listItems=data;
    });
 
  }

  
  getPlayer(){
    this.userService.addToTeam(this.selectedObject,this.id);
    alert("New player is added to the list");
    window.location.reload();

  }

  /*****************************************Coach****************************************/
  getCoach(){
    this.userService.addCoachToTeam(this.selectedCoach,this.id);
    alert("New Coach is added to the list");
    window.location.reload();
  }
  getallCoachs(){
    this.userService.getCoachList().subscribe(data=>{
      this.coachList=data;
    });
  }
}
