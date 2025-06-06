import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {QuizComponent} from "./components/quiz/quiz.component";
import {CategoryComponent} from "./pages/category/category.component";
import {QuizListComponent} from "./pages/quiz-list/quiz-list.component";

export const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'quiz-list/:categoryId', component: QuizListComponent },
  { path: 'quiz/:quizId', component: QuizComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: "**",
    redirectTo: "category",
    pathMatch: "full",
  },
]
