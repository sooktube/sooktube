package com.SOOKTUBE.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class VideoCommentDTO {
	
	private int commentID;
	private int videoID;
	
	private String userComment;
	private String username;

}
