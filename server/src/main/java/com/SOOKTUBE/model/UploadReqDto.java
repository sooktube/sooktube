package com.SOOKTUBE.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

//UploadReqDto.java

@AllArgsConstructor
@Getter
public class UploadReqDto {
 private String bucketName;
 private String uploadFileName;
 private String localFileLocation;
}
