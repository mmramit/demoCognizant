package com.store.ecommerce.controllers;

import java.util.List;

import com.store.ecommerce.beans.Producer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.store.ecommerce.beans.Vaccine;
import com.store.ecommerce.repositories.VaccineRepository;


@CrossOrigin("*")
@RestController
@RequestMapping(path = "/api/product-item/")
public class ProductController {
    @Autowired
    private VaccineRepository vaccineRepository;

    @GetMapping(path ="{vaccine_id}")
    public Vaccine getProduct(@PathVariable("vaccine_id") String vaccine_id){
        Vaccine vaccine = vaccineRepository.findById(vaccine_id).orElse(new Vaccine());
        return vaccine;
    }


}
