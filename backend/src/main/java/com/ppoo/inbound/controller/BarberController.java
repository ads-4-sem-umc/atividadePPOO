package com.ppoo.inbound.controller;

import com.ppoo.core.dto.barber.RegisterBarberDTO;
import com.ppoo.core.entity.Barber;
import com.ppoo.core.usecase.barber.ListBarber;
import com.ppoo.core.usecase.barber.RegisterBarber;
import jakarta.inject.Inject;
import jakarta.validation.Valid;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.UriBuilder;

import java.util.List;

@Path("/barber")
public class BarberController {

	@Inject
	RegisterBarber registerBarber;

	@Inject
	ListBarber listBarber;

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response register(@Valid RegisterBarberDTO barberDTO) {
		Barber barber = registerBarber.execute(barberDTO);
		return Response.status(Response.Status.CREATED).entity(barber)
				.location(UriBuilder.fromResource(BarberController.class).path(barber.getId()).build()).build();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response list() {
		List<Barber> barbers = listBarber.execute();
		return Response.status(Response.Status.OK).entity(barbers).build();
	}

}
