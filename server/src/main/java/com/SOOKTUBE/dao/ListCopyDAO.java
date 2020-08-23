package com.SOOKTUBE.dao;

import org.apache.ibatis.annotations.Param;

import com.SOOKTUBE.model.ListInfoDTO;

public interface ListCopyDAO {
	
	//insert
	int copyList(@Param("copyTo") int copyTo, @Param("copyFrom") int copyFrom) throws Exception;
	int newcopyList(ListInfoDTO newcopylist) throws Exception;
	int insertCopyInfo(@Param("copyTo") int copyTo, @Param("copyFrom") int copyFrom) throws Exception;
	
	
	//select
	int isCopiedFrom(int copyTo) throws Exception;
	
	//update like
	int editLike10(int listID) throws Exception;
	
}
