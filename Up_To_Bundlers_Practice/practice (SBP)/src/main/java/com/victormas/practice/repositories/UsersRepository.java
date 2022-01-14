package com.victormas.practice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.victormas.practice.models.UserModel;

@Repository
public interface UsersRepository extends JpaRepository<UserModel, Integer> {
	@Query("select u from UserModel u where u.name = ?1 and u.password = ?2")
	public UserModel findByCredentials(String name, String password);
}
