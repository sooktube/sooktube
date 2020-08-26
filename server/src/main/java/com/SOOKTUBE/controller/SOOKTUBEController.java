package com.SOOKTUBE.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin("*")

@RequiredArgsConstructor
public class SOOKTUBEController {
	
		@RequestMapping({ "/main" })
		public String firstPage() {
			
			return "SOOKTUBE";
		}


}
