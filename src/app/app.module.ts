import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployerDetailsComponent } from './components/dashboard/employer-details/employer-details.component';
import { CalendarComponent } from './components/dashboard/calendar/calendar.component';
import { ReportResultsComponent } from './components/dashboard/report-results/report-results.component';
import { AssessmentComponent } from './components/dashboard/assessment/assessment.component';
import { PlaningComponent } from './components/dashboard/planing/planing.component';
import { GeneralNotesComponent } from './components/dashboard/general-notes/general-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideMenuComponent,
    DashboardComponent,
    FooterComponent,
    EmployerDetailsComponent,
    CalendarComponent,
    ReportResultsComponent,
    AssessmentComponent,
    PlaningComponent,
    GeneralNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
