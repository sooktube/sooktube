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

import com.SOOKTUBE.dao.ListLikeDAO;
import com.SOOKTUBE.dao.VideoListDAO;
import com.SOOKTUBE.model.ListLikeDTO;
import com.SOOKTUBE.model.VideoListDTO;
import com.SOOKTUBE.service.GCSService;

import lombok.RequiredArgsConstructor;

@RestController
@EnableAutoConfiguration
@RequiredArgsConstructor
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class ListLikeController {
	
	 private final GCSService gcsService;
	
	@Autowired
	ListLikeDAO listlikeDAO;
	
	@Autowired
	VideoListDAO videolistDAO;

	//user likes a video list
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/likeList/{listID}/{username}", method = RequestMethod.POST)
	public int[] userLikesList(@PathVariable("listID") final int listID, @PathVariable("username") final String username) throws Exception {
		
		if(listlikeDAO.selectDislikeList(listID, username) != null) {
			listlikeDAO.revertDislike(listID, username);
		}
		
		
		listlikeDAO.likeaList(listID, username);
		
		int[] listlike = new int[2];
		
		listlike[0] = listlikeDAO.countLike(listID);
		listlike[1] = listlikeDAO.countDislike(listID);
		
		return listlike;
		
	}
	
	//revert like
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/revert/like/{listID}/{username}", method = RequestMethod.DELETE)
	public int[] revertLike(@PathVariable("listID") final int listID, @PathVariable("username") final String username) throws Exception {
		
		listlikeDAO.revertLike(listID, username);
		
		int[] listlike = new int[2];
		
		listlike[0] = listlikeDAO.countLike(listID);
		listlike[1] = listlikeDAO.countDislike(listID);
		
		return listlike;
		
	}
	
	//user dislikes a video list
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/dislikeList/{listID}/{username}", method = RequestMethod.POST)
	public int[] userDislikesList(@PathVariable("listID") final int listID, @PathVariable("username") final String username) throws Exception {
		
		if (listlikeDAO.selectLikeList(listID, username) != null) {
			listlikeDAO.revertLike(listID, username);
		}
		
		listlikeDAO.dislikeaList(listID, username);
		
		int[] listlike = new int[2];
		
		listlike[0] = listlikeDAO.countLike(listID);
		listlike[1] = listlikeDAO.countDislike(listID);
		
		return listlike;
		
	}
	
	//revert dislike
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/revert/dislike/{listID}/{username}", method = RequestMethod.DELETE)
	public int[] revertDislike(@PathVariable("listID") final int listID, @PathVariable("username") final String username) throws Exception {
		
		listlikeDAO.revertDislike(listID, username);

		
		int[] listlike = new int[2];
		
		listlike[0] = listlikeDAO.countLike(listID);
		listlike[1] = listlikeDAO.countDislike(listID);
		
		return listlike;
		
	}
	
	//count videoList's like, dislike 
	@CrossOrigin
	@RequestMapping(value = "/api/like/dislike/count/listID/{listID}", method = RequestMethod.GET)
	public int[] countLike(@PathVariable("listID") final int listID) throws Exception {
		
		int[] count = new int[2];
		
		int like = listlikeDAO.countLike(listID);
		int dislike = listlikeDAO.countDislike(listID);
		
		count[0] = like;
		count[1] = dislike;
		
		return count;
		
	}
	
	//get liked list by user
	@CrossOrigin
	@RequestMapping(value = "/api/liked/list/byUser/{username}", method = RequestMethod.GET)
	public VideoListDTO[] likedListbyUser(@PathVariable("username") final String username) throws Exception {
		
		List<Integer> listID = listlikeDAO.getlikedListbyUser(username);
		
		VideoListDTO[] res = new VideoListDTO[listID.size()];
		
		for(int i = 0; i < listID.size(); i++) {
			
			VideoListDTO[] list = videolistDAO.getVideoListbyID(listID.get(i));
			
			res[i] = list[0];
			
			res[i].setLike(listlikeDAO.countLike(listID.get(i)));
			res[i].setDislike(listlikeDAO.countDislike(listID.get(i)));
			
			res[i].setUrl(gcsService.getVideobyVIDEOtable(res[i].getThumbnail()));
			
		}
		
		return res;
	}
	
	//get disliked list by user
	@CrossOrigin
	@RequestMapping(value = "/api/disliked/list/byUser/{username}", method = RequestMethod.GET)
	public VideoListDTO[] dislikedListbyUser(@PathVariable("username") final String username) throws Exception {
		
		List<Integer> listID = listlikeDAO.getdislikedListbyUser(username);
		
		VideoListDTO[] res = new VideoListDTO[listID.size()];
		
		for(int i = 0; i < listID.size(); i++) {
			
			VideoListDTO[] list = videolistDAO.getVideoListbyID(listID.get(i));
			
			res[i] = list[0];
			
			res[i].setLike(listlikeDAO.countLike(listID.get(i)));
			res[i].setDislike(listlikeDAO.countDislike(listID.get(i)));
			
			res[i].setUrl(gcsService.getVideobyVIDEOtable(res[i].getThumbnail()));
			
		}
		
		return res;
		
	}
}
