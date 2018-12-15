var head = "http://news-summary-api.herokuapp.com/"

var guardian = "guardian?"

var apiRequestUrl = "apiRequestUrl="

var guardian url = "http://content.guardianapis.com/"

var search = "search?"

var politics = "section=politics&"

var page = "page=1&page-size=10&"

var fields = "show-fields=headline&"

// var format = "format=json"


// var parcelforce =  UH6180495  (PBUH6180495001) 0344 800 4466

var request = new XMLHttpRequest();

request.open('GET', 'http://content.guardianapis.com/search?section=politics&page=1&page-size=10&show-fields=headline&api-key=', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

console.log(data.response.results);

  if (request.status >= 200 && request.status < 400) {
    data.response.results.forEach(result => {
      console.log(result.id);
    });
  } else {
    console.log('error');
  }
}

request.send()
