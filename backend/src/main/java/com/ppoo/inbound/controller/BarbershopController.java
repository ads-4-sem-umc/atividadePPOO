package com.ppoo.inbound.controller;

import com.ppoo.core.dto.barbershop.RegisterBarbershopDTO;
import com.ppoo.core.entity.Barbershop;
import com.ppoo.core.usecase.barbershop.RegisterBarbershop;
import jakarta.inject.Inject;
import jakarta.validation.Valid;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.UriBuilder;

@Path("/barbershop")
public class BarbershopController {

	@Inject
	RegisterBarbershop registerBarbershop;

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response register(@Valid RegisterBarbershopDTO barbershopDTO) {
		Barbershop barbershop = registerBarbershop.execute(barbershopDTO);
		return Response.status(Response.Status.CREATED).entity(barbershop)
				.location(UriBuilder.fromResource(BarbershopController.class).path(barbershop.getId()).build()).build();
	}

}
