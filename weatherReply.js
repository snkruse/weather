
<!--
	var weather = new XMLHttpRequest();
	weather.open("GET", "http://api.wunderground.com/api/c93f93adfe76ed29/conditions/q/CA/San_Francisco.json", false); // false for synchronous request
	weather.send(null); // we are not going to send anything to the weatheronline api
	var text = "";

	var r    = JSON.parse(weather.response);
	var dis  = "Current Location: " + r.current_observation.display_location.full + "<br />";
	var temp = r.current_observation.temperature_string + "<br />";
	var wind = r.current_observation.wind_string + "<br />";
	//document.getElementById("weather").innerHTML = dis;
	//document.getElementById("weather").innerHTML = temp;
	//document.getElementById("weather").innerHTML = wind;
	
	var weatherList = [dis,temp,wind];
	text = getWeatherData(weatherList, text);
	document.getElementById("weather").innerHTML = text;


	function getWeatherData(variable1, variable2){
		//document.getElementById("weather").innerHTML = variable;

		 for(var i = 0; i < variable1.length;  i++){
		 		variable2 += variable1[i] + "<br>";
		 }
		 return variable2;

	}


-->
