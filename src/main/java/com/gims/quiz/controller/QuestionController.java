package com.gims.quiz.controller;

import com.gims.quiz.entity.Question;
import com.gims.quiz.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/question")
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;

    @GetMapping("/quiz/{id}")
    public List<Question> getByQuizId(@PathVariable Long id) {
        return this.questionService.getAllByQuizId(id);
    }
}
