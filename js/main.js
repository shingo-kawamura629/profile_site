{'use strict';

$(function() {
  let pagetop = $('.pagetop');
  pagetop.hide();

  $(window).scroll(function() {
  $(this).scrollTop();
  if ($(this).scrollTop() > 60) {
    pagetop.fadeIn();
  } else {
    pagetop.fadeOut();
  }
  });
  pagetop.click(function() {
    $('body, html').animate({
      scrollTop:0
    }, 500);
    return false;
  });
})

$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    document.body.className = '';
    return false;
  });
});

let show = document.getElementById('show');
let hidden = document.getElementById('hide');
let cover = document.getElementById('cover');

show.addEventListener('click', function() {
  document.body.className = 'menuopen';
})

hidden.addEventListener('click', function() {
  document.body.className = '';
})

cover.addEventListener('click', function() {
  document.body.className = '';
})


}