package com.ppoo.core.dto.barbershop;

import io.quarkus.runtime.annotations.RegisterForReflection;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@RegisterForReflection
public class RegisterBarbershopDTO {

	@NotBlank(message = "Nome é obrigatório")
	private String name;

	@NotBlank(message = "E-mail é obrigatório")
	private String email;

	@NotBlank(message = "Telefone é obrigatório")
	private String phone;

	@NotBlank(message = "Endereço é obrigatório")
	private String address;

	@NotBlank(message = "Cidade é obrigatória")
	private String city;

	@NotBlank(message = "Estado é obrigatório")
	private String state;

}
