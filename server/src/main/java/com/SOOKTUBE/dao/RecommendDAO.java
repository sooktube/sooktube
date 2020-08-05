package com.SOOKTUBE.dao;

import org.apache.ibatis.annotations.Param;

import com.SOOKTUBE.model.RecommendDTO;

public interface RecommendDAO {
	
	int recommendVideoInList(@Param("videoID") int videoID, @Param("listID") int listID, @Param("username") String username) throws Exception;
	int disrecommendVideoInList(@Param("videoID") int videoID, @Param("listID") int listID, @Param("username") String username) throws Exception;

	RecommendDTO getRecommendedVideo(@Param("videoID") int videoID, @Param("listID") int listID, @Param("username") String username) throws Exception;
}
