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
public class VideoDTO {
	
	private int videoID;
	private String videoTitle;
	private String videoDesc;
	private Timestamp videoDate;
	private String username;
	private String uploadFileName;
	private String videoPath;
	
	
	

}

/*
 * videoID int(11) PK videoTitle varchar(20) videoDesc text videoDate date
 * userID varchar(50)
 */
