package com.SOOKTUBE.dao;

import org.apache.ibatis.annotations.Param;

import com.SOOKTUBE.model.ListRecommendDTO;

public interface ListRecommendDAO {
	
	ListRecommendDTO selectRecommendedVideo(@Param("listID") int listID, @Param("videoID") int videoID) throws Exception;

}
