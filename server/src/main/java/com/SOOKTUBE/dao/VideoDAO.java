package com.SOOKTUBE.dao;

import com.SOOKTUBE.model.VideoDTO;

public interface VideoDAO {
	
	int PostVideo(VideoDTO param) throws Exception;

}
