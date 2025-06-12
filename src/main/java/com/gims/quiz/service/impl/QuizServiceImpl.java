package com.gims.quiz.service.impl;

import com.gims.quiz.entity.Quiz;
import com.gims.quiz.repository.QuizRepository;
import com.gims.quiz.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QuizServiceImpl implements QuizService {

    private final QuizRepository quizRepository;

    @Override
    public Optional<Quiz> getById(Long id) {
        return this.quizRepository.findById(id);
    }

    @Override
    public List<Quiz> getAll() {
        return this.quizRepository.findAll();
    }

    @Override
    public List<Quiz> getByCategoryId(Long id) {
        return this.quizRepository.findAllByCategoryId(id).stream().sorted(Comparator.comparing(Quiz::getOrdering)).toList();
    }
}
