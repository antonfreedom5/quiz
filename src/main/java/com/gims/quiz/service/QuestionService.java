package com.gims.quiz.service;

import com.gims.quiz.entity.Question;

import java.util.List;

public interface QuestionService {

    List<Question> getAll();

    List<Question> getAllByQuizId(Long id);
}
