import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  form: any = {};
  forme:any={}; //a new coach object 
  constructor(private userService: UserService,private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  savePlayer(){
    console.log(this.form);
    this.userService.addPlayer(this.form);

    alert("A player is added successfully");
    this.router.navigate(['/admin']);
   
  }
  back(){
    this.router.navigate(['/admin']);
  }
  saveCoach(){
    this.userService.addCoach(this.forme);
    alert("A coach is added successfully");
    this.router.navigate(['/admin']);
  }

}
