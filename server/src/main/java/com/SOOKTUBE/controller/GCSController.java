
package com.SOOKTUBE.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.VideoDAO;
import com.SOOKTUBE.dao.VideoListDAO;
import com.SOOKTUBE.model.UploadReqDto;
import com.SOOKTUBE.model.VideoDTO;
import com.SOOKTUBE.model.VideoListDTO;
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
    @CrossOrigin
	@RequestMapping(value = "/api/video/desc/url/ID/{videoID}", method = RequestMethod.GET)
	public VideoDTO getURLfromGCSbyVideoID(@PathVariable("videoID") final int videoID) throws Exception {
		
    	VideoDTO video = videoDAO.getDescbyVideoID(videoID);
    	
		String fileName = videoDAO.getURLfromVideoID(videoID);

		String url = gcsService.getVideobyVIDEOtable(fileName);
		
		video.setVideoPath(url);
		
		return video;
		
	}
	
	
	//get videos by username
    //modified
    @CrossOrigin
	@RequestMapping(value = "/api/video/desc/url/user/{username}", method = RequestMethod.GET)
	public VideoDTO[] getURLfromGCSbyUsername(@PathVariable("username") final String username) throws Exception{
		
    	VideoDTO[] video = videoDAO.getDescbyUser(username);
    	
		List<String> fileName = videoDAO.getURLfromUsername(username);
		
		for(int i = 0; i < video.length; i++) {
			
			video[i].setVideoPath(gcsService.getVideobyVIDEOtable(fileName.get(i)));

		}
		
		return video;
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
    @RequestMapping(value = "/api/video/list/desc/URL/{listID}", method = RequestMethod.GET)
    public VideoDTO[] getURLfromGCSbylistID(@PathVariable("listID") final int listID) throws Exception{
    	
    	List<String> fileName = videoListDAO.getFileNamebylistID(listID);
		
		VideoDTO[] res = videoDAO.getDescbyListID(listID);
    	
    	//VideoDTO res;
		
		for(int i = 0; i < res.length; i++) {
			res[i].setVideoPath(gcsService.getVideobyVIDEOtable(fileName.get(i)));
		}
		
		return res;
    	
    }
    
    //get videoURL and desc of videos in a videolist  >  5
    @CrossOrigin
    @RequestMapping(value = "/api/video/list/desc/URL/GTEQ/5/{listID}", method = RequestMethod.GET)
    public VideoDTO[] getURLfromGCSmorethan5(@PathVariable("listID") final int listID) throws Exception {
    	List<String> fileName = videoListDAO.getFileNamebylistIDGTEQ5(listID);
    	
    	VideoDTO[] res = videoDAO.getDescbyListIDGTEQ5(listID);
    	
    	for(int i = 0; i < res.length; i ++) {
    		
    		res[i].setVideoPath(gcsService.getVideobyVIDEOtable(fileName.get(i)));
    		
    	}
    	return res;
    }
    
    //get videoURL and des of videos in a videolist between 0 and 5
    @CrossOrigin
    @RequestMapping(value = "/api/video/list/desc/URL/GTEQ/0/LT/5/{listID}", method = RequestMethod.GET)
    public VideoDTO[] getURLbetween0and5(@PathVariable("listID") final int listID) throws Exception {
    	
    	List<String> fileName = videoListDAO.getFileNamebylistIDbetween0and5(listID);
    	
    	VideoDTO[] res = videoDAO.getDescbyListBetween0and5(listID);

    	
    	for(int i = 0; i < res.length; i++) {
    		
    		res[i].setVideoPath(gcsService.getVideobyVIDEOtable(fileName.get(i)));
    		
    	}
    	
    	return res;
    }
    
    
    
    
	
	  //insert thumbnail image for video list to gcs bucket
	  @CrossOrigin
	  @RequestMapping(value = "api/videolist/add/thumbnail", method = RequestMethod.POST)
	  public String[] thumbnailtoStorage(@RequestBody UploadReqDto uploadReqDto) throws Exception {

			String[] res = gcsService.generateURLforThumbnailImg(uploadReqDto);
			
			
			return res;
	 }
	  
	  

	 


	
}



