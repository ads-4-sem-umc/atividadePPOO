package com.ppoo.core.usecase.client;

import com.ppoo.core.entity.Client;
import com.ppoo.core.repository.ClientRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.util.List;

@ApplicationScoped
public class ListClient {

	@Inject
	ClientRepository clientRepository;

	public List<Client> execute() {
		return clientRepository.list();
	}

}
