package com.SOOKTUBE.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SOOKTUBEController {
	
		@RequestMapping({ "/main" })
		public String firstPage() {
			return "SOOKTUBE";
		}


}
