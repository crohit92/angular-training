import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngt-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"],
})
export class CalculatorComponent implements OnInit {
  expression = "";
  constructor() {}

  ngOnInit(): void {}
  addToExpression(section: string) {
    this.expression += section;
  }
  evaluate() {
    try {
      this.expression = new Function(`return ${this.expression}`)();
    } catch (error) {
      this.expression = "0";
    }
  }
}
