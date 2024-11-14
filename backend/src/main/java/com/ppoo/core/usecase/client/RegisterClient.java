package com.ppoo.core.usecase.client;

import com.ppoo.core.dto.client.RegisterClientDTO;
import com.ppoo.core.entity.Client;
import com.ppoo.core.repository.ClientRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

@ApplicationScoped
public class RegisterClient {

	@Inject
	ClientRepository clientRepository;

	@Transactional
	public Client execute(RegisterClientDTO clientDTO) {
		Client client = Client.builder().name(clientDTO.getName()).email(clientDTO.getEmail())
				.phone(clientDTO.getPhone()).build();
		client.register();
		return clientRepository.save(client);
	}

}
