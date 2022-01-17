package com.victormas.practice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.victormas.practice.models.UserModel;
import com.victormas.practice.services.UsersService;

@RestController
@RequestMapping("/users")
public class UsersController {
	@Autowired
	private UsersService usersService;
	
	@CrossOrigin(origins = "http://localhost:8081")
	@GetMapping("/{name}/{password}")
	public UserModel get(@PathVariable String name, @PathVariable String password) {
		UserModel user = this.usersService.retrieve(name, password);
		return user;
	}
	@CrossOrigin(origins = "http://localhost:8081")
	@PostMapping("/user")
	public UserModel post(@RequestBody UserModel user) {
		return null;
	}
}
