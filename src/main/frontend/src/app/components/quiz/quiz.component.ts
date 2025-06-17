import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionModel} from "../../models/question.model";
import {QuestionHttpService} from "../../services/http/question.http.service";
import {AnswerModel} from "../../models/answer.model";
import {ReportModel} from "../../models/report.model";
import {ReportHttpService} from "../../services/http/report.http.service";
import {QuizHttpService} from "../../services/http/quiz.http.service";
import {QuizModel} from "../../models/quiz.model";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {

  @ViewChildren('cardRef') cardRefs!: QueryList<ElementRef>;

  public readonly EXAM_TIME_SECONDS: number = 600;
  public isTimeEnd = false;
  public startDate: Date;
  private quizId: number;
  public isFinish = false;
  public report: ReportModel;
  public rightAnswerCount = 0;
  public wrongAnswerCount = 0;

  public currentQuestion: QuestionModel;
  public questions: QuestionModel[];
  public quiz: QuizModel;
  public currentIndex = 0;

  constructor(private readonly questionHttpService: QuestionHttpService,
              private readonly quizHttpService: QuizHttpService,
              private readonly reportHttpService: ReportHttpService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {}

  ngOnInit() {
    this.quizId = +this.activatedRoute.snapshot.params['quizId'];
    this.quizHttpService.getQuizById(this.quizId)
      .subscribe(quiz => {
        this.quiz = quiz;
      });
    this.questionHttpService.getQuestionList(this.quizId)
      .subscribe(questions => {
        this.questions = questions;
        this.currentQuestion = questions[0];
      });
    this.startDate = new Date();
  }

  public selectQuestion = (index: number): void => {
    this.currentQuestion = this.questions[index];
  }

  public startAgain = ():void => {
    this.router.navigate(['/']).finally(() => {
      this.router.navigate(['quiz', this.quizId])
    });
  }

  public chooseAnotherQuiz = ():void => {
    this.router.navigate(['category']).finally();
  }

  public isRightAnswer(answer: AnswerModel): boolean {
    return this.currentQuestion.selectedAnswer
      && ((answer == this.currentQuestion.selectedAnswer && this.currentQuestion.selectedAnswer.correct)
        || (answer != this.currentQuestion.selectedAnswer && answer.correct));
  }

  public saveReport(): void {
      const score = this.rightAnswerCount * 100 / this.questions.length;
      const endDate = new Date();
      this.report = {
        startDate: this.startDate,
        endDate,
        quizId: this.quizId,
        userEmail: '',
        userName: '',
        userId: '',
        userIp: '',
        userPhone: '',
        score,
        duration: (endDate.getTime() - this.startDate.getTime()) / 1000
      };
      this.reportHttpService.saveReport(this.report).subscribe(() => {
        this.isFinish = true;
      });
  }

  public chose(answer: AnswerModel): void {
      if (!this.currentQuestion.selectedAnswer) {
        this.currentQuestion.selectedAnswer = answer;

        answer.correct ? this.rightAnswerCount++ : this.wrongAnswerCount++;
      }
  }

  public next(cardRefs: QueryList<ElementRef>): void {
    if (this.quiz.exam && this.wrongAnswerCount >= 2) {
      this.isFinish = true;
    }
    for (let i = this.currentIndex + 1; i < this.questions.length; i++) {
      if (!this.isAnswered(this.questions[i])) {
        this.updateCurrentQuestion(cardRefs, i);
        return;
      }
    }
    for (let i = 0; i < this.currentIndex; i++) {
      if (!this.isAnswered(this.questions[i])) {
        this.updateCurrentQuestion(cardRefs, i);
        return;
      }
    }
    this.isFinish = true;
  }

  private updateCurrentQuestion = (cardRefs: QueryList<ElementRef>, index: number): void => {
    if (!this.isAnswered(this.questions[index])) {
      this.currentIndex = index;
      this.currentQuestion = this.questions[this.currentIndex];
      const element = cardRefs.toArray()[index]?.nativeElement;
      element?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  public isAnswered = (question: QuestionModel): boolean => {
    return !!question.selectedAnswer;
  }

  public isWrong = (question: QuestionModel): boolean => {
    return !!question.selectedAnswer && !question.selectedAnswer.correct;
  }

  public isRight = (question: QuestionModel): boolean => {
    return !!question.selectedAnswer && question.selectedAnswer.correct;
  }

  public stopTime(): void {
    this.isFinish = true;
    this.isTimeEnd = true;
  }
}
