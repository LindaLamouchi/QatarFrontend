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
  constructor(private userService: UserService,private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  savePlayer(){
    console.log(this.form);
    this.userService.addPlayer(this.form);
  }

}
