package com.store.ecommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.store.ecommerce.beans.Producer;
import com.store.ecommerce.repositories.ProducerRepository;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/api/producer/")
public class ProducerController {
    @Autowired
    private ProducerRepository producerRepository;

    @GetMapping(path = "producers-list")
    public List<Producer> getAllCategoriesFromMongoDB(){
        return producerRepository.findAll();
    }
    
    @GetMapping(path = "/{producer_id}")
    public Producer getProducer(@PathVariable("producer_id") String producer_id){
        return producerRepository.findById(producer_id).orElse(new Producer("202","Astrazenca"));
    }


    @PostMapping(path = "save-producer")
    public void insert(@RequestBody Producer producer) {
    	producerRepository.save(producer);
    }
    
    @DeleteMapping("delete-producer/{producer_id}")
    public void deleteSeller(@PathVariable("producer_id") String producer_id) {
        producerRepository.deleteById(producer_id);
    }

    @PostMapping("update-seller/")
    public void updateSeller(@RequestParam("id") String id, @RequestParam("name") String name) {
        System.out.println("Ami " + id );
        Producer producer = new Producer(id,name);
        producerRepository.save(producer);
    }  
}
