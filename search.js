$(document).ready(function(){


$('#dog').on('click',function(event){
	
	event.preventDefault();

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
	var parameter = 'q='
	var search = $('#searchTerm').val();
	var apiKey = '&api-key=88534e21c78a49479cadce650a295d43';
	var begin_date= "2016910";

	console.log("test")

	var queryURL = (url+parameter+search+apiKey);

	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
			console.log(search);
			console.log(response.response.docs[0]);

			return false;


		});
	});
	
});