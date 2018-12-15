//Allows creation of a StoryList object, using module and constructor
//prototype pattern.  StoryList stores an array of Stories.

(function(exports) {
  function StoryList() {
    this.stories = [];
  }

  StoryList.prototype = {
    getStories: function() {
      var self = this;
      var guardian = new GuardianData();
      guardian.jsonArray.forEach(function(json) {
        self.stories.push(new Story(json.fields.headline, json.webUrl));
      });
    }
  };

  exports.StoryList = StoryList
})(this)
