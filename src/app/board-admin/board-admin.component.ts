import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  
  content = '';
  div1:boolean=false;
  dataSource:Array<any>;
  name: any = {};
  errorMessage = '';
  size:number; //team list size


  pageSizee:number=1;//nbr de coach a afficher sur  admin board
  

  dataplayers:any;
  pageSize:number=3; //player & team
  dataCoach:any; //coachs data list
  sizeCo:number;

  page:number=1; //team page reference
  pagee:number=1; //player Ref page
  pageCoach:number=1; //la i eme page du coach

  sizee:number; //data length of the team
  myInnerHeight: Window["innerHeight"];
  width:Window["innerWidth"];
  constructor(private userService: UserService,private authService: AuthService, private router: Router) { }
 
  ngOnInit() {
    //intialize coach list
    this.getAllCoachs(); 
    //initalize Team List
      this.userService.getTeamList()
      .subscribe(
        data => {
         this.dataSource= data;
         console.log(this.dataSource);
         this.size=this.dataSource.length;
        },
        err => {
          console.log( JSON.parse(err.error).message);
        }
      );
    
       //initalize player List
      this.userService.getPlayersList()
      .subscribe(
        data => {
         this.dataplayers= data;
         console.log(this.dataplayers);
         this.sizee=this.dataplayers.length;
        },
        err => {
          console.log( JSON.parse(err.error).message);
        }
      )
   

   
  
    
  }
  divT(){
    this.div1=!this.div1;
  }
  onCl() {
    console.log(this.name);
    this.userService.saveTeam(this.name);
    alert(' Team is added successfully');
    window.location.reload();
  }

  onEdit(id:number){
    this.router.navigate(['EditTeam',id]);
   }
   onSupprime(id:number){
     
    this.userService.deleteTeam(id).subscribe(data=>{
     alert(' Team is deleted successfully');
     this.router.navigate(['/admin']);
     window.location.reload();
    })
   }
/*************************** Player Config************************************/
   newPlayer(){
    this.router.navigate(['newPlayer']);
   }
   onEditPlayer(id:number){

   }
   ondeletePlayer(id:number){
   this.userService.deletePlayer(id).subscribe(data=>{
    alert(' player is deleted successfully');
    this.router.navigate(['/admin']);
    window.location.reload();
   })
   }
  //************************************Coach Config************************************* */
   getAllCoachs(){
    this.userService.getCoachList()
    .subscribe(
      data => {
       this.dataCoach= data;
       this.sizeCo=this.dataCoach.length;
      },
      err => {
        console.log( JSON.parse(err.error).message);
      }
    );

   }

   onSupprimeCoach(idCoach : number){
     this.userService.deleteCoach(idCoach).subscribe(data=>{
      alert(' Coach is deleted successfully');
      this.router.navigate(['/admin']);
      window.location.reload();
     })
   }

}




