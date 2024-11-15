package com.ppoo.outbound.hibernate.repository;

import com.ppoo.core.entity.Client;
import com.ppoo.core.repository.ClientRepository;
import com.ppoo.outbound.hibernate.table.PanacheClient;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.ArrayList;
import java.util.List;

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

	@Override
	public List<Client> list() {
		List<PanacheClient> listPanacheClient = PanacheClient.listAll();
		List<Client> listClient = new ArrayList<>();
		listPanacheClient.forEach(panacheClient -> {
			listClient.add(Client.builder().id(panacheClient.getId()).name(panacheClient.getName())
					.email(panacheClient.getEmail()).phone(panacheClient.getPhone()).build());
		});
		return listClient;
	}

}
