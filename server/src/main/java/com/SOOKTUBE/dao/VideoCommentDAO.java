package com.SOOKTUBE.dao;

import org.apache.ibatis.annotations.Param;

import com.SOOKTUBE.model.VideoCommentDTO;
import com.SOOKTUBE.model.VideoCommentGetDTO;

public interface VideoCommentDAO {
	
	//insert
	int commentVideo(VideoCommentDTO comment) throws Exception;
	int recommentVideo(VideoCommentDTO comment) throws Exception;
	
	//update 
	int editVideoComment(VideoCommentDTO comment) throws Exception;
	
	//select comment
	VideoCommentDTO getComments(@Param("commentID") int commentID, @Param("videoID") int videoID, @Param("username") String username) throws Exception;
	VideoCommentDTO[] getCommentsByVideoID(int videoID) throws Exception;
	VideoCommentDTO[] checkComment(@Param("videoID") int videoID, @Param("parent") int parent) throws Exception;
	
	
	//delete comment
	int deleteVideoComment(@Param("commentID") int commentID, @Param("videoID") int videoID, @Param("username") String username, @Param("seq") int seq) throws Exception;
	int deleteRecomment(@Param("videoID") int videoID, @Param("parent") int parent) throws Exception;
	
	
}
