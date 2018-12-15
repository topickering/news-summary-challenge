//A model to create a GuardianData object.  On ititiation this object retrieves
//raw data from the Guardian API.



// var guardian url = "http://content.guardianapis.com/search?"
//
// var politics = "section=politics&"
//
// var page = "page=1&page-size=10&"
//
// var fields = "show-fields=headline&"

(function(exports) {
  function GuardianData() {
    this.jsonArray = []

    this._setUp();
  };

  GuardianData.prototype = {
    _setUp: function() {
      var self = this
      var request = new XMLHttpRequest();

      request.open('GET', 'http://content.guardianapis.com/search?section=politics&page=1&page-size=10&show-fields=headline&api-key=', true);
      request.onload = function () {
        var data = JSON.parse(this.response);
        self.jsonArray = data.response.results;
      }

      request.send()
    }
  };

  exports.GuardianData = GuardianData
})(this)
