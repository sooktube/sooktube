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
public class VideoListDTO {
	
	private int listID;
	private int videoID;
	private String userID;
	
	private String listName;
	private String listDesc;
	private String username;
	private int isPublic;
	
	
	private int like;
	private int dislike;


}

/*
 * listID int(11) AI PK videoID int(11) userID varchar(50) listName varchar(50)
 * listDesc text isPublic tinyint(1)
 * `listName`, `listDesc`, `username`, `isPublic`
 */
