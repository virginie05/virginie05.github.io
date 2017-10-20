jQuery(document).ready(function() {
  jQuery(".pagescroll-menu").pagescroll_menu({
    "position":"top",
    "type":"fixed",
    "bgcolor":"#000"
  });
});
$(function () {
  $("[id$='circle']").percircle();
});
$(document).ready(function(){
  $("#partie2_navbar").sticky({topSpacing:0, zIndex: 999});
});

$(function () {
  $('li>a').on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000, function(){
      window.location.hash = hash;
    });
  });
});
