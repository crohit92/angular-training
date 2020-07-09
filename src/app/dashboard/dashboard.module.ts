import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatTooltipModule } from "@angular/material/tooltip";
import { HomeModule } from "./home/home.module";
import { RouterModule } from "@angular/router";
import { CalculatorModule } from "./calculator/calculator.module";
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    HomeModule,
    CalculatorModule,
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    RouterModule,
  ],
  exports: [HomeModule, CalculatorModule, DashboardComponent],
})
export class DashboardModule {}
