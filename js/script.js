$(document).ready(function(){
    $(".button-1, .button-2, .button-3").hover(function(){
      $(this).filter(':not(:animated)').animate({ width: "175px" });
      $(this).animate({ width: "200px" });
    });
});