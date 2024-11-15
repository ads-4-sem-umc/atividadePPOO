package com.ppoo.core.usecase.barber;

import com.ppoo.core.entity.Barber;
import com.ppoo.core.repository.BarberRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.util.List;

@ApplicationScoped
public class ListBarber {

	@Inject
	BarberRepository barberRepository;

	public List<Barber> execute() {
		return barberRepository.list();
	}

}
