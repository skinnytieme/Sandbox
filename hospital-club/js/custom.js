
/* --- Michael's Wizardy (Dropdowns) --- */
$(document).ready(function() {
 

    $("#tabbed-nav1").zozoTabs({    
        theme: "none",
    
        animation: {
        duration: 600,
        effects: "fade",
        size: "large",
        type: "css"
        
        }    
    });

    $("#tabbed-nav2").zozoTabs({
        theme: "none",
    
        animation: {
        duration: 400,
        effects: "none",
        type: "css"
        }
    });

    $("#tabbed-nav3").zozoTabs({
        theme: "none",
    
        animation: {
        duration: 400,
        effects: "slideH",
        type: "css"
        }               
    });
    

    $("#tabbed-facilities").zozoTabs({
        theme: "none",
    
        animation: {
        duration: 600,
        effects: "slideH",
        type: "css"
        }               
    });
    
jQuery(document).ready(function ($) {
    var tabbedNav = $("#tabbed-facilities").zozoTabs({
    }),
    getItem = function () {                
        return $("#tabIndex").val();
    },
    next = function (e) {
        tabbedNav.data("zozoTabs").next();
    },
    prev = function (e) {
        tabbedNav.data("zozoTabs").prev();
    }

    $(".prevTab").click(prev);
    $(".nextTab").click(next);
});    
    

/* --- Michael's Wizardy (Dropdowns) --- */

$(document).ready(function () {
	    var dropdowns = [
	        { link: '#mob-nav-members-lnk', dropDown: '#mob-member-nav-open' },
	        { link: '#mob-nav-lnk', dropDown: '#mob-nav-open' }];
	
	    $.each(dropdowns, function (i, e) {
	        $(e.link).click(function (event) {
	            if ($(e.dropDown).is(':visible')) {
	                $(e.dropDown).slideUp('fast', function () {
	                    $('.dropdown-overlay').hide();
	                });
	            } else {
	                $('.dropdown-overlay').show();
	                $.each(dropdowns, function (ii, ie) {
	                    if (ie.dropDown != e.dropDown)
	                        $(ie.dropDown).slideUp('fast');
	                });
	                $(e.dropDown).slideDown('fast');
	            }
	            event.preventDefault();
	        });
	    });
	
	    $('.dropdown-overlay').click(function () {
	        $.each(dropdowns, function (i, e) {
	            $(e.dropDown + ':visible').slideUp('fast', function () {
	                $('.dropdown-overlay').hide();
	            });
	        });
	    });
	}); 
});


/* --- Fancybox (Modals) --- */
$(document).ready(function() {
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
});


