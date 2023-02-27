(() => {
  "use strict";
  var e;
  "function" != typeof (e = window.Element.prototype).matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            s = (t.document || t.ownerDocument).querySelectorAll(e),
            o = 0;
          s[o] && s[o] !== t;

        )
          ++o;
        return Boolean(s[o]);
      }),
    "function" != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      }),
    document.addEventListener("DOMContentLoaded", function () {
      var e = document.querySelectorAll(".js-open-modal"),
        t = document.querySelector(".js-overlay-modal"),
        s = document.querySelectorAll(".js-modal-close");
      e.forEach(function (e) {
        e.addEventListener("click", function (e) {
          e.preventDefault();
          var s = this.getAttribute("data-modal");
          document
            .querySelector('.modal[data-modal="' + s + '"]')
            .classList.add("active"),
            t.classList.add("active");
        });
      }),
        s.forEach(function (e) {
          e.addEventListener("click", function (e) {
            this.closest(".modal").classList.remove("active"),
              t.classList.remove("active");
          });
        }),
        document.body.addEventListener(
          "keyup",
          function (e) {
            27 == e.keyCode &&
              (document
                .querySelector(".modal.active")
                .classList.remove("active"),
              document.querySelector(".overlay").classList.remove("active"));
          },
          !1
        ),
        t.addEventListener("click", function () {
          document.querySelector(".modal.active").classList.remove("active"),
            this.classList.remove("active");
        });
    });
  let t = !1;
  setTimeout(() => {
    if (t) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (window.FLS = !0),
    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        document
          .querySelector(".element-animation-header")
          .classList.add("_active");
      }, 1500),
        setTimeout(() => {
          let e = new IntersectionObserver(
              function (e) {
                e.forEach((e) => {
                  e.isIntersecting && e.target.classList.add("_active");
                });
              },
              { threshold: [0.5] }
            ),
            t = document.querySelectorAll(".element-animation");
          for (let s of t) e.observe(s);
        }, 1e3);
      new Swiper(".mySwiper", {
        slidesPerView: 1,
        centeredSlides: !0,
        spaceBetween: 0,
        initialSlide: 0,
        watchSlidesProgress: !0,
        pagination: { el: ".swiper-pagination", type: "fraction" },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      let e = document.querySelector(".burger_menu"),
        t = document.querySelector(".nav_list");
      e.addEventListener("click", function () {
        e.classList.toggle("active"), t.classList.toggle("active");
      });
      for (
        var s = function (e) {
            e.preventDefault,
              e.target.classList.remove("animate"),
              e.target.classList.add("animate"),
              setTimeout(function () {
                e.target.classList.remove("animate");
              }, 700);
          },
          o = document.getElementsByClassName("bubbly-button"),
          a = 0;
        a < o.length;
        a++
      )
        o[a].addEventListener("click", s, !1);
    }),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      t = !0;
      const e = document.querySelector("header.header"),
        s = e.hasAttribute("data-scroll-show"),
        o = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
        a = e.dataset.scroll ? e.dataset.scroll : 1;
      let n,
        c = 0;
      document.addEventListener("windowScroll", function (t) {
        const i = window.scrollY;
        clearTimeout(n),
          i >= a
            ? (!e.classList.contains("_header-scroll") &&
                e.classList.add("_header-scroll"),
              s &&
                (i > c
                  ? e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")
                  : !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show"),
                (n = setTimeout(() => {
                  !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show");
                }, o))))
            : (e.classList.contains("_header-scroll") &&
                e.classList.remove("_header-scroll"),
              s &&
                e.classList.contains("_header-show") &&
                e.classList.remove("_header-show")),
          (c = i <= 0 ? 0 : i);
      });
    })();
})();
