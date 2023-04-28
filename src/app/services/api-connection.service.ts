import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Subject } from 'rxjs';
import { Team } from '../models/team.model';
import { Event } from '../models/event.model';

const API_URL = environment.API_URL

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  private event = new Subject<{events:[Event]}>();
  private team = new Subject<{teams:[Team]}>();

  constructor(private http: HttpClient) { }


  // Event Related Code
  getEventUpdateListener(){
    return this.event.asObservable();
  }

  getEvents(){
    this.http
      .get<any>(API_URL+'/events')
      .subscribe(eventResponse =>{
        this.event.next({events:eventResponse.data})
      })
      
  }

  addEvent(event: any){
    const body = event;

    this.http
      .post<any>(API_URL+"/events", body)
      .subscribe(response=>{
        console.log(response)
      })
  }

  editEvent(event:any, eventId: any){
    const body = {event:event, id:eventId};
    this.http
      .put<any>(API_URL+'/events', body)
      .subscribe(response =>{
        console.log(response)
      })
  }

  // Team Related
  getTeamUpdateListener(){
    return this.team.asObservable();
  }
  getTeams(){
    this.http
      .get<any>(API_URL+'/teams')
      .subscribe(response =>{
        this.team.next({teams:response.data})
      })
      
  }

  addTeam(team: any){
    const body = team;

    this.http
      .post<any>(API_URL+"/teams", body)
      .subscribe(response=>{
        console.log(response)
      })
  }
  
}
