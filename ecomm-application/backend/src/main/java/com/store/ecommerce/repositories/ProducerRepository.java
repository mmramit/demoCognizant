package com.store.ecommerce.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.store.ecommerce.beans.Producer;

@Repository
public interface ProducerRepository extends MongoRepository<Producer, String>{
    List<Producer> findByName(String name);
    Optional<Producer> findById(String id);
}
