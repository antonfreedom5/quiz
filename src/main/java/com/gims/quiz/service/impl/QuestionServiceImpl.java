package com.gims.quiz.service.impl;

import com.gims.quiz.entity.Question;
import com.gims.quiz.entity.Quiz;
import com.gims.quiz.repository.QuestionRepository;
import com.gims.quiz.service.QuestionService;
import com.gims.quiz.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;
    private final QuizService quizService;

    @Override
    public List<Question> getAll() {
        return this.questionRepository.findAll();
    }

    @Override
    public List<Question> getAllByQuizId(Long id) {
        Quiz quiz = this.quizService.getById(id).orElseThrow();
        List<Question> questions = quiz.getQuestions();
        Collections.shuffle(questions);
        return quiz.isExam() ? questions.stream().limit(10L).toList() : questions;
    }
}
