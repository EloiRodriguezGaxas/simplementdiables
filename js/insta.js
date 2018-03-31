var galleryFeed;

document.addEventListener("DOMContentLoaded", function () {


  var feedHTML =
    '{{model.customTagOpen}}' +
      '<div class="">' +
        '<div class="image-wrapper">' +
          '<a onclick="openModal({{model.customId}})">' +
            '<img src="{{image}}" style="width:100%">' +
          '</a>' +
        '</div>' +
      '</div>' +
    '{{model.customTagClose}}'+
    '<!-- The Modal -->' +
    '<div onclick="closeModal({{model.customId}})" id="{{model.customId}}" class="modal">' +
      //'<div onclick="closeModal({{model.customId}})">' +
        '<span onclick="closeModal({{model.customId}})" class="close">&times;</span>' +
        '<a class="modal-content" target="_blank" href="{{link}}">' +
          '<img style="width: 100%" src="{{image}}">' +
        '</a>' +
        '<div id="caption">' +
          '{{caption}}' +
        '</div>' +
      //'</div>' +
    '</div>'
    ;


  //var feedHTML = '{{model.customTagOpen}}<a target="_Blank" href="{{link}}"><img src="{{image}} style="width:100%" ></a>{{model.customTagClose}}';

  var count = 0;

  galleryFeed = new Instafeed({
    get: "user",
    userId: 2708246576,
    accessToken: "2708246576.8015660.730b0378941a4bd6a5c0f7e30aee912a",
    resolution: "standard_resolution",
    limit: 3,

    template: feedHTML,
    target: "instafeed-gallery-feed",
    filter: function (image) {
        image.customId = "image_" + count;
      // if (count % 3 === 0 || count === 0) {
      //   image.customTagOpen = '<div class="w3-third">';
      //   image.customTagClose = '';
      // } else if (count + 1 % 3 === 0) {
      //   image.customTagOpen = '';
      //   image.customTagClose = '</div>';
      // } else {
      //   image.customTagOpen = '';
      //   image.customTagClose = '';
      // }
      count += 1;
      return true;
    },
    after: function() {
      if(count<9) {
        galleryFeed.next();
      }
    }

  });

  galleryFeed.run();


});

function openModal(image_id) {
  console.log(image_id.id)
  document.getElementById(image_id.id).style.display = "block";
}

function closeModal(image_id) {
  document.getElementById(image_id.id).style.display = "none";
}