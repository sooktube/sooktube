package com.SOOKTUBE.dao;

import org.apache.ibatis.annotations.Param;

import com.SOOKTUBE.model.RecommendUploaderDTO;
import com.SOOKTUBE.model.VideoRecommendDTO;

public interface VideoRecommendDAO {
	
	VideoRecommendDTO[] getVideoandList(int videoID) throws Exception;
	
	RecommendUploaderDTO[] recommendVideoByUploader(int videoID) throws Exception;
	
	int[] listIDinvideo(int videoID) throws Exception;
	
	int[] getLikeDislike(@Param("videoID") int videoID, @Param("listID") int listID) throws Exception;

}
