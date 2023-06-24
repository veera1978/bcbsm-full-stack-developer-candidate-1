package org.com.login.controller;

import org.com.login.entity.Docs;
import org.com.login.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/documents")
public class DocumentController {
    @Autowired
    private DocumentService documentService;

    @PostMapping("/upload")
    public Docs uploadDocument(@RequestParam("Document") MultipartFile file, @RequestParam("DocumentName") String name, @RequestParam("UploadUser") String user,@RequestParam("UploadDate") String date) throws IOException {
        Docs document = new Docs();
        document.setDocumentName(name);
        document.setDocument(file.getBytes());
        document.setUploadUser(user);
        document.setUploadDate(date);
        return documentService.uploadDocument(document);
    }

    @GetMapping("/listdocument")
    public List<Docs> getAllDocuments() {
        return documentService.getAllDocuments();
    }

    @GetMapping("/{id}")
    public Docs getDocumentById(@PathVariable String id) {
        return documentService.getDocumentById(id);
    }
}
