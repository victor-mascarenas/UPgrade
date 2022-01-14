package com.victormas.practice.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.victormas.practice.models.PostModel;
import com.victormas.practice.repositories.PostsRepository;

@Service
public class PostsService {
	@Autowired
	private PostsRepository postsRepository;
	
	public List<PostModel> retrieveAll(int userId) {
		List<PostModel> posts = this.postsRepository.findAllByUserId(userId);
		return posts;
	}
	public PostModel store (int userId, PostModel post) {
		PostModel newPost = this.postsRepository.save(post);
		return newPost;
	}
	public void delete(int postId) {
		this.postsRepository.deleteById(postId);
	}
}
