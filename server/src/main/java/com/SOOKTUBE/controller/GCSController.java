// GCSController.java
package com.SOOKTUBE.controller;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.model.UploadReqDto;
import com.SOOKTUBE.service.GCSService;
import com.google.cloud.storage.BlobInfo;

import lombok.RequiredArgsConstructor;

//GCSController.java

//GCSController.java

@RestController
@RequiredArgsConstructor
public class GCSController {

 private final GCSService gcsService;

 @PostMapping("gcs/upload")
 public ResponseEntity localUploadToStorage(@RequestBody UploadReqDto uploadReqDto) throws IOException {
		
		/*
		 * String projectId = "soktube"; String bucketName =
		 * uploadReqDto.getBucketName(); String objectName =
		 * uploadReqDto.getUploadFileName(); String filePath =
		 * uploadReqDto.getLocalFileLocation();
		 */
		 
			
			 // BlobInfo fileFromGCS = gcsService.uploadFileToGCS(uploadReqDto); 
	 String URL = gcsService.uploadFileToGCS(uploadReqDto);
			//  return ResponseEntity.ok(fileFromGCS.toString());
	 
	 return ResponseEntity.ok(URL);
			 
		 
		
				/*
				 * GCSService.uploadFileToGCS(projectId, bucketName, objectName, filePath);
				 * return "done";
				 */
		 
	 
	// return ResponseEntity.ok(GCSService.uploadFileToGCS(projectId, bucketName, objectName, filePath));
 }
}



