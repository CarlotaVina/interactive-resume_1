var skills = ["Front Web", "J2EE", "Big Data", "No SQL"];
var bio = {
		"name" : "Carlota",
		"role": "Web Developer",
		"contacts": {
			"mobile": "606559452",
			"email": "carlota_vina@hotmail.com",
			"location": "Madrid"
		},
		"biopic": "images/CarlotaVinaFoto.png",
		"welcomeMessage": "Tomorrow will be better",
		"skills" : skills
}
var work = {
		"jobs": [
		         {
		        	 "employer": "Everis",
		        	 "title": "J2EE programmer",
		        	 "dates": "April 2015 - Future",
		        	 "description": "I work for a insurance company Mapfre. In this project I design the model database and techical design. The technologies use are Spring and web services",
		        	 "location": "Madrid"
		         },
		         {
		        	 "employer": "ISBAN",
		        	 "title": "Databases programmer",
		        	 "dates": "December 2014 - March 2015",
		        	 "description": "FICRES project. Worked with Pl/SQL and Oracle. This project manages the car credit",
		        	 "location": "Madrid"
		         }
		         ]
};
var activity = {
		"projects": [
		             {
		            	 "title": "Front Web developer",
		            	 "dates": "April 2015 - Future",
		            	 "description": "Udacity. In this course I learn some technologies like HTML, JavaScript and AJAX",
		            	 "images": "Madrid"
		             },
		             { 
		            	 "title": "Big Data Expert",
		            	 "dates": "October 2013 - July 2014",
		            	 "description": "U-TAD. I learned Hadoop, Cloudera, Paradigm Map-Reduce, and others big data technologies",
		            	 "images": "Madrid"
		             }
		             ]
};
var education = {
		"schools": [
		            {
		            	"name": "Catalunya Oberta University",
		            	"city": "on line",
		            	"degree": "BA",
		            	"major": "[CompSci]",
		            	"dates": "2011",
		            	"url": "http://example.com"
		            },
		            {
		            	"name": "Oviedo University",
		            	"city": "Gijon",
		            	"degree": "BA",
		            	"major": "[CompSci]",
		            	"dates": "1988",
		            	"url": "http://example.com"
		            }
		            ]
};	
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + 
				name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

var DataBio = (function () {
function DataBio(skills,bio) {
	this.skills = skills;
	this.bio = bio;
}
	return DataBio;
}) ();

var DisplayBio = (function () {
	function DisplayBio(pbio) {
	
		var formattedMobile = HTMLmobile.replace("%data%",pbio.bio.contacts.mobile);
		var formattedMail = HTMLemail.replace("%data%",pbio.bio.contacts.email);
		var formattedLocation = HTMLlocation.replace("%data%",pbio.bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%",pbio.bio.biopic);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%",pbio.bio.welcomeMessage);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedMail);
		$("#topContacts").append(formattedLocation);
		$("#topContacts").append(formattedWelcome);
		$("#header").append(formattedBioPic);
		var formattedName = "carlota vina";
		var formattedName1 = inName(formattedName);
		var formattedName2 = HTMLheaderName.replace("%data%",formattedName1);
		$("#header").append(formattedName2);
		if(bio.skills.length >=0) {
			$("#header").append(HTMLskillsStart);
			for (var i=0; i<bio.skills.length; i++) {
				formattedSkill = HTMLskills.replace("%data%",pbio.skills[i]);
				$("#skills").append(formattedSkill);
			}
	 
		}
 }
		return DisplayBio;
}) ();
var DataWork = (function () {
	function DataWork(work) {
		this.work = work;
	}
	return DataWork;
}) ();


var DisplayWork = (function () {
	function DisplayWork(pwork) {
		$("#workExperience").append(HTMLworkStart);
		for (job in pwork.work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", pwork.work.jobs[job].employer);
			var formattedTitle    = HTMLworkTitle.replace("%data%", pwork.work.jobs[job].title);
			var formattedEmployerTitle    =  formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", pwork.work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%",pwork.work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
	
		}
}
	return DisplayWork;
}) ();
	
var DisplayProjects = (function() {
	function DisplayProjects(pactivity) {
		for (project in activity.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitlep = HTMLprojectTitle.replace("%data%",pactivity.activity.projects[project].title);
			$(".project-entry:last").append(formattedTitlep);
			var formattedDatesp = HTMLprojectDates.replace("%data%",pactivity.activity.projects[project].dates);
			$(".project-entry:last").append(formattedDatesp);
			var formattedDescriptionp = HTMLprojectDescription.replace("%data%",pactivity.activity.projects[project].description);
			$(".project-entry:last").append(formattedDescriptionp);
			/*if(activity.projects[project].images.length > 0) {
				for (image in activity.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%",activity.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}*/
		}
	}
	return DisplayProjects;
}) ();
var DataProjects = (function () {
	function DataProjects(activity) {
		this.activity = activity;
	}
	return DataProjects;
}) ();
var DataEducation = (function () {
function DataEducation(education) {
	this.education = education;
}
	return DataEducation;
}) ();


var DisplayEducation = (function() {
function DisplayEducation(peducation) {
	for (study in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedUniversity = HTMLschoolName.replace("%data%",peducation.education.schools[study].name);
		var formattedStudyCity   = HTMLschoolLocation.replace("%data%", peducation.education.schools[study].city);
		var formattedDegree    =  HTMLschoolDegree.replace("%data%", peducation.education.schools[study].degree);
		var formattedDates    =  HTMLschoolDates.replace("%data%", peducation.education.schools[study].dates);
		var formattedMajor    =  HTMLschoolMajor.replace("%data%", peducation.education.schools[study].major);
		$(".education-entry:last").append(formattedUniversity);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedStudyCity)
		$(".education-entry:last").append(formattedMajor);
	}
}
	return DisplayEducation;
}) ();

var b = new DataBio(skills,bio);
console.log(b.bio.contacts.mobile);
var dBio = new DisplayBio(b);
$("#header").append(dBio);
var w = new DataWork(work);
var dWork = new DisplayWork(w);
$("#main").append(dWork);
var a = new DataProjects(activity);
var dProjects = new DisplayProjects(a);
$("#main").append(dProjects);
var e = new DataEducation(education);
var dEducation = new DisplayEducation(e);
$("#main").append(dEducation);
$("#mapDiv").append(googleMap);

