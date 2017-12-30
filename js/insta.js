document.addEventListener("DOMContentLoaded", function () {
  var galleryFeed = new Instafeed({
    get: "user",
    userId: 2708246576,
    accessToken: "2708246576.8015660.730b0378941a4bd6a5c0f7e30aee912a",
    resolution: "standard_resolution",
    limit: 6,
    template: '<div class="column-insta">' +
                '<a href="#" data-toggle="modal" data-target="{{id}}">' +
                  '<img src="{{image}}" style="width:100%">' +
                '</a>' +
              '</div>' +
              '<div class="modal fade" id="{{id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">' +
              '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                  '<div class="modal-header">' +
                    '<h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                      '<span aria-hidden="true">&times;</span>' +
                    '</button>' +
                  '</div>' +
                  '<div class="modal-body">' +
                   ' ... ' +
                  '</div>' +
                  '<div class="modal-footer">' +
                    '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
                    '<button type="button" class="btn btn-primary">Save changes</button>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>'
              ,
   // template: '<div class="column"><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p></div><img src="{{image}}" class="img-responsive"></div></a></div>',
    target: "instafeed-gallery-feed",
    after: function () {
      // disable button if no more results to load
      if (!this.hasNext()) {
        btnInstafeedLoad.setAttribute('disabled', 'disabled');
      }
    },
  });
  galleryFeed.run();

  var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
  btnInstafeedLoad.addEventListener("click", function () {
    galleryFeed.next()
  });

});

