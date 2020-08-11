package com.SOOKTUBE.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.ListLikeDAO;
import com.SOOKTUBE.dao.ListRecommendDAO;
import com.SOOKTUBE.dao.RecommendDAO;
import com.SOOKTUBE.dao.VideoLikeDAO;
import com.SOOKTUBE.dao.VideoListDAO;
import com.SOOKTUBE.model.ListRecommendDTO;
import com.SOOKTUBE.model.RecommendDTO;
import com.SOOKTUBE.service.GCSService;

import lombok.RequiredArgsConstructor;


@RestController
@EnableAutoConfiguration
@RequiredArgsConstructor
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class ListRecommendController {
	
	 private final GCSService gcsService;
		
	@Autowired
	private VideoListDAO videoListDAO;
	
	@Autowired
	private RecommendDAO recommendDAO;
	
	@Autowired
	private ListRecommendDAO listrecommendDAO;
	
	@Autowired
	private ListLikeDAO listlikeDAO;
	
	@Autowired
	private VideoLikeDAO videolikeDAO;

	
	//get recommended list by user
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/recommended/byUser/{username}", method = RequestMethod.GET)
	public ListRecommendDTO[] getRecommendedbyUSer(@PathVariable("username") final String username) throws Exception {
		
		RecommendDTO[] recommended = recommendDAO.getRecommendedbyUser(username);
		
		ListRecommendDTO[] res = new ListRecommendDTO[recommended.length];
		
		for(int i = 0; i < recommended.length; i ++) {
			
			int listID = recommended[i].getListID();
			int videoID = recommended[i].getVideoID();
			
			ListRecommendDTO video = listrecommendDAO.selectRecommendedVideo(listID, videoID);
			
			res[i] = video;
			
			res[i].setListLike(listlikeDAO.countLike(listID));
			res[i].setListDislike(listlikeDAO.countDislike(listID));
			
			res[i].setVideoLike(videolikeDAO.likeCount(videoID));
			res[i].setVideoDislike(videolikeDAO.dislikeCount(videoID));
			
			res[i].setUrl(gcsService.getVideobyVIDEOtable(res[i].getThumbnail()));
			res[i].setVideoPath(gcsService.getVideobyVIDEOtable(res[i].getUploadFileName()));
			
			res[i].setRecCount(recommendDAO.recCount(videoID, listID));
			res[i].setDisrecCount(recommendDAO.disrecCount(videoID, listID));
			
		}
		
		return res;
		

	}

}
