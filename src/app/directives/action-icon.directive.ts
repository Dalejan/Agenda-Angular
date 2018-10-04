import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appActionIcon]"
})
export class ActionIconDirective {
  @Input("appActionIcon")
  appActionIcon: String;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.src =
      "../assets/icons/" + this.appActionIcon + ".svg";
  }
}
