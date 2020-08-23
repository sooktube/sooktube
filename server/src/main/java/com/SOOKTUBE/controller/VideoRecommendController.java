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
import com.SOOKTUBE.dao.VideoRecommendDAO;
import com.SOOKTUBE.model.RecommendUploaderDTO;
import com.SOOKTUBE.model.VideoRecommendDTO;
import com.SOOKTUBE.service.GCSService;

import lombok.RequiredArgsConstructor;

@RestController
@EnableAutoConfiguration
@RequiredArgsConstructor
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class VideoRecommendController {
	
	private final GCSService gcsService;
	
	@Autowired
	private VideoListDAO videolistDAO;
	
	@Autowired
	private VideoRecommendDAO videorecommendDAO;
	
	//이 동영상이 어떤 재생목록에 추가 되어있다면 그 재생목록의 다른 영상들
	//if a video is in a video list -> the other videos in that list
	@CrossOrigin
	@RequestMapping(value = "/api/video/inlist/{videoID}", method = RequestMethod.GET)
	public VideoRecommendDTO[] getlistinvideo(@PathVariable("videoID") final int videoID) throws Exception {
		
		VideoRecommendDTO[] res = videorecommendDAO.getVideoandList(videoID);
		
		int size = res.length;
		
		for(int i = 0; i < size; i++) {
			
			res[i].setVideoPath(gcsService.getVideobyVIDEOtable(res[i].getUploadFileName()));
		}
		
		return res;
		
		
		
	}
	
	//업로더가 올린 다른 영상들
	//recommend other videos uploaded by user
	@CrossOrigin
	@RequestMapping(value = "/api/video/recommend/byUploader/{videoID}", method = RequestMethod.GET)
	public RecommendUploaderDTO[] getVideoByUploader(@PathVariable("videoID") final int videoID) throws Exception {
		
		RecommendUploaderDTO[] res = videorecommendDAO.recommendVideoByUploader(videoID);
		
		int size = res.length;
		
		for(int i = 0; i < size; i++) {
			
			String fileName = res[i].getUploadFileName();
			
			String url = gcsService.getVideobyVIDEOtable(fileName);
			
			res[i].setVideoPath(url);
			
		}
		
		return res;
	}
	
	

}
