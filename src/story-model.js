// Allows creation of a Story object, using module pattern.
// A Story has an individual id, a headline and a url.

(function(exports) {
  var idCount = 0

  function Story(headline, url) {
    this.headline = headline;
    this.url = url;
    this.id = idCount;
    idCount++;
  };

  exports.Story = Story;
})(this);
