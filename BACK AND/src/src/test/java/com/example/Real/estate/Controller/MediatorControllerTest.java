package com.example.Real.estate.Controller;

import com.example.Real.estate.Model.Entities.Mediator;
import com.example.Real.estate.Model.Servicer.MediatorService;
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

class MediatorControllerTest {
    @Mock
    MediatorService mediatorService;
    @InjectMocks
    MediatorController mediatorController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetMediators() {
        when(mediatorService.getMediators()).thenReturn(Arrays.<Mediator>asList(new Mediator(0, "name", "email", 0)));

        List<Mediator> result = mediatorController.getMediators();
        Assertions.assertEquals(Arrays.<Mediator>asList(new Mediator(0, "name", "email", 0)), result);
    }

    @Test
    void testGetMediator() {
        when(mediatorService.getMediator(anyInt())).thenReturn(null);

        Optional<Mediator> result = mediatorController.getMediator(Integer.valueOf(0));
        Assertions.assertEquals(null, result);
    }

    @Test
    void testRegisterNewMediator() {
        mediatorController.registerNewMediator(new Mediator(0, "name", "email", 0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme