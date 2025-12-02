import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    title: string = 'fcfc-poc';

  // VULNERABLE: Code Injection via eval()
  runCode(userInput: string) {
    //eval(userInput); // Veracode will flag this as HIGH
  }
}
