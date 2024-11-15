package com.ppoo.outbound.hibernate.repository;

import com.ppoo.core.entity.Barber;
import com.ppoo.core.entity.Barbershop;
import com.ppoo.core.entity.Client;
import com.ppoo.core.entity.Schedule;
import com.ppoo.core.repository.ScheduleRepository;
import com.ppoo.outbound.hibernate.table.PanacheBarber;
import com.ppoo.outbound.hibernate.table.PanacheClient;
import com.ppoo.outbound.hibernate.table.PanacheSchedule;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class SchedulePanacheRepository implements ScheduleRepository {

	@Override
	public Schedule save(Schedule schedule) {
		PanacheSchedule panacheSchedule = PanacheSchedule.builder().id(schedule.getId())
				.barber(PanacheBarber.builder().id(schedule.getBarber().getId()).build())
				.client(PanacheClient.builder().id(schedule.getClient().getId()).build()).hour(schedule.getHour())
				.build();
		panacheSchedule.persist();
		return Schedule.builder().id(panacheSchedule.getId()).hour(panacheSchedule.getHour())
				.client(Client.builder().id(panacheSchedule.getClient().getId()).build())
				.barber(Barber.builder().id(panacheSchedule.getBarber().getId()).build()).build();
	}

	@Override
	public List<Schedule> list() {
		List<PanacheSchedule> panacheSchedules = PanacheSchedule.listAll();
		List<Schedule> schedules = new ArrayList<>();
		panacheSchedules.forEach(panacheSchedule -> {
			schedules.add(Schedule.builder().id(panacheSchedule.getId()).hour(panacheSchedule.getHour())
					.client(Client.builder().id(panacheSchedule.getClient().getId())
							.name(panacheSchedule.getClient().getName()).email(panacheSchedule.getClient().getEmail())
							.phone(panacheSchedule.getClient().getPhone()).build())
					.barber(Barber.builder().id(panacheSchedule.getBarber().getId())
							.name(panacheSchedule.getBarber().getName()).email(panacheSchedule.getBarber().getEmail())
							.phone(panacheSchedule.getBarber().getPhone())
							.barbershop(Barbershop.builder().id(panacheSchedule.getBarber().getBarbershop().getId())
									.name(panacheSchedule.getBarber().getBarbershop().getName())
									.email(panacheSchedule.getBarber().getBarbershop().getEmail())
									.phone(panacheSchedule.getBarber().getBarbershop().getPhone())
									.address(panacheSchedule.getBarber().getBarbershop().getAddress())
									.city(panacheSchedule.getBarber().getBarbershop().getCity())
									.state(panacheSchedule.getBarber().getBarbershop().getState()).build())
							.build())
					.build());
		});
		return schedules;
	}

}