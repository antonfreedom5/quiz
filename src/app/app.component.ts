import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tise-quiz-frontend';

  constructor(private readonly router: Router) {}

  public goHome(): void {
      this.router.navigate(['/']);
  }
}
