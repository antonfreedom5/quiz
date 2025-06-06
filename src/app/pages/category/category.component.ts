import { Component } from '@angular/core';
import {CategoryHttpService} from "../../services/http/category.http.service";
import {Observable} from "rxjs";
import {CategoryModel} from "../../models/category.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
    public categories: Observable<CategoryModel[]> = this.categoryHttpService.getCategories();

    constructor(private readonly categoryHttpService: CategoryHttpService,
                private readonly router: Router) {}

    public navigate(id: number): void {
        this.router.navigate(['quiz-list', id]);
    }
}
