package com.SOOKTUBE.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class HateDTO {
	
	private int hateID;
	private int listID;
	private String userID;
	
	//hateID(PK): 신고 테이블 아이디 int auto_increment
	//listID: 재생목록 아이디(FK) references videoList(listID)
	//userID: 신고자 아이디(FK) references user(userID)

}
