package com.SOOKTUBE.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.VideoDAO;
import com.SOOKTUBE.model.VideoDTO;

@RestController
@CrossOrigin
@EnableAutoConfiguration
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class VideoController {

	@Autowired
	private VideoDAO videoDAO;
	
	@CrossOrigin
	@RequestMapping(value = "/api/video/post", method = RequestMethod.POST)
	public VideoDTO postVideo(VideoDTO video) throws Exception{
		videoDAO.PostVideo(video);
		return video;
	}
}
