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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.RecommendDAO;
import com.SOOKTUBE.dao.VideoDAO;
import com.SOOKTUBE.dao.VideoLikeDAO;
import com.SOOKTUBE.dao.VideoListDAO;
import com.SOOKTUBE.model.VideoDTO;
import com.SOOKTUBE.service.GCSService;

import lombok.RequiredArgsConstructor;
 
@RestController
@RequiredArgsConstructor
@EnableAutoConfiguration
@CrossOrigin
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class VideoController {
	
	 private final GCSService gcsService;
	
    @Autowired
    private VideoDAO videoDAO;
    
    @Autowired
    private VideoLikeDAO videolikeDAO;
    
    @Autowired
    private VideoListDAO videolistDAO;
    
    @Autowired
    private RecommendDAO recommendDAO;

    //insert video descriptions to DB
    @CrossOrigin
    @RequestMapping(value = "/api/video/upload", method = RequestMethod.POST)
    public VideoDTO postVideo(VideoDTO video) throws Exception {
    	System.out.println(video.getVideoID());
    	System.out.println(video.getUploadFileName());
    	System.out.println(video.getUsername());
    	System.out.println(video.getVideoTitle());
    	System.out.println(video.getVideoDesc());
    	videoDAO.newVideo(video);
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
    @CrossOrigin
    @RequestMapping(value = "/api/video/update/{videoID}", method = RequestMethod.PUT)
    public ResponseEntity<VideoDTO> editVideobyID(@PathVariable("videoID") final int videoID, VideoDTO videoDTO) throws Exception {
        if ((videoDTO.getVideoTitle() == null) || (videoDTO.getVideoDesc() == null)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
 
        videoDTO.setVideoID(videoID); // 조회할 게시물 번호 지정
        VideoDTO video = videoDAO.getDescbyVideoID(videoID);
        
        
        if (video == null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        
        video.setVideoTitle(videoDTO.getVideoTitle());
        video.setVideoDesc(videoDTO.getVideoDesc());
        
        videoDAO.editVideo(video);

 
        return new ResponseEntity<>(video, HttpStatus.OK);
    }
    
    //search Videos by its title
    //modified
    @CrossOrigin
    @RequestMapping(value = "/api/video/search/title/{videoTitle}/listID/{listID}/user/{username}/{orderBy}", method = RequestMethod.GET)
    public VideoDTO[] searchbyTitle(@PathVariable("videoTitle") final String videoTitle, @PathVariable("listID") final int listID,
    		@PathVariable("username") final String username, @PathVariable("orderBy") final String orderBy,
    		@RequestParam(required = false, defaultValue = "0") int offset, @RequestParam(required = false, defaultValue = "100") int limit) throws Exception {
    	
    	String order;
    	
    	if (orderBy.equals("newest")) {
    		
    		order = "videoDate";
    		
        	VideoDTO[] searchRes = videoDAO.searchVideobyTitle(videoTitle, order, limit, offset);
        	
    		//List<String> fileName = videoDAO.getURLfromTitle(videoTitle);

    		for(int i = 0; i < searchRes.length; i++) {
    			
    			searchRes[i].setVideoPath(gcsService.getVideobyVIDEOtable(searchRes[i].getUploadFileName()));
    			
    			int videoID = searchRes[i].getVideoID();
    			
    			if (videoDAO.findVideoinList(videoID, listID) != null) { //if searchres already exists in a video list
    				
    				searchRes[i].setInVideoList(1);
    				searchRes[i].setListID(listID);
    				
    				if(recommendDAO.getRecommendedVideo(videoID, listID, username) != null) {
    					searchRes[i].setRecommended(1);
    				}
    				
    				else if(recommendDAO.getDisrecommendedVideo(videoID, listID, username) != null) {
    					searchRes[i].setDisrecommended(-1);
    				}
    				
    				
    				searchRes[i].setRecCount(recommendDAO.recCount(videoID, listID));
    				searchRes[i].setDisrecCount(recommendDAO.disrecCount(videoID, listID));
    				
    			}
    			
    			searchRes[i].setLike(videolikeDAO.likeCount(searchRes[i].getVideoID()));
    			searchRes[i].setDislike(videolikeDAO.dislikeCount(searchRes[i].getVideoID()));

    		}
        	
        	return searchRes;
        	
    	}
    	
    	else if (orderBy.equals("like")) {
    		
    		order = "like";
    		
        	VideoDTO[] searchRes = videoDAO.searchVideobyTitle(videoTitle, order, limit, offset);
        	
    		//List<String> fileName = videoDAO.getURLfromTitle(videoTitle);

    		for(int i = 0; i < searchRes.length; i++) {
    			
    			searchRes[i].setVideoPath(gcsService.getVideobyVIDEOtable(searchRes[i].getUploadFileName()));
    			
    			int videoID = searchRes[i].getVideoID();
    			
    			if (videoDAO.findVideoinList(videoID, listID) != null) { //if searchres already exists in a video list
    				
    				searchRes[i].setInVideoList(1);
    				searchRes[i].setListID(listID);
    				
    				if(recommendDAO.getRecommendedVideo(videoID, listID, username) != null) {
    					searchRes[i].setRecommended(1);
    				}
    				
    				else if(recommendDAO.getDisrecommendedVideo(videoID, listID, username) != null) {
    					searchRes[i].setDisrecommended(-1);
    				}
    				
    				
    				searchRes[i].setRecCount(recommendDAO.recCount(videoID, listID));
    				searchRes[i].setDisrecCount(recommendDAO.disrecCount(videoID, listID));
    				
    			}
    			
    			searchRes[i].setLike(videolikeDAO.likeCount(searchRes[i].getVideoID()));
    			searchRes[i].setDislike(videolikeDAO.dislikeCount(searchRes[i].getVideoID()));

    		}
        	
        	return searchRes;
    	}
    	
    	else {
    		
    		return null;
    		
    	}

    	
    }

    
    
	//search video by title from videolist
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/listID/{listID}/user/{username}/search/title/{videoTitle}/{orderBy}", method = RequestMethod.GET)
	public VideoDTO[] searchVideoFromvideoList(@PathVariable("listID") final int listID, @PathVariable("videoTitle") final String videoTitle,
			@PathVariable("username") final String username, @PathVariable("orderBy") final String orderBy,
			@RequestParam(required = false, defaultValue = "0") int offset, @RequestParam(required = false, defaultValue = "100") int limit) throws Exception {
		
		String order;
		
		if (orderBy.equals("newest")) {

			order = "videoDate";
			
			VideoDTO[] res = videoDAO.searchVideobyTitleformList(videoTitle, listID, order, limit, offset);
			
			for(int i = 0; i < res.length; i++) {
				
				int videoID = res[i].getVideoID();
				
				res[i].setVideoPath(gcsService.getVideobyVIDEOtable(res[i].getUploadFileName()));
				
				res[i].setLike(0);
				res[i].setDislike(0);
				
				res[i].setRecommended(0);
				res[i].setDisrecommended(0);
				
				if (videolikeDAO.selectLikeVideo(videoID, username) != null) {
					res[i].setLike(1);
				}
				
				else if (videolikeDAO.selectDislikeVideo(videoID, username) != null) {
					res[i].setDislike(-1);
				}
				
				if (recommendDAO.getRecommendedVideo(videoID, listID, username) != null) {
					res[i].setRecommended(1);
				}
				else if (recommendDAO.getDisrecommendedVideo(videoID, listID, username) != null) {
					res[i].setDisrecommended(-1);
				}
				System.out.println(videoID);
				System.out.println(listID);
				res[i].setRecCount(recommendDAO.recCount(videoID, listID));
				res[i].setDisrecCount(recommendDAO.disrecCount(videoID, listID));

			}
			
			return res;
		}
		
		else if (orderBy.equals("like")) {
			
			order = "like";
			
			VideoDTO[] res = videoDAO.searchVideobyTitleformList(videoTitle, listID, order, limit, offset);
			
			for(int i = 0; i < res.length; i++) {
				
				int videoID = res[i].getVideoID();
				
				res[i].setVideoPath(gcsService.getVideobyVIDEOtable(res[i].getUploadFileName()));
				
				res[i].setLike(0);
				res[i].setDislike(0);
				
				res[i].setRecommended(0);
				res[i].setDisrecommended(0);
				
				if (videolikeDAO.selectLikeVideo(videoID, username) != null) {
					res[i].setLike(1);
				}
				
				else if (videolikeDAO.selectDislikeVideo(videoID, username) != null) {
					res[i].setDislike(-1);
				}
				
				if (recommendDAO.getRecommendedVideo(videoID, listID, username) != null) {
					res[i].setRecommended(1);
				}
				else if (recommendDAO.getDisrecommendedVideo(videoID, listID, username) != null) {
					res[i].setDisrecommended(-1);
				}
				
				res[i].setRecCount(recommendDAO.recCount(videoID, listID));
				res[i].setDisrecCount(recommendDAO.disrecCount(videoID, listID));

			}
			
			return res;
		}
		
		else {
			return null;
		}

		
	}

}
