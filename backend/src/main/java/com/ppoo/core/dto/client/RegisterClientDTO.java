package com.ppoo.core.dto.client;

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
public class RegisterClientDTO {

	@NotBlank(message = "Nome é obrigatório")
	private String name;

	@NotBlank(message = "E-mail é obrigatório")
	private String email;

	@NotBlank(message = "Telefone é obrigatório")
	private String phone;

}
