import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BackdropComponent } from './UI/backdrop/backdrop.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BackdropComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
