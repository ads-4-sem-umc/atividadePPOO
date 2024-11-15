package com.ppoo.core.usecase.barber;

import com.ppoo.core.dto.barber.RegisterBarberDTO;
import com.ppoo.core.entity.Barber;
import com.ppoo.core.entity.Barbershop;
import com.ppoo.core.repository.BarberRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

@ApplicationScoped
public class RegisterBarber {

	@Inject
	BarberRepository barberRepository;

	@Transactional
	public Barber execute(RegisterBarberDTO barberDTO) {
		Barber barber = Barber.builder().name(barberDTO.getName()).email(barberDTO.getEmail())
				.phone(barberDTO.getPhone())
				.barbershop(Barbershop.builder().id(barberDTO.getBarbershop().getId()).build()).build();
		barber.register();
		return barberRepository.save(barber);
	}

}
