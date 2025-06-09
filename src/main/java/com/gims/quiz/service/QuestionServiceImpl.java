package com.gims.quiz.service;

import com.gims.quiz.entity.Question;
import com.gims.quiz.entity.Quiz;
import com.gims.quiz.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

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
        return this.quizService.getById(id).map(Quiz::getQuestions).orElseGet(LinkedList::new);
    }
}
