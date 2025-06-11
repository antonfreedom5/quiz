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
import {CommonModule} from "@angular/common";
import {QuizListComponent} from "./pages/quiz-list/quiz-list.component";
import {CategoryHttpService} from "./services/http/category.http.service";
import {QuestionHttpService} from "./services/http/question.http.service";
import {ReportHttpService} from "./services/http/report.http.service";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { ReportsComponent } from "./pages/reports/reports.component";
import { MatTableModule } from "@angular/material/table";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatGridListModule
  ],
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    QuizComponent,
    QuizListComponent,
    CategoryComponent,
    ReportsComponent
  ],
  exports: [],
  providers: [
    QuizHttpService,
    CategoryHttpService,
    QuestionHttpService,
    ReportHttpService,
    provideAnimationsAsync()
  ],
  bootstrap: [
    AppComponent
  ],
})

export class AppModule {
}
