package com.ppoo.outbound.hibernate.repository;

import com.ppoo.core.entity.Client;
import com.ppoo.core.repository.ClientRepository;
import com.ppoo.outbound.hibernate.table.PanacheClient;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ClientPanacheRepository implements ClientRepository {

	@Override
	public Client save(Client client) {
		PanacheClient panacheClient = PanacheClient.builder().id(client.getId()).name(client.getName())
				.email(client.getEmail()).phone(client.getPhone()).build();
		panacheClient.persist();
		return Client.builder().id(panacheClient.getId()).name(panacheClient.getName()).email(panacheClient.getEmail())
				.phone(panacheClient.getPhone()).build();
	}

}
