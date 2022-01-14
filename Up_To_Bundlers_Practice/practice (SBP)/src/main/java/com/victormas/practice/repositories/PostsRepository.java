package com.victormas.practice.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.victormas.practice.models.PostModel;

public interface PostsRepository extends JpaRepository<PostModel, Integer> {
	@Query(value = "select p from PostModel p inner join UserModel u on u.id = p.userId and u.id = ?1")
	public List<PostModel> findAllByUserId(int userId);
}
