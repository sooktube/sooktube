package com.SOOKTUBE.dao;

import org.apache.ibatis.annotations.Param;

import com.SOOKTUBE.model.ListLikeDTO;

public interface ListLikeDAO {
	
	//insert like
	int likeaList(@Param("listID") int listID, @Param("username") String username) throws Exception;
	//insert dislike
	int dislikeaList(@Param("listID") int listID, @Param("username") String username) throws Exception;
	

	//select like
	ListLikeDTO selectLikeList(@Param("listID") int listID, @Param("username") String username) throws Exception;
	//select dislike
	ListLikeDTO selectDislikeList(@Param("listID") int listID, @Param("username") String username) throws Exception;
	
	//revert like
	int revertLike(@Param("listID") int listID, @Param("username") String username) throws Exception;
	//revert dislike
	int revertDislike(@Param("listID") int listID, @Param("username") String username) throws Exception;

}