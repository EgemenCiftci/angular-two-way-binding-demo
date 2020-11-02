import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  num = 5;

  increment() {
    this.num++;
    console.log("increment from parent!");
  }
}
