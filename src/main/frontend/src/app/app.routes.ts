import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {QuizComponent} from "./components/quiz/quiz.component";
import {CategoryComponent} from "./pages/category/category.component";
import {QuizListComponent} from "./pages/quiz-list/quiz-list.component";
import { ReportsComponent } from "./pages/reports/reports.component";

export const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'quiz-list', component: QuizListComponent },
  { path: 'quiz/:quizId', component: QuizComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: "**",
    redirectTo: "quiz-list",
    pathMatch: "full",
  },
]
