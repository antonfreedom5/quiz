package com.gims.quiz.service.impl;

import com.gims.quiz.entity.Category;
import com.gims.quiz.repository.CategoryRepository;
import com.gims.quiz.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    @Override
    public List<Category> getAll() {
        return this.categoryRepository.findAll();
    }
}
