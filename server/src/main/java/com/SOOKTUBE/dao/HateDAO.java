package com.SOOKTUBE.dao;

import com.SOOKTUBE.model.HateDTO;

public interface HateDAO {
	
	int ReportVideoList(HateDTO param) throws Exception;

}
