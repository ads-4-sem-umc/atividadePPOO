package com.ppoo.core.usecase.schedule;

import com.ppoo.core.entity.Schedule;
import com.ppoo.core.repository.ScheduleRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.util.List;

@ApplicationScoped
public class ListSchedule {

	@Inject
	ScheduleRepository scheduleRepository;

	public List<Schedule> execute() {
		return scheduleRepository.list();
	}

}
