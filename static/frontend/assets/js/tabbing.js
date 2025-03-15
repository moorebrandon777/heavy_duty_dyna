/*=========

Template Name: Induris - Factory & Industrial HTML Template
Theme Version: 1.0

=========*/

/*=========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Portfolio Tabbing JS
=========*/

jQuery(document).ready(function () {
    // Whole Script Strict Mode Syntax
    "use strict";

    //  Portfolio Tabbing JS Start
    var $grid = jQuery(".grid").isotope({
        // options
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
    });

    // change is-checked class on buttons
    var $buttonGroup = jQuery(".portfolio-tabs");
    $buttonGroup.on("click", "a", function (event) {
        console.log("clicked");
        $buttonGroup.find(".is-checked").removeClass("is-checked");
        var $button = jQuery(event.currentTarget);
        $button.addClass("is-checked");
        var filterValue = $button.attr("data-filter");
        $grid.isotope({ filter: filterValue });
    });
    //  Portfolio Tabbing JS End
});
