//Allows creation of a StoryList object, using module and constructor
//prototype pattern.  StoryList stores an array of Stories.

(function(exports) {
  function StoryList() {
    this.stories = [];
  }

  exports.StoryList = StoryList
})(this)
