package com.SOOKTUBE.dao;

import com.SOOKTUBE.model.RecommendUploaderDTO;
import com.SOOKTUBE.model.VideoRecommendDTO;

public interface VideoRecommendDAO {
	
	VideoRecommendDTO[] getVideoandList(int videoID) throws Exception;
	
	RecommendUploaderDTO[] recommendVideoByUploader(int videoID) throws Exception;

}
