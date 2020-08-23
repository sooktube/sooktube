package com.SOOKTUBE.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.ListCommentDAO;
import com.SOOKTUBE.dao.ListCommentGetDAO;
import com.SOOKTUBE.model.ListCommentDTO;
import com.SOOKTUBE.model.ListCommentGetDTO;
import com.SOOKTUBE.service.GCSService;

import lombok.RequiredArgsConstructor;

@RestController
@EnableAutoConfiguration
@RequiredArgsConstructor
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class ListCommentController {
	
	private final GCSService gcsService;
	
	@Autowired
	ListCommentDAO listcommentDAO;
	
	@Autowired
	ListCommentGetDAO listcommentgetDAO;
	
	//new comment
	@CrossOrigin
	@RequestMapping(value = "/api/list/comment", method = RequestMethod.POST)
	public ListCommentDTO commentList(ListCommentDTO comment) throws Exception {
		
		listcommentDAO.commentList(comment);
		
		return comment;
		
	}
	
	//recomment
	@CrossOrigin
	@RequestMapping(value = "/api/list/recomment/{parent}/{seq}", method = RequestMethod.POST)
	public ListCommentDTO recommenList(@PathVariable("parent") final int parent, @PathVariable("seq") final int seq, ListCommentDTO comment) throws Exception {
		
		comment.setParent(parent);
		comment.setSeq(seq);
		
		listcommentDAO.recommentList(comment);
		
		return comment;
		
	}
	
	
	//update comment
	@CrossOrigin
    @RequestMapping(value = "/api/list/comment/update/{commentID}/{listID}/{username}", method = RequestMethod.PUT)
	public ListCommentDTO updateListComment(@PathVariable("commentID") int commentID, @PathVariable("listID") final int listID,
			@PathVariable("username") final String username, ListCommentDTO comment) throws Exception {
		
		comment.setCommentID(commentID);
		comment.setListID(listID);
		comment.setUsername(username);
		
		
		ListCommentDTO newComment = listcommentDAO.getComments(commentID, listID, username);
		
		newComment.setUserComment(comment.getUserComment());
		
		listcommentDAO.editListComment(newComment);
		
		return newComment;
	}
	 
	
	//delete comment
	@CrossOrigin
	@RequestMapping(value = "/api/list/comment/delete/{commentID}/{listID}/{seq}/{username}", method = RequestMethod.DELETE)
	public ListCommentGetDTO[] deleteListComment(@PathVariable("commentID") int commentID, @PathVariable("listID") final int listID,
			@PathVariable("seq") final int seq, @PathVariable("username") final String username) throws Exception {
		
		listcommentDAO.deleteListComment(commentID, listID, username, seq);
		
		if (listcommentDAO.checkComment(listID, commentID) != null) {
			
			listcommentDAO.deleteRecomment(listID, commentID);
		}
		
		ListCommentGetDTO[] comments = listcommentgetDAO.getCommentsandProfile(listID);
		
		for(int i = 0; i < comments.length; i++) {
			
			String profilepic = comments[i].getProfileUrl();
			
			comments[i].setProfileUrl(gcsService.getVideobyVIDEOtable(profilepic));
		}
		
		return comments;
		
	}
	
	//get comment by listID
	@CrossOrigin
	@RequestMapping(value = "/api/list/comment/listID/{listID}", method = RequestMethod.GET)
	public ListCommentGetDTO[] getListcomments(@PathVariable("listID") final int listID) throws Exception {
		
		ListCommentGetDTO[] comments = listcommentgetDAO.getCommentsandProfile(listID);
		
		for(int i = 0; i < comments.length; i++) {
			
			String profilepic = comments[i].getProfileUrl();
			
			comments[i].setProfileUrl(gcsService.getVideobyVIDEOtable(profilepic));
		}
		
		return comments;
		
		
	}

}
