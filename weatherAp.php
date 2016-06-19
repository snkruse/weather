<!DOCTYPE HTML>
<html lang = 'en'>
<head>
 	
 	<script src="weatherReply.js" type="text/javascript"></script> 
	
	<meta character = 'UTF=8'>
	<title>Weather Application</title>
</head>
<body>




	<form NAME="testform">
		<input TYPE="button" NAME="button" Value="Click" 
		    onClick="getCity(this.form)"><BR>
		<input TYPE="checkbox" NAME="rad" Value="San Diego"		>San Diego		<BR>
		<input TYPE="checkbox" NAME="rad" Value="Poway"			>Poway			<BR>
		<input TYPE="checkbox" NAME="rad" Value="San Francisco"	>San Francisco	<BR>
	</form>




	<img src="../weather/images/sun.png"/>

	<div id = 'weather'></div>
	<p><span id = "temp"></span></p>
	<p><span id = "wind"></span></p>





</body>
</html>