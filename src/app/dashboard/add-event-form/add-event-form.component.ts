import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { ApiConnectionService } from 'src/app/services/api-connection.service';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.scss']
})
export class AddEventFormComponent implements OnInit{
  constructor(private apiConnection: ApiConnectionService){}
  ngOnInit(): void {
  }

  formSubmit(form:any){
    const newEvent ={
      name: form.value.name,
      type: form.value.type,
      max: form.value.max,
      subtraction: form.value.subtraction,
    }
    // console.log(newEvent)
    this.apiConnection.addEvent(newEvent)
  }
} 
