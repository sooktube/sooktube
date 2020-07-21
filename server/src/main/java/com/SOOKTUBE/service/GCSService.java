package com.SOOKTUBE.service;

import java.io.IOException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.springframework.stereotype.Service;

import com.SOOKTUBE.model.UploadReqDto;
import com.google.auth.appengine.AppEngineCredentials;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.HttpMethod;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageException;
import com.google.cloud.storage.StorageOptions;

//GCSService.java

@Service
public class GCSService {
	
 //private final Storage storage;
 //Storage storage = StorageOptions.getDefaultInstance().getService();

 //@SuppressWarnings("deprecation")
	  public String generateV4GPutObjectSignedUrl(
			  UploadReqDto uploadReqDto) throws StorageException, IOException {
		    // String projectId = "my-project-id";
		    // String bucketName = "my-bucket";
		    // String objectName = "my-object";
		  
		  String projectId = "soktube";
		  //  GoogleCredentials credentials = AppEngineCredentials.getApplicationDefault();
		    //Storage storage = StorageOptions.newBuilder().setCredentials(credentials).build().getService();

		   Storage storage = StorageOptions.newBuilder().setProjectId(projectId).build().getService();

		    // Define Resource
		    BlobInfo blobInfo = BlobInfo.newBuilder(BlobId.of(uploadReqDto.getBucketName(), uploadReqDto.getUploadFileName())).build();

		    // Generate Signed URL
		    Map<String, String> extensionHeaders = new HashMap<>();
		    extensionHeaders.put("Content-Type", "video/mp4");

		    URL url =
		        storage.signUrl(
		            blobInfo,
		            15,
		            TimeUnit.MINUTES,
		            Storage.SignUrlOption.httpMethod(HttpMethod.PUT),
		            Storage.SignUrlOption.withExtHeaders(extensionHeaders),
		            Storage.SignUrlOption.withV4Signature());

		    System.out.println("Generated PUT signed URL:");
		    System.out.println(url);
		    System.out.println("You can use this URL with any user agent, for example:");
		    System.out.println(
		        "curl -X PUT -H 'Content-Type: application/octet-stream' --upload-file my-file '"
		            + url
		            + "'");
		    
		    return url.toString();
 }
 
}