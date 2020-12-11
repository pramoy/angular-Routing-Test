import { importExpr } from "@angular/compiler/src/output/output_ast";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
  
// import { TestComponent } from "./components/test.component";
import { from } from "rxjs";

import ListTestModule from "./modules/list-test/list-test.module"

const routes: Routes = [
  // { path: "test", component: TestComponent },
  // {
  //   path: "list-test",
  //   loadChildren: () => import("./modules/list-test/list-test.module").then(d => d.ListTestModule)
  // }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
