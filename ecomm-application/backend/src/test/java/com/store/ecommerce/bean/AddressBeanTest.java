package com.store.ecommerce.bean;


import com.store.ecommerce.beans.Address;
import org.junit.Test;

import static com.store.ecommerce.TestDataUtil.getAddress;
import static org.junit.Assert.*;

public class AddressBeanTest {

private Address address = new Address();

    @Test
    public void setCityTest(){
        address.setCity("Toronto");
        assertNotNull(address.getCity());

    }

    @Test
    public void setCountryTest(){
        address.setCountry("Canada");
        assertNull(address.getCountry());
    }

    @Test
    public void setProvinceTest(){
        address.setProvince("ON");
        assertNotNull(getAddress().getProvince());
        assertEquals("ON",address.getProvince());

    }

    @Test
    public void setHouseNumberTest(){
        assertNotNull(getAddress().getProvince());
         }

    @Test
    public void setStreetTest(){
        address.setStreet("Test Street");
        assertNotNull(address.getStreet());

    }

    @Test
    public void setZipcodeTest(){
        assertNotNull(getAddress().getZipcode());
    }

    @Test
    public void setEmailTest(){
        address.setEmail("test@yahoo.com");
        assertNotNull(getAddress().getEmail());
        assertEquals("test@yahoo.com",address.getEmail());

    }




}
