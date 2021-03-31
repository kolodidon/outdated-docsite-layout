$(document).ready(function () {
  $(".ordercall").click(function () {
    $("#modal").fadeIn(300);
  });
  $("#modal").on("click", function (e) {
    if (e.target.id == "modal") {
      $(this).hide();
    }
  });
});
//Инициализация слайдера с вопросами
$(".questions-slider").slick({
  infinite: false,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      },
    },
  ],
});
//Слайдер с вопросами

//Слайдер-календарь
$(".calendar").slick({
  infinite: false,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: false,
        dots: false,
      },
    },
  ],
});
//Слайдер-календарь

//Вывод часов работы
var date__hours = $(".date__hours"),
  timeoutId;
$(".active").hover(
  function () {
    clearTimeout(timeoutId);
    date__hours.show();
  },
  function () {
    timeoutId = setTimeout($.proxy(date__hours, "hide"), 1000);
  }
);
date__hours
  .mouseenter(function () {
    clearTimeout(timeoutId);
  })
  .mouseleave(function () {
    date__hours.hide();
  });
//Вывод часов работы
