package com.SOOKTUBE.controller;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.VideoDAO;
import com.SOOKTUBE.model.VideoDTO;
 
@RestController
@EnableAutoConfiguration

@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class VideoController {
	
    @Autowired
    private VideoDAO videoDAO;

    @RequestMapping(value = "/api/video/upload", method = RequestMethod.POST)
    public VideoDTO postBoard(VideoDTO video) throws Exception {
        videoDAO.newVideo(video);
        return video;
    }

}
