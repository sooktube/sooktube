package com.SOOKTUBE.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.SOOKTUBE.model.ListLikeDTO;
import com.SOOKTUBE.model.VideoListDTO;

public interface ListLikeDAO {
	
	//insert like
	int likeaList(@Param("listID") int listID, @Param("username") String username) throws Exception;
	int likeaList2(int listID) throws Exception;
	//insert dislike
	int dislikeaList(@Param("listID") int listID, @Param("username") String username) throws Exception;
	int dislikeaList2(int listID) throws Exception;
	

	//select like
	ListLikeDTO selectLikeList(@Param("listID") int listID, @Param("username") String username) throws Exception;
	//select dislike
	ListLikeDTO selectDislikeList(@Param("listID") int listID, @Param("username") String username) throws Exception;
	
	//revert like
	int revertLike(@Param("listID") int listID, @Param("username") String username) throws Exception;
	int revertLike2(int listID) throws Exception;
	//revert dislike
	int revertDislike(@Param("listID") int listID, @Param("username") String username) throws Exception;
	int revertDislike2(int listID) throws Exception;
	
	//count like
	int countLike(int listID) throws Exception;
	//count dislike
	int countDislike(int listID) throws Exception;
	
	//get liked list by user
	List<Integer> getlikedListbyUser(String username) throws Exception;
	VideoListDTO[] getLikeListDesc(@Param("username") String username, @Param("limit") int limit, @Param("offset") int offset) throws Exception;
	
	//get disliked list
	List<Integer> getdislikedListbyUser(String username) throws Exception;
	VideoListDTO[] getdisLikeListDesc(@Param("username") String username, @Param("limit") int limit, @Param("offset") int offset) throws Exception;

}