//User inputs a city name//
//Listen for button click//
//Create a variable for city
//Use if, else if
//Connect background to corresponding city names//
//Clear the input field to default//


 $(document).ready(function(){

	var cities = ["NYC", "SF", "LA", "ATX", "SYD"];//creates an array of city names and assigns it as the value to the newly created "cities" variable
	console.log(cities);
	
	cities.forEach(function(element, index){
			console.log(element, index);
			$("select").append("<option>"+element+"</option>");
		})


	
// $("select").on("click", showBackgroundLa)

	$("select").change(showBackgroundLa);
		function showBackgroundLa(){
			var city = $("select").val();
			console.log("selection made", city) 

			/*
			store the user's selection in a variable

			if they choose new york, change bg to nyc
			*/
			if(city=="NYC"){
				$("body").attr("class", "nyc");
			}

			else if(city=="SF"){
				$("body").attr("class", "sf");
			}
			else if(city=="LA"){
				$("body").attr("class", "la");
			}
			else if(city=="ATX"){
				$("body").attr("class", "austin");
			}
		
			else if(city=="SYD"){
				$("body").attr("class", "sydney");
			}
		
		}





	//  	function showBackgroundLA(){
	//  		event.preventDefault(); 
	//  		var city = $("select").val();
	// 		$("#city-type").val("");
	 		

	//  		if (city == "los angeles" || city == "la" || city == "lax"){
	//  		$("body").attr("class", "la");
	//     	}	
	// 		else if (city == "new york" || city == "nyc" || city == "new york-city"){
	//  		$("body").attr("class", "nyc");
	//     	}	
	//     	else if (city == "san francisco" || city == "sf" || city == "bay area"){
	//  		$("body").attr("class", "sf");
	//     	}
	//     	else if (city == "austin" || city == "atx"){
	//  		$("body").attr("class", "austin");
	//     	}
	//     	else if (city == "sydney" || city == "syd") {
	//  		$("body").attr("class", "sydney");
	//     	}
	    	
	//     }


		
 }); //end of document.ready


