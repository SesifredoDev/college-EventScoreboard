import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCompetitorFormComponent } from './dashboard/add-competitor-form/add-competitor-form.component';
import { AddEventFormComponent } from './dashboard/add-event-form/add-event-form.component';
import { RunEventFormComponent } from './dashboard/run-event-form/run-event-form.component';
import { ViewComponent } from './view/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddCompetitorFormComponent,
    AddEventFormComponent,
    RunEventFormComponent,
    ViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
