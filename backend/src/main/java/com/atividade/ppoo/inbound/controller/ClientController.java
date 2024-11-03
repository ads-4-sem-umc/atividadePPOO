package com.atividade.ppoo.inbound.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/clientes")
public class ClientController {

	@PostMapping
	public ResponseEntity<?> register() {
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}

}
