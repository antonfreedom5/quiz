import { Component, OnInit } from '@angular/core';
import { ReportHttpService } from "../../services/http/report.http.service";
import { ReportModel } from "../../models/report.model";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {

  public reports: ReportModel[];
  public displayedColumns: string[] = ['id', 'score', 'duration'];

  constructor(private readonly reportHttpService: ReportHttpService) {
  }

  ngOnInit(): void {
    this.reportHttpService.getAll().subscribe(reports => {
      this.reports = reports;
    });
  }


}
