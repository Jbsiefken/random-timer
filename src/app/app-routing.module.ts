import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerComponent } from './timer/timer.component';
import { DarktimerComponent } from './darktimer/darktimer.component';

const routes: Routes = [{ path: 'classic', component: TimerComponent },
{ path: '', component: DarktimerComponent},
{ path: '**', component: DarktimerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


