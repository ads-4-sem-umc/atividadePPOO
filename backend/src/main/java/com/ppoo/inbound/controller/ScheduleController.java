package com.ppoo.inbound.controller;

import com.ppoo.core.dto.schedule.RegisterScheduleDTO;
import com.ppoo.core.entity.Schedule;
import com.ppoo.core.usecase.schedule.ListSchedule;
import com.ppoo.core.usecase.schedule.RegisterSchedule;
import jakarta.inject.Inject;
import jakarta.validation.Valid;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.UriBuilder;

import java.util.List;

@Path("/schedule")
public class ScheduleController {

	@Inject
	RegisterSchedule registerSchedule;

	@Inject
	ListSchedule listSchedule;

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response register(@Valid RegisterScheduleDTO scheduleDTO) {
		Schedule schedule = registerSchedule.execute(scheduleDTO);
		return Response.status(Response.Status.CREATED).entity(schedule)
				.location(UriBuilder.fromResource(ScheduleController.class).path(schedule.getId()).build()).build();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response register() {
		List<Schedule> schedules = listSchedule.execute();
		return Response.status(Response.Status.OK).entity(schedules).build();
	}

}
