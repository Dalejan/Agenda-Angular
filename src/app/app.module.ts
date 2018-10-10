import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StudentListComponent } from "./components/student-list/student-list.component";
import { StudentComponent } from "./components/student/student.component";
import { ActionIconDirective } from "./directives/action-icon.directive";
import { ModalComponent } from "./components/modal/modal.component";
import { FormsModule } from "@angular/forms";

/**Angular material */
import { MaterialModule } from "./modules/material.module";
import { LimitTextDirective } from './directives/limit-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentComponent,
    ActionIconDirective,
    ModalComponent,
    LimitTextDirective
  ],
  imports: [BrowserModule, MaterialModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
