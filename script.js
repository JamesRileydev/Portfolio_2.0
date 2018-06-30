for (var i = 0; i < 20; i++) {
  var star = '<div class="star" style="animation: twinkle ' + ((Math.random() * 5) + 3) + 's linear ' +
    1 + 's infinite; top: ' + Math.random() * 250 + 'px; left: '
    + Math.random() * 800 + 'px;"></div>';
  // console.log(star);
  $('.landing-body').append(star);
  // $('#star-container').css('backgroundColor', 'white');
}


$('.navigation__link').click(function () {
  $(".navigation__checkbox").prop("checked", false);
  });