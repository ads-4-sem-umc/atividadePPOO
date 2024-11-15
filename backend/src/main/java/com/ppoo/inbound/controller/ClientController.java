package com.ppoo.inbound.controller;

import com.ppoo.core.dto.client.RegisterClientDTO;
import com.ppoo.core.entity.Client;
import com.ppoo.core.usecase.client.ListClient;
import com.ppoo.core.usecase.client.RegisterClient;
import jakarta.inject.Inject;
import jakarta.validation.Valid;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.UriBuilder;

import java.util.List;

@Path("/client")
public class ClientController {

	@Inject
	RegisterClient registerClient;

	@Inject
	ListClient listClient;

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response register(@Valid RegisterClientDTO clientDTO) {
		Client client = registerClient.execute(clientDTO);
		return Response.status(Response.Status.CREATED).entity(client)
				.location(UriBuilder.fromResource(ClientController.class).path(client.getId()).build()).build();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response register() {
		List<Client> client = listClient.execute();
		return Response.status(Response.Status.OK).entity(client).build();
	}

}
