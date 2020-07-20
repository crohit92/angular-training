import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ResultSelectorComponent } from "./result-selector.component";
@NgModule({
  declarations: [ResultSelectorComponent],
  imports: [FormsModule],
  exports: [ResultSelectorComponent],
})
export class ResultScreenModule {}
