package com.ppoo.core.repository;

import com.ppoo.core.entity.Barber;

import java.util.List;

public interface BarberRepository {

	Barber save(Barber barber);

	List<Barber> list();

}
