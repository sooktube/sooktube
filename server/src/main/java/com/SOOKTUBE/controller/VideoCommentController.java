package com.SOOKTUBE.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.VideoCommentDAO;
import com.SOOKTUBE.model.VideoCommentDTO;

import lombok.RequiredArgsConstructor;

@RestController
@EnableAutoConfiguration
@RequiredArgsConstructor
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class VideoCommentController {
	
	@Autowired
	VideoCommentDAO videocommentDAO;
	
	//new comment
	@CrossOrigin
	@RequestMapping(value = "/api/video/comment", method = RequestMethod.POST)
	public VideoCommentDTO commentVideo(VideoCommentDTO comment) throws Exception {
		
		videocommentDAO.commentVideo(comment);
		
		return comment;
	}
	
	//update comment
	@CrossOrigin
	@RequestMapping(value = "/api/video/comment/update/{commentID}/{videoID}/{username}", method = RequestMethod.PUT)
	public VideoCommentDTO updateVideoComment(@PathVariable("commentID") final int commentID, @PathVariable("videoID") final int videoID,
				@PathVariable("username") final String username, VideoCommentDTO comment) throws Exception {
		
		comment.setCommentID(commentID);
		comment.setVideoID(videoID);
		comment.setUsername(username);
		
		VideoCommentDTO newComment = videocommentDAO.getComments(commentID, videoID, username);
		
		newComment.setUserComment(comment.getUserComment());
		
		videocommentDAO.editVideoComment(newComment);
		
		return newComment;
		
		
	}
	
	//delete comment
	@CrossOrigin
	@RequestMapping(value = "/api/video/comment/delete/{commentID}/{videoID}/{username}", method = RequestMethod.DELETE)
	public String deleteComment(@PathVariable("commentID") final int commentID, @PathVariable("videoID") final int videoID,
			@PathVariable("username") final String username) throws Exception {
		
		videocommentDAO.deleteVideoComment(commentID, videoID, username);
		
		return "deleted";
		
	}
	
	//select comments
	@CrossOrigin
	@RequestMapping(value = "/api/video/comment/videoID/{videoID}", method = RequestMethod.GET)
	public VideoCommentDTO[] getVideoComment(@PathVariable("videoID") final int videoID) throws Exception {
		
		VideoCommentDTO[] res = videocommentDAO.getCommentsByVideoID(videoID);
		
		return res;
		
	}

}