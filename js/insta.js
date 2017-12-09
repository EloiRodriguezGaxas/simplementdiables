document.addEventListener("DOMContentLoaded", function() {
    
    var insta = new Instafeed ({
    get: 'user',
    userId: '623597756',
    clientId: 'Client',
    accessToken: 'Access-Token',
    resolution: 'standard_resolution',
    sortBy: 'most-recent',
    limit: 9,
    template: '<div class="image-item insta-page">' +
     '<a class="image insta-image" href="{{image}}>' +
     '<img alt="{{user.full_name}}" src="{{image}}>' +
     '<div class="img-backdrop-tutorial">' +
     '<div class="insta-caption">' +
     '<p>{{caption}}</p>' +
     '</div>' +
     '</div>' +
     '<div class="captions">' +
     '<a></a>' +
     '</div>' +
     '</a>' +
     '</div>',
         
    filter: function(image) {
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
   
   });