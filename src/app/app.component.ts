import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularlist';
  lst:any = [
    "JavaScript", "C++", "Java", "Python", "Ruby", "TypeScript", "HTML"
  ]

  onSubmit(event:any) {
    console.log("Entering", event);
  }
}
