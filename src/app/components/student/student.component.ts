/**student.component
 * Componente que maneja la información y eventos de cada students
 */

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Student } from "../../../classes/student";

@Component({
  selector: "[app-student]", //Hacer uso como "directiva"
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.scss"]
})
export class StudentComponent implements OnInit {
  /**
   * student
   * Student
   * Variable que maneja lla información de cada student
   */
  @Input("student")
  student: Student;
  /**index
   * number
   * Variable que maneja la posición real de cada student
   */
  @Input("index")
  numIndex: number;
  /**arrActions
   * Array<String>
   * Variable que
   */
  arrActions: Array<String>;

  /**evAction
   * EventEmitter
   * Variable que de salida que emite la accion realizada a cada usuario
   */
  @Output()
  evAction = new EventEmitter();

  constructor() {}
  /**
   * ngOnInit
   * Método implementado por medio de interfaz
   * @Input none
   * return none
   */
  ngOnInit() {
    this.arrActions = ["editar", "ver", "eliminar"];
  }
  /**
   * clicked
   * Método que verifica el tipo de accion clickeada y emite eventos
   * @Input ev: Objeto de entrada que recibe de un componente hijo
   * return none
   */
  clicked(action) {
    switch (action) {
      case "eliminar":
        this.evAction.emit({
          strModal: action,
          numIndex: this.numIndex,
          objStudent: null,
          blIsEditable: false
        });
        break;
      case "editar":
        this.evAction.emit({
          strModal: action,

          numIndex: this.numIndex,
          objStudent: this.student,
          blIsEditable: true
        });
        break;
      case "ver":
        this.evAction.emit({
          strModal: action,

          index: this.numIndex,
          objStudent: this.student,
          blIsEditable: false
        });
    }
  }
}
