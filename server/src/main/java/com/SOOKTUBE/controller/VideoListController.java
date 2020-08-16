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
import com.SOOKTUBE.dao.RecommendDAO;
import com.SOOKTUBE.dao.VideoListDAO;
import com.SOOKTUBE.model.RecommendDTO;
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
	
	@Autowired
	private ListLikeDAO listlikeDAO;
	
	//get all videoList from DB
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/{username}", method = RequestMethod.GET)
    public VideoListDTO[] getVideoList(@PathVariable("username") final String username) throws Exception {
    	
    	VideoListDTO[] res = videoListDAO.getVideoList();
    	
    	for(int i = 0; i < res.length; i++) {
    		
    		int listID = res[i].getListID();
    		
    		if(listlikeDAO.selectLikeList(listID, username) != null) {
    			res[i].setLike(1);
    		}
    		
    		else if(listlikeDAO.selectDislikeList(listID, username) != null) {
    			res[i].setDislike(-1);
    		}
    		
    		res[i].setUrl(gcsService.getVideobyVIDEOtable(res[i].getThumbnail()));
    		
    	}
    	
    	return res;
    }
	
	
	  //get video list
	  @CrossOrigin
	  @RequestMapping(value = "/api/videolist/desc/thumbnail/{listID}/{username}", method = RequestMethod.GET)
	  public VideoListDTO[] getVideolistbyID(@PathVariable("listID") final int listID, @PathVariable("username") final String username) throws Exception {
		  
		  VideoListDTO[] res = videoListDAO.getVideoListbyID(listID);
		  
		  for (int i = 0; i< res.length; i++) {
			  
	    		if(listlikeDAO.selectLikeList(listID, username) != null) {
	    			res[i].setLike(1);
	    		}
	    		
	    		else if(listlikeDAO.selectDislikeList(listID, username) != null) {
	    			res[i].setDislike(-1);
	    		}
	    		
	    		res[i].setUrl(gcsService.getVideobyVIDEOtable(res[i].getThumbnail()));
		  }

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
	
	//update video list desc
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/update/{listID}", method = RequestMethod.PUT)
	public VideoListDTO[] updatelistDesc(@PathVariable("listID") final int listID, VideoListDTO videolist) throws Exception {
		
		videolist.setListID(listID);
		
		VideoListDTO[] newlist = videoListDAO.getVideoListbyID(listID);
		
		for(int i = 0; i < newlist.length; i++) {
			
			newlist[i].setListName(videolist.getListName());
			newlist[i].setListDesc(videolist.getListDesc());
			newlist[i].setThumbnail(videolist.getThumbnail());
			newlist[i].setIsPublic(videolist.getIsPublic());
			
			newlist[i].setLike(listlikeDAO.countLike(listID));
			newlist[i].setDislike(listlikeDAO.countDislike(listID));
			
			newlist[i].setUrl(gcsService.getVideobyVIDEOtable(videolist.getThumbnail()));
			
			videoListDAO.updatelistDesc(newlist[i]);
			
		}
		
		return newlist;
	}
	
	
	//delete video list
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/delete/{listID}", method = RequestMethod.DELETE)
	public String deleteVideoList(@PathVariable("listID") final int listID) throws Exception {
		
		videoListDAO.deleteVideolist(listID);
		
		return "deleted";
		
	}
	
	
	//search video list by its title
	//modified
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/search/name/{listName}", method = RequestMethod.GET)
	public VideoListDTO[] searchListbyName(@PathVariable("listName") final String listName) throws Exception {
		

		VideoListDTO[] searchRes = videoListDAO.searchListbyTitle(listName);
		

		for(int i = 0; i < searchRes.length; i++) {
			
			searchRes[i].setUrl(gcsService.getVideobyVIDEOtable(searchRes[i].getThumbnail()));
			
			searchRes[i].setLike(listlikeDAO.countLike(searchRes[i].getListID()));
			searchRes[i].setDislike(listlikeDAO.countDislike(searchRes[i].getListID()));
			
		}
	
		return searchRes;
		}
	
	


	
	
	//user recommends a video in videoList
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/like/{listID}/{videoID}/{username}", method = RequestMethod.POST)
	public int[] likeaList(@PathVariable("listID") final int listID, @PathVariable("videoID") final int videoID, 
			@PathVariable("username") final String username) throws Exception {
		
		VideoListDTO videolist = videoListDAO.getVideoListbyVideoID(videoID, listID);
		
		int[] res = new int[2];

		
		if(recommendDAO.getDisrecommendedVideo(videoID, listID, username) != null) {
			recommendDAO.revertDisrecommend(videoID, listID, username);
			videoListDAO.revertDisrecommend(videolist);
		}
		
		

		
		if (username.equals(videoListDAO.getUsernameofList(listID).toString())) {
			videoListDAO.editLikeSet5(videolist);
			recommendDAO.recommendVideoInList(videoID, listID, username);
			res[0] = 10;
			res[1] = videolist.getDislike();
			

		}
		
			else {
			
			
			if(recommendDAO.getRecommendedVideo(videoID, listID, username) == null) {
				
				videoListDAO.editLike(videolist);
				
				recommendDAO.recommendVideoInList(videoID, listID, username);
			}
			
			//return count(like) and count(like+dislike)
			VideoListDTO newvideolist = videoListDAO.getVideoListbyVideoID(videoID, listID);
			
			res[0] = newvideolist.getLike();
			res[1] = newvideolist.getDislike();
			
			/*
			 * if(res[0] + res[1] < 0) {
			 * 
			 * videoListDAO.deleteVideoFromlist(videoID, listID); res[2] = -1;
			 * 
			 * }
			 */
			
			
		}
		
		return res;
	}
	
	//user reverts recommending video in a videolist
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/revert/like/{listID}/{videoID}/{username}", method = RequestMethod.DELETE)
	public int[] revertRecommend(@PathVariable("listID") final int listID, @PathVariable("videoID") final int videoID, 
			@PathVariable("username") final String username) throws Exception {
		
		int[] res = new int[2];
		

		
		VideoListDTO videolist = videoListDAO.getVideoListbyVideoID(videoID, listID);
		
		if (recommendDAO.getRecommendedVideo(videoID, listID, username) != null) {
			recommendDAO.revertRecommend(videoID, listID, username);
			videoListDAO.revertRecommend(videolist);
		}
		
		//videoListDAO.revertRecommend(videolist);
		
		//get new videolist
		VideoListDTO newvideolist = videoListDAO.getVideoListbyVideoID(videoID, listID);
		
		res[0] = newvideolist.getLike();
		res[1] = newvideolist.getDislike();
		
		/*
		 * if(res[0] + res[1] < 0) {
		 * 
		 * videoListDAO.deleteVideoFromlist(videoID, listID); res[2] = -1;
		 * 
		 * }
		 */
		
		return res;
		
	}
	

	
	//user disrecommends video in a videoList
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/dislike/{listID}/{videoID}/{username}", method = RequestMethod.POST)
	public int[] dislikeaList(@PathVariable("listID") final int listID, @PathVariable("videoID") final int videoID,
			@PathVariable("username") final String username) throws Exception {
		
		VideoListDTO videolist = videoListDAO.getVideoListbyVideoID(videoID, listID);
		
		int[] res = new int[2];
		
		if(recommendDAO.getRecommendedVideo(videoID, listID, username) != null) {
			recommendDAO.revertRecommend(videoID, listID, username);
			videoListDAO.revertRecommend(videolist);
		}
		


		
		if (recommendDAO.getDisrecommendedVideo(videoID, listID, username) == null) {
			
			videoListDAO.editDislike(videolist);
			recommendDAO.disrecommendVideoInList(videoID, listID, username);
			
		}
		
	
		//get new videolist
		VideoListDTO newvideolist = videoListDAO.getVideoListbyVideoID(videoID, listID);
		
		res[0] = newvideolist.getLike();
		res[1] = newvideolist.getDislike();
		
		/*
		 * if(res[0] + res[1] < 0) {
		 * 
		 * System.out.println("deleted");
		 * 
		 * videoListDAO.deleteVideoFromlist(videoID, listID); res[2] = -1;
		 * 
		 * }
		 */

		
		return res;
	}
	
	//user reverts disrecommending video from videolist
	@CrossOrigin
	@RequestMapping(value="/api/video/list/revert/dislike/{listID}/{videoID}/{username}", method=RequestMethod.DELETE)
	public int[] revertDisrecommend(@PathVariable("listID") final int listID, @PathVariable("videoID") final int videoID,
			@PathVariable("username") final String username) throws Exception {
		
		int[] res = new int[2];
		

		
		VideoListDTO videolist = videoListDAO.getVideoListbyVideoID(videoID, listID);
		
		if(recommendDAO.getDisrecommendedVideo(videoID, listID, username) != null) {
			recommendDAO.revertDisrecommend(videoID, listID, username);
			videoListDAO.revertDisrecommend(videolist);
		}
		//videoListDAO.revertDisrecommend(videolist);
		//get new videolist
		VideoListDTO newvideolist = videoListDAO.getVideoListbyVideoID(videoID, listID);
		
		res[0] = newvideolist.getLike();
		res[1] = newvideolist.getDislike();
		
		/*
		 * if(res[0] + res[1] < 0) {
		 * 
		 * videoListDAO.deleteVideoFromlist(videoID, listID); res[2] = -1;
		 * 
		 * }
		 */
		
		return res;
		
	}
	

	
	//get video list by username
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/by/username/{username}", method = RequestMethod.GET)
	public VideoListDTO[] getlistbyusername(@PathVariable("username") final String username) throws Exception {
		
		VideoListDTO[] res = videoListDAO.getVideoListbyUser(username);
		
		for(int i = 0; i < res.length; i++) {
			
			res[i].setLike(listlikeDAO.countLike(res[i].getListID()));
			res[i].setDislike(listlikeDAO.countDislike(res[i].getListID()));
			
			res[i].setUrl(gcsService.getVideobyVIDEOtable(res[i].getThumbnail()));
			
		}
		
		return res;
	}
	
	
}
