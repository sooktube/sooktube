package com.SOOKTUBE.controller;

import java.util.List;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.VideoListDAO;
import com.SOOKTUBE.model.VideoDTO;
import com.SOOKTUBE.model.VideoListDTO;
import com.SOOKTUBE.service.GCSService;

import lombok.RequiredArgsConstructor;

@RestController
@EnableAutoConfiguration
@RequiredArgsConstructor
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class VideoListController {
	
	 private final GCSService gcsService;
	
	@Autowired
	private VideoListDAO videoListDAO;
	
	//get all videoList from DB
	@CrossOrigin
	@RequestMapping(value = "/api/video/list", method = RequestMethod.GET)
    public VideoListDTO[] getVideoList() throws Exception {
    	
    	VideoListDTO[] res = videoListDAO.getVideoList();
    	
    	return res;
    }
	
	
	//get desc about videolist from db
	/*
	 * @CrossOrigin
	 * 
	 * @RequestMapping(value = "/api/video/list/ID/{listID}", method=
	 * RequestMethod.GET) public VideoListDTO[]
	 * getVideoListbyID(@PathVariable("listID") final int listID) throws Exception {
	 * 
	 * VideoListDTO[] res = videoListDAO.getVideoListbyID(listID);
	 * 
	 * return res; }
	 */
	
	
	//create new videoList
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/newList", method = RequestMethod.POST)
	public VideoListDTO newVideoList(VideoListDTO list) throws Exception {
		videoListDAO.newList(list);
		
		return list;
	}
	
	//create new videoList Information
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/newList/info", method = RequestMethod.POST)
	public VideoListDTO newVideoListInfo(VideoListDTO list) throws Exception {
		videoListDAO.newListInfo(list);
		return list;
	}
	
	
	//search video list by its title
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/search/name/{listName}", method = RequestMethod.GET)
	public VideoListDTO[] searchListbyName(@PathVariable("listName") final String listName) throws Exception {
		
    	//List<String> fileName = videoListDAO.get

		//VideoListDTO[] desc = videoListDAO.getVideoListbyID(listID);
	
		
		VideoListDTO[] searchRes = videoListDAO.searchListbyTitle(listName);
		
		//List<String> fileName = videoListDAO.getFileNamebylistName(listName);
		
		
		
		for(int i = 0; i < searchRes.length; i++) {
			
			//searchRes[i].setUrl(fileName[i]);
			int listID = searchRes[i].getListID();
			List<String> fileName = videoListDAO.getFileNamebylistID(listID);
			
			searchRes[i].setUrl(gcsService.getVideobyVIDEOtable(fileName.get(i)));
		}
			//desc[i].setUrl(gcsService.getVideobyVIDEOtable(fileName.get(i)));
		
		
		return searchRes;
		}

	
	
	//user likes a videoList
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/like/{listID}/{videoID}", method = RequestMethod.PUT)
	public int[] likeaList(@PathVariable("listID") final int listID, @PathVariable("videoID") final int videoID, VideoListDTO videolist) throws Exception {
		
		videoListDAO.editLike(videolist);
		
		int[] res = new int[2];
		
		//return count(like) and count(like+dislike)
		res[0] = videolist.getLike();
		res[0] = videolist.getLike() + videolist.getDislike();
		
		return res;
	}
	
	//user dislikes a videoList
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/dislike/{listID}/{videoID}", method = RequestMethod.PUT)
	public int[] dislikeaList(@PathVariable("listID") final int listID, @PathVariable("videoID") final int videoID, VideoListDTO videolist) throws Exception {
		
		videoListDAO.editDislike(videolist);
		
		int[] res = new int[2];
		
		//return count(like) and count(like+dislike)
		res[0] = videolist.getLike();
		res[0] = videolist.getLike() + videolist.getDislike();
		
		return res;
	}
	
	
}
