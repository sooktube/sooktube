package com.SOOKTUBE.dao;

import com.SOOKTUBE.model.UserDTO;

public interface ProfileDAO {
	
	//new profile pic
	String getProfilepicbyName(String username) throws Exception;
	String getProfilepicbyID(String userID) throws Exception;	
	
	
	//select user info
	UserDTO getUserinfo(String userID) throws Exception;
	UserDTO getUserinfobyName(String username) throws Exception;
	
	//edit user info
	int updateUserinfo(UserDTO user) throws Exception;
	
	//delete user
	int deleteUser(String username) throws Exception;

}
