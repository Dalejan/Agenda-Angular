/**student-list.component
 * Componente que se encarga de renderizar la tabla de students
 */

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Student } from "../../../classes/student";
@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.scss"]
})
export class StudentListComponent {
  /**arrStudents
   * Array <Student>
   * Variable de entrada para mostrar la información de cada estudiante
   */
  @Input("students")
  arrStudents: Array<Student>;
  /**arrColumns
   * Array <String>
   * Variable que muestra la información de la cabecera de la tabla
   */
  arrColumns: Array<String>;

  /**evAction
   * EventEmitter
   * Variable de salida que maneja la información a mostrar en las ventanas modales
   */
  @Output()
  evAction = new EventEmitter();
  constructor() {
    this.arrColumns = ["Nombre", "Código", "Correo", "Acciones"];
  }

  /**
   * action
   * Método que ejecuta un evento que emite la información a mostrar en las ventanas modales
   * @Input ev: Objeto de entrada que recibe de un componente hijo
   * return none
   */
  action(ev) {
    this.evAction.emit({
      strModal: ev.strModal,
      numIndex: ev.numIndex,
      blIsEditable: ev.blIsEditable,
      objStudent: ev.objStudent
    });
  }
}
