//User inputs a city name//
//Listen for button click//
//Create a variable for city
//Use if, else if
//Connect background to corresponding city names//
//Clear the input field to default//


 $(document).ready(function(){

	$("#submit-btn").click(showBackgroundLA);





 	function showBackgroundLA(){
 		event.preventDefault(); 
 		var city = $("#city-type").val();
		$("#city-type").val("");
 		

 		if (city == "los angeles" || city == "la" || city == "lax"){
 		$("body").attr("class", "la");
    	}	
		else if (city == "new york" || city == "nyc" || city == "new york-city"){
 		$("body").attr("class", "nyc");
    	}	
    	else if (city == "san francisco" || city == "sf" || city == "bay area"){
 		$("body").attr("class", "sf");
    	}
    	else if (city == "austin" || city == "atx"){
 		$("body").attr("class", "austin");
    	}
    	else if (city == "sydney" || city == "syd") {
 		$("body").attr("class", "sydney");
    	}
    	
    	


	}




 })


// Barry: Not sure why this isn't working. I got rid of all the semicolons before the brackets in the if/else statements.