package com.store.ecommerce.controller;
import com.mongodb.assertions.Assertions;
import com.store.ecommerce.TestDataUtil;
import com.store.ecommerce.beans.Vaccine;
import com.store.ecommerce.controllers.VaccineController;

import com.store.ecommerce.repositories.VaccineRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.*;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestClientResponseException;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

@RunWith(MockitoJUnitRunner.class)
public class VaccineControllerTest {

    @InjectMocks
    VaccineController vaccineController;

    @Mock
    VaccineRepository repo;

    @Mock
    Optional<Vaccine> vaccine;

    Vaccine v ;

    @Test
    public void getProductPassTest(){
        Mockito.when(repo.findById(Mockito.anyString())).thenReturn(vaccine);
        assertNotNull(repo.findById("3"));

    }

    @Test (expected = NullPointerException.class)
    public void getProductFailTest(){
        Mockito.when(repo.findById(Mockito.anyString())).thenReturn(null);
        assertNull(repo.findById("3"));

    }



}
