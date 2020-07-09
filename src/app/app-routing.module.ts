import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./dashboard/home/home.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
