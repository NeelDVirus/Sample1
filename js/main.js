
$(document).ready(function(){

/*------------------------------------------------
--- PAGE-SCROLLING EFFECT ON HEADER COMPONENT -----
------------------------------------------------*/
 
 //encapsulating variables, associated with scroll event, in the object "scrolling"   
    var scrolling = {
        a : 9,
        b: 1,
        z: [0,1],
        $headerComponent : $(".header-wrapper"),

        funcInEvent1: function() {
            this.$headerComponent.removeClass("duringScroll-header");
            this.$navButton.removeClass("duringScroll-hamburger");
        },
        funcPreEvent1: function(){
            this.$navButton.removeClass("duringScroll-hamburger");
        },
        rough: function(){
            //this.z = this.a + this.b;
            var a = this.z; 
            console.log(a, $headerComponent);
        }
    };
//-------- End of "scrolling" object---------------

    //scrolling.$headerComponent = $(".header-wrapper");
    scrolling.$navButton = scrolling.$headerComponent.find(".nav-button.hamburger");
    scrolling.$previousPositionY = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolling.$previousPositionY) {            
            scrolling.$headerComponent.removeClass("unscrolled");
            scrolling.$navButton.addClass("duringScroll-hamburger");
            window.setTimeout(scrolling.funcPreEvent1.bind(scrolling), 400);
    }


    $(window).on("scroll", function(){            
        //window.setTimeout(scrolling.rough, 200);
        var z = 56;
        //console.log(scrolling.$headerComponent);
        scrolling.$presentPositionY = window.pageYOffset || document.documentElement.scrollTop;

        if (!scrolling.$previousPositionY && scrolling.$presentPositionY) {            
            scrolling.$headerComponent.removeClass("unscrolled").addClass("duringScroll-header");
            scrolling.$navButton.addClass("duringScroll-hamburger");
            window.setTimeout(scrolling.funcInEvent1.bind(scrolling), 300);
        } else if (scrolling.$previousPositionY && !scrolling.$presentPositionY)  {
            scrolling.$headerComponent.addClass("unscrolled duringScroll-header");
            scrolling.$navButton.addClass("duringScroll-hamburger");
            window.setTimeout(scrolling.funcInEvent1.bind(scrolling), 300);
        } 

        scrolling.$previousPositionY = scrolling.$presentPositionY;        
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



/*i am stuck with the logic. 
in the scroll event i want the setTimeout method of excute when the condition is (the scroll position previously was `0` and then the present scroll position is not `0`)*/