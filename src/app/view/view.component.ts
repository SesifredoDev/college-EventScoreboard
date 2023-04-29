import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../services/api-connection.service';
import { Subscription } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Team } from '../models/team.model';
import {Event} from '../models/event.model'
import { AddTeamBoxComponent } from './add-team-box/add-team-box.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit{
  public eventsSub: Subscription;
  public teamsSub: Subscription;

  public events: [any];
  public teams: [any];

  constructor(private apiConnection: ApiConnectionService, public dialog: MatDialog){}

  ngOnInit(){

    this.apiConnection.getEvents()

    this.eventsSub = this.apiConnection.getEventUpdateListener().subscribe((data: any) => {
      this.events = data.events
    });

    this.apiConnection.getTeams()
    this.eventsSub = this.apiConnection.getTeamUpdateListener().subscribe((data: any) => {
      this.teams = data.teams
    });


    
    
  }
  drop(event: CdkDragDrop<Team[]>, leaderboard:any, originalEvent:any) {
    moveItemInArray(leaderboard, event.previousIndex, event.currentIndex);
    originalEvent.leaderboard = leaderboard
    this.apiConnection.editEvent(originalEvent, originalEvent._id)

  }
  addTeam(event: Event){
      const dialogRef = this.dialog.open(AddTeamBoxComponent, {
        data: {event:event, teams:this.teams},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.apiConnection.editEvent(result, event._id)
      });
  }
}
