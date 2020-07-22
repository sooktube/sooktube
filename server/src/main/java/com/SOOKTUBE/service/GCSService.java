package com.SOOKTUBE.service;

import java.io.IOException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.springframework.stereotype.Service;

import com.SOOKTUBE.model.UploadReqDto;
import com.google.appengine.api.appidentity.AppIdentityService;
import com.google.appengine.api.appidentity.AppIdentityServiceFactory;
import com.google.auth.Credentials;
import com.google.auth.appengine.AppEngineCredentials;
import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.HttpMethod;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageException;
import com.google.cloud.storage.StorageOptions;

//GCSService.java

@Service
public class GCSService {
	
	  public String generateV4GPutObjectSignedUrl(
			  UploadReqDto uploadReqDto) throws StorageException, IOException {
		    // String projectId = "my-project-id";
		    // String bucketName = "my-bucket";
		    // String objectName = "my-object";
		  
		  
		  AppIdentityService appIdentityService = AppIdentityServiceFactory.getAppIdentityService();

		  Credentials credentials =
		      AppEngineCredentials.newBuilder()
		          .setAppIdentityService(appIdentityService)
		          .build();

		  String projectId = "soktube";
		  //GoogleCredentials credentials = AppEngineCredentials.getApplicationDefault();
		  //Storage storage = StorageOptions.newBuilder().setCredentials(credentials).build().getService();

		   Storage storage = StorageOptions.newBuilder().setProjectId(projectId).setCredentials(credentials).build().getService();

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
		    
		    return url.toString();
 }
	  

		  public String generateV4GetObjectSignedUrl(
				  UploadReqDto uploadReqDto) throws StorageException {
		    // String projectId = "my-project-id";
		    // String bucketName = "my-bucket";
		    // String objectName = "my-object";
			  AppIdentityService appIdentityService = AppIdentityServiceFactory.getAppIdentityService();

			  Credentials credentials =
			      AppEngineCredentials.newBuilder()
			          .setAppIdentityService(appIdentityService)
			          .build();
			  
			  String projectId = "soktube";
			  
			  Storage storage = StorageOptions.newBuilder().setProjectId(projectId).setCredentials(credentials).build().getService();

		    //Storage storage = StorageOptions.newBuilder().setProjectId(projectId).build().getService();

		    // Define resource
		    BlobInfo blobInfo = BlobInfo.newBuilder(BlobId.of(uploadReqDto.getBucketName(), uploadReqDto.getUploadFileName())).build();

		    URL url =
		        storage.signUrl(blobInfo, 15, TimeUnit.MINUTES, Storage.SignUrlOption.withV4Signature());

		    
		    return url.toString();
		  }
	  
	  
 
}