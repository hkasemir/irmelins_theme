(function(global){
  
  var paintingFeatureSize = '0x500',
      paintingThumbSize = '0x150',
      photoFeatureSize = '0x500',
      photoThumbSize = '0x150';
  
  
  function makeFeature(featureSize, thumbSize, evt){
    var img = evt.target;
    var feature = img.parentElement.previousElementSibling.firstElementChild;
    var imgDescription = img.getAttribute('data-feature-html');
    var featureDescription = feature.getAttribute('data-feature-html');
    var altP = img.parentElement.previousElementSibling.lastElementChild;
    var newThumbSrc = feature.src.replace(featureSize, thumbSize);
    altP.innerHTML = imgDescription;
    
    feature.className = 'dark';
    img.className = 'dark thumb';
    
    window.setTimeout(function(){
      feature.src = img.src.replace(thumbSize, featureSize);
      feature.setAttribute('data-feature-html', imgDescription);
      img.src = newThumbSrc;
      img.setAttribute('data-feature-html', featureDescription);
      
      feature.className = '';
      img.className = 'thumb';
      
    }, 300)

  }
  
  var featureDescriptionPs = document.querySelectorAll('p.description');
  for (var i = 0; i < featureDescriptionPs.length; i++){
    var featureImgDesc = featureDescriptionPs[i].parentElement.firstElementChild.getAttribute('data-feature-html');
    featureDescriptionPs[i].innerHTML = featureImgDesc;
  }
  
  
  var paintings = document.querySelectorAll('#paintings .images img.thumb');
  for (var i = 0; i < paintings.length; i++){
    paintings[i].addEventListener('click',
                                  makeFeature.bind(null, paintingFeatureSize, paintingThumbSize));
  }
  
  var photos = document.querySelectorAll('#photography .images img.thumb');
  for (var i = 0; i < photos.length; i++){
    photos[i].addEventListener('click',
                                  makeFeature.bind(null, photoFeatureSize, photoThumbSize));
    
  }
  
  
})(this);