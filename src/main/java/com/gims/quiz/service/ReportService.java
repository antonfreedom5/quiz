package com.gims.quiz.service;

import com.gims.quiz.entity.Report;

import java.util.List;

public interface ReportService {

    List<Report> findAll();

    Report save(Report report);
}
