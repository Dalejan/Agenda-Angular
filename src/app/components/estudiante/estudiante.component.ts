import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Estudiante } from "../../../classes/estudiante";

@Component({
  selector: "[app-estudiante]", //Hacer uso como "directiva"
  templateUrl: "./estudiante.component.html",
  styleUrls: ["./estudiante.component.scss"]
})
export class EstudianteComponent implements OnInit {
  @Input("estudiante")
  estudiante: Estudiante;
  @Input("index")
  index: number;
  /* @Input()
  columns: Array<String>;
  estudiante_ele: any;*/
  arrActions: Array<String>;

  @Output()
  evBorrar = new EventEmitter();
  constructor() {}

  ngOnInit() {
    //this.estudiante_ele = this.estudiante.getAllDataAsArray();
    this.arrActions = ["editar", "ver", "eliminar"];
    //this.estudiante_ele.push(this.actions);
  }

  clicked(action) {
    switch (action) {
      case "ver":
        this.ver();
        break;

      case "editar":
        this.editar();
        break;

      case "eliminar":
        this.eliminar();
        break;
    }
  }

  ver() {}

  editar() {}

  eliminar() {
    this.evBorrar.emit({ index: this.index });
    console.log("estudiante", this.index);
  }
}
