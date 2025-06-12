import {Component, OnInit} from '@angular/core';
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

  constructor(private readonly questionHttpService: QuestionHttpService,
              private readonly quizHttpService: QuizHttpService,
              private readonly reportHttpService: ReportHttpService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {}

  get currentIndex(): number {
    return this.questions ? this.questions.indexOf(this.currentQuestion) : 0;
  }

  get areAllQuestionsAnswered(): boolean {
    return this.questions && this.questions.every(it => it.selectedAnswer);
  }

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

  public startAgain = ():void => {
    this.router.navigate(['/']).finally(() => {
      this.router.navigate(['quiz', this.quizId])
    });
  }

  public chooseAnotherQuiz = ():void => {
    this.router.navigate(['category']).finally();
  }

  public isRight(answer: AnswerModel): boolean {
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

        if (this.quiz.exam && this.wrongAnswerCount >= 2) {
          this.isFinish = true;
        }
      }
  }

  public next(): void {
      const index = this.questions.indexOf(this.currentQuestion);
      if (!this.currentQuestion.selectedAnswer) {
        this.questions = this.questions.filter(it => it.id !== this.currentQuestion.id);
        this.questions.push(this.currentQuestion);
        this.currentQuestion = this.questions[index];
      } else {
        this.currentQuestion = this.questions[index + 1];
      }
  }

  public stopTime(): void {
    this.isFinish = true;
    this.isTimeEnd = true;
  }
}
