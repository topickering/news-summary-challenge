//Allows creation of a StoryListView object, using module and constructor
//prototype pattern.  StoryListView stores a StoryList, and can return
//a string of HTML.

(function(exports) {
  function StoryListView(storyList) {
    this.storyList = storyList;
  }

  StoryListView.prototype = {
    render: function() {
      return this.storyList.stories.map(function(story) {
        return "<li><a href='#stories/" + story.id + "'>" + story.headline + "</a></li>"
      }).join("")
    }
  };

  exports.StoryListView = StoryListView
})(this)
