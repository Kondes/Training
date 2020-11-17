$(function () {
  $('.photo__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/right.svg" alt=""></button>',
  });

  // $('.photo__slider').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // });
});
// $('.menu__btn').on('click', function () {
//   $('.menu__list').slideToggle();
// });
// });
// $(function () {
//   $('.photo__slider').slick();
// });
// $(document).ready(function () {
//   $('.photo__slider').slick({
//     dots: true,
//   });
// });
