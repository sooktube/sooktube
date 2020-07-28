package com.SOOKTUBE.dao;

import java.util.List;

import com.SOOKTUBE.model.VideoListDTO;

public interface VideoListDAO {
	
	VideoListDTO[] getVideoList() throws Exception;
	VideoListDTO[] getVideoListbyID(int listID) throws Exception;
	
	List<String> getFileNamebylistID(int listID) throws Exception;

}
