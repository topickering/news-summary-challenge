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

function testStoryListInit() {
  var sl = new StoryList();
  assert.isTrue(sl.stories.length == 0);
};

testStoryListInit();
