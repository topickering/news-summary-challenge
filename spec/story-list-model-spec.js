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

function testStoryListInit() {
  assert.isTrue(sl.stories.length == 0);
};

function testGetStories() {
  sl.getStories();
  assert.isTrue(sl.stories.length == 10);
};

testStoryListInit();
testGetStories();
