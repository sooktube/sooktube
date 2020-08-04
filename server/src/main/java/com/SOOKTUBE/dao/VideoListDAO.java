package com.SOOKTUBE.dao;

import java.util.List;

import com.SOOKTUBE.model.VideoListDTO;

public interface VideoListDAO {
	
	VideoListDTO[] getVideoList() throws Exception;
	VideoListDTO[] getVideoListbyID(int listID) throws Exception;
	
	List<String> getFileNamebylistID(int listID) throws Exception;
	
	List<String> getFileNamebylistName(String listName);
	
	//insert new videoList
	int newList(VideoListDTO list) throws Exception;
	int newListInfo(VideoListDTO list) throws Exception;
	
	//search
	VideoListDTO[] searchListbyTitle(String listName) throws Exception;
	
	//like&dislike
	int editLike(VideoListDTO list) throws Exception;
	int editDislike(VideoListDTO list) throws Exception;

}
