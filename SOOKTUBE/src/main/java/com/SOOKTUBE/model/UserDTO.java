package com.SOOKTUBE.model;
//It is responsible for getting values from user and passing it to the DAO layer for inserting in database.
public class UserDTO {
	private String username;
	private String password;
	private String userID;

	public String getUsername() {
		return username;
	}

	public void setUsername(String userName) {
		this.username = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String userPW) {
		this.password = userPW;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}
}