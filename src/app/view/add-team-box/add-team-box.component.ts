import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-team-box',
  templateUrl: './add-team-box.component.html',
  styleUrls: ['./add-team-box.component.scss']
})
export class AddTeamBoxComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  teams = this.data.teams;
  leaderboard = this.data.event.leaderboard;
  unselectedTeams = this.teams.filter((team:any)=>{
    return !(new Set(this.leaderboard)).has(team)
  })
  ngOnInit(): void {
    console.log(this.leaderboard)
    console.log(this.unselectedTeams)
  }
  
  onLeaderboardCheck(event: any){
    let value = (event.source.value)
    let i = 0;
    this.leaderboard.forEach((team:any) => {
        if(team == value){
          this.leaderboard = this.leaderboard.filter((obj:any) => {return obj !== value})
        }
        i++
    });
    this.unselectedTeams.push(value)
  }
  onselectedCheck(event: any){
    let value = (event.source.value)
    let i = 0;
    this.unselectedTeams.forEach((team:any) => {
        if(team == value){
          this.unselectedTeams = this.unselectedTeams.filter((obj:any) => {return obj !== value})
        }
        i++
    });
    this.leaderboard.push(value)
  }
}
