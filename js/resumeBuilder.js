/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*global $ */
 
 
 
 
 var name = 'Gage Heinrich';
 var age = 26;
 var jobDescription = "Web Developer";
 var skills = ["PHP", "SQL", "javascript", "HTML"];
 var awesomeThoughts = "Hello my name is ['name']";
 var phone = "541-280-3628";
 
 var email = "gage.heinrich@gmail.com";
 
 var bio = {
     
     "name" : name,
     "role" : jobDescription,
     "contactInfo" : phone ,
     "skills": skills,
     "bioPic" : "/images/fry.jpg"
     
 };
 
 var work = {
 
 };
 
 work.position = "Developer";
 work.employer = " Made up Inc.";
 work.years = 3;
 work.location = "Joseph , Oregon";
 
 var education = {};
 
 education['schoolName'] = "Utah State University";
 education['yearsAttended'] = 4;
 education['Location'] = "Logan, Utah";
 
 
 
 var newEmail = email.replace("gmail.com","aggiemail.usu.edu");
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%",jobDescription);
 
 var education1 = {

	"Schools": [{
		"name": "Southern Virginia University",
		"location": "Buena Vista , VA",
		"degree": "1 year GenEd",
		"major": "CS",
		"dates": 2010,
		"url": "www.svu.edu"
	}, {
		"name": "Utah State University",
		"location": "Logan Utah",
		"degree": "Bachelor of Science, Huntsman School of Business ",
		"major": "Management Information Systems",
		"dates": "2012 - 2017",
		"url": "www.usu.edu"
	}]
};
 
 
 $("#header").append(formattedName);
 $("#header").append(formattedRole);
 $("#main").append(work['position']);
 $("#main").append(education.schoolName);
 
 console.log(awesomeThoughts);
 console.log(email);
 console.log(newEmail);