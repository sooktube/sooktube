
package com.SOOKTUBE.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.RecommendDAO;
import com.SOOKTUBE.dao.VideoDAO;
import com.SOOKTUBE.dao.VideoLikeDAO;
import com.SOOKTUBE.dao.VideoListDAO;
import com.SOOKTUBE.model.UploadReqDto;
import com.SOOKTUBE.model.VideoDTO;
import com.SOOKTUBE.service.GCSService;

import lombok.RequiredArgsConstructor;



@RestController
@CrossOrigin
@RequiredArgsConstructor
@EnableAutoConfiguration
public class GCSController {

// private final S3Service s3Service;
	
 private final GCSService gcsService;
// private final VideoDAO videoDAO;
 
 @Autowired
 private VideoDAO videoDAO;
 
 @Autowired
 private VideoListDAO videoListDAO;
 
 @Autowired
 private VideoLikeDAO videoLikeDAO;
 
 @Autowired
 private RecommendDAO recommendDAO;
 
	/*
	 * @Autowired private VideoRepository videorepository;
	 */

 



//GSC 접근 URL 생성
 	@CrossOrigin("*")
	@RequestMapping(value = "/api/video/createURL", method = RequestMethod.POST)
	public String[] localUploadToStorage(@RequestBody UploadReqDto uploadReqDto) throws Exception {

		String[] res = gcsService.generateV4GPutObjectSignedUrl(uploadReqDto);
	
		return res;
 }
	
//GCS 파일 보기 URL 생성	
    @CrossOrigin
	@RequestMapping(value = "/api/bucket/url", method = RequestMethod.POST)
	public String getURLfromGCS(@RequestBody UploadReqDto uploadReqDto) throws IOException{
		
		String url = gcsService.generateV4GetObjectSignedUrl(uploadReqDto);
		
		return url;
	}


	
	//get videos by videoID
    //modified
    //return whether user liked/disliked video
    @CrossOrigin
	@RequestMapping(value = "/api/video/desc/url/ID/{videoID}/{username}", method = RequestMethod.GET)
	public VideoDTO getURLfromGCSbyVideoID(@PathVariable("videoID") final int videoID, @PathVariable("username") final String username) throws Exception {
		
    	VideoDTO video = videoDAO.getDescbyVideoID(videoID);
    	
		String fileName = videoDAO.getURLfromVideoID(videoID);

		String url = gcsService.getVideobyVIDEOtable(fileName);
		
		if(videoLikeDAO.selectLikeVideo(videoID, username) != null) {
			video.setLike(1);
		}
		
		else if(videoLikeDAO.selectDislikeVideo(videoID, username) != null) {
			video.setDislike(-1);
		}

		video.setVideoPath(url);
		
		return video;
		
	}

	/*
	 * //그냥테스트
	 * 
	 * @CrossOrigin
	 * 
	 * @RequestMapping(value = "/api/test", method = RequestMethod.GET) public
	 * Page<VideoDTO[]> test(final Pageable pageable) throws Exception {
	 * Page<VideoDTO[]> posts = videorepository.findAll(pageable); Page<VideoDTO[]>
	 * posts1 = videorepository.getDescbyUserOrderBy("test", "newest"); return
	 * posts1; }
	 */
    
	
	
	//get videos by username
    //modified
    //newest & order by like
    @CrossOrigin
	@RequestMapping(value = "/api/video/desc/url/user/{username}/{orderBy}", method = RequestMethod.GET)
	public Object[] getURLfromGCSbyUsername(@PathVariable("username") final String username
			, @PathVariable("orderBy") final String orderBy
			, @RequestParam(required = false, defaultValue = "0") int offset, @RequestParam(required = false, defaultValue = "100") int limit) throws Exception{
    	
    	String order;

    	if (orderBy.equals("newest")) {
    		
			Object withTotal[]=new Object[2];
    		
    		order = "videoDate";
    		
    		VideoDTO[] videobyDate = videoDAO.getDescbyUserOrderBy(username, order, limit, offset);
    		VideoDTO[] videobyDate1 = videoDAO.getDescbyUserOrderBy(username, order, 100, 0);
    		
    		
    		for(int i = 0; i < videobyDate.length; i++) {
    			
    			videobyDate[i].setVideoPath(gcsService.getVideobyVIDEOtable(videobyDate[i].getUploadFileName()));
    			videobyDate[i].setLike(videoLikeDAO.likeCount(videobyDate[i].getVideoID()));
    			videobyDate[i].setDislike(videoLikeDAO.dislikeCount(videobyDate[i].getVideoID()));

    		}
    		
			withTotal[0] = videobyDate1.length;
			withTotal[1] = videobyDate;
			
			return withTotal;
    	}
    	
    	else if (orderBy.equals("like")) {
    		
			Object withTotal[]=new Object[2];
    		
    		order = "like";
    		
    		VideoDTO[] videobyLike = videoDAO.getDescbyUserOrderBy(username, order, limit, offset);
    		VideoDTO[] videobyLike1 = videoDAO.getDescbyUserOrderBy(username, order, 100, 0);
    		
    		for(int i = 0; i < videobyLike.length; i++) {
    			
    			videobyLike[i].setVideoPath(gcsService.getVideobyVIDEOtable(videobyLike[i].getUploadFileName()));
    			videobyLike[i].setLike(videoLikeDAO.likeCount(videobyLike[i].getVideoID()));
    			videobyLike[i].setDislike(videoLikeDAO.dislikeCount(videobyLike[i].getVideoID()));
    			
    			System.out.println(videobyLike[i].getLike());

    		}

    		
			withTotal[0] = videobyLike1.length;
			withTotal[1] = videobyLike;
			
			return withTotal;
        }
    	
    	else {
		return null;
    	}
		
    	
    	
		//List<String> fileName = videoDAO.getURLfromUsername(username);
		
		
	}
	
