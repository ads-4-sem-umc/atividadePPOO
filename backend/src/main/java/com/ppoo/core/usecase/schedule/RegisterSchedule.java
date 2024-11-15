package com.ppoo.core.usecase.schedule;

import com.ppoo.core.dto.schedule.RegisterScheduleDTO;
import com.ppoo.core.entity.Barber;
import com.ppoo.core.entity.Client;
import com.ppoo.core.entity.Schedule;
import com.ppoo.core.repository.ScheduleRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

@ApplicationScoped
public class RegisterSchedule {

	@Inject
	ScheduleRepository scheduleRepository;

	@Transactional
	public Schedule execute(RegisterScheduleDTO scheduleDTO) {
		Schedule schedule = Schedule.builder().client(Client.builder().id(scheduleDTO.getClient().getId()).build())
				.barber(Barber.builder().id(scheduleDTO.getBarber().getId()).build()).hour(scheduleDTO.getHour())
				.build();
		schedule.register();
		return scheduleRepository.save(schedule);
	}

}
