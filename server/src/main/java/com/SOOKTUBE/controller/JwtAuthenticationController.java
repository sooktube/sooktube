package com.SOOKTUBE.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.config.JwtTokenUtil;
import com.SOOKTUBE.model.JwtRequest;
import com.SOOKTUBE.model.JwtResponse;
import com.SOOKTUBE.model.UserDTO;
import com.SOOKTUBE.service.JwtUserDetailsService;




@RestController
@MapperScan(basePackages = "com.SOOKTUBE.dao")
@CrossOrigin
public class JwtAuthenticationController {

	

	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;


	
	@RequestMapping(value = "/api/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		authenticate(authenticationRequest.getUserID(), authenticationRequest.getPassword());

		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUserID());

		final String token = jwtTokenUtil.generateToken(userDetails);
		
		//return token
		return ResponseEntity.ok(new JwtResponse(token));
	}
	
	
	@RequestMapping(value = "/api/register/local", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
		return ResponseEntity.ok(userDetailsService.save(user));
	}
	
	//id 중복확인
	@RequestMapping(value = "/api/register/idCheck", method = RequestMethod.POST)
	public ResponseEntity<?> idCheck(@RequestBody UserDTO user) throws Exception {
		return ResponseEntity.ok(userDetailsService.idCheck(user));
	}
	
	//username 중복확인
	@RequestMapping(value = "/api/register/usernameCheck", method = RequestMethod.POST)
	public ResponseEntity<?> usernameCheck(@RequestBody UserDTO user) throws Exception {
		return ResponseEntity.ok(userDetailsService.usernameCheck(user));
	}

	
	@CrossOrigin
	@RequestMapping(value = "/api/auth/me", method = RequestMethod.GET)
	public ResponseEntity<?> getUsernameFromToken(@RequestHeader(value = "Authorization") String access_token)throws Exception{


	    if (access_token.startsWith("Bearer")) {
	        access_token = access_token.substring(7);
	    }

	    // Claims claims = jwtTokenUtil.getAllClaimsFromToken(access_token);

	        return ResponseEntity.ok(jwtTokenUtil.getUsernameFromToken(access_token));

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