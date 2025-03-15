/*==========

Template Name: Induris - Factory & Industrial HTML Template
Theme Version: 1.0

==========*/

/*==========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Counting JS
==========*/

jQuery(document).ready(function () {
    // Whole Script Strict Mode Syntax
    "use strict";

    // Counting JS Start
    if (jQuery("#counter").length) {
        // Define a function to handle counting
        const startCounting = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Start the counter animation for all .counting elements
                    jQuery(".counting").each(function () {
                        const $this = jQuery(this);
                        const countTo = parseInt($this.attr("data-count"), 10);

                        jQuery({ countNum: 0 }).animate(
                            { countNum: countTo },
                            {
                                duration: 3500,
                                easing: "linear",
                                step: function () {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                    $this.text(this.countNum); // Ensure final value is set
                                },
                            }
                        );
                    });

                    // Stop observing after the animation starts
                    observer.unobserve(entry.target);
                }
            });
        };

        // Create an Intersection Observer
        const observer = new IntersectionObserver(startCounting, {
            root: null, // Uses the viewport as the container
            threshold: 0.1, // Triggers when 10% of the element is visible
        });

        // Observe the #counter element
        observer.observe(document.querySelector("#counter"));
    }
    // Counting JS End
});
