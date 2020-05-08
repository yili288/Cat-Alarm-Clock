window.onload=function(){

	let clock = document.getElementById('clock');
	let img = document.getElementById("img-cat");
	let hour, date, sec, mins;
	let partyTime = 1;

  
	let button = document.getElementById("end-button");

	let partyButton = function(){
		console.log("2");
		if(partyTime > 0){
			img.setAttribute("src", "cute-cat-with-hat.jpeg");
			partyTime = -1;
		}else if(partyTime < 0){
			img.setAttribute("src", "party-cat.jpg");
			partyTime = 1;
		}
	}

	b = button.addEventListener("click", partyButton);

	function currentTime(){
		date = new Date();     //Date() is a build in function/object in javascript
		sec = date.getSeconds();
		mins = date.getMinutes();
		hour = date.getHours();
		sec = updateTime(sec);
		mins = updateTime(mins);
		hour = updateTime(hour);
		console.log(hour);
		clock.innerHTML = hour + " : " + mins + " : " + sec;

		if(img.getAttribute("src") == "party-cat.jpg"){
			partyTime = 1;
		}else{
			partyTime = -1;
		}

	}

	function updateTime(k){
		if(k < 10){
			return "0" + k;
		}else{
			return k;
		}
	}

let oneSecond = 1000;
t = setInterval(function() {currentTime()}, 1000);
	
let currentPicture = function(){
	let date = new Date()
	let now = date.getHours();

	var s1 = document.getElementById("label-wakeup");
	var wakeupTime = s1.options[s1.selectedIndex].value;


	var s2 = document.getElementById("label-lunch");
	var lunchTime = s2.options[s2.selectedIndex].value;

	var s3 = document.getElementById("label-nap");
	var napTime = s3.options[s3.selectedIndex].value;
	
	if(now == napTime){
		img.setAttribute("src", "sleeping-cat.jpg");
	}else if(now == wakeupTime){
		img.setAttribute("src", "fighting-cat.jpg");
	}else if(now == lunchTime){
		img.setAttribute("src", "lunch-cat.gif");
	}else if(partyTime < 0){
		img.setAttribute("src", "cute-cat-with-hat.jpeg");
	}

	/*switch(hour){
		case userTime_wakeup:
			img.setAttribute("src", "fighting-cat.jpg");
			break

		case userTime_lunch:
			img.setAttribute("src", "lunch-cat.gif");
			break

		case userTime_nap:
			img.setAttribute("src", "sleeping-cat.jpg");
			break
	}*/
}

p = setInterval(function(){currentPicture()}, oneSecond);
currentPicture();
}