	//get videos by fileName
    //modified
    @CrossOrigin
	@RequestMapping(value = "/api/video/desc/url/filename/{uploadFileName}", method = RequestMethod.GET)
	public VideoDTO getURLfromGCSbyFileName(@PathVariable("uploadFileName") final String uploadFileName) throws Exception {
    	
    	VideoDTO video = videoDAO.getDescbyFile(uploadFileName);

		String url = gcsService.getVideobyVIDEOtable(uploadFileName);
		
		video.setVideoPath(url);
		
		return video;
	}
    
    
	
	//delete videos by videoID
    @CrossOrigin("*")
	@RequestMapping(value = "/api/video/deletebyID/{videoID}", method = RequestMethod.DELETE)
	public String deleteVideobyID(@PathVariable("videoID") final int videoID) throws Exception {
		
		String res = "";
		
		String fileName = videoDAO.getURLfromVideoID(videoID);
		
		if (fileName != null) {
			res = gcsService.deleteObject(fileName);
		}
		
		else {
			res = "cannot delete file from bucket.";
		}
		
		videoDAO.deleteVideobyID(videoID);
		
		return res;
		
	}
	
	
	//delete videos by FileName(delete from gcs and DB)
    @CrossOrigin("*")
	@RequestMapping(value = "/api/video/delete/fileName/{uploadFileName}", method = RequestMethod.DELETE)
	public String deleteVideobyFileName(@PathVariable("uploadFileName") final String uploadFileName) throws Exception {
		
		String res = "";
		
		String fileName = videoDAO.getURLfromFilename(uploadFileName);
		
		if (fileName != null) {
			res = gcsService.deleteObject(fileName);
		}
		
		else {
			res = "cannot delete file from bucket.";
		}
		
		videoDAO.deleteVideobyFileName(fileName);
		
		return res;
		
	}
    
    
    //get videoURL and description of videos in a videoList(all)
    //modified
    @CrossOrigin
    @RequestMapping(value = "/api/video/list/desc/URL/{listID}/{username}/{orderBy}", method = RequestMethod.GET)
    public VideoDTO[] getURLfromGCSbylistID(@PathVariable("listID") final int listID, @PathVariable("username") final String username,
    		@PathVariable("orderBy") final String orderBy,
    		@RequestParam(required = false, defaultValue = "0") int offset, @RequestParam(required = false, defaultValue = "100") int limit) throws Exception{
    	
    	String order;
    	
    	if (orderBy.equals("newest")) {
    		
    		order = "videoDate";
    		
    		VideoDTO[] res = videoDAO.getDescbyListIDOrderBy(listID, order, limit, offset);

    		
    		for(int i = 0; i < res.length; i++) {
    			
    			int videoID = res[i].getVideoID();
    			
    			res[i].setVideoPath(gcsService.getVideobyVIDEOtable(res[i].getUploadFileName()));
    			
    			res[i].setLike(0);
    			res[i].setDislike(0);
    			
    			res[i].setRecommended(0);
    			res[i].setDisrecommended(0);
    			
    			if (videoLikeDAO.selectLikeVideo(videoID, username) != null) {
    				res[i].setLike(1);
    			}
    			
    			else if (videoLikeDAO.selectDislikeVideo(videoID, username) != null) {
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
    	
    	else if (orderBy.equals("like")) {
    		
    		order = "like";
    		
   		VideoDTO[] res = videoDAO.getDescbyListIDOrderBy(listID, order, limit, offset);

    		
    		for(int i = 0; i < res.length; i++) {
    			
    			int videoID = res[i].getVideoID();
    			
    			res[i].setVideoPath(gcsService.getVideobyVIDEOtable(res[i].getUploadFileName()));
    			
    			res[i].setLike(0);
    			res[i].setDislike(0);
    			
    			res[i].setRecommended(0);
    			res[i].setDisrecommended(0);
    			
    			if (videoLikeDAO.selectLikeVideo(videoID, username) != null) {
    				res[i].setLike(1);
    			}
    			
    			else if (videoLikeDAO.selectDislikeVideo(videoID, username) != null) {
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
    
    //get videoURL and desc of videos in a videolist  >  5
    @CrossOrigin
    @RequestMapping(value = "/api/video/list/desc/URL/GTEQ/5/{listID}/{username}/{orderBy}", method = RequestMethod.GET)
    public VideoDTO[] getURLfromGCSmorethan5(@PathVariable("listID") final int listID, @PathVariable("username") final String username,
    		@PathVariable("orderBy") final String orderBy,
    		@RequestParam(required = false, defaultValue = "0") int offset, @RequestParam(required = false, defaultValue = "100") int limit) throws Exception {
    	
    	String order;
    	
    	
    	if (orderBy.equals("newest")) {
    		
    		order = "videoDate";
    		
        	VideoDTO[] res = videoDAO.getDescbyListIDGTEQ5(listID, order, limit, offset);
        	
    		for(int i = 0; i < res.length; i++) {
    			
    			int videoID = res[i].getVideoID();
    			
    			res[i].setVideoPath(gcsService.getVideobyVIDEOtable(res[i].getUploadFileName()));
    			
    			res[i].setLike(0);
    			res[i].setDislike(0);
    			
    			res[i].setRecommended(0);
    			res[i].setDisrecommended(0);
    			
    			if (videoLikeDAO.selectLikeVideo(videoID, username) != null) {
    				res[i].setLike(1);
    			}
    			
    			else if (videoLikeDAO.selectDislikeVideo(videoID, username) != null) {
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
    	
    	else if (orderBy.equals("like")) {
    		
    		order = "like";
    		
        	VideoDTO[] res = videoDAO.getDescbyListIDGTEQ5(listID, order, limit, offset);
        	
    		for(int i = 0; i < res.length; i++) {
    			
    			int videoID = res[i].getVideoID();
    			
    			res[i].setVideoPath(gcsService.getVideobyVIDEOtable(res[i].getUploadFileName()));
    			
    			res[i].setLike(0);
    			res[i].setDislike(0);
    			
    			res[i].setRecommended(0);
    			res[i].setDisrecommended(0);
    			
    			if (videoLikeDAO.selectLikeVideo(videoID, username) != null) {
    				res[i].setLike(1);
    			}
    			
    			else if (videoLikeDAO.selectDislikeVideo(videoID, username) != null) {
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
    
    //get videoURL and desc of videos in a videolist between 0 and 5
    @CrossOrigin
    @RequestMapping(value = "/api/video/list/desc/URL/GTEQ/0/LT/5/{listID}/{username}/{orderBy}", method = RequestMethod.GET)
    public VideoDTO[] getURLbetween0and5(@PathVariable("listID") final int listID, @PathVariable("username") final String username,
    		@PathVariable("orderBy") final String orderBy,
    		@RequestParam(required = false, defaultValue = "0") int offset, @RequestParam(required = false, defaultValue = "100") int limit) throws Exception {
    	
    	String order;
    	
    	if (orderBy.equals("newest")) {
    		
    		order = "videoDate";
    		
        	VideoDTO[] res = videoDAO.getDescbyListBetween0and5(listID, order, limit, offset);

        	
    		for(int i = 0; i < res.length; i++) {
    			
    			int videoID = res[i].getVideoID();
    			
    			res[i].setVideoPath(gcsService.getVideobyVIDEOtable(res[i].getUploadFileName()));
    			
    			res[i].setLike(0);
    			res[i].setDislike(0);
    			
    			res[i].setRecommended(0);
    			res[i].setDisrecommended(0);
    			
    			if (videoLikeDAO.selectLikeVideo(videoID, username) != null) {
    				res[i].setLike(1);
    			}
    			
    			else if (videoLikeDAO.selectDislikeVideo(videoID, username) != null) {
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
    	
    	else if (orderBy.equals("like")) {
    		
    		order = "like";
    		
        	VideoDTO[] res = videoDAO.getDescbyListBetween0and5(listID, order, limit, offset);

        	
    		for(int i = 0; i < res.length; i++) {
    			
    			int videoID = res[i].getVideoID();
    			
    			res[i].setVideoPath(gcsService.getVideobyVIDEOtable(res[i].getUploadFileName()));
    			
    			res[i].setLike(0);
    			res[i].setDislike(0);
    			
    			res[i].setRecommended(0);
    			res[i].setDisrecommended(0);
    			
    			if (videoLikeDAO.selectLikeVideo(videoID, username) != null) {
    				res[i].setLike(1);
    			}
    			
    			else if (videoLikeDAO.selectDislikeVideo(videoID, username) != null) {
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
    
    
    
    
	
	  //insert thumbnail image for video list to gcs bucket
	  @CrossOrigin
	  @RequestMapping(value = "api/videolist/add/thumbnail", method = RequestMethod.POST)
	  public String[] thumbnailtoStorage(@RequestBody UploadReqDto uploadReqDto) throws Exception {

			String[] res = gcsService.generateURLforThumbnailImg(uploadReqDto);
			
			
			return res;
	 }
	  
	  

	 


	
}



