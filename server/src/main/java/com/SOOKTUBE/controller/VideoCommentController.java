package com.SOOKTUBE.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.ProfileDAO;
import com.SOOKTUBE.dao.VideoCommentDAO;
import com.SOOKTUBE.dao.VideoCommentGetDAO;
import com.SOOKTUBE.model.VideoCommentDTO;
import com.SOOKTUBE.model.VideoCommentGetDTO;
import com.SOOKTUBE.service.GCSService;

import lombok.RequiredArgsConstructor;

@RestController
@EnableAutoConfiguration
@RequiredArgsConstructor
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class VideoCommentController {
	
	private final GCSService gcsService;
	
	@Autowired
	VideoCommentDAO videocommentDAO;
	
	@Autowired
	VideoCommentGetDAO videocommentgetDAO;
	
	@Autowired
	ProfileDAO profileDAO;
	
	//new comment
	@CrossOrigin
	@RequestMapping(value = "/api/video/comment", method = RequestMethod.POST)
	public VideoCommentDTO commentVideo(VideoCommentDTO comment) throws Exception {
		
		videocommentDAO.commentVideo(comment);
		
		return comment;
	}
	
	//recomment
	@CrossOrigin
	@RequestMapping(value = "/api/video/recomment/{parent}/{seq}", method = RequestMethod.POST)
	public VideoCommentDTO recommentVideo(@PathVariable("parent") final int parent, @PathVariable("seq") final int seq, VideoCommentDTO comment) throws Exception {
		
		comment.setParent(parent);
		comment.setSeq(seq);
		
		videocommentDAO.recommentVideo(comment);
		
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
	@RequestMapping(value = "/api/video/comment/delete/{commentID}/{videoID}/{seq}/{username}", method = RequestMethod.DELETE)
	public VideoCommentGetDTO[] deleteComment(@PathVariable("commentID") final int commentID, @PathVariable("videoID") final int videoID,
			@PathVariable("seq") final int seq, @PathVariable("username") final String username) throws Exception {
		
		videocommentDAO.deleteVideoComment(commentID, videoID, username, seq);
		
		if(videocommentDAO.checkComment(videoID, commentID) != null) {
			videocommentDAO.deleteRecomment(videoID, commentID);
		}
		
		VideoCommentGetDTO[] comments = videocommentgetDAO.getCommentsandProfile(videoID);
		
		for (int i = 0; i < comments.length; i ++) {
			
			String profilepic = comments[i].getProfileUrl();
			
			comments[i].setProfileUrl(gcsService.getVideobyVIDEOtable(profilepic));
		}
		
		return comments;
		
	}
	
	//select comments
	@CrossOrigin
	@RequestMapping(value = "/api/video/comment/videoID/{videoID}", method = RequestMethod.GET)
	public VideoCommentGetDTO[] getVideoComment(@PathVariable("videoID") final int videoID) throws Exception {
		
		VideoCommentGetDTO[] comments = videocommentgetDAO.getCommentsandProfile(videoID);
		
		for (int i = 0; i < comments.length; i ++) {
			
			String profilepic = comments[i].getProfileUrl();
			
			comments[i].setProfileUrl(gcsService.getVideobyVIDEOtable(profilepic));
		}
		
		
		return comments;
		
	}

}
