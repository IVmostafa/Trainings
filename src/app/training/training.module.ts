import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { OneComponent } from './components/one/one.component';
import { RoundNotePipe } from './pipes/round-note.pipe';
import { RoundedNoteDirective } from './directives/rounded-note.directive';

@NgModule({
  declarations: [
    OneComponent,
    RoundNotePipe,
    RoundedNoteDirective,
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule
  ]
})
export class TrainingModule { }
