import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MechanicComponent } from './mechanic/mechanic.component';
import { FormsModule } from '@angular/forms';
import { MechanicListComponent } from './mechanic-list/mechanic-list.component';
import { DatastatusComponent } from './datastatus/datastatus.component';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full'},
  { path: 'overview', component: OverviewComponent },
  { path: 'mechanics', component: MechanicListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MechanicComponent,
    MechanicListComponent,
    DatastatusComponent,
    OverviewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
