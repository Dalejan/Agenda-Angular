import { Component } from "@angular/core";
import { Estudiante } from "../classes/estudiante";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Agenda";
  estudiantes: Array<Estudiante>;

  constructor() {
    this.estudiantes = [
      new Estudiante("Paco", "a@a.com", 3, 3322718),
      new Estudiante("Hernesto", "a@a.com", 4, 339198),
      new Estudiante("Javier", "a@a.com", 5, 99384787)
    ];
  }

  borrar(ev) {
    if (ev.index > -1) {
      this.estudiantes.splice(ev.index, 1);
    }
  }
}
