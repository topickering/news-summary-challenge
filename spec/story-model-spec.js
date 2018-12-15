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

var story = new Story('Test Headline', 'Test URL')

function testStoryID() {
  assert.isTrue(story.id == 0)
};

function testStoryHeadline() {
  assert.isTrue(story.headline == 'Test Headline')
};

function testStoryUrl() {
  assert.isTrue(story.url == 'Test URL')
};

testStoryID();
testStoryHeadline();
testStoryUrl();
