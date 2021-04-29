import {CommonModule} from '@angular/common';
import {NotesComponent} from './notes.component';
import {NotesRoutingModule} from './notes-routing.module';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule
  ],
  declarations: [NotesComponent]
})

export class NotesModule {
}
