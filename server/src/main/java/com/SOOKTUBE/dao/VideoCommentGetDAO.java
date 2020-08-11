package com.SOOKTUBE.dao;

import com.SOOKTUBE.model.VideoCommentGetDTO;

public interface VideoCommentGetDAO {
	
	VideoCommentGetDTO[] getCommentsandProfile(int videoID) throws Exception;

}
