package com.ppoo.core.repository;

import com.ppoo.core.entity.Client;

import java.util.List;

public interface ClientRepository {

	Client save(Client client);

	List<Client> list();

}
