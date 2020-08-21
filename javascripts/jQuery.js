$(function () {
  var centerX, centerY;
  var tracking = true;
  var mobile = false;
  var resetBorder = function () {
    $("#border").css("transform", "none");
  };
  var hideFront = function () {
    $("#flip-card-front").css("opacity", "0%");
    $("#techs").slick("slickPause");
  };
  var showFront = function () {
    $("#flip-card-front").css("opacity", "100%");
    $("#techs").slick("slickPlay");
  };
  $(window).on("load resize", () => {
    mobile = $(window).innerHeight() < 700 || $(window).innerWidth() < 700;
    if (mobile) return resetBorder();
    centerX = $("#border-container").width() / 2;
    centerY = $("#border-container").height() / 2;
  });
  $("#border-container").mousemove((e) => {
    if (tracking && !mobile) {
      $("#border").css(
        "transform",
        `rotateX(${(
          ((e.pageY - centerY) * -1) /
          $("#border").outerHeight() /
          2
        ).toFixed(2)}deg) rotateY(${(
          (e.pageX - centerX) /
          $("#border").outerWidth() /
          2
        ).toFixed(2)}deg)`
      );
    }
  });
  $("#resume-frame").hover(
    () => {
      tracking = false;
      resetBorder();
    },
    () => {
      tracking = true;
    }
  );
  $("#techs").slick({
    vertical: true,
    autoplay: true,
    arrows: false,
    accessibility: false,
    autoplaySpeed: 1000,
    speed: 500,
    zIndex: 1,
  });
  $("#techs").on("beforeChange", (e, slick, curr) => {
    $("#tech-name").html("");
  });
  $(".tech-img").hover(
    (e) => {
      $("#tech-name").html(e.target.alt);
      $("#tech-name").css("opacity", "100%");
    },
    () => {
      $("#tech-name").css("opacity", "0%");
    }
  );
  $(".project-card").click((e) => {
    $(e.currentTarget.children[0].click());
  });
  $("#about-btn").click((e) => {
    e.preventDefault();
    hideFront();
    $("#about").css("display", "inline-block");
    $("#about").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateY(180deg)");
  });
  $("#about-back").click((e) => {
    e.preventDefault();
    $("#about").css("opacity", "0%");
    setTimeout(() => {
      $("#about").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateY(0deg)");
    showFront();
  });
  $("#projects-btn").click((e) => {
    e.preventDefault();
    hideFront();
    $("#projects").css("display", "block");
    $("#projects").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateX(180deg)");
  });
  $("#projects-back").click((e) => {
    e.preventDefault();
    $("#projects").css("opacity", "0%");
    setTimeout(() => {
      $("#projects").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateX(0deg)");
    showFront();
  });
  $("#resume-btn").click((e) => {
    e.preventDefault();
    hideFront();
    tracking = false;
    $("#border").css("transform", "none");
    $("#resume").css("display", "inline-block");
    $("#resume").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateX(-180deg)");
  });
  $("#resume-back").click((e) => {
    e.preventDefault();
    tracking = true;
    $("#resume").css("opacity", "0%");
    setTimeout(() => {
      $("#resume").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateX(0deg)");
    showFront();
  });
  $("#contact-btn").click((e) => {
    e.preventDefault();
    hideFront();
    $("#contact").css("display", "inline-block");
    $("#contact").css("opacity", "100%");
    $("#flip-card").css("transform", "rotateY(-180deg)");
  });
  $("#contact-back").click((e) => {
    e.preventDefault();
    $("#contact").css("opacity", "0%");
    setTimeout(() => {
      $("#contact").css("display", "none");
    }, 300);
    $("#flip-card").css("transform", "rotateY(0deg)");
    showFront();
  });
});
