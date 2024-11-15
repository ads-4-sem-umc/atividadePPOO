package com.ppoo.inbound.controller;

import com.ppoo.core.dto.barber.RegisterBarberDTO;
import com.ppoo.core.dto.barbershop.RegisterBarbershopDTO;
import com.ppoo.core.dto.client.RegisterClientDTO;
import com.ppoo.core.dto.schedule.RegisterScheduleDTO;
import com.ppoo.core.entity.Barber;
import com.ppoo.core.entity.Barbershop;
import com.ppoo.core.entity.Client;
import com.ppoo.core.entity.Schedule;
import com.ppoo.outbound.hibernate.table.PanacheBarber;
import com.ppoo.outbound.hibernate.table.PanacheBarbershop;
import com.ppoo.outbound.hibernate.table.PanacheClient;
import com.ppoo.outbound.hibernate.table.PanacheSchedule;
import io.quarkus.test.TestTransaction;
import io.quarkus.test.junit.QuarkusTest;
import io.restassured.RestAssured;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

@QuarkusTest
public class ScheduleControllerTest {

	@Test
	@TestTransaction
	@DisplayName("Should be able to register a schedule")
	void shouldBeAbleToRegisterASchedule() {
		var clientDTO = RegisterClientDTO.builder().name("nome").email("email@email.com").phone("11-999999999").build();
		var client = creteClient(clientDTO);
		var barbershopDTO = RegisterBarbershopDTO.builder().name("nome").email("email@email.com").phone("11-999999999")
				.address("Rua de teste").city("Mogi das Cruzes").state("SP").build();
		var barbershop = createBarbershop(barbershopDTO);
		var barberDTO = RegisterBarberDTO.builder().name("nome").email("email@email.com").phone("11-999999999")
				.barbershop(barbershop).build();
		var barber = createBarber(barberDTO);
		var scheduleDTO = RegisterScheduleDTO.builder().barber(barber).client(client).hour("12:00").build();
		createSchedule(scheduleDTO);
	}

	@Test
	@TestTransaction
	@DisplayName("Should be able to list a schedules")
	void shouldBeAbleToListASchedules() {
		var clientDTO = RegisterClientDTO.builder().name("nome").email("email@email.com").phone("11-999999999").build();
		var client = creteClient(clientDTO);
		var barbershopDTO = RegisterBarbershopDTO.builder().name("nome").email("email@email.com").phone("11-999999999")
				.address("Rua de teste").city("Mogi das Cruzes").state("SP").build();
		var barbershop = createBarbershop(barbershopDTO);
		var barberDTO = RegisterBarberDTO.builder().name("nome").email("email@email.com").phone("11-999999999")
				.barbershop(barbershop).build();
		var barber = createBarber(barberDTO);
		var scheduleDTO = RegisterScheduleDTO.builder().barber(barber).client(client).hour("12:00").build();
		createSchedule(scheduleDTO);
		var schedules = RestAssured.given().log().all().contentType("application/json").when().body(scheduleDTO)
				.get("/schedule").then().log().all().statusCode(200).extract().body().as(List.class);
		Assertions.assertNotNull(schedules);
		Assertions.assertFalse(schedules.isEmpty());
	}

	private Schedule createSchedule(RegisterScheduleDTO scheduleDTO) {
		var schedule = RestAssured.given().log().all().contentType("application/json").when().body(scheduleDTO)
				.post("/schedule").then().log().all().statusCode(201).extract().body().as(Schedule.class);
		Assertions.assertNotNull(schedule);
		Assertions.assertNotNull(schedule.getId());
		Assertions.assertEquals(scheduleDTO.getBarber().getId(), schedule.getBarber().getId());
		Assertions.assertEquals(scheduleDTO.getClient().getId(), schedule.getClient().getId());
		Assertions.assertEquals(scheduleDTO.getHour(), schedule.getHour());
		Optional<PanacheSchedule> scheduleSaved = PanacheSchedule.findByIdOptional(schedule.getId());
		Assertions.assertTrue(scheduleSaved.isPresent());
		Assertions.assertEquals(schedule.getId(), scheduleSaved.get().getId());
		Assertions.assertEquals(scheduleDTO.getBarber().getId(), scheduleSaved.get().getBarber().getId());
		Assertions.assertEquals(scheduleDTO.getClient().getId(), scheduleSaved.get().getClient().getId());
		Assertions.assertEquals(scheduleDTO.getHour(), scheduleSaved.get().getHour());
		return schedule;
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

	private Client creteClient(RegisterClientDTO clientDTO) {
		var client = RestAssured.given().log().all().contentType("application/json").when().body(clientDTO)
				.post("/client").then().log().all().statusCode(201).extract().body().as(Client.class);
		Assertions.assertNotNull(client);
		Assertions.assertNotNull(client.getId());
		Assertions.assertEquals(clientDTO.getName(), client.getName());
		Assertions.assertEquals(clientDTO.getEmail(), client.getEmail());
		Assertions.assertEquals(clientDTO.getPhone(), client.getPhone());
		Optional<PanacheClient> clientSaved = PanacheClient.findByIdOptional(client.getId());
		Assertions.assertTrue(clientSaved.isPresent());
		Assertions.assertEquals(client.getId(), clientSaved.get().getId());
		Assertions.assertEquals(clientDTO.getName(), clientSaved.get().getName());
		Assertions.assertEquals(clientDTO.getEmail(), clientSaved.get().getEmail());
		Assertions.assertEquals(clientDTO.getPhone(), clientSaved.get().getPhone());
		return client;
	}

	private Barber createBarber(RegisterBarberDTO barberDTO) {
		var barber = RestAssured.given().log().all().contentType("application/json").when().body(barberDTO)
				.post("/barber").then().log().all().statusCode(201).extract().body().as(Barber.class);
		Assertions.assertNotNull(barber);
		Assertions.assertNotNull(barber.getId());
		Assertions.assertEquals(barberDTO.getName(), barber.getName());
		Assertions.assertEquals(barberDTO.getEmail(), barber.getEmail());
		Assertions.assertEquals(barberDTO.getPhone(), barber.getPhone());
		Assertions.assertEquals(barberDTO.getBarbershop().getId(), barber.getBarbershop().getId());
		Optional<PanacheBarber> barberSaved = PanacheBarber.findByIdOptional(barber.getId());
		Assertions.assertTrue(barberSaved.isPresent());
		Assertions.assertEquals(barber.getId(), barberSaved.get().getId());
		Assertions.assertEquals(barberDTO.getName(), barberSaved.get().getName());
		Assertions.assertEquals(barberDTO.getEmail(), barberSaved.get().getEmail());
		Assertions.assertEquals(barberDTO.getPhone(), barberSaved.get().getPhone());
		Assertions.assertEquals(barberDTO.getBarbershop().getId(), barberSaved.get().getBarbershop().getId());
		return barber;
	}

}
