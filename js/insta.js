document.addEventListener("DOMContentLoaded", function () {
  /*
    var insta = new Instafeed({
      get: 'user',
      userId: '2708246576',
      clientId: '801566096fac4a2c9774644caea82ae4',
      accessToken: '2708246576.8015660.730b0378941a4bd6a5c0f7e30aee912a',
      resolution: 'standard_resolution',
      sortBy: 'most-recent',
      useHttp: "true",
      limit: 6,
      template: '<div class="col-xs-12 col-sm-6 col-md-4"><a href="{{image}}"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i> {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
      sortBy: 'most-recent',
  
      filter: function (image) {
        return image.type === 'image';
      },
  
      after: function () {
        loader.style.display = 'none';
        if (!this.hasNext()) {
          loadButton.setAttribute('disabled', 'disabled');
        }
      }
    });
  
    insta.run();
  */
  var galleryFeed = new Instafeed({
    get: "user",
    userId: 2708246576,
    accessToken: "2708246576.8015660.730b0378941a4bd6a5c0f7e30aee912a",
    resolution: "standard_resolution",
    limit: 6,
   /* template: '<div class="gallery">' +
                '<a target="_blank" href="{{link}}">' +
                  '<img src="{{image}}" alt="Trolltunga Norway" width="300" height="200">' +
                '</a>' +
                '<div class="desc"><p>{{caption}}</p></div>' +
              '</div>'
              ,*/
    template: '<div class="col-xs-12 col-sm-6 col-md-4"><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p></div><img src="{{image}}" class="img-responsive"></div></a></div>',
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