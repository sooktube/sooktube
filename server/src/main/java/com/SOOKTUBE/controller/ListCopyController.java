package com.SOOKTUBE.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.ListCopyDAO;
import com.SOOKTUBE.dao.VideoListDAO;
import com.SOOKTUBE.model.ListInfoDTO;

import lombok.RequiredArgsConstructor;

@RestController
@EnableAutoConfiguration
@RequiredArgsConstructor
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class ListCopyController {
	
	@Autowired
	VideoListDAO videoListDAO;
	
	@Autowired
	ListCopyDAO listcopyDAO;

	
	
	
	//copy a video list
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/copy/{copyFrom}/{copyTo}", method = RequestMethod.POST)
	public void copyList(@PathVariable("copyFrom") final int copyFrom, @PathVariable("copyTo") final int copyTo) throws Exception {
		
		listcopyDAO.copyList(copyTo, copyFrom);
		listcopyDAO.editLike10(copyTo);
		listcopyDAO.insertCopyInfo(copyTo, copyFrom);
		
	}
	
	//create new copied video list
	@CrossOrigin
	@RequestMapping(value = "/api/video/list/copy/newcopy", method = RequestMethod.POST)
	public ListInfoDTO newCopy(ListInfoDTO copylist) throws Exception {
		
		listcopyDAO.newcopyList(copylist);
		copylist.setCopied(1);

		
		return copylist;
		
	}
	
	//get where the copied list is copied from
	@CrossOrigin
	@RequestMapping(value = "/api/video/copy/isCopiedFrom/{listID}", method = RequestMethod.GET)
	public int isCopiedFrom(@PathVariable("listID") final int listID) throws Exception {
		
		int copyFrom = listcopyDAO.isCopiedFrom(listID);
		
		return copyFrom;
	}
	

}
