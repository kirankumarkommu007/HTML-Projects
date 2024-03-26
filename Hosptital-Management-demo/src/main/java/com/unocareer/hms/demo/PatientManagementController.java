package com.unocareer.hms.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PatientManagementController {
 
	@RequestMapping("/patient")
	public String manage(Model model){
		model.addAttribute("pageTitle", "Patient Management");
		return "/views/responsive/thymeleaf/patient/patientmanagement";
	}
	
	@RequestMapping("/test")
	public String test(){
		return "/views/responsive/thymeleaf/patient/test";
	}
	
}
 