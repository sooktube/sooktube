package com.SOOKTUBE.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;

import com.SOOKTUBE.model.UploadReqDto;

/*import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;

import com.SOOKTUBE.model.UploadReqDto;
import com.google.cloud.storage.Acl;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;

import lombok.RequiredArgsConstructor;*/

import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;

import lombok.RequiredArgsConstructor;

//GCSService.java

@Service
@RequiredArgsConstructor
@ConfigurationProperties("spring.cloud.gcp.vision")
public class GCSService {
	
	/*
	 * @Autowired private com.google.cloud.storage.Storage Storage;
	 * 
	 * private final Storage storage;
	 * 
	 * @SuppressWarnings("deprecation") public BlobInfo uploadFileToGCS(UploadReqDto
	 * uploadReqDto) throws IOException {
	 * 
	 * BlobInfo blobInfo =
	 * storage.create(BlobInfo.newBuilder(uploadReqDto.getBucketName(),
	 * uploadReqDto.getUploadFileName()) .setAcl(new
	 * ArrayList<>(Arrays.asList(Acl.of(Acl.User.ofAllAuthenticatedUsers(),
	 * Acl.Role.READER)))) .build(), new
	 * FileInputStream(uploadReqDto.getLocalFileLocation()));
	 * 
	 * return blobInfo; }
	 */
 

    	  public BlobInfo uploadObject(
    	      UploadReqDto uploadreqDto) throws IOException {
    	    // The ID of your GCP project
			/*
			 * UploadReqDto uploadreqDto; 
			 String projectId = "soktube";
			 * 
			 * // The ID of your GCS bucket String bucketName = "soktube.appspot.com";
			 * 
			 * // The ID of your GCS object String objectName = "your-object-name";
			 * 
			 * // The path to your file to upload String filePath =
			 * uploadreqDto.getLocalFileLocation();
			 */
    		  
    		  String projectId = "soktube";

    	    Storage storage = StorageOptions.newBuilder().setProjectId(projectId).build().getService();
    	    BlobId blobId = BlobId.of(uploadreqDto.getBucketName(), uploadreqDto.getUploadFileName());
    	    BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
    	    storage.create(blobInfo, Files.readAllBytes(Paths.get(uploadreqDto.getLocalFileLocation())));
    	    
    	    return blobInfo;

			/*
			 * System.out.println( "File " + filePath + " uploaded to bucket " + bucketName
			 * + " as " + objectName);
			 */
    	  }
   
    
    
}