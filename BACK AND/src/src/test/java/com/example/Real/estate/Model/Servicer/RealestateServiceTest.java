package com.example.Real.estate.Model.Servicer;

import com.example.Real.estate.Model.Entities.Mediator;
import com.example.Real.estate.Model.Entities.Realestate;
import com.example.Real.estate.Model.Entities.Users;
import com.example.Real.estate.Model.Repository.RealestateRespository;
import com.example.Real.estate.Model.Repository.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

class RealestateServiceTest {
    @Mock
    RealestateRespository realestateRespository;
    @Mock
    UserRepository userRepository;
    @InjectMocks
    RealestateService realestateService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetRealestates() {
        List<Realestate> result = realestateService.getRealestates();
        Assertions.assertEquals(Arrays.<Realestate>asList(new Realestate(0, "location", "space", "details", "img", "type", new Users(0, "name", "email", "password", 0, Arrays.<Realestate>asList(null)), new Mediator(0, "name", "email", 0))), result);
    }

    @Test
    void testGetRealestate() {
        Optional<Realestate> result = realestateService.getRealestate(Integer.valueOf(0));
        Assertions.assertEquals(null, result);
    }

    @Test
    void testAddNewRealestate() {
        realestateService.addNewRealestate(new Realestate(0, "location", "space", "details", "img", "type", new Users(0, "name", "email", "password", 0, Arrays.<Realestate>asList(null)), new Mediator(0, "name", "email", 0)));
    }

    @Test
    void testGetRealstate() {
        realestateService.getRealstate(Integer.valueOf(0));
    }

    @Test
    void testGetRealestateByemail() {
        when(userRepository.findByEmail(anyString())).thenReturn(null);

        List<Realestate> result = realestateService.getRealestateByemail("email");
        Assertions.assertEquals(Arrays.<Realestate>asList(new Realestate(0, "location", "space", "details", "img", "type", new Users(0, null, null, null, 0, Arrays.<Realestate>asList(null)), new Mediator(0, "name", "email", 0))), result);
    }

    @Test
    void testDeleteRealestate() {
        realestateService.deleteRealestate(Integer.valueOf(0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme