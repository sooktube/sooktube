package com.SOOKTUBE.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.config.JwtTokenUtil;
import com.SOOKTUBE.dao.ProfileDAO;
import com.SOOKTUBE.dao.UserDao;
import com.SOOKTUBE.model.JwtRequest;
import com.SOOKTUBE.model.JwtResponse;
import com.SOOKTUBE.model.UserDTO;
import com.SOOKTUBE.service.GCSService;
import com.SOOKTUBE.service.JwtUserDetailsService;




@RestController
@MapperScan(basePackages = "com.SOOKTUBE.dao")
@CrossOrigin
public class JwtAuthenticationController {
	
	@Autowired
	private GCSService gcsService;
	
	@Autowired
	private ProfileDAO profileDAO;

	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private PasswordEncoder bcryptEncoder;

	
	@RequestMapping(value = "/api/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		authenticate(authenticationRequest.getUserID(), authenticationRequest.getPassword());

		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUserID());

		final String token = jwtTokenUtil.generateToken(userDetails);
		
		//return token
		return ResponseEntity.ok(new JwtResponse(token));
	}
	
	//register
	//프로필사진 포함
	@CrossOrigin
	@RequestMapping(value = "/api/register/local", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
		return ResponseEntity.ok(userDetailsService.save(user));
	}
	
	//get user profile pic
	@CrossOrigin
	@RequestMapping(value = "/api/user/profile/picture/{username}", method = RequestMethod.GET)
	public String getProfile(@PathVariable("username") final String username) throws Exception {
		
		String profile = gcsService.getVideobyVIDEOtable(profileDAO.getProfilepicbyName(username));
		
		return profile;
		
	}
	
	//get user info
	@CrossOrigin
	@RequestMapping(value = "/api/user/info/{username}", method = RequestMethod.GET)
	public UserDTO getUserinfo(@PathVariable("username") final String username) throws Exception {
		
		UserDTO res = profileDAO.getUserinfobyName(username);
		
		System.out.println(res.getUsername());
		
		res.setPicpath(gcsService.getVideobyVIDEOtable(profileDAO.getProfilepicbyName(username)));
		
		return res;
	}
	
	//update user info
	@CrossOrigin
	@RequestMapping(value = "/api/user/update/info/{userID}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateUser(@PathVariable("userID") final String userID, @RequestBody UserDTO user) throws Exception {
		
		user.setUserID(userID);
		
		UserDTO update = profileDAO.getUserinfo(userID);
		
		update.setUsername(user.getUsername());
		update.setPassword(bcryptEncoder.encode(user.getPassword()));
		update.setProfilepic(user.getProfilepic());
		update.setPicpath(gcsService.generateDefaultProfilePic(user.getProfilepic()));
		
		profileDAO.updateUserinfo(update);
		
		return ResponseEntity.ok(update);
		
		
	}
	
	//delete user
	@CrossOrigin
	@RequestMapping(value = "/api/user/delete/{username}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteUser(@PathVariable("username") final String username) throws Exception {
		
		profileDAO.deleteUser(username);
		
		return ResponseEntity.ok("deleted");
	}
	
	
	//id 중복확인
	@CrossOrigin
	@RequestMapping(value = "/api/register/idCheck", method = RequestMethod.POST)
	public ResponseEntity<?> idCheck(@RequestBody UserDTO user) throws Exception {
		return ResponseEntity.ok(userDetailsService.idCheck(user));
	}
	
	//username 중복확인
	@CrossOrigin
	@RequestMapping(value = "/api/register/usernameCheck", method = RequestMethod.POST)
	public ResponseEntity<?> usernameCheck(@RequestBody UserDTO user) throws Exception {
		return ResponseEntity.ok(userDetailsService.usernameCheck(user));
	}

	
	@CrossOrigin
	@RequestMapping(value = "/api/auth/myID", method = RequestMethod.GET)
	public ResponseEntity<?> getUsernameFromToken(@RequestHeader(value = "Authorization") String access_token)throws Exception{


	    if (access_token.startsWith("Bearer")) {
	        access_token = access_token.substring(7);
	    }

	    // Claims claims = jwtTokenUtil.getAllClaimsFromToken(access_token);

	        return ResponseEntity.ok(jwtTokenUtil.getUsernameFromToken(access_token));

	    }
	
	
	@CrossOrigin
	@RequestMapping(value = "/api/auth/myName", method = RequestMethod.GET)
	public ResponseEntity<?> getUserIdFromToken(@RequestHeader(value = "Authorization") String access_token)throws Exception{
		
	    if (access_token.startsWith("Bearer")) {
	        access_token = access_token.substring(7);
	    }

	    // Claims claims = jwtTokenUtil.getAllClaimsFromToken(access_token);
	    String userId = jwtTokenUtil.getUsernameFromToken(access_token);
	    String username = userDao.findByUserID(userId).getUsername();
	   
	   
	        return ResponseEntity.ok(username);

	    }
	


	private void authenticate(String userID, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userID, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}