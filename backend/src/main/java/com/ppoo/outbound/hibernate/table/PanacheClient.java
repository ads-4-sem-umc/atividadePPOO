package com.ppoo.outbound.hibernate.table;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "client", schema = "public")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PanacheClient extends PanacheEntityBase {

	@Id
	public String id;

	public String name;

	public String email;

	public String phone;

}