package com.SOOKTUBE.controller;

import java.util.List;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.ListLikeDAO;
import com.SOOKTUBE.dao.RecommendDAO;
import com.SOOKTUBE.dao.VideoDAO;
import com.SOOKTUBE.dao.VideoLikeDAO;
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
	
	@Autowired
	private ListLikeDAO listlikeDAO;
	
	@Autowired
	private VideoDAO videoDAO;
	
	@Autowired
	private VideoLikeDAO videoLikeDAO;
	
	//get all videoList from DB
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/{orderBy}", method = RequestMethod.GET)
    public VideoListDTO[] getVideoList(@PathVariable("orderBy") final String orderBy,
    		@RequestParam(required = false, defaultValue = "0") int offset, @RequestParam(required = false, defaultValue = "100") int limit) throws Exception {
    	
		String order;
		
		if (orderBy.equals("newest")) {
			
			order = "listID";
			
			VideoListDTO[] res = videoListDAO.getVideoListOrderby(limit, offset, order);
			
	    	for(int i = 0; i < res.length; i++) {
	    		
	    		int listID = res[i].getListID();
	    		
	    		res[i].setLike(listlikeDAO.countLike(listID));
	    		res[i].setDislike(listlikeDAO.countDislike(listID));
	    		
	    		res[i].setUrl(gcsService.getVideobyVIDEOtable(res[i].getThumbnail()));
	    		
	    	}
	    	
	    	return res;
		}
		
		else if(orderBy.equals("like")) {
			
			order = "like";
			
			VideoListDTO[] res = videoListDAO.getVideoListOrderby(limit, offset, order);
			
	    	for(int i = 0; i < res.length; i++) {
	    		
	    		int listID = res[i].getListID();
	    		
	    		res[i].setLike(listlikeDAO.countLike(listID));
	    		res[i].setDislike(listlikeDAO.countDislike(listID));
	    		
	    		res[i].setUrl(gcsService.getVideobyVIDEOtable(res[i].getThumbnail()));
	    		
	    	}

    		
    		return res;
		}
		
		else {
			
			return null;
		}
		
		
		
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
	@RequestMapping(value = "/api/video/list/search/name/{listName}/{orderBy}", method = RequestMethod.GET)
	public VideoListDTO[] searchListbyName(@PathVariable("listName") final String listName, 
			@PathVariable("orderBy") final String orderBy,
			@RequestParam(required = false, defaultValue = "0") int offset, @RequestParam(required = false, defaultValue = "100") int limit) throws Exception {
		
		String order;
		
		if (orderBy.equals("newest")) {
			
			order = "listID";
			
			VideoListDTO[] searchRes = videoListDAO.searchListbyTitle(listName, order, limit, offset);
			

			for(int i = 0; i < searchRes.length; i++) {
				
				searchRes[i].setUrl(gcsService.getVideobyVIDEOtable(searchRes[i].getThumbnail()));
				
				searchRes[i].setLike(listlikeDAO.countLike(searchRes[i].getListID()));
				searchRes[i].setDislike(listlikeDAO.countDislike(searchRes[i].getListID()));
				
			}
		
			return searchRes;
			
		}
		
		else if (orderBy.equals("like")) {
			
			order = "like";
			
			VideoListDTO[] searchRes = videoListDAO.searchListbyTitle(listName, order, limit, offset);
			

			for(int i = 0; i < searchRes.length; i++) {
				
				searchRes[i].setUrl(gcsService.getVideobyVIDEOtable(searchRes[i].getThumbnail()));
				
				searchRes[i].setLike(listlikeDAO.countLike(searchRes[i].getListID()));
				searchRes[i].setDislike(listlikeDAO.countDislike(searchRes[i].getListID()));
				
			}
		
			return searchRes;
		}
		
		else {
			 return null;
		}


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
			
			if(recommendDAO.getRecommendedVideo(videoID, listID, username) == null) {
				
			videoListDAO.editLikeSet5(videolist);
			recommendDAO.recommendVideoInList(videoID, listID, username);
			
		}
			
			VideoListDTO newvideolist = videoListDAO.getVideoListbyVideoID(videoID, listID);
			
			res[0] = newvideolist.getLike();
			res[1] = newvideolist.getDislike();
			

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
	@RequestMapping(value = "/api/video/list/by/username/{username}/{orderBy}", method = RequestMethod.GET)
	public Object[] getlistbyusername(@PathVariable("username") final String username
			, @PathVariable("orderBy") final String orderBy,
			@RequestParam(required = false, defaultValue = "0") int offset, @RequestParam(required = false, defaultValue = "100") int limit) throws Exception {
		
		String order;
		
		if(orderBy.equals("newest")) {
			
			Object withTotal[]=new Object[2];
			
			order = "listID";
			
			VideoListDTO[] res = videoListDAO.getVideoListbyUser(username, order, limit, offset);
			VideoListDTO[] res1 = videoListDAO.getVideoListbyUser(username, order, 100, 0);
			
			for(int i = 0; i < res.length; i++) {
				
				res[i].setLike(listlikeDAO.countLike(res[i].getListID()));
				res[i].setDislike(listlikeDAO.countDislike(res[i].getListID()));
				
				res[i].setUrl(gcsService.getVideobyVIDEOtable(res[i].getThumbnail()));

				
			}
			
			withTotal[0] = res1.length;
			withTotal[1] = res;
			
			return withTotal;
		}
		
		else if (orderBy.equals("like")) {
			
			Object withTotal[]=new Object[2];
			
			order = "like";
			
			VideoListDTO[] res = videoListDAO.getVideoListbyUser(username, order, limit, offset);
			VideoListDTO[] res1 = videoListDAO.getVideoListbyUser(username, order, 100, 0);
			
			for(int i = 0; i < res.length; i++) {
				
				res[i].setLike(listlikeDAO.countLike(res[i].getListID()));
				res[i].setDislike(listlikeDAO.countDislike(res[i].getListID()));
				
				res[i].setUrl(gcsService.getVideobyVIDEOtable(res[i].getThumbnail()));
				
			}		
			
			withTotal[0] = res1.length;
			withTotal[1] = res;
			
			return withTotal;
			
		}
		
		else {
			
			return null;
				
		}
		
		
		

	}
	
	
	//user deletes video from video list when it is created by {username}
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/delete/video/{username}/{listID}/{videoID}", method = RequestMethod.DELETE)
	public VideoDTO[] deleteVideoFromVideolist(@PathVariable("username") final String username, @PathVariable("listID") final int listID,
			@PathVariable("videoID") final int videoID) throws Exception {
		
		if (username.equals(videoListDAO.getUsernameofList(listID).toString())) {
			
			videoListDAO.deleteVideoFromlist(videoID, listID);
		}
		
    	List<String> fileName = videoListDAO.getFileNamebylistID(listID);
		
		VideoDTO[] res = videoDAO.getDescbyListID(listID);

		
		for(int i = 0; i < res.length; i++) {
			
			int newvideoID = res[i].getVideoID();
			
			res[i].setVideoPath(gcsService.getVideobyVIDEOtable(fileName.get(i)));
			
			res[i].setLike(0);
			res[i].setDislike(0);
			
			res[i].setRecommended(0);
			res[i].setDisrecommended(0);
			
			if (videoLikeDAO.selectLikeVideo(newvideoID, username) != null) {
				res[i].setLike(1);
			}
			
			else if (videoLikeDAO.selectDislikeVideo(newvideoID, username) != null) {
				res[i].setDislike(-1);
			}
			
			if (recommendDAO.getRecommendedVideo(newvideoID, listID, username) != null) {
				res[i].setRecommended(1);
			}
			else if (recommendDAO.getDisrecommendedVideo(newvideoID, listID, username) != null) {
				res[i].setDisrecommended(-1);
			}

			res[i].setRecCount(recommendDAO.recCount(newvideoID, listID));
			res[i].setDisrecCount(recommendDAO.disrecCount(newvideoID, listID));

		}
		
		
		
		return res;
		
	}
		
	
	
	
	
}
