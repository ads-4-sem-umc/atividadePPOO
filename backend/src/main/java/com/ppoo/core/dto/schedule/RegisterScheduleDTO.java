package com.ppoo.core.dto.schedule;

import com.ppoo.core.entity.Barber;
import com.ppoo.core.entity.Client;
import io.quarkus.runtime.annotations.RegisterForReflection;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@RegisterForReflection
public class RegisterScheduleDTO {

	@NotNull(message = "Barbeiro é obrigatória")
	private Barber barber;

	@NotNull(message = "Cliente é obrigatório")
	private Client client;

	@NotBlank(message = "Horário é obrigatório")
	private String hour;

}
