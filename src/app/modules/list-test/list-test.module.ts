import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListTestRoutingModule } from "./list-test-routing.module";
import { ListTestComponent } from "./list-test.component";

@NgModule({
  imports: [ListTestRoutingModule, CommonModule],
  declarations: [ListTestComponent]
})
export class ListTestModule {}
