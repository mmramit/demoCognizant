package com.store.ecommerce.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.store.ecommerce.beans.Vaccine;

@Repository
public interface VaccineRepository extends MongoRepository<Vaccine, String> {
	Vaccine findByName(String name);
	Optional<Vaccine> findById(String id);
}
