package com.SOOKTUBE.controller;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.VideoDAO;
import com.SOOKTUBE.model.VideoDTO;
 
@RestController
@EnableAutoConfiguration
@CrossOrigin
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class VideoController {
	
    @Autowired
    private VideoDAO videoDAO;

    //insert video descriptions to DB
    @CrossOrigin("http://localhost:9000")
    @RequestMapping(value = "/api/video/upload", method = RequestMethod.POST)
    public VideoDTO postVideo(VideoDTO video) throws Exception {
        return video;
    }
    
    //select video desc by videoID
    @CrossOrigin
    @RequestMapping(value = "/api/video/desc/{videoID}", method = RequestMethod.GET)
    public VideoDTO getVideoDesc(@PathVariable("videoID") final int videoID) throws Exception {
    	
    	VideoDTO video = videoDAO.getDescbyVideoID(videoID);
    	return video;
    }
    
    //select video desc by username
    @CrossOrigin("*")
    @RequestMapping(value = "/api/video/desc/user/{username}", method = RequestMethod.GET)
    public VideoDTO[] getVideoDescbyUser(@PathVariable("username") final String username) throws Exception {
    	
    	VideoDTO[] video = videoDAO.getDescbyUser(username);
    	return video;
    	
    }
    
    
    
    //update video descriptions by videoID
    @CrossOrigin("*")
    @RequestMapping(value = "/api/video/update/{videoID}", method = RequestMethod.PUT)
    public ResponseEntity<VideoDTO> editVideobyID(@PathVariable("videoID") final int videoID, VideoDTO videoDTO) throws Exception {
        if ((videoDTO.getVideoTitle() == null) || (videoDTO.getVideoDesc() == null) || (videoDTO.getUsername() == null)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
 
        videoDTO.setVideoID(videoID); // 조회할 게시물 번호 지정
        VideoDTO video = videoDAO.getDescbyVideoID(videoID);
        
        if (video == null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        
        video.setVideoTitle(video.getVideoTitle());
        video.setVideoDesc(video.getVideoDesc());
        video.setVideoDate(video.getVideoDate());
        
        videoDAO.editVideo(video);

 
        return new ResponseEntity<>(video, HttpStatus.OK);
    }
    
    //search Videos by its title
    @CrossOrigin
    @RequestMapping(value = "/api/video/search/title/{videoTitle}", method = RequestMethod.GET)
    public VideoDTO[] searchbyTitle(@PathVariable("videoTitle") final String videoTitle) throws Exception {
    	
    	VideoDTO[] searchRes = videoDAO.searchVideobyTitle(videoTitle);
    	
    	return searchRes;
    	
    }

}
