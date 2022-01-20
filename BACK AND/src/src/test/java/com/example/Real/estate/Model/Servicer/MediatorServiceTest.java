package com.example.Real.estate.Model.Servicer;

import com.example.Real.estate.Model.Entities.Mediator;
import com.example.Real.estate.Model.Repository.MediatorRepository;
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

class MediatorServiceTest {
    @Mock
    MediatorRepository mediatorRepository;
    @InjectMocks
    MediatorService mediatorService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetMediators() {
        List<Mediator> result = mediatorService.getMediators();
        Assertions.assertEquals(Arrays.<Mediator>asList(new Mediator(0, "name", "email", 0)), result);
    }

    @Test
    void testGetMediator() {
        Optional<Mediator> result = mediatorService.getMediator(Integer.valueOf(0));
        Assertions.assertEquals(null, result);
    }

    @Test
    void testAddNewMediator() {
        mediatorService.addNewMediator(new Mediator(0, "name", "email", 0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme