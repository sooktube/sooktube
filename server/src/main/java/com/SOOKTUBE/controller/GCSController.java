// GCSController.java
package com.SOOKTUBE.controller;

import java.io.IOException;

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
public class GCSController {

// private final S3Service s3Service;
 private final GCSService gcsService;


	@CrossOrigin
	@RequestMapping(value = "/api/upload", method = RequestMethod.POST)
	public String localUploadToStorage(@RequestBody UploadReqDto uploadReqDto) throws IOException {
		
		 
		
		
		  String bucket = "soktube.appspot.com"; 
		  String object = "sooktubeTest1.txt";
		  
		  String url = gcsService.generateV4GPutObjectSignedUrl(uploadReqDto);
		 
		
		/*
		 * String objectKey = "test.txt";
		 * 
		 * String url = s3service.S3upload(objectKey);
		 */
		return url;
 }
	
}



