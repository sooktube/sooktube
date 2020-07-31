package com.SOOKTUBE.dao;

import com.SOOKTUBE.model.ListThumbnailDTO;

public interface ListThumbnailDAO {
	
	//add thumbnail file to gcs bucket
	int newThumbnail(ListThumbnailDTO thumbnail) throws Exception;

}
