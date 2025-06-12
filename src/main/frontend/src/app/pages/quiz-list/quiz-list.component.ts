import {Component, OnInit} from '@angular/core';
import {QuizHttpService} from "../../services/http/quiz.http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {QuizModel} from "../../models/quiz.model";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.scss'
})
export class QuizListComponent implements OnInit {
  quizList: Observable<QuizModel[]> = this.quizHttpService.getQuizList(this.activatedRoute.snapshot.params['categoryId']);

  constructor(private readonly quizHttpService: QuizHttpService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {}

  ngOnInit() {}

  public navigate(id: number): void {
    this.router.navigate(['quiz', id]);
  }
}
