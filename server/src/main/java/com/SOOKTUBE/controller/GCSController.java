// GCSController.java
package com.SOOKTUBE.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.model.UploadReqDto;
import com.SOOKTUBE.service.GCSService;
import com.google.cloud.storage.BlobInfo;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class GCSController {
	
	
	@Autowired
	private com.google.cloud.storage.Storage storage;

    private final GCSService gcsService;

    @PostMapping("gcs/upload")
    public ResponseEntity localUploadToStorage(@RequestBody UploadReqDto uploadReqDto) throws IOException {
        BlobInfo fileFromGCS = gcsService.uploadFileToGCS(uploadReqDto);
        return ResponseEntity.ok(fileFromGCS.toString());
    }
}



