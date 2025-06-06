import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionModel} from "../../models/question.model";
import {QuestionHttpService} from "../../services/http/question.http.service";
import {AnswerModel} from "../../models/answer.model";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {

  currentQuestion: QuestionModel;

  questions: QuestionModel[];

  selectedAnswer: AnswerModel;

  isFinish: boolean = false;

  constructor(private readonly quizHttpService: QuestionHttpService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {}

  get currentIndex(): number {
    return this.questions.indexOf(this.currentQuestion) + 1;
  }

  ngOnInit() {
    this.quizHttpService.getQuestionList(this.activatedRoute.snapshot.params['quizId'])
      .subscribe(questions => {
        this.questions = questions;
        this.currentQuestion = questions[0];
      })
  }

  isRight(answer: AnswerModel): boolean {
    return this.currentQuestion.selectedAnswer
      && ((answer == this.currentQuestion.selectedAnswer && this.currentQuestion.selectedAnswer.correct)
        || (answer != this.currentQuestion.selectedAnswer && answer.correct));
  }

  saveReport(): void {
    // save
  }

  chose(answer: AnswerModel): void {
      if (!this.currentQuestion.selectedAnswer) {
        this.selectedAnswer = answer;
        this.currentQuestion.selectedAnswer = answer;
      }
  }

  next(): void {
      const index = this.questions.indexOf(this.currentQuestion);
      if (index < this.questions.length) {
          this.currentQuestion = this.questions[index + 1];
      } else {
        this.isFinish = true;
      }
      this.selectedAnswer = null;
  }

  previous(): void {
      const index = this.questions.indexOf(this.currentQuestion);
      if (index > 0) {
          this.currentQuestion = this.questions[index - 1];
      }
      this.selectedAnswer = null;
  }

}
