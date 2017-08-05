$( document ).ready(function() {

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  $('.news-input').on('click focusin', function() {
    $('.news-input').css("color","#92969d");
    this.value = '';
  });


  $('.news-form').submit(function(event){
    var email = $('.news-input').val();
    console.log(isEmail(email));
    if(!isEmail(email)){
      console.log("error");
      $('.news-input').val("Please enter email in valid format");
      $('.news-input').css("color","red");
      event.preventDefault();
    }
  });

  $('.slider span').on('click',function(){
    $index = $(this).index();
    index = $index +1;
    $(this).parent().children().removeClass('slider-active');
    $(this).addClass('slider-active');
    $('.slide-picture ol').children().fadeOut(600, function(){
      $(this).removeClass('active');
    });
    $('.rot-text-content ol').children().fadeOut(500, function(){
      $(this).removeClass('text-active');
    });
    $('.slide-picture ol :nth-child('+index+')').fadeIn(500, function(){
      $(this).addClass('active');
    });
    $('.rot-text-content ol :nth-child('+index+')').fadeIn(500, function(){
      $(this).addClass('text-active');
    });
  });

});
