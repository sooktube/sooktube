package com.SOOKTUBE.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.HateDAO;
import com.SOOKTUBE.model.HateDTO;


@RestController
@CrossOrigin
@EnableAutoConfiguration
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class HateController {

	@Autowired
	private HateDAO hateDAO;
	
	@CrossOrigin
	@RequestMapping(value = "/api/report/videolist", method = RequestMethod.POST)
	public HateDTO reportVideoList(HateDTO hate) throws Exception{
		hateDAO.ReportVideoList(hate);
		return hate;
	}
}
