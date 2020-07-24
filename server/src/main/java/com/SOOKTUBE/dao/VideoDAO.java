package com.SOOKTUBE.dao;

import java.util.List;

import com.SOOKTUBE.model.VideoDTO;

public interface VideoDAO {
	
	int newVideo(VideoDTO param) throws Exception;
	String getURLfromVideoID(int videoID) throws Exception;
	List<String> getURLfromUsername(String username) throws Exception;

}
