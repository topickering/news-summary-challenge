var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not true");
    }
    else {
      console.log('Assertion passed:' + assertionToCheck + ' is true');
    }
  }
};

var sl = new StoryList();
var story = new Story('test headline', 'test url');

function testRender() {
  story.id = 0;
  sl.stories.push(story);
  var slv = new StoryListView(sl);
  assert.isTrue(slv.render() == "<li><a href='#stories/0'>test headline</a></li>")
};

testRender();
