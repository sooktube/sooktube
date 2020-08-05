package com.SOOKTUBE.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.VideoLikeDAO;
import com.SOOKTUBE.model.VideoLikeDTO;

import lombok.RequiredArgsConstructor;

@RestController
@EnableAutoConfiguration
@RequiredArgsConstructor
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class VideoLikeController {
	
	
	@Autowired
	private VideoLikeDAO videoLikeDAO;
	
	//user likes a video
	@CrossOrigin
	@RequestMapping(value = "/api/like/video/{videoID}/{username}", method = RequestMethod.POST)
	public VideoLikeDTO userLikesVideo(@PathVariable("videoID") final int videoID, @PathVariable("username") final String username) throws Exception {
		
		if(videoLikeDAO.selectDislikeVideo(videoID, username) != null) {
			videoLikeDAO.revertDislike(videoID, username);
		}
		
		videoLikeDAO.likeaVideo(videoID, username);
		
		VideoLikeDTO res = videoLikeDAO.selectLikeVideo(videoID, username);
		
		return res;
		
	}
	
	//revert like
	@CrossOrigin
	@RequestMapping(value = "/api/like/video/revert/{videoID}/{username}", method = RequestMethod.DELETE)
	public String revertLike(@PathVariable("videoID") final int videoID, @PathVariable("username") final String username) throws Exception {
		
		videoLikeDAO.revertLike(videoID, username);
		
		return "like reverted";
		
	}
	

	
	//user dislikes a video
	@CrossOrigin
	@RequestMapping(value = "/api/dislike/video/{videoID}/{username}", method = RequestMethod.DELETE)
	public VideoLikeDTO userDislikesVideo(@PathVariable("videoID") final int videoID, @PathVariable("username") final String username) throws Exception {
		
		if(videoLikeDAO.selectLikeVideo(videoID, username) != null) {
			videoLikeDAO.revertLike(videoID, username);
		}
		
		videoLikeDAO.dislikeaVideo(videoID, username);
		
		VideoLikeDTO res = videoLikeDAO.selectDislikeVideo(videoID, username);
		
		return res;
	}
	
	//revert dislike
	@CrossOrigin
	@RequestMapping(value = "/api/dislike/video/revert/{videoID}/{username}", method = RequestMethod.DELETE)
	public String reverDislike(@PathVariable("videoID") final int videoID, @PathVariable("username") final String username) throws Exception {
		
		videoLikeDAO.revertDislike(videoID, username);
		
		return "dislike reverted";
		
	}

}
