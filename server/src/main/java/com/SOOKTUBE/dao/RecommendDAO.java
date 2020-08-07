package com.SOOKTUBE.dao;

import org.apache.ibatis.annotations.Param;

import com.SOOKTUBE.model.RecommendDTO;

public interface RecommendDAO {
	
	//insert
	int recommendVideoInList(@Param("videoID") int videoID, @Param("listID") int listID, @Param("username") String username) throws Exception;
	int disrecommendVideoInList(@Param("videoID") int videoID, @Param("listID") int listID, @Param("username") String username) throws Exception;

	
	//revert(delete)
	int revertRecommend(@Param("videoID") int videoID, @Param("listID") int listID, @Param("username") String username) throws Exception;
	int revertDisrecommend(@Param("videoID") int videoID, @Param("listID") int listID, @Param("username") String username) throws Exception;
	
	//select
	RecommendDTO getRecommendedVideo(@Param("videoID") int videoID, @Param("listID") int listID, @Param("username") String username) throws Exception;
	RecommendDTO getDisrecommendedVideo(@Param("videoID") int videoID, @Param("listID") int listID, @Param("username") String username) throws Exception;
	
	//select count
	int recCount(@Param("videoID") int videoID, @Param("listID") int listID) throws Exception;
	int disrecCount(@Param("videoID") int videoID, @Param("listID") int listID) throws Exception;
}
