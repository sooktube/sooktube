package com.SOOKTUBE.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

//UploadReqDto.java

@AllArgsConstructor
@Getter
@Setter
public class UploadReqDto {
 private String bucketName;
 private String uploadFileName;
 private String username;
// private String localFileLocation;
}
