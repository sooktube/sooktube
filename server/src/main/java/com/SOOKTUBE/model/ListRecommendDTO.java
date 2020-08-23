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
public class ListRecommendDTO {
	
	//video list
	private int listID;
	
	private String listName;
	private String listDesc;
	private String listUsername;
	private int isPublic;
	private String thumbnail;
	
	
	private int listLike;
	private int listDislike;
	
	private String url;
	
	//video
	private int videoID;
	private String videoTitle;
	private String videoDesc;
	private Timestamp videoDate;
	private String videoUsername;
	private String uploadFileName;
	private String videoPath;

	
	
	private int videoLike;
	private int videoDislike;
	
	private int recCount;
	private int disrecCount;
	
	private int copied;

}
