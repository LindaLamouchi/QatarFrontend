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

  
  getTeamList(): Observable<any> {
    return this.http.get('http://localhost:8090/getTeams',{responseType:'json'});
  }

  saveTeam(name:any) {
     this.http.post('http://localhost:8090/addTeam', {
      name: name,
      players: '',
      coach: ''
    })
    .subscribe(
      () => {
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
  getPlayers(id:number) {
    return this.http.get('http://localhost:8090/getPlayerT/'+id,{responseType:'json'});
  }
  getPlayersList() {
    return this.http.get('http://localhost:8090/getPlayers',{responseType:'json'});
  }
}

