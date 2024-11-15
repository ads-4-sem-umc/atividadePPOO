package com.ppoo.core.repository;

import com.ppoo.core.entity.Barbershop;

import java.util.List;

public interface BarbershopRepository {

	Barbershop save(Barbershop barbershop);

    List<Barbershop> list();

}
