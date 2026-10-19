package com.yaswanth.portfolio.projects;

import java.util.List;

public record ProjectDto(
    String title,
    String type,
    String description,
    List<String> stack
) {}
