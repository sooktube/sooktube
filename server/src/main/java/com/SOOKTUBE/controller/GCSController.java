// GCSController.java
package com.SOOKTUBE.controller;

import java.io.IOException;
import java.util.ArrayList;
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
import com.SOOKTUBE.model.UploadReqDto;
import com.SOOKTUBE.service.GCSService;

import lombok.RequiredArgsConstructor;

//GCSController.java

//GCSController.java

@RestController
@RequiredArgsConstructor
@EnableAutoConfiguration
public class GCSController {

// private final S3Service s3Service;
 private final GCSService gcsService;
// private final VideoDAO videoDAO;
 
 @Autowired
 private VideoDAO videoDAO;



//GSC 접근 URL 생성
	@CrossOrigin
	@RequestMapping(value = "/api/video/createURL", method = RequestMethod.POST)
	public String[] localUploadToStorage(@RequestBody UploadReqDto uploadReqDto) throws Exception {

		String[] res = gcsService.generateV4GPutObjectSignedUrl(uploadReqDto);
	
		return res;
 }
	
//GCS 파일 보기 URL 생성	
	@CrossOrigin
	@RequestMapping(value = "/api/video/getVideo", method = RequestMethod.POST)
	public String getURLfromGCS(@RequestBody UploadReqDto uploadReqDto) throws IOException{
		
		String url = gcsService.generateV4GetObjectSignedUrl(uploadReqDto);
		
		return url;
	}
	
	
	//get videos by videoID
	@CrossOrigin
	@RequestMapping(value = "/api/video/getVideobyID/{videoID}", method = RequestMethod.GET)
	public String getURLfromGCSbyVideoID(@PathVariable("videoID") final int videoID) throws Exception {
		
		String fileName = videoDAO.getURLfromVideoID(videoID);

		String url = gcsService.getVideobyVIDEOtable(fileName);
		
		return url;
		
	}
	
	
	//get videos by username
	@CrossOrigin
	@RequestMapping(value = "/api/video/getVideobyUser/{username}", method = RequestMethod.GET)
	public List<String> getURLfromGCSbyUsername(@PathVariable("username") final String username) throws Exception{
		
		List<String> fileName = videoDAO.getURLfromUsername(username);

		
		List<String> res = new ArrayList<>();
		
		for(int i = 0; i < fileName.size(); i++) {
			
			res.add(gcsService.getVideobyVIDEOtable(fileName.get(i)));
		}
		
		return res;
	}


	
}



