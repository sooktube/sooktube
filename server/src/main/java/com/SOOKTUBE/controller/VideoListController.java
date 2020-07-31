package com.SOOKTUBE.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.VideoListDAO;
import com.SOOKTUBE.model.VideoListDTO;

@RestController
@EnableAutoConfiguration

@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class VideoListController {
	
	@Autowired
	private VideoListDAO videoListDAO;
	
	//get all videoList from DB
	@CrossOrigin
	@RequestMapping(value = "/api/video/list", method = RequestMethod.GET)
    public VideoListDTO[] getVideoList() throws Exception {
    	
    	VideoListDTO[] res = videoListDAO.getVideoList();
    	
    	return res;
    }
	
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/ID/{listID}", method= RequestMethod.GET)
	public VideoListDTO[] getVideoListbyID(@PathVariable("listID") final int listID) throws Exception {
		
		VideoListDTO[] res = videoListDAO.getVideoListbyID(listID);
		
		return res;
	}
	
	
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
	
	

}
