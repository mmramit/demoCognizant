package com.store.ecommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.store.ecommerce.beans.Producer;
import com.store.ecommerce.repositories.ProducerRepository;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/api/producer/")
public class ProducerService {
    @Autowired
    private ProducerRepository producerRepository;

    @GetMapping(path = "producers-list")
    public List<Producer> getAllCategoriesFromMongoDB(){
        return producerRepository.findAll();
    }
    
    @GetMapping(path = "/{producer_id}")
    public Producer getProducer(@PathVariable("producer_id") String producer_id){
        return producerRepository.findById(producer_id).orElse(new Producer("Astrazenca"));
    }

    @PostMapping(path = "save-producer")
    public void insert(@RequestBody Producer producer) {
    	producerRepository.save(producer);
    }
    
    @DeleteMapping("delete-producer/{producer_id}")
    public void deleteSeller(@PathVariable("producer_id") String producer_id) {
        producerRepository.deleteById(producer_id);
    }  

    @PostMapping("update-seller/{producer_id}")
    public void updateSeller(@RequestBody Producer producer, @PathVariable("producer_id") String producer_id) {
        producer.setId(producer_id);
        producerRepository.save(producer);
    }  
}
