package com.example.Real.estate.Controller;

import com.example.Real.estate.Model.Entities.Mediator;
import com.example.Real.estate.Model.Entities.Realestate;
import com.example.Real.estate.Model.Entities.Users;
import com.example.Real.estate.Model.Servicer.RealestateService;
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

class RealestateControllerTest {
    @Mock
    RealestateService realestateService;
    @InjectMocks
    RealestateController realestateController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetRealestates() {
        when(realestateService.getRealestates()).thenReturn(Arrays.<Realestate>asList(new Realestate(0, "location", "space", "details", "img", "type", new Users(0, "name", "email", "password", 0, Arrays.<Realestate>asList(null)), new Mediator(0, "name", "email", 0))));

        List<Realestate> result = realestateController.getRealestates();
        Assertions.assertEquals(Arrays.<Realestate>asList(new Realestate(0, "location", "space", "details", "img", "type", new Users(0, "name", "email", "password", 0, Arrays.<Realestate>asList(null)), new Mediator(0, "name", "email", 0))), result);
    }

    @Test
    void testGetRealstate() {
        when(realestateService.getRealestate(anyInt())).thenReturn(null);

        Optional<Realestate> result = realestateController.getRealstate(Integer.valueOf(0));
        Assertions.assertEquals(null, result);
    }

    @Test
    void testGetUser() {
        when(realestateService.getRealestateByemail(anyString())).thenReturn(Arrays.<Realestate>asList(new Realestate(0, "location", "space", "details", "img", "type", new Users(0, "name", "email", "password", 0, Arrays.<Realestate>asList(null)), new Mediator(0, "name", "email", 0))));

        List<Realestate> result = realestateController.getUser("email");
        Assertions.assertEquals(Arrays.<Realestate>asList(new Realestate(0, "location", "space", "details", "img", "type", new Users(0, "name", "email", "password", 0, Arrays.<Realestate>asList(null)), new Mediator(0, "name", "email", 0))), result);
    }

    @Test
    void testRegisterNewRealestate() {
        realestateController.registerNewRealestate(new Realestate(0, "location", "space", "details", "img", "type", new Users(0, "name", "email", "password", 0, Arrays.<Realestate>asList(null)), new Mediator(0, "name", "email", 0)));
    }

    @Test
    void testDeleteRealestate() {
        realestateController.deleteRealestate(Integer.valueOf(0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme