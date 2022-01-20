package com.example.Real.estate.Model.Servicer;

import com.example.Real.estate.Model.Entities.Mediator;
import com.example.Real.estate.Model.Entities.Realestate;
import com.example.Real.estate.Model.Entities.Users;
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

class UserServiceTest {
    @Mock
    UserRepository userRepository;
    @InjectMocks
    UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetUser() {
        List<Users> result = userService.getUser();
        Assertions.assertEquals(Arrays.<Users>asList(new Users(0, "name", "email", "password", 0, Arrays.<Realestate>asList(new Realestate(0, "location", "space", "details", "img", "type", null, new Mediator(0, "name", "email", 0))))), result);
    }

    @Test
    void testGetUser2() {
        Optional<Users> result = userService.getUser(Integer.valueOf(0));
        Assertions.assertEquals(null, result);
    }

    @Test
    void testGetUserByemail() {
        when(userRepository.findByEmail(anyString())).thenReturn(null);

        Optional<Users> result = userService.getUserByemail("email");
        Assertions.assertEquals(null, result);
    }

    @Test
    void testAddNewUser() {
        userService.addNewUser(new Users(0, "name", "email", "password", 0, Arrays.<Realestate>asList(new Realestate(0, "location", "space", "details", "img", "type", null, new Mediator(0, "name", "email", 0)))));
    }

    @Test
    void testDeleteUser() {
        userService.deleteUser(Integer.valueOf(0));
    }

    @Test
    void testGetCheck() {
        when(userRepository.findByEmailAndPassword(anyString(), anyString())).thenReturn("findByEmailAndPasswordResponse");

        String result = userService.getCheck("email", "password");
        Assertions.assertEquals("replaceMeWithExpectedResult", result);
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme