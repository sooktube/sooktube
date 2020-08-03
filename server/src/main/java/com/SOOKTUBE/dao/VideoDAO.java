package com.SOOKTUBE.dao;

import java.util.List;

import com.SOOKTUBE.model.VideoDTO;

public interface VideoDAO {
	
	//insert
	int newVideo(VideoDTO video) throws Exception;
	
	//select
	String getURLfromVideoID(int videoID) throws Exception;
	List<String> getURLfromUsername(String username) throws Exception;
	VideoDTO getDescbyVideoID(int videoID) throws Exception;
	VideoDTO[] getDescbyUser(String username) throws Exception;
	VideoDTO getDescbyFile(String uploadFileName) throws Exception;
	
	String getURLfromFilename(String uploadFileName) throws Exception;
	List<String> getURLfromTitle(String videoTitle) throws Exception;
	
	
	//update
	int editVideo(VideoDTO param) throws Exception;
	
	//delete
	int deleteVideobyID(int videoID) throws Exception;
	int deleteVideobyFileName(String uploadFileName) throws Exception;
	
	
	//search
	VideoDTO[] searchVideobyTitle(String search) throws Exception;
	

}
