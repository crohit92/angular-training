import { NgModule } from "@angular/core";
import { MyIfDirective } from "./my-if.directive";

@NgModule({
  declarations: [MyIfDirective],
  exports: [MyIfDirective],
  // providers: [MyIfDirective]
})
export class MyIfModule {

}
