import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AgendaComponent } from "./components/agenda/agenda.component";
import { ModalEditComponent } from "./components/modal-edit/modal-edit.component";
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { ActionIconDirective } from './directives/action-icon.directive';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [AppComponent, AgendaComponent, ModalEditComponent, EstudianteComponent, ActionIconDirective, ModalComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
