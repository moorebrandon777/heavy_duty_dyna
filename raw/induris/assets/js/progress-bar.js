/*=========

Template Name: Induris - Factory & Industrial HTML Template
Theme Version: 1.0

=========*/

/*=========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Progress Bar JS
=========*/

jQuery(document).ready(function () {
    // Whole Script Strict Mode Syntax
    "use strict";

    // Progress Bar JS Start
    // Select the .skills section
    var skillsSection = document.querySelector(".skills");

    if (skillsSection) {
        // Create an Intersection Observer
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Trigger animation when the .skills section enters the viewport
                        jQuery(".skills-progressbar-thumb").each(function () {
                            var targetWidth = jQuery(this).data("width");
                            jQuery(this).animate({ width: targetWidth }, 3500);
                        });
                        // Stop observing after triggering the animation
                        observer.unobserve(skillsSection);
                    }
                });
            },
            { threshold: 0.25 }
        ); // Adjust the threshold as needed (e.g., 0.25 for 25% visibility)

        // Start observing the .skills section
        observer.observe(skillsSection);
    }
    // Progress Bar JS End
});
