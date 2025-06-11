package com.gims.quiz.service.impl;

import com.gims.quiz.dto.ReportDto;
import com.gims.quiz.entity.Quiz;
import com.gims.quiz.entity.Report;
import com.gims.quiz.repository.ReportRepository;
import com.gims.quiz.service.QuizService;
import com.gims.quiz.service.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReportServiceImpl implements ReportService {

    private final ReportRepository reportRepository;
    private final QuizService quizService;

    @Override
    public List<Report> findAll() {
        return reportRepository.findAll(PageRequest.of(0, 20)).toList();
    }

    @Override
    public Report save(ReportDto reportDto) {
        Quiz quiz = quizService.getById(reportDto.quizId()).orElse(null);
        Report report = new Report();
        report.setQuiz(quiz);
        report.setStartDate(reportDto.startDate());
        report.setEndDate(reportDto.endDate());
        report.setScore(reportDto.score());
        report.setUserName(reportDto.userName());
        return reportRepository.save(report);
    }
}
