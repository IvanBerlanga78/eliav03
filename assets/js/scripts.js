// Secondary Navigation

$(document).ready(function(){

  $('#urban').on('click', function(event){
    event.preventDefault();
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#feat-urban").offset().top
      
  }, 1000);
  })
  $('#archit').on('click', function(){
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#feat-architecture").offset().top
  }, 1000);
  })
  $('#sustain').on('click', function(){
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#feat-sustain").offset().top
  }, 1000);
  })
  $('#technical').on('click', function(){
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#feat-technical").offset().top
  }, 1000);
  })

})

window.addEventListener("scroll", blurContent);

let spacer = document.querySelector('.spacer');
//spacer.style.display=('none');

function blurContent() {

  let content =  document.getElementById('hero');
  let offset = content.getBoundingClientRect();
  let scrolled = document.scrollingElement.scrollTop;

  let position = offset.top;
  let pixs = scrolled / 200;

  if(scrolled > position + 100){
    content.style.filter= "blur("+pixs+"px)";
  }
  
}

// Scroll full page


new fullpage('#main', {
  //options here
  autoScrolling:true,
  fixedElements: 'header, #hero',
  anchors:['slide1', 'slide2', 'slide3'],
  waterEffect: false,
  //credits: { enabled: false, label: 'Made with fullPage.js', position: 'right'},
  licenseKey: 'gplv3-license'
});

