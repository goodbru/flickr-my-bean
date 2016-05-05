$(function() {
    var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.setTags&api_key=03b0c5b80e6e0b5680eb5fd87b3e83bf&tags=boat&per_page=1&format=json&nojsoncallback=1';
    var params = { format: 'json' }; 
    $('#button').on('click', function() {
      $.getJSON(url, params, function(json) { 
      if ( json.photos ) {
        $.each( json.photos.photo, function(i, n) {
          var item = json.photos.photo[i];
          $('#photos').empty();
          $('<a href="' + item.link + '"></a>')
            .append('<img src="https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg" />')
            .appendTo('#photos');
          return i ;
        });
      }
    });
  });
});