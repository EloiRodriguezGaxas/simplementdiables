$(document).ready(function () {

    //window and animation items
    var web_window = $(window);
    var adults_animate = true;
    var diablons_animate = true;
    var flamats_animate = true;
    var gafarro_animate = true;

    function animateText(text_to_find) {
        $(text_to_find + ' .ml3').each(function () {
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });

        anime.timeline({ loop: false })
            .add({
                targets: text_to_find + ' .ml3 .letter',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 1000,
                delay: function (el, i) {
                    return 150 * (i + 1)
                }
            });
    }

    //check to see if any animation containers are currently in view
    function check_if_in_view(text_to_find) {

        var animation_elements = $.find(text_to_find);

        //get current window information
        var window_height = web_window.height();
        var percent_height_top = window_height * 0.2;
        var percent_height_bottom = window_height * 0.2;
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        //iterate through elements to see if its in view
        $.each(animation_elements, function () {

            //get the element sinformation
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if ((element_bottom_position >= (window_top_position + percent_height_top)) && (element_top_position <= (window_bottom_position - percent_height_bottom))) {
                element.addClass('in-view');

                switch (text_to_find) {
                    case '#adults_page_text':
                        if (adults_animate) {
                            animateText(text_to_find);
                            adults_animate = false;
                        }
                        break;
                    case '#diablons_page_text':
                        if (diablons_animate) {
                            animateText(text_to_find);
                            diablons_animate = false;
                        }
                        break;
                    case '#flamats_page_text':
                        if (flamats_animate) {
                            animateText(text_to_find);
                            flamats_animate = false;
                        }
                        break;
                    case '#gafarro_page_text':
                        if (gafarro_animate) {
                            animateText(text_to_find);
                            gafarro_animate = false;
                        }
                        break;
                }

                // setTimeout(function () { element.addClass('in-view'); }, 500);
            } else {
                element.removeClass('in-view');
                switch (text_to_find) {
                    case '#adults_page_text':
                            adults_animate = true;
                        break;
                    case '#diablons_page_text':
                            diablons_animate = true;
                        break;
                    case '#flamats_page_text':
                            flamats_animate = true;
                        break;
                    case '#gafarro_page_text':
                            gafarro_animate = true;
                        break;
                }
            }
        });

    }

    //on or scroll, detect elements in view
    $(window).on('scroll resize', function () {
        check_if_in_view('#adults_page_text');
        check_if_in_view('#diablons_page_text');
        check_if_in_view('#flamats_page_text');
        check_if_in_view('#gafarro_page_text');
    })
    //trigger our scroll event on initial load
    $(window).trigger('scroll');

});