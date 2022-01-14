package com.victormas.practice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.victormas.practice.models.UserModel;

@Repository
public interface UsersRepository extends JpaRepository<UserModel, Integer> {
	@Query(value = "select * from users where name = ?1 and password = ?2", nativeQuery = true)
	public UserModel findByCredentials(String name, String password);
}
