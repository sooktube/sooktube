package com.SOOKTUBE.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ListInfoDTO {
	
	private int listID;
	private String listName;
	private String listDesc;
	private int isPublic;
	private String thumbnail;
	private String username;
	private int copied;

}
