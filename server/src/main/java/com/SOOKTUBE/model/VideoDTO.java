package com.SOOKTUBE.model;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

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
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date videoDate;
	private String userID;

}

/*
 * videoID int(11) PK videoTitle varchar(20) videoDesc text videoDate date
 * userID varchar(50)
 */
