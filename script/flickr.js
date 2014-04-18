$(function() {
  var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&jsoncallback=callback';
  $('#searchButton').click(function(e){
    var script = $('<script/>').attr({src: url+'&tags=' + $('#keyword').val()});
    $('head').append(script);
  });
);

function drawImg(result) {
  var i = parseInt(Math.random()*result.items.length)-1;
  $('#resultArea').append('<img src="'+result.items[i].media.m+'" />')
}
function callback(result) {
  console.log(result);
  drawImg(result);
}

