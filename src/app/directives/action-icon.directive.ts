/** 
 * action-icon.directive
 * Directiva que asigna un icono a cada acción disponible para cada elemento de la lista
 * */
import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appActionIcon]"
})
export class ActionIconDirective {
  /**
   * appACtionIcon
   * String
   * Variable que identifica la acción a realizar
   */
  @Input("appActionIcon")
  appActionIcon: String;
  constructor(private el: ElementRef) {}
/**
 * ngOnInit
 * Método que se ejecuta una vez iniciado el componente
 * Asigna dinámicamente las src del icono de la acción de cada estudiante
 * @Input: none
 * @Output: none
 */
  ngOnInit() {
    this.el.nativeElement.src =
      "../assets/icons/" + this.appActionIcon + ".svg";
  }
}
