"use strict";

var App = {
  options: {},
  init: function init() {
    this.animation();
  },
  modal: function modal() {
    var o = {
      open: function open(o) {
        var t = document.querySelector("body"),
            n = window.innerWidth - t.clientWidth;
        $("body").css("padding-right", n + "px"), $("body").addClass("modal-open"), $(".modal-back").show(), o.show().css({
          opacity: 0,
          top: "-100px"
        }).animate({
          opacity: "1",
          top: "0px"
        }, 500);
      },
      close: function close(o) {
        o.css({
          opacity: 1
        }).animate({
          opacity: 0
        }, 300), $("body").removeClass("modal-open"), $(".modal-back").hide(), $("body").css("padding-right", "0px");
      }
    };
    var t;
    $("[data-toggle='modal']").on("click", function () {
      var n = $(this).attr("data-name");
      t = $(".modal-content div[data-name='" + n + "']"), o.open(t), $(document).mouseup(function (n) {
        $("body").hasClass("modal-open") && (n.preventDefault(), t.is(n.target) || 0 !== t.has(n.target).length || o.close(t));
      });
    });
  },
  animation: function animation() {
    function o(o) {
      var t = $(o),
          n = $(window),
          a = n.scrollTop(),
          i = t.offset().top;
      return $(window).width() >= "1200" ? i += 100 : $(window).width() >= "900" ? i += 70 : i += 10, i <= a + n.height();
    }

    function t(t) {
      for (var n = 0; n < t.length; n++) {
        !$(t[n]).hasClass(".animate-bottom") && o(t[n]) && $(t[n]).addClass("animate-bottom");
      }
    }

    $(window).width() >= "500" && $(function () {
      var o = $(".works__item");
      t(o), $(window).scroll(function () {
        t(o);
      });
    });
  }
};
$(document).ready(function () {
  App.init();
});