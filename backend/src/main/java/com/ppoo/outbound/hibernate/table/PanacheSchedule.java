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
@Table(name = "schedule", schema = "public")
public class PanacheSchedule extends PanacheEntityBase {

	@Id
	public String id;

	@ManyToOne
	@JoinColumn(name = "barber_id", referencedColumnName = "id")
	public PanacheBarber barber;

	@ManyToOne
	@JoinColumn(name = "client_id", referencedColumnName = "id")
	public PanacheClient client;

	public String hour;

}
