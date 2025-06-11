package com.gims.quiz.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "quiz_id", nullable = false)
    private Quiz quiz;

    private int userId;

    private String userIp;

    private String userName;

    private String userEmail;

    private String userPhone;

    private LocalDateTime startDate;

    private LocalDateTime endDate;

    private int score;
}
