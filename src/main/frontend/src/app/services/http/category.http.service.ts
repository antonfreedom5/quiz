import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoryModel} from "../../models/category.model";

@Injectable()
export class CategoryHttpService {
    private readonly HTTP_PATH = "https://zbuduem.by/test/api/v1/category";

    constructor(private readonly httpClient: HttpClient) {}

    public getCategories = (): Observable<CategoryModel[]> => {
      return this.httpClient.get<CategoryModel[]>(this.HTTP_PATH);
    }
}
