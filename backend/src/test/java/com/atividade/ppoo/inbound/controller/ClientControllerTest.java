package com.atividade.ppoo.inbound.controller;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ClientControllerTest {

	@Autowired
	private TestRestTemplate restTemplate;

	@Test
	@DisplayName("Should be able to register a client")
	void shoudBeAbleToRegisterAClient() {
		ResponseEntity<String> response = restTemplate.exchange("/clientes", HttpMethod.POST, null, String.class);
		Assertions.assertEquals(response.getStatusCode(), HttpStatus.CREATED);
	}

}
