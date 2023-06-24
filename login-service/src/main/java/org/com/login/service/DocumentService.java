package org.com.login.service;

import java.util.List;

import org.com.login.entity.Docs;
import org.com.login.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DocumentService {
    @Autowired
    private DocumentRepository documentRepository;

    public Docs uploadDocument(Docs document) {
        return documentRepository.save(document);
    }
    
    public List<Docs> getAllDocuments() {
        return documentRepository.findAll();
    }

    public Docs getDocumentById(String id) {
        return documentRepository.findById(id).orElse(null);
    }
    
}

