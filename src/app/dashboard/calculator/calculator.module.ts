import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalculatorComponent } from "./calculator.component";
import { FormsModule } from "@angular/forms";
import { ResultScreenModule } from "../../shared/components/result-screen.module";

@NgModule({
  declarations: [CalculatorComponent],
  imports: [CommonModule, ResultScreenModule],
  exports: [CalculatorComponent],
})
export class CalculatorModule {}
