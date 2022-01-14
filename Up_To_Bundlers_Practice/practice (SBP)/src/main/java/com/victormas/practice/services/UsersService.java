package com.victormas.practice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.victormas.practice.models.UserModel;
import com.victormas.practice.repositories.UsersRepository;

@Service
public class UsersService {
	@Autowired
	private UsersRepository usersRepository;
	
	public UserModel retrieve(String name, String password) {
		UserModel user = this.usersRepository.findByCredentials(name, password);
		return user;
	}
	public UserModel save(UserModel model) {
		UserModel user = this.usersRepository.save(model);
		return user;
	}
}
