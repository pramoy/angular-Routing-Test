import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListTestComponent } from "./list-test.component";

const routes: Routes = [{ path: "", component: ListTestComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ListTestRoutingModule {}
