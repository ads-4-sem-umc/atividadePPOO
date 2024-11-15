package com.ppoo.core.usecase.barbershop;

import com.ppoo.core.entity.Barbershop;
import com.ppoo.core.repository.BarbershopRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.util.List;

@ApplicationScoped
public class ListBarbershop {

	@Inject
	BarbershopRepository barbershopRepository;

	public List<Barbershop> execute() {
		return barbershopRepository.list();
	}

}
