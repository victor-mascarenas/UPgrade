package com.victormas.practice.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.victormas.practice.models.UserModel;
import com.victormas.practice.repositories.UsersRepository;

@Service
public class UsersService {
	@Autowired
	private UsersRepository usersRepository;
	
	private int getNewId() {
		int id = 0;
		List<UserModel> users = this.usersRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
		id = users.isEmpty() ? 1 : users.get(users.size() - 1).getId() + 1;
		return id;
	}
	
	public UserModel retrieve(String name, String password) {
		UserModel user = this.usersRepository.findByCredentials(name, password);
		return user;
	}
	public UserModel save(UserModel model) {
		model.setId(this.getNewId());
		UserModel user = this.usersRepository.save(model);
		return user;
	}
}
