import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8090/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  /***********************************Team************************************************ */
  getTeamList(): Observable<any> {
    return this.http.get('http://localhost:8090/getTeams',{responseType:'json'});
  }

  saveTeam(name:any) {
     this.http.post('http://localhost:8090/addTeam', {
      name: name
    })
    .subscribe(
      () => {
        alert("New team is added to the list")
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
  deleteTeam(id: number) {
    return this.http.delete('http://localhost:8090/deleteTeam/'+id);
  }

  /********************************************************Player************************************** */
  //get the players within a specific team
  getPlayers(id:number) {
    return this.http.get('http://localhost:8090/getPlayerT/'+id,{responseType:'json'});
  }
  //get the full list of players
  getPlayersList() {
    return this.http.get('http://localhost:8090/getPlayers',{responseType:'json'});
  }
  //add a new player to players' list
  addPlayer(player:any){
    this.http.post('http://localhost:8090/addPlayer',{
    "firstName":player.firstName,
    "lastName":player.lastName,
    "age":player.age,
    "playerRole":player.playerRole
    }) .subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
  //update a player's info add him to a new team
  addToTeam(player:any,idt:number) {
    this.http.put('http://localhost:8090/SetTeamPlayer/'+idt, {
      "idPlayer": player.idPlayer,
      "firstName": player.firstName,
      "lastName": player.lastName,
      "age": player.age,
      "playerRole": player.playerRole
   })
   .subscribe(
     () => {
      console.log('a player is added to the list');
     },
     (error) => {
       console.log('Erreur ! : ' + error);
     }
   );
 }
 //delete player by id
 deletePlayer(id: number) {
  return this.http.delete('http://localhost:8090/deletePlayer/'+id);
}

  //***************************************************Coach manipulation
  //add a new coach
  addCoach(forme: any) {
    this.http.post('http://localhost:8090/addCoach', {
      "firstName": forme.firstName,
      "lastName": forme.lastName
   })
   .subscribe(
     () => {
      console.log('a coach is added to the list');
     },
     (error) => {
       console.log('Erreur ! : ' + error);
     }
   );
  }
  //get coach list
  getCoachList() {
    return this.http.get('http://localhost:8090/getCoaches',{responseType:'json'});
  }
  //delete coach
  deleteCoach(idCoach: number) {
    return this.http.delete('http://localhost:8090/deleteCoach/'+idCoach);
  }
  //add a coach  to a specific team
  addCoachToTeam(selectedCoach: any, id: number) {
    this.http.put("http://localhost:8090/updateCoach/"+id, {
      "idCoach": selectedCoach.idCoach,
      "firstName": selectedCoach.firstName,
      "lastName": selectedCoach.lastName
   })
   .subscribe(
     () => {
      console.log('a new coach is affected to this team');
     },
     (error) => {
       console.log('Erreur ! : ' + error);
     }
   );
  }
  //get coach by team id
  getTeamByID(id:number){
    return this.http.get('http://localhost:8090/getTeamCoach/'+id,{responseType:'json'});
  }

}

