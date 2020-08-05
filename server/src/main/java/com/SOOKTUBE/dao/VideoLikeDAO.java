package com.SOOKTUBE.dao;

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
	
}
