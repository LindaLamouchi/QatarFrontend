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
  size:number;
 
  dataplayers:any;
  pageSize:number=2;
  page:number=1;
  pagee:number=1;
  sizee:number;
  myInnerHeight: Window["innerHeight"];
  width:Window["innerWidth"];
  constructor(private userService: UserService,private authService: AuthService, private router: Router) { }
 
  ngOnInit() {
   
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
/** Player Config **/
   newPlayer(){
    this.router.navigate(['newPlayer']);
   }
   onEditPlayer(id:number){

   }
   ondeletePlayer(id:number){

   }



}




