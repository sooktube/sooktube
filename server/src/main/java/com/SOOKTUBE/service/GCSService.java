package com.SOOKTUBE.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.SOOKTUBE.model.UploadReqDto;
import com.google.cloud.storage.Acl;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;

import lombok.RequiredArgsConstructor;

/*import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;*/


//GCSService.java

@Service
@RequiredArgsConstructor
public class GCSService {

    private final Storage storage;

    @SuppressWarnings("deprecation")
    public String uploadFileToGCS(UploadReqDto uploadReqDto) throws IOException {

        BlobInfo blobInfo =storage.create(
                BlobInfo.newBuilder(uploadReqDto.getBucketName(), uploadReqDto.getUploadFileName())
                        .setAcl(new ArrayList<>(Arrays.asList(Acl.of(Acl.User.ofAllAuthenticatedUsers(), Acl.Role.READER))))
                        .build(),
                new FileInputStream(uploadReqDto.getLocalFileLocation()));

        return blobInfo.getMediaLink();
    }
    


	 

	
		/*
		 * @SuppressWarnings("deprecation") public static void uploadFileToGCS( String
		 * projectId, String bucketName, String objectName, String filePath) throws
		 * IOException {
		 * 
		 * Storage storage =
		 * StorageOptions.newBuilder().setProjectId(projectId).build().getService();
		 * BlobId blobId = BlobId.of(bucketName, objectName); BlobInfo blobInfo =
		 * BlobInfo.newBuilder(blobId).build(); storage.create(blobInfo, new
		 * FileInputStream(filePath));
		 */
		  
		  //new FileInputStream(new File(outFilepath+".JPG"))
		  //Files.readAllBytes(Paths.get(filePath))

		/*
		 * System.out.println( "File " + filePath + " uploaded to bucket " + bucketName
		 * + " as " + objectName);
		 */
	  
	  
	 


}