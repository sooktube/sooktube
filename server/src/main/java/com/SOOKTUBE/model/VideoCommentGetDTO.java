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
public class VideoCommentGetDTO {
	
	private int commentID;
	private int videoID;
	
	private String userComment;
	private String username;
	
	private Timestamp commentDate;
	
	private String profileUrl;
	
	private int parent;
	private int seq;

}
