/**app.component
 * Componente principal que encierra toda la información mostrada en la aplicación
 * y el único capaz de manejar los datos
 */

import { Component } from "@angular/core";
import { Student } from "../classes/student";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  /**strTitle
   * String
   * Variable que muestra el título en la parte superior de la ventana
   */
  strTitle: String;
  /**arrStudents
   * Arreglo de Student
   * Variable que permite guardar la información de los Students en forma de arreglo
   * unidimensional
   */
  arrStudents: Array<Student>;
  /**blModalIsOpen
   * Boolean
   * Variable que maneja la apertura y el cierre de las ventanas modales
   */
  blModalIsOpen: boolean;
  /**objModalInfo
   * JSON
   * Variable que guarda lo que se debe mostrar en las ventanas modales
   */
  objModalInfo: any;

  constructor(private snackBar: MatSnackBar) {
    this.strTitle = "Agenda";
    this.arrStudents = [
      new Student("Paco", "a@a.com", 3, 3322718),
      new Student("Hernesto", "a@a.com", 4, 339198),
      new Student("Javier", "a@a.com", 5, 99384787),
      new Student("Paco", "a@a.com", 3, 3322718),
      new Student("Hernesto", "a@a.com", 4, 339198),
      new Student("Javier", "a@a.com", 5, 99384787),
      new Student("Paco", "a@a.com", 3, 3322718),
      new Student("Hernesto", "a@a.com", 4, 339198),
      new Student("Javier", "a@a.com", 5, 99384787)
    ];
  }

  /**
   * openModal
   * Método que abre una ventana modal
   * @Input ev: Objeto que recibe de un componente hijo
   * return none
   */
  openModal(ev) {
    if (ev != "crear") {
      this.actionFromModal(ev);
    } else {
      this.objModalInfo = {
        strModal: "crear",
        numIndex: -1,
        objStudent: new Student("", "", 0, 0),
        blIsEditable: true
      };
      this.displayModal();
    }
  }
  /**
   * displayModal
   * Método que se encarga de activar la visualización de la ventana modal e iniciar
   * su animación
   */
  displayModal() {
    this.blModalIsOpen = true;
    setTimeout(() => {
      document.getElementById("modal").classList.add("active");
    }, 100); //espera hasta que el elemento esté creado
  }

  /**
   * actionFromModal
   * Método que se encarga de identificar la acción ejecutada por la ventana modal
   * y posteriormente realizar los métodos específicos
   * @Input : ev - Variable recibida desde un componente hijo, contiene la información de la ventana modal
   * @Output : none
   */
  actionFromModal(ev) {
    this.objModalInfo = {
      strModal: ev.strModal,
      numIndex: ev.numIndex,
      objStudent: ev.objStudent,
      blIsEditable: ev.blIsEditable
    };
    this.displayModal();

    switch (ev.strModal) {
      case "crear":
        this.createStudent(ev);
        break;
      case "editar":
        this.editStudent(ev);
        break;
      case "eliminar":
        this.blModalIsOpen = false;
        this.deleteStudent(ev);
        break;
    }
  }
  /**
   * createStudent
   * Método que crea un Student
   * @Input ev: Objeto que recibe de un componente hijo
   * return none
   */
  createStudent(ev) {
    this.arrStudents.push(ev.objStudent);
    setTimeout(() => {
      this.closeModal({ close: true });
      this.showMessage("Se creó un estudiante");
    }, 500);
  }

  /**
   * editStudent
   * Método que se encarga de actualizar el arreglo de estudiantes
   * @Input : ev - variable generada por un componente hijo que contiene la información necesaria
   * @Output : none
   */
  editStudent(ev) {
    if (this.arrStudents[ev.numIndex] != ev.objStudent) {
      setTimeout(() => {
        this.closeModal({ close: true });
        this.arrStudents[ev.numIndex] = ev.objStudent;
        this.showMessage("Se editó un estudiante");
      }, 500);
    }
  }

  /**
   * delete
   * Método que elimina un Student en una posición
   * @Input ev: Objeto de entrada que recibe de un componente hijo
   * return none
   */
  deleteStudent(ev) {
    this.arrStudents.splice(ev.numIndex, 1);
    this.showMessage("Se borró un estudiante");
  }
  /**
   * showMessage
   * Método que muestra un mensaje emergente en la parte inferior de la pantalla
   * @Input mensaje: Texto del mensaje emergente
   * return none
   */
  showMessage(mensaje) {
    this.snackBar.open(mensaje, "Ok", {
      duration: 3000
    });
  }
  /**
   * closeModal
   * Método que cierra una ventana modal
   * @Input ev: Objeto que recibe de un componente hijo
   * return none
   */
  closeModal(ev) {
    this.blModalIsOpen = !ev.close;
  }
}
