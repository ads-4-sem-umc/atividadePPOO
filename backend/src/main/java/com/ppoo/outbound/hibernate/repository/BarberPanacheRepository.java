package com.ppoo.outbound.hibernate.repository;

import com.ppoo.core.entity.Barber;
import com.ppoo.core.entity.Barbershop;
import com.ppoo.core.repository.BarberRepository;
import com.ppoo.outbound.hibernate.table.PanacheBarber;
import com.ppoo.outbound.hibernate.table.PanacheBarbershop;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class BarberPanacheRepository implements BarberRepository {

	@Override
	public Barber save(Barber barber) {
		PanacheBarber panacheBarber = PanacheBarber.builder().id(barber.getId()).name(barber.getName())
				.email(barber.getEmail()).phone(barber.getPhone())
				.barbershop(PanacheBarbershop.builder().id(barber.getBarbershop().getId()).build()).build();
		panacheBarber.persist();
		return Barber.builder().id(panacheBarber.getId()).name(panacheBarber.getName()).email(panacheBarber.getEmail())
				.phone(panacheBarber.getPhone())
				.barbershop(Barbershop.builder().id(panacheBarber.getBarbershop().getId())
						.name(panacheBarber.getBarbershop().getName()).email(panacheBarber.getBarbershop().getEmail())
						.phone(panacheBarber.getBarbershop().getPhone())
						.address(panacheBarber.getBarbershop().getAddress())
						.city(panacheBarber.getBarbershop().getCity()).state(panacheBarber.getBarbershop().getState())
						.build())
				.build();
	}

	@Override
	public List<Barber> list() {
		List<PanacheBarber> panacheBarberList = PanacheBarber.listAll();
		List<Barber> barbers = new ArrayList<>();
		panacheBarberList.forEach(panacheBarber -> {
			barbers.add(Barber.builder().id(panacheBarber.getId()).name(panacheBarber.getName())
					.email(panacheBarber.getEmail()).phone(panacheBarber.getPhone())
					.barbershop(Barbershop.builder().id(panacheBarber.getBarbershop().getId())
							.name(panacheBarber.getBarbershop().getName())
							.email(panacheBarber.getBarbershop().getEmail())
							.phone(panacheBarber.getBarbershop().getPhone())
							.address(panacheBarber.getBarbershop().getAddress())
							.city(panacheBarber.getBarbershop().getCity())
							.state(panacheBarber.getBarbershop().getState()).build())
					.build());
		});
		return barbers;
	}

}
