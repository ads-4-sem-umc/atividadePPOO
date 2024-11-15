package com.ppoo.core.entity;

import io.quarkus.runtime.annotations.RegisterForReflection;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.UUID;

@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@RegisterForReflection
public class Schedule {

	private String id;

	private Barber barber;

	private Client client;

	private String hour;

	public void register() {
		this.id = UUID.randomUUID().toString();
	}

}
