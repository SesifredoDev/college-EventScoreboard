import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-add-team-box',
  templateUrl: './add-team-box.component.html',
  styleUrls: ['./add-team-box.component.scss']
})
export class AddTeamBoxComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<AddTeamBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}
  teams = this.data.teams;
  leaderboard: Team[] = this.data.event.leaderboard;
  unselectedTeams: Team[];

  ngOnInit(): void {
    console.log(this.teams)
    this.unselectedTeams = this.teams.filter((el:any) => {
      return this.leaderboard.indexOf(el) === -1;
   });
    console.log(this.leaderboard)
    console.log(this.unselectedTeams)
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  submit(){
    this.data.event.leaderboard = this.leaderboard
    this.dialogRef.close(this.data.event);
  }
}
