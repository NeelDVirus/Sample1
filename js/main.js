$(document).ready(function(){

/*------------------------------------------------
----------   MOBILE-MENU__ HAMBURGER-ICON    ----------
------------------------------------------------*/
    var $hamburger = $(".nav-button");    
    $hamburger.on("click", function(e){
        $hamburger.toggleClass("is-active");
    });


/*------------------------------------------------
--- TRIGGERING__ HAMBURGER-ICON__MOBILE-MENU -----
------------------------------------------------*/
    var $menuLeft = $("#cbp-spmenu-s1");
    var $showLeft = $("#showLeft");
    $showLeft.on("click", function(e){
        $menuLeft.toggleClass("cbp-spmenu-open");
    });

});