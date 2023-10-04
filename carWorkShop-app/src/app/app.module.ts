import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MechanicComponent } from './mechanic/mechanic.component';
import { FormsModule } from '@angular/forms';
import { MechanicListComponent } from './mechanic-list/mechanic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MechanicComponent,
    MechanicListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
