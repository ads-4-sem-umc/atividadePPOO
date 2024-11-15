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
public class Barbershop {

	private String id;

	private String name;

	private String email;

	private String phone;

	private String address;

	private String city;

	private String state;

	public void register() {
		this.id = UUID.randomUUID().toString();
	}

}
