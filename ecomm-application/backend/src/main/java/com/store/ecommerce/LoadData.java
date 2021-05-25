package com.store.ecommerce;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.store.ecommerce.beans.Vaccine;
import com.store.ecommerce.beans.Producer;
import com.store.ecommerce.repositories.VaccineRepository;
import com.store.ecommerce.repositories.ProducerRepository;

@Component
public class LoadData implements CommandLineRunner{
    @Autowired
    private VaccineRepository vaccineRepo;
    @Autowired
    private ProducerRepository producerRepo;


    @Override
    public void run(String... strings) throws Exception {
        producerRepo.deleteAll();

        vaccineRepo.deleteAll();
        
        Producer producer1 = new Producer("1", "pFizer");
        Producer producer2 = new Producer("2", "Moderna");
        Producer producer3 = new Producer("3", "Astrazenca");
        producerRepo.save(producer1);
        producerRepo.save(producer2);
        producerRepo.save(producer3);

        Vaccine vaccine1 = new Vaccine("pFizer", "Pfizer Inc. is an American multinational pharmaceutical.",15,"a-1", producer1);
        Vaccine vaccine2 = new Vaccine("Moderna", "Moderna Inc. is an American multinational pharmaceutical ",50,"a-2", producer2);
        Vaccine vaccine3 = new Vaccine("Astrazenca", "Astrazenca amazing",7,"a-3", producer3);

        vaccineRepo.save(vaccine1);
        vaccineRepo.save(vaccine2);
        vaccineRepo.save(vaccine3);

        System.out.println("___________________________________");
        System.out.println("Test MongoDB repository");
        System.out.println("Find seller(s) by first name");
        producerRepo.findByName("magdY").forEach(System.out::println);
        System.out.println("___________________________________");
    }
}
