package com.SOOKTUBE.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

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
	VideoDTO[] getDescbyUserOrderBy(@Param("username") String username, @Param("order") String order,
									@Param("limit") int limit, @Param("offset") int offset) throws Exception;;
	
	String getURLfromFilename(String uploadFileName) throws Exception;
	List<String> getURLfromTitle(String videoTitle) throws Exception;
	
	VideoDTO[] getDescbyListID(int listID) throws Exception;
	VideoDTO[] getDescbyListIDOrderBy(@Param("listID") int listID, @Param("order") String order,
									@Param("limit") int limit, @Param("offset") int offset) throws Exception;
	
	VideoDTO[] getDescbyListIDGTEQ5(@Param("listID") int listID, @Param("order") String order,
			@Param("limit") int limit, @Param("offset") int offset) throws Exception;
	
	VideoDTO[] getDescbyListBetween0and5(@Param("listID") int listID, @Param("order") String order,
			@Param("limit") int limit, @Param("offset") int offset) throws Exception;
	
	
	//update
	int editVideo(VideoDTO param) throws Exception;
	
	//delete
	int deleteVideobyID(int videoID) throws Exception;
	int deleteVideobyFileName(String uploadFileName) throws Exception;
	
	
	//search
	VideoDTO[] searchVideobyTitle(@Param("videoTitle") String search, @Param("order") String order,
			@Param("limit") int limit, @Param("offset") int offset) throws Exception;
	
	VideoDTO[] searchVideobyTitleformList(@Param("videoTitle") String videoTitle, @Param("listID") int listID,
			@Param("order") String order, @Param("limit") int limit, @Param("offset") int offset) throws Exception;
	
	VideoDTO findVideoinList(@Param("videoID") int videoID, @Param("listID") int listID) throws Exception;
	

}
