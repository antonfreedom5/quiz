import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {QuizHttpService} from "./services/http/quiz.http.service";
import {AdminComponent} from "./pages/admin/admin.component";
import {LoginComponent} from "./pages/login/login.component";
import {QuizComponent} from "./components/quiz/quiz.component";
import {CategoryComponent} from "./pages/category/category.component";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {QuizListComponent} from "./pages/quiz-list/quiz-list.component";
import {CategoryHttpService} from "./services/http/category.http.service";
import {QuestionHttpService} from "./services/http/question.http.service";

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    QuizComponent,
    QuizListComponent,
    CategoryComponent
  ],
  exports: [],
  providers: [
    QuizHttpService,
    CategoryHttpService,
    QuestionHttpService
  ],
  bootstrap: [
    AppComponent
  ],
})

export class AppModule {
}
