package com.SOOKTUBE.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ListThumbnailDTO {
	
	private int thumbID;
	private int listID;
	private String thumbFileName;

}
