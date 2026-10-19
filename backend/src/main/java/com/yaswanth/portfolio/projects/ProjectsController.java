package com.yaswanth.portfolio.projects;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProjectsController {
    @GetMapping("/api/projects")
    public List<ProjectDto> projects() {
        return List.of(
            new ProjectDto("AutoCare", "Vehicle Service Management System",
                "Customer registration, vehicle management, service booking, mechanic assignment, invoice generation and payments.",
                List.of("Java 21", "Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs", "MySQL")),
            new ProjectDto("Foodify", "Full-Stack Food Ordering System",
                "Authentication, restaurant and menu browsing, favorites, cart, checkout, order placement and order history.",
                List.of("Java", "JSP", "Servlets", "JDBC", "MySQL", "HTML", "CSS", "JavaScript")),
            new ProjectDto("Smart Grid Attack Detection", "Machine Learning Project",
                "Final-year project focused on false-data-attack detection in smart power grids with data upload and prediction workflow.",
                List.of("Machine Learning", "Web Application"))
        );
    }
}
