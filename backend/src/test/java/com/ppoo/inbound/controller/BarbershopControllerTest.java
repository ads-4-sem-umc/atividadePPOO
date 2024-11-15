package com.ppoo.inbound.controller;

import com.ppoo.core.dto.barbershop.RegisterBarbershopDTO;
import com.ppoo.core.entity.Barbershop;
import com.ppoo.outbound.hibernate.table.PanacheBarbershop;
import io.quarkus.test.TestTransaction;
import io.quarkus.test.junit.QuarkusTest;
import io.restassured.RestAssured;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

@QuarkusTest
public class BarbershopControllerTest {

	@Test
	@TestTransaction
	@DisplayName("Should be able to register barbershop")
	void shouldBeAbleToRegisterBarbershop() {
		var barbershopDTO = RegisterBarbershopDTO.builder().name("nome").email("email@email.com").phone("11-999999999")
				.address("Rua de teste").city("Mogi das Cruzes").state("SP").build();
		createBarbershop(barbershopDTO);
	}

	@Test
	@TestTransaction
	@DisplayName("Should be able to list barbershop")
	void shouldBeAbleToListBarbershop() {
		var barbershopDTO = RegisterBarbershopDTO.builder().name("nome").email("email@email.com").phone("11-999999999")
				.address("Rua de teste").city("Mogi das Cruzes").state("SP").build();
		createBarbershop(barbershopDTO);
		var listBarbershop = RestAssured.given().log().all().contentType("application/json").when()
				.get("/barbershop").then().log().all().statusCode(200).extract().body().as(List.class);
		Assertions.assertNotNull(listBarbershop);
		Assertions.assertFalse(listBarbershop.isEmpty());
	}

	private Barbershop createBarbershop(RegisterBarbershopDTO barbershopDTO) {
		var barbershop = RestAssured.given().log().all().contentType("application/json").when().body(barbershopDTO)
				.post("/barbershop").then().log().all().statusCode(201).extract().body().as(Barbershop.class);
		Assertions.assertNotNull(barbershop);
		Assertions.assertNotNull(barbershop.getId());
		Assertions.assertEquals(barbershopDTO.getName(), barbershop.getName());
		Assertions.assertEquals(barbershopDTO.getEmail(), barbershop.getEmail());
		Assertions.assertEquals(barbershopDTO.getPhone(), barbershop.getPhone());
		Assertions.assertEquals(barbershopDTO.getAddress(), barbershop.getAddress());
		Assertions.assertEquals(barbershopDTO.getCity(), barbershop.getCity());
		Assertions.assertEquals(barbershopDTO.getState(), barbershop.getState());
		Optional<PanacheBarbershop> barbershopSaved = PanacheBarbershop.findByIdOptional(barbershop.getId());
		Assertions.assertTrue(barbershopSaved.isPresent());
		Assertions.assertEquals(barbershop.getId(), barbershopSaved.get().getId());
		Assertions.assertEquals(barbershopDTO.getName(), barbershopSaved.get().getName());
		Assertions.assertEquals(barbershopDTO.getEmail(), barbershopSaved.get().getEmail());
		Assertions.assertEquals(barbershopDTO.getPhone(), barbershopSaved.get().getPhone());
		Assertions.assertEquals(barbershopDTO.getAddress(), barbershopSaved.get().getAddress());
		Assertions.assertEquals(barbershopDTO.getCity(), barbershopSaved.get().getCity());
		Assertions.assertEquals(barbershopDTO.getState(), barbershopSaved.get().getState());
		return barbershop;
	}

}
