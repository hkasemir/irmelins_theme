(function(global){
  
  var paintingFeatureSize = '625x700',
      paintingThumbSize = '255x230',
      photoFeatureSize = '625x550',
      photoThumbSize = '250x175';
  
  
  function makeFeature(featureSize, thumbSize, evt){
    var img = evt.target;
    var feature = img.parentElement.previousElementSibling.firstElementChild;
    var newThumbSrc = feature.src.replace(featureSize, thumbSize);
    
    feature.className = 'dark';
    img.className = 'dark thumb';
    
    window.setTimeout(function(){
      feature.src = img.src.replace(thumbSize, featureSize);
      img.src = newThumbSrc;
      
      feature.className = '';
      img.className = 'thumb';
      
    }, 300)
    

  }
  
  var paintings = document.querySelectorAll('#paintings .images img');
  for (var i = 0; i < paintings.length; i++){
    paintings[i].addEventListener('click',
                                  makeFeature.bind(null, paintingFeatureSize, paintingThumbSize));
  }
  
  var photos = document.querySelectorAll('#photography .images img');
  for (var i = 0; i < photos.length; i++){
    photos[i].addEventListener('click',
                                  makeFeature.bind(null, photoFeatureSize, photoThumbSize));
    
  }
  
  
})(this);