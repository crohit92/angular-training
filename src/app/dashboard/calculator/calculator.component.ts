import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngt-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"],
})
export class CalculatorComponent implements OnInit {
  expression = "";
  buttons: string[] = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "/",
  ];
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
  updateExpression(exp: string) {
    this.expression = exp;
  }
}
