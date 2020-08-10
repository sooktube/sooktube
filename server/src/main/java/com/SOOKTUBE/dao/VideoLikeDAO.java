package com.SOOKTUBE.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.SOOKTUBE.model.VideoLikeDTO;

public interface VideoLikeDAO {
	
	//insert like
	int likeaVideo(@Param("videoID") int videoID, @Param("username") String username) throws Exception;
	//insert dislike
	int dislikeaVideo(@Param("videoID") int videoID, @Param("username") String username) throws Exception;
	

	//select like
	VideoLikeDTO selectLikeVideo(@Param("videoID") int videoID, @Param("username") String username) throws Exception;
	//select dislike
	VideoLikeDTO selectDislikeVideo(@Param("videoID") int videoID, @Param("username") String username) throws Exception;
	
	//revert like
	int revertLike(@Param("videoID") int videoID, @Param("username") String username) throws Exception;
	//revert dislike
	int revertDislike(@Param("videoID") int videoID, @Param("username") String username) throws Exception;
	
	//like count
	int likeCount(int videoID) throws Exception;
	//dislike count
	int dislikeCount(int videoID) throws Exception;
	
	
	//get like videos by user
	List<Integer> getlikeVideos(String username) throws Exception;
	//get dislike videos by user
	List<Integer> getDislikeVideos(String username) throws Exception;
	
}