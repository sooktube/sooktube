package com.SOOKTUBE.service;

import java.io.FileInputStream;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;

import com.SOOKTUBE.model.UploadReqDto;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;

import lombok.RequiredArgsConstructor;

//GCSService.java

@Service
@RequiredArgsConstructor
@ConfigurationProperties("spring.cloud.gcp.vision")
public class GCSService {
	
	@Autowired
	private com.google.cloud.storage.Storage Storage;

    private final Storage storage;

    @SuppressWarnings("deprecation")
    public BlobInfo uploadFileToGCS(UploadReqDto uploadReqDto) throws IOException {

        BlobInfo blobInfo = storage.create(BlobInfo.newBuilder(uploadReqDto.getBucketName(), uploadReqDto.getUploadFileName())
                //.setAcl(new ArrayList<>(Arrays.asList(Acl.of(Acl.User.ofAllAuthenticatedUsers(), Acl.Role.READER))))
                .build(), new FileInputStream(uploadReqDto.getLocalFileLocation()));

        return blobInfo;
    }
     
 
}