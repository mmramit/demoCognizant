package com.store.ecommerce;

import com.store.ecommerce.beans.Address;
import com.store.ecommerce.beans.Producer;
import com.store.ecommerce.beans.Vaccine;


public class TestDataUtil {

    public static Vaccine getVaccine() {
        Vaccine testVaccine = new Vaccine();
        testVaccine.setId("101");
        testVaccine.setDescription("Test Vaccine");
        testVaccine.setImage_URL("/proj/asset/img/");
        testVaccine.setName("PFizer");
        testVaccine.setPrice(15);
        testVaccine.setSeller(getProducer());
        return testVaccine;

    }

    public static Producer getProducer() {
        Producer testProducer = new Producer("5", "Moderna");
        testProducer.setId("101");
        testProducer.setName("Oxford");
        return testProducer;

    }

    public static Address getAddress() {

        Address address = new Address();
        address.setId(202l);
        address.setCity("Toronto");
        address.setEmail("vaccine@test.com");
        address.setPhone("416-809-5454");
        address.setHouseNumber(303);
        address.setStreet("Dundus Street");
        address.setProvince("ON");
        address.setZipcode("G4N2H8");
        address.setCountry("Canada");
        return address;
    }

}
