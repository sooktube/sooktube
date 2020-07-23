// GCSController.java
package com.SOOKTUBE.controller;

import java.io.IOException;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
 
 


//GSC 접근 URL 생성
	@CrossOrigin
	@RequestMapping(value = "/api/video/createURL", method = RequestMethod.POST)
	public String localUploadToStorage(@RequestBody UploadReqDto uploadReqDto) throws Exception {

		String url = gcsService.generateV4GPutObjectSignedUrl(uploadReqDto);
		 
		return url;
 }
	
//GCS 파일 업로드 URL 생성	
	@CrossOrigin
	@RequestMapping(value = "/api/video/getVideo", method = RequestMethod.POST)
	public String getURLfromGCS(@RequestBody UploadReqDto uploadReqDto) throws IOException{
		
		String url = gcsService.generateV4GetObjectSignedUrl(uploadReqDto);
		
		return url;
	}


	
}



