package com.ppoo.outbound.hibernate.repository;

import com.ppoo.core.entity.Barbershop;
import com.ppoo.core.repository.BarbershopRepository;
import com.ppoo.outbound.hibernate.table.PanacheBarbershop;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class BarbershopPanacheRepository implements BarbershopRepository {

	@Override
	public Barbershop save(Barbershop barbershop) {
		PanacheBarbershop panacheBarbershop = PanacheBarbershop.builder().id(barbershop.getId())
				.name(barbershop.getName()).email(barbershop.getEmail()).phone(barbershop.getPhone())
				.address(barbershop.getAddress()).city(barbershop.getCity()).state(barbershop.getState()).build();
		panacheBarbershop.persist();
		return Barbershop.builder().id(panacheBarbershop.getId()).name(panacheBarbershop.getName())
				.email(panacheBarbershop.getEmail()).phone(panacheBarbershop.getPhone())
				.address(panacheBarbershop.getAddress()).city(panacheBarbershop.getCity())
				.state(panacheBarbershop.getState()).build();
	}

}
