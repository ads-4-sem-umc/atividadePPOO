package com.ppoo.outbound.hibernate.mapper;

import com.ppoo.core.entity.Client;
import com.ppoo.outbound.hibernate.table.PanacheClient;
import org.mapstruct.Mapper;

@Mapper
public interface PanacheClientMapper {

	PanacheClient to(Client client);

	Client from(PanacheClient panacheClient);

}
