package com.ppoo.outbound.hibernate.table;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Table(name = "barber", schema = "public")
public class PanacheBarber extends PanacheEntityBase {

	@Id
	public String id;

	public String name;

	public String email;

	public String phone;

	@ManyToOne
	@JoinColumn(name = "barbershop_id", referencedColumnName = "id")
	public PanacheBarbershop barbershop;

}
