import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { TelegramService } from "./services/telegram.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'tise-quiz-frontend';

  constructor(private readonly router: Router,
              private readonly telegramService: TelegramService) {}

  public goHome(): void {
      this.router.navigate(['/']);
  }

  public goReports(): void {
    this.router.navigate(['/reports']);
  }

  ngOnInit(): void {
    this.telegramService.ready();
  }
}
