package com.SOOKTUBE.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.SOOKTUBE.dao.UserDao;
import com.SOOKTUBE.model.DAOUser;
import com.SOOKTUBE.model.UserDTO;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	/*@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		if ("javainuse".equals(username)) {
			return new User("javainuse", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
					new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}*/
	

	@Override
	public UserDetails loadUserByUsername(String userID) throws UsernameNotFoundException {
		DAOUser user = userDao.findByUserID(userID);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + userID);
		}
		return new org.springframework.security.core.userdetails.User(user.getUserID(), user.getPassword(),
				new ArrayList<>());
	}


	public DAOUser save(UserDTO user) {
		DAOUser newUser = new DAOUser();
		newUser.setUserID(user.getUserID());
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return userDao.save(newUser);
	}
	
	public String idCheck(UserDTO user) {
		String check = user.getUserID();
		
		if (userDao.findByUserID(check) == null) {
			return "OK";
		}
		else 
			return "TRY AGAIN";
	}
	
	public String usernameCheck(UserDTO user) {
		String check = user.getUsername();
		
		if (userDao.findByUsername(check) == null) {
			return "OK";
		}
		else 
			return "TRY AGAIN";
	}

}

