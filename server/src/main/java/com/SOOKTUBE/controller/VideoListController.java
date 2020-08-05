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

import com.SOOKTUBE.dao.RecommendDAO;
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
	
	@Autowired
	private RecommendDAO recommendDAO;
	
	//get all videoList from DB
	@CrossOrigin
	@RequestMapping(value = "/api/video/list", method = RequestMethod.GET)
    public VideoListDTO[] getVideoList() throws Exception {
    	
    	VideoListDTO[] res = videoListDAO.getVideoList();
    	
    	return res;
    }
	
	
	  //get video list
	  @CrossOrigin
	  @RequestMapping(value = "/api/videolist/desc/thumbnail/{listID}", method = RequestMethod.GET)
	  public VideoListDTO[] getVideolistbyID(@PathVariable("listID") final int listID) throws Exception {
		  
		  VideoListDTO[] res = videoListDAO.getVideoListbyID(listID);

		  return res;
	  }
	
	
	//get desc about videolist from db
	//modified
	  @CrossOrigin
	  @RequestMapping(value = "/api/video/list/ID/{listID}", method=RequestMethod.GET) 
	  public VideoListDTO getVideoListwithID(@PathVariable("listID") final int listID) throws Exception {
	  
	  VideoListDTO res = videoListDAO.getListbyID(listID);
	  
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
	
	
	//search video list by its title
	//modified
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/search/name/{listName}", method = RequestMethod.GET)
	public VideoListDTO[] searchListbyName(@PathVariable("listName") final String listName) throws Exception {
		

		VideoListDTO[] searchRes = videoListDAO.searchListbyTitle(listName);
		

		for(int i = 0; i < searchRes.length; i++) {
			
			searchRes[i].setUrl(gcsService.getVideobyVIDEOtable(searchRes[i].getThumbnail()));
		}
	
		return searchRes;
		}
	
	


	
	
	//user recommends a video videoList
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/like/{listID}/{videoID}/{username}", method = RequestMethod.PUT)
	public int[] likeaList(@PathVariable("listID") final int listID, @PathVariable("videoID") final int videoID, 
			@PathVariable("username") final String username) throws Exception {
		

		
		VideoListDTO videolist = videoListDAO.getVideoListbyVideoID(videoID, listID);
		
		int[] res = new int[3];
		
		if (username.equals(videoListDAO.getUsernameofList(listID).toString())) {
			videoListDAO.editLikeSet5(videolist);
			res[0] = 10;
			res[1] = videolist.getDislike();
			

		}
		
			else {
			videoListDAO.editLike(videolist);
			
			if(recommendDAO.getRecommendedVideo(videoID, listID, username) == null) {
				
				recommendDAO.recommendVideoInList(videoID, listID, username);
			}
			
			//return count(like) and count(like+dislike)
			res[0] = videolist.getLike() + 1;
			res[1] = videolist.getDislike();
			
			if(res[0] + res[1] < 0) {
				
				videoListDAO.deleteVideoFromlist(videoID, listID);
				res[2] = -1;
				
			}
			
			
		}
		
		return res;
	}
	
	//user reverts recommending video in a videolist
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/revert/like/{listID}/{videoID}/{username}", method = RequestMethod.PUT)
	public int[] revertRecommend(@PathVariable("listID") final int listID, @PathVariable("videoID") final int videoID, 
			@PathVariable("username") final String username) throws Exception {
		
		int[] res = new int[3];
		
		if (recommendDAO.getRecommendedVideo(videoID, listID, username) != null) {
			recommendDAO.disrecommendVideoInList(videoID, listID, username);
		}
		
		VideoListDTO videolist = videoListDAO.getVideoListbyVideoID(videoID, listID);
		
		videoListDAO.revertRecommend(videolist);
		
		res[0] = videolist.getLike() - 1;
		res[1] = videolist.getDislike();
		
		if(res[0] + res[1] < 0) {
			
			videoListDAO.deleteVideoFromlist(videoID, listID);
			res[2] = -1;
			
		}
		
		return res;
		
	}
	

	
	//user disrecommends video in a videoList
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/dislike/{listID}/{videoID}/{username}", method = RequestMethod.PUT)
	public int[] dislikeaList(@PathVariable("listID") final int listID, @PathVariable("videoID") final int videoID,
			@PathVariable("username") final String username) throws Exception {
		
		VideoListDTO videolist = videoListDAO.getVideoListbyVideoID(videoID, listID);
		
		int[] res = new int[3];
		
		videoListDAO.editDislike(videolist);
		
		if (recommendDAO.getRecommendedVideo(videoID, listID, username) != null) {
			
			recommendDAO.disrecommendVideoInList(videoID, listID, username);
			
		}
		
	
		//return count(like) and count(like+dislike)
		res[0] = videolist.getLike();
		res[1] = videolist.getDislike() - 1;
		
		if(res[0] + res[1] < 0) {
			
			System.out.println("deleted");
			
			videoListDAO.deleteVideoFromlist(videoID, listID);
			res[2] = -1;
			
		}
		
		return res;
	}
	
	//user reverts disrecommending video from videolist
	@CrossOrigin
	@RequestMapping(value="/api/video/list/revert/dislike/{listID}/{videoID}/{username}", method=RequestMethod.PUT)
	public int[] revertDisrecommend(@PathVariable("listID") final int listID, @PathVariable("videoID") final int videoID,
			@PathVariable("username") final String username) throws Exception {
		
		int[] res = new int[3];
		
		if(recommendDAO.getRecommendedVideo(videoID, listID, username) != null) {
			recommendDAO.disrecommendVideoInList(videoID, listID, username);
		}
		
		VideoListDTO videolist = videoListDAO.getVideoListbyVideoID(videoID, listID);
		
		videoListDAO.revertDisrecommend(videolist);
		
		res[0] = videolist.getLike();
		res[1] = videolist.getDislike() + 1;
		
		if(res[0] + res[1] < 0) {
			
			videoListDAO.deleteVideoFromlist(videoID, listID);
			res[2] = -1;
			
		}
		
		return res;
		
	}
	
	
}
