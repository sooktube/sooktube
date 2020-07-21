package com.SOOKTUBE.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CommentDTO {
	
	
	private int commentID;
	private String userComment;
	private int videoID;
	private String userID;

	//commentID(PK): 댓글 아이디 int auto_increment
	//userComment: 댓글 내용 text
	//videoID: 비디오 아이디(FK) references VIDEO(videoID)
	//userID: 댓글 작성자 아이디(FK) references user(userID)
}
