package com.SOOKTUBE.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.ListLikeDAO;
import com.SOOKTUBE.model.ListLikeDTO;
import lombok.RequiredArgsConstructor;

@RestController
@EnableAutoConfiguration
@RequiredArgsConstructor
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class ListLikeController {
	
	@Autowired
	ListLikeDAO listlikeDAO;

	//user likes a video list
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/likeList/{listID}/{username}", method = RequestMethod.POST)
	public ListLikeDTO userLikesList(@PathVariable("listID") final int listID, @PathVariable("username") final String username) throws Exception {
		
		if(listlikeDAO.selectDislikeList(listID, username) != null) {
			listlikeDAO.revertDislike(listID, username);
		}
		
		listlikeDAO.likeaList(listID, username);
		
		ListLikeDTO res = listlikeDAO.selectLikeList(listID, username);
		
		return res;
	}
	
	//revert like
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/revert/like/{listID}/{username}", method = RequestMethod.DELETE)
	public String revertLike(@PathVariable("listID") final int listID, @PathVariable("username") final String username) throws Exception {
		
		listlikeDAO.revertLike(listID, username);
		
		return "like reverted";
		
	}
	
	//user dislikes a video list
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/dislikeList/{listID}/{username}", method = RequestMethod.POST)
	public ListLikeDTO userDislikesList(@PathVariable("listID") final int listID, @PathVariable("username") final String username) throws Exception {
		
		if (listlikeDAO.selectLikeList(listID, username) != null) {
			listlikeDAO.revertLike(listID, username);
		}
		
		listlikeDAO.dislikeaList(listID, username);
		
		ListLikeDTO res = listlikeDAO.selectDislikeList(listID, username);
		
		return res;
	}
	
	//revert dislike
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/revert/dislike/{listID}/{username}", method = RequestMethod.DELETE)
	public String revertDislike(@PathVariable("listID") final int listID, @PathVariable("username") final String username) throws Exception {
		
		listlikeDAO.revertDislike(listID, username);
		
		return "dislike reverted";
	}
}
