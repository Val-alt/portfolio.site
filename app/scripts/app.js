var App = {
  options: {},

  init: function() {
    // this.modal();
    this.animation();
  },

  modal: function() {
    var modal = (function() {
      return {
        open: function(modalContent) {
          let body = document.querySelector("body");
          let scrollWidth = window.innerWidth - body.clientWidth;

          $("body").css("padding-right", scrollWidth + "px");
          $("body").addClass("modal-open");
          $(".modal-back").show();

          modalContent
            .show()
            .css({ opacity: 0, top: "-100px" })
            .animate({ opacity: "1", top: "0px" }, 500);
        },

        close: function(modalContent) {
          modalContent.css({ opacity: 1 }).animate({ opacity: 0 }, 300);

          $("body").removeClass("modal-open");
          $(".modal-back").hide();
          $("body").css("padding-right", "0px");
        }
      };
    })();

    let modalContent;
    (function() {
      $("[data-toggle='modal']").on("click", function() {
        let content = $(this).attr("data-name");
        modalContent = $(".modal-content div[data-name='" + content + "']");

        modal.open(modalContent);

        $(document).mouseup(function(e) {
          if ($("body").hasClass("modal-open")) {
            e.preventDefault();
            if (
              !modalContent.is(e.target) &&
              modalContent.has(e.target).length === 0
            ) {
              modal.close(modalContent);
            }
          }
        });
      });
    })();
  },

  animation: function() {
    function isVisible(element) {
      var item = $(element);
      var win = $(window);
      var scrollTop = win.scrollTop();
      var itemTop = item.offset().top;
      if ($(window).width() >= "1200") {
        itemTop = itemTop + 100;
      } else if ($(window).width() >= "900") {
        itemTop = itemTop + 70;
      } else {
        itemTop = itemTop + 10;
      }
      return itemTop <= scrollTop + win.height();
    }

    function blockShow(element) {
      for (let i = 0; i < element.length; i++) {
        if (
          !$(element[i]).hasClass(".animate-bottom") &&
          isVisible(element[i])
        ) {
          $(element[i]).addClass("animate-bottom");
        }
      }
    }

    if ($(window).width() >= "500") {
      $(function() {
        let element = $(".works__item");
        blockShow(element);

        $(window).scroll(function() {
          blockShow(element);
        });
      });
    }
  }
};

$(document).ready(function() {
  App.init();
});
