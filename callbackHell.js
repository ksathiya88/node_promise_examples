// Problems with callback
// 1) maintability
// 2) Errors are hard to handle
// 3) Mixing input and output

// callback Hell
request("/stories/" + storyId, function (story) {
  request(story.chapterUrls[0], function (chapter) {
    request(chapter.pageUrls[0], function (page) {
      var chapterJSON = JSON.parse(chapter);
      request(chapterJSON);
    });
  });
});
