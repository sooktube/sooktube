package com.SOOKTUBE.dao;

import com.SOOKTUBE.model.ListCommentGetDTO;

public interface ListCommentGetDAO {
	
	ListCommentGetDTO[] getCommentsandProfile(int listID) throws Exception;

}
