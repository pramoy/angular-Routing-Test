import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ListTestRoutingModule } from "./list-test-routing.module";
import { ListTestComponent } from "./list-test.component";
import { from } from "rxjs";

@NgModule({
  imports: [BrowserModule],
  exports: [ListTestModule],
  declarations: [ListTestComponent]
})
export class ListTestModule {}
