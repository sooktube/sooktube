package com.SOOKTUBE.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "USER")
public class DAOUser {

	@Id
	/*
	 * @GeneratedValue(strategy = GenerationType.IDENTITY) private long id;
	 */
	@Column
	private String username;
	private String userID;
	@Column
	@JsonIgnore
	private String password;

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

//userID varchar(20) PK 
//userPW varchar(20) 
//userName varchar(15)