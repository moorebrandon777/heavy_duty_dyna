/*=========

Template Name: Induris - Factory & Industrial HTML Template
Theme Version: 1.0

=========*/

/*=========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Loader Js
3.WoW Animation Js
4.Sticky Header JS
5.Banner Slider JS
6.Service Slider JS
7.Testimonial Slider JS
8.Work Slider JS
9.FAQ Accordian JS
8.Scroll To Top JS
10.Magnific Popup JS
11.Toggle Menu Mobile JS
12.Dynamic Date JS
=========*/

jQuery(document).ready(function () {
    // Whole Script Strict Mode Syntax
    "use strict";

    // Loader JS Start
    jQuery(window).ready(function () {
        jQuery(".loader-box").fadeOut();
        jQuery("body").removeClass("fixed");
    });
    // Loader JS End

    // Wow Animation JS Start
    new WOW().init();
    // Wow Animation JS Start

    // Sticky Header JS Start
    jQuery(window).on("scroll", function () {
        if (jQuery(window).scrollTop() >= 100) {
            jQuery(".site-header").addClass("sticky-header");
        } else {
            jQuery(".site-header").removeClass("sticky-header");
        }
    });
    // Sticky Header JS End

    // Main Banner Slider JS Start
    var main_banner_slider = new Swiper(".main-banner-slider", {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: false,
        speed: 3125,
        autoplay: {
            delay: 5000,
        },
        effect: "fade",
    });
    // Main Banner Slider JS End

    // Service Slider JS Start
    var services_slider = new Swiper(".services-slider", {
        loop: true,
        speed: 1000,
        direction: "horizontal",
        effect: "slide",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 18,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 18,
                centeredSlides: false,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 18,
            },
            0: {
                centeredSlides: true,
                spaceBetween: 12,
            },
        },
    });
    // Service Slider JS End

    // Testimonial Slider JS Start
    var testimonial_slider = new Swiper(".testimonial-slider", {
        loop: true,
        speed: 1000,
        direction: "horizontal",
        effect: "slide",
        pagination: {
            el: ".testimonial-pagination",
            clickable: true,
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    });
    // Testimonial Slider JS End

    // Work Slider JS Start
    var our_work_slider = new Swiper(".our-work-slider", {
        spaceBetween: 24,
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        centeredSlides: true,
        direction: "horizontal",
        effect: "slide",
        breakpoints: {
            992: {
                spaceBetween: 24,
            },
            576: {
                spaceBetween: 18,
            },
            0: {
                spaceBetween: 12,
            },
        },
    });
    // Work Slider JS End

    // FAQ Accordian JS Start
    jQuery(".faq-accordian .faq-accordian-content").hide();

    // Show the first accordion content and add the active class
    jQuery(".faq-accordian-box:not(.faq-main .row .col-lg-6:last-child .faq-accordian-box):first-child .faq-accordian-content").show();
    jQuery(".faq-accordian-box:not(.faq-main .row .col-lg-6:last-child .faq-accordian-box):first-child .faq-accordian-title").addClass("active-faq");

    // Accordion click event
    jQuery(".faq-accordian-title").click(function (event) {
        var $this = jQuery(this);
        var dropDown = $this.closest(".faq-accordian-box").find(".faq-accordian-content");
        var $accordion = $this.closest(".faq-accordian");

        // Check if the clicked accordion is the only one open
        var openCount = $accordion.find(".faq-accordian-content:visible").length;

        if ($this.hasClass("active-faq") && openCount === 1) {
            // Prevent closing the last open accordion
            event.preventDefault();
            return;
        }

        // Hide other content
        $accordion.find(".faq-accordian-content").not(dropDown).slideUp();

        // Remove active class from other titles
        $accordion.find(".faq-accordian-title.active-faq").not($this).removeClass("active-faq");

        // Toggle the active class on the clicked title
        $this.toggleClass("active-faq");

        // Toggle the clicked accordion content
        dropDown.stop(false, true).slideToggle();

        event.preventDefault();
    });

    // Scroll To Top JS Start
    jQuery("#scroll-to-top").on("click", function () {
        jQuery("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
    jQuery(window).on("scroll", function () {
        if (jQuery(window).scrollTop() > 300) {
            jQuery("#scroll-to-top").fadeIn(500);
        } else {
            jQuery("#scroll-to-top").fadeOut(500);
        }
    });
    // Scroll To Top JS End

    //Magnific Popup JS Start
    jQuery(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true, // Enable gallery mode for navigation
        },
    });
    //Magnific Popup JS Start

    // Toggle Menu Mobile JS Start
    if (jQuery(window).width() < 992) {
        jQuery(".menu-toggle").on("click", function () {
            jQuery(".main-navigation").toggleClass("toggle-menu");
            jQuery(".header-menu .black-shadow").fadeToggle();
        });
        jQuery(".main-navigation ul li a").on("click", function () {
            jQuery(".main-navigation").removeClass("toggle-menu");
            jQuery(".header-menu .black-shadow").fadeOut();
        });

        jQuery(".main-navigation ul li.menu-parent>a").on("click", function () {
            jQuery(".main-navigation").addClass("toggle-menu");
            jQuery(".header-menu .black-shadow").stop();
        });

        jQuery(".header-menu .black-shadow").on("click", function () {
            jQuery(this).fadeOut();
            jQuery(".main-navigation").removeClass("toggle-menu");
        });

        jQuery("body").on("click", ".main-navigation ul li.menu-parent>a", function () {
            if (jQuery(this).parent().hasClass("opened-menu")) {
                jQuery(this).parent().removeClass("opened-menu");
                jQuery(this).parent().find(".sub-menu").slideUp();
            } else {
                jQuery(this).parent().addClass("opened-menu");
                jQuery(this).parent().find(".sub-menu").slideDown();
            }
        });
    }
    // Toggle Menu Mobile JS End
});

// Dynamic Date JS
document.getElementById("copy-right-year").innerHTML = new Date().getFullYear();
