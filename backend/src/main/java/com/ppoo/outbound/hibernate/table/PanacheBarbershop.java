package com.ppoo.outbound.hibernate.table;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Table(name = "barbershop", schema = "public")
public class PanacheBarbershop extends PanacheEntityBase {

	@Id
	public String id;

	public String name;

	public String email;

	public String phone;

	private String address;

	private String city;

	private String state;

}
