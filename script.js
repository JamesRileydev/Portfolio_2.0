for (var i = 0; i < 100; i++) {
  var star = '<div class="star" style="animation: twinkle ' + ((Math.random() * 5) + 3) + 's linear ' +
    1 + 's infinite; top: ' + Math.random() * 250 + 'px; left: '
    + Math.random() * 850 + 'px;"></div>';
  // console.log(star);
  $('.landing-body').append(star);
  // $('#star-container').css('backgroundColor', 'white');
}


$('.navigation__link').click(function () {
  $(".navigation__checkbox").prop("checked", false);
  });

//   //jQuery is required to run this code
// $( document ).ready(function() {

//     scaleVideoContainer();

//     initBannerVideoSize('.video-container .poster img');
//     initBannerVideoSize('.video-container .filter');
//     initBannerVideoSize('.video-container video');

//     $(window).on('resize', function() {
//         scaleVideoContainer();
//         scaleBannerVideoSize('.video-container .poster img');
//         scaleBannerVideoSize('.video-container .filter');
//         scaleBannerVideoSize('.video-container video');
//     });

// });

// function scaleVideoContainer() {

//     var height = $(window).height() + 5;
//     var unitHeight = parseInt(height) + 'px';
//     $('.homepage-hero-module').css('height',unitHeight);

// }

// function initBannerVideoSize(element){

//     $(element).each(function(){
//         $(this).data('height', $(this).height());
//         $(this).data('width', $(this).width());
//     });

//     scaleBannerVideoSize(element);

// }

// function scaleBannerVideoSize(element){

//     var windowWidth = $(window).width(),
//     windowHeight = $(window).height() + 5,
//     videoWidth,
//     videoHeight;

//     // console.log(windowHeight);

//     $(element).each(function(){
//         var videoAspectRatio = $(this).data('height')/$(this).data('width');

//         $(this).width(windowWidth);

//         if(windowWidth < 1000){
//             videoHeight = windowHeight;
//             videoWidth = videoHeight / videoAspectRatio;
//             $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

//             $(this).width(videoWidth).height(videoHeight);
//         }

//         $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

//     });
// }