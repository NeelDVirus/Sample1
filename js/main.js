$(document).ready(function(){

/*------------------------------------------------
----------   MOBILE-MENU__ HAMBURGER-ICON    ----------
------------------------------------------------*/
    var $hamburger = $(".nav-button");    
    $hamburger.on("click", function(e){
        $hamburger.toggleClass("is-active change-height"); //change height is added by me
    });


/*------------------------------------------------
--- TRIGGERING__ HAMBURGER-ICON__MOBILE-MENU -----
------------------------------------------------*/
    var $menuLeft = $("#cbp-spmenu-s2");
    var $showLeft = $("#showRight");
    $showLeft.on("click", function(e){
        $menuLeft.toggleClass("cbp-spmenu-open");
    });

});