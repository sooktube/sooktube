package com.SOOKTUBE.dao;

import com.SOOKTUBE.model.VideoDTO;

public interface VideoDAO {
	
	int newVideo(VideoDTO param) throws Exception;

}
