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
import com.SOOKTUBE.model.ListCommentDTO;

import lombok.RequiredArgsConstructor;

@RestController
@EnableAutoConfiguration
@RequiredArgsConstructor
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class ListCommentController {
	
	@Autowired
	ListCommentDAO listcommentDAO;
	
	//new comment
	@CrossOrigin
	@RequestMapping(value = "/api/list/comment", method = RequestMethod.POST)
	public ListCommentDTO commentList(ListCommentDTO comment) throws Exception {
		
		listcommentDAO.commentList(comment);
		
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
	@RequestMapping(value = "/api/list/comment/delete/{commentID}/{listID}/{username}", method = RequestMethod.DELETE)
	public String deleteListComment(@PathVariable("commentID") int commentID, @PathVariable("listID") final int listID,
			@PathVariable("username") final String username) throws Exception {
		
		listcommentDAO.deleteListComment(commentID, listID, username);
		
		return "deleted";
		
	}
	
	//get comment by listID
	@CrossOrigin
	@RequestMapping(value = "/api/list/comment/listID/{listID}", method = RequestMethod.GET)
	public ListCommentDTO[] getListcomments(@PathVariable("listID") final int listID) throws Exception {
		
		ListCommentDTO[] res = listcommentDAO.getCommentsByListID(listID);
		
		return res;
		
		
	}

}
