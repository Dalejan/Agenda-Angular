/**
 * limit-text.directive
 * Directiva que verifica el tamaño del nombre del estudiante,
 * si es muy largo añade "..."
 *  */
import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appLimitText]"
})
export class LimitTextDirective {
  /**
   * text
   * String
   * Variable que almacena el nombre del estudiante
   */
  @Input("appLimitText")
  text: String;
  constructor(private el: ElementRef) {}
  /**
   * ngOnInit
   * Método que se ejecuta una vez iniciado el componente
   * Verifica el tamaño del nombre y añade ".." si es largo
   * Y muestra solo el primer nombre en caso de ser compuesto
   * @Input: none
   * @Output: none
   */
  ngOnInit() {
    if (this.text.length >= 9) {
      if (this.text.split(" ").length >= 2) {
        this.el.nativeElement.innerHTML = this.text.substring(
          0,
          this.text.split(" ")[0].length
        );
      } else {
        this.el.nativeElement.innerHTML = this.text.substring(0, 7) + "...";
      }
    }
  }
}
