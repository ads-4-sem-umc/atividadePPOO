package com.ppoo.inbound.controller;

import com.ppoo.core.dto.client.RegisterClientDTO;
import com.ppoo.core.entity.Client;
import io.quarkus.test.TestTransaction;
import io.quarkus.test.junit.QuarkusTest;
import io.restassured.RestAssured;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@QuarkusTest
class ClientControllerTest {

	@Test
	@TestTransaction
	@DisplayName("Should be able to register client")
	void shouldBeAbleToRegisterClient() {
		var clientDTO = RegisterClientDTO.builder().name("nome").email("email@email.com").phone("11-999999999").build();
		var client = RestAssured.given().log().all().contentType("application/json").when().body(clientDTO)
				.post("/client").then().log().all().statusCode(201).extract().body().as(Client.class);
	}

}