

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
var parameter = 'q='
var search = "syria";
var apiKey = '&api-key=88534e21c78a49479cadce650a295d43';
var begin_date= "2016910";

var queryURL = (url+parameter+search+apiKey);
// var queryURL= 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=syria&api-key=88534e21c78a49479cadce650a295d43';

$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
	console.log(response.response.docs[0]);

});
