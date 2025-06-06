package com.gims.quiz.service;

import com.gims.quiz.entity.Quiz;

import java.util.List;
import java.util.Optional;

public interface QuizService {

    Optional<Quiz> getById(Long id);

    List<Quiz> getAll();

    List<Quiz> getByCategoryId(Long id);
}
