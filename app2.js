function generateImage(photo) {
 return '<img src="https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg" />';
  }

function start() {
  setInterval(fetchPhoto,3000);
}
$(document).ready(function() {
    start();
});

function fetchPhoto() { 
  $.ajax({
   url: "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=03b0c5b80e6e0b5680eb5fd87b3e83bf&per_page=1&format=json&jsoncallback=showPhoto",
   dataType: "jsonp"
 });
}

function showPhoto(data) {
  var photoUrl = generateImage(data.photos.photo[0])
  $('#photos').empty().append(photoUrl)
  console.log(photoUrl)
}



// farm:8
// id:"26789473186"
// isfamily:0
// isfriend:0
// ispublic:1
// owner:"51871391@N08"
// secret:"cab7575993"
// server:"7438"
// title:"Cathecism May 3 2016 035
