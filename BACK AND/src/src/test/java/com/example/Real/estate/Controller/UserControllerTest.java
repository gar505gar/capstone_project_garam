package com.example.Real.estate.Controller;

import com.example.Real.estate.Model.Entities.Mediator;
import com.example.Real.estate.Model.Entities.Realestate;
import com.example.Real.estate.Model.Entities.Users;
import com.example.Real.estate.Model.Servicer.UserService;
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

class UserControllerTest {
    @Mock
    UserService userService;
    @InjectMocks
    UserController userController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetUser() {
        when(userService.getUser()).thenReturn(Arrays.<Users>asList(new Users(0, "name", "email", "password", 0, Arrays.<Realestate>asList(new Realestate(0, "location", "space", "details", "img", "type", null, new Mediator(0, "name", "email", 0))))));

        List<Users> result = userController.getUser();
        Assertions.assertEquals(Arrays.<Users>asList(new Users(0, "name", "email", "password", 0, Arrays.<Realestate>asList(new Realestate(0, "location", "space", "details", "img", "type", null, new Mediator(0, "name", "email", 0))))), result);
    }

    @Test
    void testGetUser2() {
        when(userService.getUser(anyInt())).thenReturn(null);

        Optional<Users> result = userController.getUser(Integer.valueOf(0));
        Assertions.assertEquals(null, result);
    }

    @Test
    void testRegisterNewUser() {
        userController.registerNewUser(new Users(0, "name", "email", "password", 0, Arrays.<Realestate>asList(new Realestate(0, "location", "space", "details", "img", "type", null, new Mediator(0, "name", "email", 0)))));
    }

    @Test
    void testGetUser3() {
        when(userService.getUserByemail(anyString())).thenReturn(null);

        Optional<Users> result = userController.getUser("email");
        Assertions.assertEquals(null, result);
    }

    @Test
    void testLogin() {
        when(userService.getCheck(anyString(), anyString())).thenReturn("getCheckResponse");

        String result = userController.login(new Users(0, null, "email", "password", 0, null));
        Assertions.assertEquals("replaceMeWithExpectedResult", result);
    }

    @Test
    void testDeleteArtwork() {
        userController.deleteArtwork(Integer.valueOf(0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme