package com.SOOKTUBE.service;

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
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.HttpMethod;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageException;
import com.google.cloud.storage.StorageOptions;

import lombok.RequiredArgsConstructor;

//GCSService.java

@Service
@RequiredArgsConstructor
public class GCSService {
	
	
	  public String[] generateV4GPutObjectSignedUrl(
			  UploadReqDto uploadReqDto) throws Exception {
		    // String projectId = "my-project-id";
		    // String bucketName = "my-bucket";
		    // String objectName = "my-object";
		  
		  String[] res = new String[2];
		  

		  
		  AppIdentityService appIdentityService = AppIdentityServiceFactory.getAppIdentityService();

		  Credentials credentials =
		      AppEngineCredentials.newBuilder()
		          .setAppIdentityService(appIdentityService)
		          .build();

		  String projectId = "soktube";
		  String bucketName = "soktube.appspot.com";
		  
		  //업로드 날짜 저장
		  String fileName = uploadReqDto.getUsername() + uploadReqDto.getUploadFileName();
		  System.out.println(fileName);
		  
		  res[0] = fileName;


		   Storage storage = StorageOptions.newBuilder().setProjectId(projectId).setCredentials(credentials).build().getService();

		    // Define Resource
		    BlobInfo blobInfo = BlobInfo.newBuilder(BlobId.of(bucketName, fileName)).build();

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
		    
		    
		    res[1] = url.toString();
		    
		    return res;
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
			  String bucketName = "soktube.appspot.com";
			  
			  Storage storage = StorageOptions.newBuilder().setProjectId(projectId).setCredentials(credentials).build().getService();

		    //Storage storage = StorageOptions.newBuilder().setProjectId(projectId).build().getService();

		    // Define resource
		    BlobInfo blobInfo = BlobInfo.newBuilder(BlobId.of(bucketName, uploadReqDto.getUploadFileName())).build();

		    URL url =
		        storage.signUrl(blobInfo, 15, TimeUnit.MINUTES, Storage.SignUrlOption.withV4Signature());

		    
		    return url.toString();
		  }
		  
		  public String getVideobyVIDEOtable(
				  String fileName) throws StorageException {
		    // String projectId = "my-project-id";
		    // String bucketName = "my-bucket";
		    // String objectName = "my-object";
			  AppIdentityService appIdentityService = AppIdentityServiceFactory.getAppIdentityService();

			  Credentials credentials =
			      AppEngineCredentials.newBuilder()
			          .setAppIdentityService(appIdentityService)
			          .build();
			  
			  String projectId = "soktube";
			  String bucketName = "soktube.appspot.com";
			  
			  Storage storage = StorageOptions.newBuilder().setProjectId(projectId).setCredentials(credentials).build().getService();

		    //Storage storage = StorageOptions.newBuilder().setProjectId(projectId).build().getService();

		    // Define resource
		    BlobInfo blobInfo = BlobInfo.newBuilder(BlobId.of(bucketName, fileName)).build();

		    URL url =
		        storage.signUrl(blobInfo, 15, TimeUnit.MINUTES, Storage.SignUrlOption.withV4Signature());

		    
		    return url.toString();
		    
		  }

			  public String deleteObject(String fileName) {
			    // The ID of your GCP project
			    // String projectId = "your-project-id";

			    // The ID of your GCS bucket
			    // String bucketName = "your-unique-bucket-name";

			    // The ID of your GCS object
			    // String objectName = "your-object-name";
				  
				  String projectId = "soktube";
				  String bucketName = "soktube.appspot.com";

			    Storage storage = StorageOptions.newBuilder().setProjectId(projectId).build().getService();
			    storage.delete(bucketName, fileName);

			    System.out.println("Object " + fileName + " was deleted from " + bucketName);
			    
			    return "deleted";
			  }
			  
			  
			  
			  public String[] generateURLforThumbnailImg(
					  UploadReqDto uploadReqDto) throws Exception {
				    // String projectId = "my-project-id";
				    // String bucketName = "my-bucket";
				    // String objectName = "my-object";
				  
				  String[] res = new String[2];
				  

				  
				  AppIdentityService appIdentityService = AppIdentityServiceFactory.getAppIdentityService();

				  Credentials credentials =
				      AppEngineCredentials.newBuilder()
				          .setAppIdentityService(appIdentityService)
				          .build();

				  String projectId = "soktube";
				  String bucketName = "soktube.appspot.com";
				  
				  //업로드 날짜 저장
				  String fileName = uploadReqDto.getUsername() + uploadReqDto.getUploadFileName();
				  System.out.println(fileName);
				  
				  res[0] = fileName;


				   Storage storage = StorageOptions.newBuilder().setProjectId(projectId).setCredentials(credentials).build().getService();

				    // Define Resource
				    BlobInfo blobInfo = BlobInfo.newBuilder(BlobId.of(bucketName, fileName)).build();

				    // Generate Signed URL
				    Map<String, String> extensionHeaders = new HashMap<>();
				    extensionHeaders.put("Content-Type", "image/jpeg");

				    URL url =
				        storage.signUrl(
				            blobInfo,
				            15,
				            TimeUnit.MINUTES,
				            Storage.SignUrlOption.httpMethod(HttpMethod.PUT),
				            Storage.SignUrlOption.withExtHeaders(extensionHeaders),
				            Storage.SignUrlOption.withV4Signature());
				    
				    
				    res[1] = url.toString();
				    
				    return res;
		 }

			  

			  public String generateURLforProfilePic(
					  String username, String profilepic) {
				    // String projectId = "my-project-id";
				    // String bucketName = "my-bucket";
				    // String objectName = "my-object";
				  
				  //String[] res = new String[2];
				  

				  
				  AppIdentityService appIdentityService = AppIdentityServiceFactory.getAppIdentityService();

				  Credentials credentials =
				      AppEngineCredentials.newBuilder()
				          .setAppIdentityService(appIdentityService)
				          .build();

				  String projectId = "soktube";
				  String bucketName = "soktube.appspot.com";
				  
				  //업로드 날짜 저장
				  String fileName = username + profilepic + "PROFILE";
				  System.out.println(fileName);
				  
				  //res[0] = fileName;


				   Storage storage = StorageOptions.newBuilder().setProjectId(projectId).setCredentials(credentials).build().getService();

				    // Define Resource
				    BlobInfo blobInfo = BlobInfo.newBuilder(BlobId.of(bucketName, fileName)).build();

				    // Generate Signed URL
				    Map<String, String> extensionHeaders = new HashMap<>();
				    extensionHeaders.put("Content-Type", "image/jpeg");

				    URL url =
				        storage.signUrl(
				            blobInfo,
				            15,
				            TimeUnit.MINUTES,
				            Storage.SignUrlOption.httpMethod(HttpMethod.PUT),
				            Storage.SignUrlOption.withExtHeaders(extensionHeaders),
				            Storage.SignUrlOption.withV4Signature());
				    
				    
				    //res[1] = url.toString();
				    
				    System.out.println(url);
				    
				    return url.toString();
		 }
			  
			  public String generateDefaultProfilePic(String profilepic) {
				    // String projectId = "my-project-id";
				    // String bucketName = "my-bucket";
				    // String objectName = "my-object";
				  
				  //String[] res = new String[2];
				  

				  
				  AppIdentityService appIdentityService = AppIdentityServiceFactory.getAppIdentityService();

				  Credentials credentials =
				      AppEngineCredentials.newBuilder()
				          .setAppIdentityService(appIdentityService)
				          .build();

				  String projectId = "soktube";
				  String bucketName = "soktube.appspot.com";
				  
				  //업로드 날짜 저장
				  //String fileName = username + profilepic + "PROFILE";
				  //System.out.println(fileName);
				  
				  //res[0] = fileName;


				   Storage storage = StorageOptions.newBuilder().setProjectId(projectId).setCredentials(credentials).build().getService();

				    // Define Resource
				    BlobInfo blobInfo = BlobInfo.newBuilder(BlobId.of(bucketName, profilepic)).build();

				    // Generate Signed URL
				    Map<String, String> extensionHeaders = new HashMap<>();
				    extensionHeaders.put("Content-Type", "image/jpeg");

				    URL url =
				        storage.signUrl(
				            blobInfo,
				            15,
				            TimeUnit.MINUTES,
				            Storage.SignUrlOption.httpMethod(HttpMethod.PUT),
				            Storage.SignUrlOption.withExtHeaders(extensionHeaders),
				            Storage.SignUrlOption.withV4Signature());
				    
				    
				    //res[1] = url.toString();
				    
				    System.out.println(url);
				    
				    return url.toString();
		 }
	  
	  
 
}