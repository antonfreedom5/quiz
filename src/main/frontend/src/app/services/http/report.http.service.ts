import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReportModel} from "../../models/report.model";

@Injectable()
export class ReportHttpService {
  private readonly HTTP_PATH = "https://zbuduem.by/test/api/v1/report";

  constructor(private readonly httpClient: HttpClient) {}

  public getAll = (): Observable<ReportModel[]> => {
      return this.httpClient.get<ReportModel[]>(this.HTTP_PATH);
  }

  public saveReport = (report: ReportModel): Observable<void> => {
    return this.httpClient.post<void>(this.HTTP_PATH + '/save', report);
  }
}
