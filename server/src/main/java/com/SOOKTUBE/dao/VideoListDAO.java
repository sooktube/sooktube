package com.SOOKTUBE.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.SOOKTUBE.model.VideoListDTO;

public interface VideoListDAO {
	
	VideoListDTO[] getVideoList() throws Exception;
	VideoListDTO[] getVideoListbyID(int listID) throws Exception;
	
	VideoListDTO getListbyID(int listID) throws Exception;
	VideoListDTO getVideoListbyVideoID(@Param("videoID") int videoID, @Param("listID") int listID) throws Exception;
	
	
	List<String> getFileNamebylistID(int listID) throws Exception;
	List<String> getFileNamebylistIDGTEQ5(int listID) throws Exception;
	List<String> getFileNamebylistIDbetween0and5(int listID) throws Exception;
	
	List<String> getFileNamebylistName(String listName);
	
	String getUsernameofList(int listID);
	
	VideoListDTO[] getVideoListbyUser(@Param("username") String username, @Param("order") String order,
			@Param("limit") int limit, @Param("offset") int offset) throws Exception;
	VideoListDTO[] getVideoListOrderby(@Param("limit") int limit, @Param("offset") int offset, @Param("order") String order) throws Exception;
	
	//insert new videoList
	int newList(VideoListDTO list) throws Exception;
	int newListInfo(VideoListDTO list) throws Exception;
	
	//search
	VideoListDTO[] searchListbyTitle(@Param("listName") String listName, @Param("order") String order,
			@Param("limit") int limit, @Param("offset") int offset) throws Exception;
	
	//like&dislike(recommend)
	int editLike(VideoListDTO list) throws Exception;
	int editDislike(VideoListDTO list) throws Exception;
	int editLikeSet5(VideoListDTO list) throws Exception;
	
	int revertRecommend(VideoListDTO list) throws Exception;
	int revertDisrecommend(VideoListDTO list) throws Exception;
	
	//delete video list
	int deleteVideolist(int listID) throws Exception;
	

	//update video list
	int updatelistDesc(VideoListDTO videolist) throws Exception;
	
	
	//delete video
	int deleteVideoFromlist(@Param("videoID") int videoID, @Param("listID") int listID) throws Exception;

}
