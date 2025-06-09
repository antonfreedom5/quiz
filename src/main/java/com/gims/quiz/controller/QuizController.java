package com.gims.quiz.controller;

import com.gims.quiz.entity.Quiz;
import com.gims.quiz.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/quiz")
@RequiredArgsConstructor
public class QuizController {

    private final QuizService quizService;

    @GetMapping
    public List<Quiz> getAll() {
        return this.quizService.getAll();
    }

    @GetMapping("/category/{id}")
    public List<Quiz> getAllByCategoryId(@PathVariable Long id) {
        return this.quizService.getByCategoryId(id);
    }
}
