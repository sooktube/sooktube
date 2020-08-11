package com.SOOKTUBE.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.SOOKTUBE.service.GCSService;

import lombok.RequiredArgsConstructor;

@RestController
@EnableAutoConfiguration
@RequiredArgsConstructor
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class ProfileController {
	
	private final GCSService gcsService;

	
	@CrossOrigin
	@RequestMapping(value = "/api/profile/upload/{profilepic}", method = RequestMethod.POST)
	public String getGCSurl(@PathVariable("profilepic") final String profilepic) throws Exception {
		
		String url = gcsService.generateDefaultProfilePic(profilepic);
		
		return url;
		
	}
	
	@CrossOrigin
	@RequestMapping(value = "/api/profile/get/{profilepic}", method = RequestMethod.GET)
	public String getProfilepic(@PathVariable("profilepic") final String profilepic) throws Exception {
		
		String url = gcsService.getVideobyVIDEOtable(profilepic);
		
		return url;
	}

}
