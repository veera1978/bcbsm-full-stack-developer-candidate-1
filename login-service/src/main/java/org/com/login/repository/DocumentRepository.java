package org.com.login.repository;

import org.com.login.entity.Docs;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DocumentRepository extends MongoRepository<Docs, String> {
}

