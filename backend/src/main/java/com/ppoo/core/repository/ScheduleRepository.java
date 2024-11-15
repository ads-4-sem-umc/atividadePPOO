package com.ppoo.core.repository;

import com.ppoo.core.entity.Schedule;

import java.util.List;

public interface ScheduleRepository {

	Schedule save(Schedule schedule);

	List<Schedule> list();

}
