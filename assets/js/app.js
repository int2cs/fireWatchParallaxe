$(function () {
  $(window).scroll(() => {
    let scrollValue = $(this).scrollTop();
    let imgLength = $("img").length;

    for (let i = 0; i < imgLength; i++) {
      if (i == 0) {
        $("img")
          .eq(i)
          .css(
            "transform",
            "scale(1.5) translateY(" + scrollValue / (10 * 0.8) + "%)"
          );
      } else {
        $("img")
          .eq(i)
          .css(
            "transform",
            "scale(1.5) translateY(" + scrollValue / (10 * i) + "%)"
          );
      }
    }
  });
});
