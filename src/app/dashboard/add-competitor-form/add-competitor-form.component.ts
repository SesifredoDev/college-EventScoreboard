import { Component } from '@angular/core';
import { ApiConnectionService } from 'src/app/services/api-connection.service';

@Component({
  selector: 'app-add-competitor-form',
  templateUrl: './add-competitor-form.component.html',
  styleUrls: ['./add-competitor-form.component.scss']
})
export class AddCompetitorFormComponent {
  constructor(private apiConnection: ApiConnectionService){}
  names: any[] =[];
  formSubmit(form:any){
    const newTeam ={
      name: form.value.name,
      members:this.names,
    }
    // console.log(newEvent)
    this.apiConnection.addTeam(newTeam)
    form.reset()
    this.names=[];
  }
  addMember(){
    this.names.push({name:""})
  }
}
