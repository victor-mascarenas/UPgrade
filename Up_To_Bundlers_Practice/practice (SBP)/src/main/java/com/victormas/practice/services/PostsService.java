package com.victormas.practice.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.victormas.practice.models.PostModel;
import com.victormas.practice.repositories.PostsRepository;

@Service
public class PostsService {
	@Autowired
	private PostsRepository postsRepository;
	
	private int getNewId() {
		int id = 0;
		List<PostModel> posts = this.postsRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
		id = posts.isEmpty() ? 1 : posts.get(posts.size() - 1).getId() + 1;
		return id;
	}
	
	public List<PostModel> retrieveAll(int userId) {
		List<PostModel> posts = this.postsRepository.findAllByUserId(userId);
		return posts;
	}
	public PostModel store (PostModel post) {
		post.setId(this.getNewId());
		PostModel newPost = this.postsRepository.save(post);
		return newPost;
	}
	public void delete(int postId) {
		this.postsRepository.deleteById(postId);
	}
}
