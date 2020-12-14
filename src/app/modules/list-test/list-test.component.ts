import { NgModule, Component } from "@angular/core";
// import {c} from "@angular/core"

@Component({
  selector: "list-test",
  templateUrl: "list-test.component.html"
})
export class ListTestComponent {
  testArray = ["a", "b", "c"];
}
