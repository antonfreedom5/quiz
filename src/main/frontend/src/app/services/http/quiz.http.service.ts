import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QuizModel} from "../../models/quiz.model";

@Injectable()
export class QuizHttpService {
    private readonly HTTP_PATH = "https://zbuduem.by/test/api/v1/quiz";

    constructor(private readonly httpClient: HttpClient) {}

    public getQuizList = (categoryId: number): Observable<QuizModel[]> => {
      return this.httpClient.get<QuizModel[]>(this.HTTP_PATH + '/category/' + categoryId);
    }

  public getQuizById = (quizId: number): Observable<QuizModel> => {
    return this.httpClient.get<QuizModel>(this.HTTP_PATH + '/' + quizId);
  }
}
