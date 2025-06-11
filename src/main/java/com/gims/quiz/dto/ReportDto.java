package com.gims.quiz.dto;

import java.time.LocalDateTime;

public record ReportDto(Long quizId,
                        Integer userId,
                        String userIp,
                        String userName,
                        String userEmail,
                        String userPhone,
                        LocalDateTime startDate,
                        LocalDateTime endDate,
                        int score) {
}
