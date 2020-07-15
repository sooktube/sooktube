package com.SOOKTUBE.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.SOOKTUBE.model.DAOUser;




@Repository
public interface UserDao extends CrudRepository<DAOUser, Integer> {
	
DAOUser findByUserID(String userID);
DAOUser findByUsername(String username);

}
