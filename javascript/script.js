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

});
