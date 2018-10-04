import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Estudiante } from "../../../classes/estudiante";
@Component({
  selector: "app-agenda",
  templateUrl: "./agenda.component.html",
  styleUrls: ["./agenda.component.scss"]
})
export class AgendaComponent implements OnInit {
  @Input("estudiantes")
  arrEstudiantes: Array<Estudiante>;
  arrColumns: Array<String>;

  @Output()
  evBorrar = new EventEmitter();
  constructor() {
    this.arrColumns = ["Nombre", "Código", "Correo", "Acciones"];
  }

  ngOnInit() {}

  borrar(ev) {
    this.evBorrar.emit({ index: ev.index });
    console.log("agenda", ev);
  }
}
