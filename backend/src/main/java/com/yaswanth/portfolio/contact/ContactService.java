package com.yaswanth.portfolio.contact;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ContactService {
    private final ContactRepository repository;

    public ContactService(ContactRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public void save(ContactRequest request) {
        String subject = request.subject() == null || request.subject().isBlank()
                ? null : request.subject().trim();
        repository.save(new ContactMessage(
                request.name().trim(),
                request.email().trim().toLowerCase(),
                subject,
                request.message().trim()
        ));
    }
}
