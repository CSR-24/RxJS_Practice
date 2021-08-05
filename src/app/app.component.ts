import { Component } from "@angular/core";
import { fromEvent, interval, Subscription } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  subscriptions: Subscription = new Subscription();

  docCounter$ = fromEvent(document, "click").pipe(
    switchMap(() => interval(1000))
  );

  practice() {
    this.subscriptions.add(this.docCounter$.subscribe(console.log));
  }

  stop() {
    this.subscriptions.unsubscribe();
  }
}
