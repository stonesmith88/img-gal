'use strict';

$(document).ready(function() {
  loadImages();

  $('.form-url').focus();
});

function Image(strURL, strCaption) {
  switch(true) {
    case strURL.length <= 0:
      throw new Error("enter something!!");
      break;

    case strCaption.length <= 0:
      throw new Error("enter something");
      break;

    default:
      this.url = strURL;
      this.caption = strCaption;
      break;
  }
}

var imageCollection = new ImageCollection();

function loadImages() {
  imageCollection.fetch().done(function() {
    imageCollection.each(function(image) {
      new ThumbnailView({model: image});
    });

    new DetailView({model: {attributes: {url: '', caption: 'nada'}}});
  });
}

$('.form-url').change(function() {
  var strURL = $('.form-url').val();

  $('.form-image').attr('src', strURL);
});