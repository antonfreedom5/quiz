import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QuestionModel} from "../../models/question.model";

@Injectable()
export class QuestionHttpService {
    private readonly HTTP_PATH = "https://zbuduem.by/test/api/v1/question";

    constructor(private readonly httpClient: HttpClient) {}

    public getQuestionList = (quizId: number): Observable<QuestionModel[]> => {
      return this.httpClient.get<QuestionModel[]>(this.HTTP_PATH + '/quiz/' + quizId);
    }
}
