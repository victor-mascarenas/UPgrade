package com.victormas.practice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.victormas.practice.models.PostModel;
import com.victormas.practice.services.PostsService;

@RestController
@RequestMapping("/posts")
public class PostsController {
	@Autowired
	private PostsService postsService;
	
	@GetMapping("/user/{userId}")
	public List<PostModel> get(@PathVariable int userId) {
		List<PostModel> posts = this.postsService.retrieveAll(userId);
		return posts;
	}
	@PostMapping("/user/post")
	public PostModel post(@RequestBody PostModel post) {
		PostModel newPost = this.postsService.store(post);
		return newPost;
	}
	@DeleteMapping("/post/{postId}")
	public void delete(@PathVariable int postId) {
		this.postsService.delete(postId);
	}
}
