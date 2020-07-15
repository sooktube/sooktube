package com.SOOKTUBE.model;

import java.util.Date;

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
	private Date date;
	private String videoPath;
	private String userID;

}
