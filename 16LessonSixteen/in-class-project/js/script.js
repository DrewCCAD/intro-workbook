var divs = $('.rotating-item').addClass('animated').hide(),
    i = 0;

function cycle() {

    var $div = divs.eq(i).show().removeClass('slideOutLeft')
              .addClass('slideInRight');

    setTimeout(function() {
      if (int) {
        $div.removeClass('slideInRight')
        .addClass('slideOutLeft');
      }
    }, 3000)


    i = ++i % divs.length;
}
var int;
function startSlideShow() {
  int = setInterval(cycle, 4000);
}
startSlideShow();
// divs.click(function( ){
//   if (int) {
//     clearInterval(int);
//     int = 0;
//   } else {
//     startSlideShow();
//   }
// });

// var divs = $('div[id^="content-"]'),
//     i = 0;
//
// var interval = setInterval(function(){
//       divs.removeClass('active').removeClass('in');
//       var $div = divs.eq(i).hide().addClass('in');
//       $div.show();
//       requestAnimationFrame(function() {
//         setTimeout(function( ){
//           requestAnimationFrame(function() {
//             $div.addClass('active');
//           });
//           i = ++i % divs.length;
//         }, 100);
//       });
//     }, 2000);
