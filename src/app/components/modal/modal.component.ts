/**modal.component
 * Componente que maneja las ventanas modales y su información
 */
import { Component, Output, EventEmitter, Input, OnInit } from "@angular/core";
import { Student } from "../../../classes/student";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  /**
   * modalInfo
   * JSON
   * Variable que se encarga de cargar la información de la ventana modal:
   * Nombre de la ventana, index del estudiante, si es editable o no y el estudiante
   */
  @Input("modalInfo")
  modalInfo: any;
  /**
   * evClose
   * EventEmitter
   * Variable que se encarga de emitir el evento de cierre de la ventana modal
   */
  @Output()
  evClose = new EventEmitter();

  /**
   * evAction
   * EventEmitter
   * Variable que se encarga de emitir la acción que ejecuta la ventana modal:
   * guardar, ver, editar
   */
  @Output()
  evAction = new EventEmitter();
  /**
   * strModalTitle
   * String
   * Variable que guarda el título de la ventana modal
   */
  strModalTitle: String;
  /**
   * strBtn
   * String
   * Variable que se encarga de guardar el texto del botón de acción de la ventana modal
   */
  strBtn: String;
  /**obStudent
   * Student
   * Objeto de estudiante que carga la información recibida
   */
  objStudent: Student;
  /**
   * blIsEditable
   * boolean
   * Variable que verifica si la ventana es editable o no
   */
  blIsEditable: boolean;
  /**
   * objStudentCopy
   * Student
   * Objeto de copia profunda al estudiante recibido (con el fin de a¿hacer validaciones
   * haciendo uso de ngForm - ngModel)
   */
  objStudentCopy: Student;
  /**eleForm
   * HTMLFormElement
   * Variable que guarda el registro del elemento del formulario
   */
  eleForm: HTMLFormElement;
  constructor(private snackBar: MatSnackBar) {}
  /**
   * ngOnInit
   * Método que se ejecuta una vez inicializado el componente
   * Inicializa las variables anteriormente creadas
   * @Input : none
   * @Output : none
   */
  ngOnInit() {
    this.objStudent = this.modalInfo.objStudent;
    this.objStudentCopy = JSON.parse(JSON.stringify(this.modalInfo.objStudent));
    this.blIsEditable = this.modalInfo.blIsEditable;
    this.eleForm = <HTMLFormElement>document.getElementById("my-form");
    this.checkData();
  }
  /**
   * checkData
   * Método que se encarga de verificar el tipo de ventana modal y mostrar la
   * información correspondiente
   * @Input : none
   * @Output :non
   */
  checkData() {
    switch (this.modalInfo.strModal) {
      case "crear":
        this.strBtn = "Crear";
        this.strModalTitle = "Crear Estudiante";
        break;
      case "editar":
        this.strBtn = "Editar";
        this.strModalTitle = "Editar Estudiante";
        break;
      case "ver":
        this.strBtn = "Salir";
        this.strModalTitle = "Ver Estudiante";
        break;
    }
  }

  /**
   * submit
   * Método que se encarga de emitir la acción ejecutada por la ventana modal
   * @Input : none
   * @Output : none
   */
  submit() {
    this.evAction.emit({
      strModal: this.modalInfo.strModal,
      numIndex: this.modalInfo.numIndex,
      blIsEditable: this.modalInfo.blIsEditable,
      objStudent: this.objStudentCopy
    });

    this.modalInfo.strModal == "ver" ? this.close() : null;
  }

  /**
   * close
   * Método que se encarga de emitir el evento de cierre de la ventana
   * @Input : none
   * @Output : none
   */
  close() {
    this.evClose.emit({ close: true });
  }
}
