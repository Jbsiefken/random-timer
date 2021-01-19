import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { TimeDisplayBravoComponent } from './time-display-bravo/time-display-bravo.component';
import { ResultListComponent } from './result-list/result-list.component';
import { FormattedTimeComponent } from './formatted-time/formatted-time.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimeDisplayComponent,
    TimeDisplayBravoComponent,
    ResultListComponent,
    FormattedTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
