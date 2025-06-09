package com.gims.quiz.controller;

import com.gims.quiz.entity.Report;
import com.gims.quiz.service.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/report")
@RequiredArgsConstructor
public class ReportController {

    private final ReportService reportService;

    @GetMapping
    public List<Report> getAll() {
        return reportService.findAll();
    }

    @PostMapping("/save")
    public void save(@RequestBody Report report) {
        reportService.save(report);
    }
}
