package com.SOOKTUBE.model;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class VideoRecommendDTO {
	
	//`videoID`, `videoTitle`, `videoDesc`, `videoDate`, VIDEO.`username`, `uploadFileName`, `listID`, `listName`, `listDesc`
	
	private int videoID;
	private String videoTitle;
	private String videoDesc;
	private Timestamp videoDate;
	private String username;
	private String uploadFileName;
	private String videoPath;
	
	private int listID;
	private String listName;
	private String listDesc;
	
}
