// Secondary Navigation

$(document).ready(function(){
  /*
  $('.logo').on('click', function(event){
    event.preventDefault();
    $('#main').css({'transform': 'translate3d(0px, 0px, 0px)'});
  })
    
  $('#urban').on('click', function(event){
    event.preventDefault();
    $([document.documentElement, document.body]).animate({
     scrollTop: $("#feat-urban").offset().top
     console.log('click') 
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
  */
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
  fixedElements: 'header, #hero, #menu',
  waterEffect: false,
  anchors: ['0Page','firstPage', 'SecondPage', 'ThirdPage', 'FourthPage'],
  menu: '#menu',
  css3: true,
  //credits: { enabled: false, label: 'Made with fullPage.js', position: 'right'},
  licenseKey: 'gplv3-license',
  scrollingSpeed: 1000
});

