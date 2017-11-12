$(document).ready(function(){


/*------------------------------------------------
--- PAGE-SCROLLING EFFECT ON HEADER COMPONENT -----
------------------------------------------------*/

    var $headerComponent = $(".header-wrapper");
    $(window).on("scroll", function(){
        var displacementFromTop = window.pageYOffset || document.documentElement.scrollTop;
        if (displacementFromTop > 0) {
            $headerComponent.removeClass("unscrolled");
        } else {
            $headerComponent.addClass("unscrolled");
        } 
    });

/*------------------------------------------------
----------   HAMBURGER-ICON    ----------
------------------------------------------------*/
    var $hamburger = $(".nav-button");    
    $hamburger.on("click", function(e){
        $hamburger.toggleClass("is-active change-height"); //change height is added by me
    });


/*------------------------------------------------
--- TRIGGERING__ MOBILE-MENU_ VIA_ HAMBURGER-ICON__
------------------------------------------------*/
    var $menuLeft = $("#cbp-spmenu-s2");
    var $showLeft = $("#showRight");
    $showLeft.on("click", function(e){
        $menuLeft.toggleClass("cbp-spmenu-open");
    });



});