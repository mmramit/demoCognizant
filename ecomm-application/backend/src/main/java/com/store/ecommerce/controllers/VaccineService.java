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

import com.store.ecommerce.beans.Vaccine;
import com.store.ecommerce.repositories.VaccineRepository;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/api/vaccine/")
public class VaccineService {
    @Autowired
    private VaccineRepository vaccineRepository;


    @GetMapping(path = "vaccines-list")
    public List<Vaccine> getAllCategoriesFromMongoDB(){
        return vaccineRepository.findAll();
    }
    
    @PostMapping(path = "save-vaccine")
    public void insert(@RequestBody Vaccine vaccine) {
    	vaccineRepository.save(vaccine);
    }
    
    @DeleteMapping("delete-vaccine/{vaccine_id}")
    public void deleteSeller(@PathVariable("vaccine_id") String product_id) {
    	vaccineRepository.deleteById(product_id);
    }  

    @GetMapping(path = "/{vaccine_id}")
    public Vaccine getProduct(@PathVariable("vaccine_id") String vaccine_id){
    	Vaccine vaccine = vaccineRepository.findById(vaccine_id).orElse(new Vaccine());
        return vaccine;
    }


    @GetMapping(path = "vaccines-list/{name}")
    public Vaccine getFilteredList(@PathVariable("name") String name){
        Vaccine vaccine = vaccineRepository.findByName(name);
        return vaccine;
    }

    @PostMapping("update-vaccine/{vaccine_id}")
    public void updateProducer(@RequestBody Vaccine vaccine, @PathVariable("vaccine_id") String vaccine_id) {
        vaccine.setId(vaccine_id);
        vaccineRepository.save(vaccine);
    }  
}
