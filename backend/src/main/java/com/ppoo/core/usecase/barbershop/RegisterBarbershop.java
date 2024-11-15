package com.ppoo.core.usecase.barbershop;

import com.ppoo.core.dto.barbershop.RegisterBarbershopDTO;
import com.ppoo.core.entity.Barbershop;
import com.ppoo.core.repository.BarbershopRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

@ApplicationScoped
public class RegisterBarbershop {

	@Inject
	BarbershopRepository barbershopRepository;

	@Transactional
	public Barbershop execute(RegisterBarbershopDTO barbershopDTO) {
		Barbershop barbershop = Barbershop.builder().name(barbershopDTO.getName()).email(barbershopDTO.getEmail())
				.phone(barbershopDTO.getPhone()).address(barbershopDTO.getAddress()).city(barbershopDTO.getCity())
				.state(barbershopDTO.getState()).build();
		barbershop.register();
		return barbershopRepository.save(barbershop);
	}

}
