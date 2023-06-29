package org.com.login.controller;

import org.com.login.entity.Docs;
import org.com.login.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/documents")
public class DocumentController {
    @Autowired
    private DocumentService documentService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
     public Docs uploadDocument(@RequestParam("document") MultipartFile file, @RequestParam("documentName") String name, @RequestParam("uploadUser") String user,@RequestParam("uploadDate") String date) throws IOException {
        Docs document = new Docs();
        document.setDocumentName(name);
        document.setDocument(file.getBytes());
        document.setUploadUser(user);
        document.setUploadDate(date);
        return documentService.uploadDocument(document);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/listdocument")
    public Map<String, Docs> getAllDocuments() {
        List<Docs> docsList = documentService.getAllDocuments();

        Map<String, Docs> docsMap = docsList.stream()
                .collect(Collectors.toMap(Docs::getDocumentID, Function.identity()));

        return docsMap;
    }

    

    @GetMapping("/{id}")
    public Docs getDocumentById(@PathVariable String id) {
        return documentService.getDocumentById(id);
    }
}
