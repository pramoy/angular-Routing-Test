import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-test",
  templateUrl: "./test.component.html"
  // styleUrls: ["./test.component.css"]
})
export class TestComponent {
  name = "Angular test" + VERSION.major;
  testArray=['a','b','c']
}
