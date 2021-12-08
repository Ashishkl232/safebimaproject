
// mainpage tab-script
$(document).ready(function(){
    $(".benefits-tab").addClass("tab-safe");
    $(".benefits-tab").click(function(){
        $(this).css({'background-color': '#05396e', 'color': '#fff'});
        $(".factors-tab").css({'background-color': '#fff', 'color': '#000'});
        $(".whatsin-tab").css({'background-color': '#fff', 'color': '#000'});
        $(".factors-tab").removeClass("tab-safe");
        $(".whatsin-tab").removeClass("tab-safe");
        $(this).addClass("tab-safe");
    });
    $(".factors-tab").click(function(){
        $(this).css({'background-color': '#05396e', 'color': '#fff'});
        $(".benefits-tab").css({'background-color': '#fff', 'color': '#000'});
        $(".whatsin-tab").css({'background-color': '#fff', 'color': '#000'});
        $(".benefits-tab").removeClass("tab-safe");
        $(this).addClass("tab-safe");
        $(".whatsin-tab").removeClass("tab-safe");
    });
    $(".whatsin-tab").click(function(){
        $(this).css({'background-color': '#05396e', 'color': '#fff'});
        $(".benefits-tab").css({'background-color': '#fff', 'color': '#000'});
        $(".factors-tab").css({'background-color': '#fff', 'color': '#000'});
        $(".factors-tab").removeClass("tab-safe");
        $(".benefits-tab").removeClass("tab-safe");
        $(this).addClass("tab-safe");
    });
});

$.get("header2.html", function(data){
    $("#head").replaceWith(data);
});

$.get("footer2.html", function(data){
    $("#footer").replaceWith(data);
});




      //content collaps script
      jQuery('document').ready(function($){
        $('.dropdown__top').click(function(){
            if ($(this).parent(".dropdown-one").hasClass("open")) {
                $(this).parent(".dropdown-one").removeClass("open");
                $(this).siblings(".dropdown__btm").slideUp(500);
            } else {
                $(".dropdown-one").removeClass("open");
                $(".dropdown-one .dropdown__btm").slideUp(500);
                $(this).parent(".dropdown-one").addClass("open");
                $(this).siblings(".dropdown__btm").slideDown(500);
            }
        })
    });




/*------------------------------------
  HT PreLoader
--------------------------------------*/
function preloader() {
    $('#ht-preloader').delay(0).fadeOut();
 };

 $(window).on('load', function() {
    preloader();
});



/*------------------------------------
  Video-popup-script
--------------------------------------*/
$(function () {
    $('#vidBox').VideoPopUp({
         backgroundColor: "#17212a",
         opener: "video1",
         maxweight: "340",
         idvideo: "v1"
     });
 });


 /*------------------------------------
 All page form mobile vershon show
 3 field only
--------------------------------------*/

$(document).ready(function(){

    $(".Continue").click(function(){

        name_val();
        email_check();
        mobileNo();
            if(name_val() == true && email_check() == true && mobileNo() == true) { 
                $(this).css("display","none");
                $(".mob-field-one").css("display","none");
                $(".mob-field-two").css("display","block");
                $(".back").css('display','-webkit-inline-box');
                $(".submit").css('display','-webkit-inline-box');
            }

    });

    $(".back").click(function(){
        $(this).css("display","none");
        $(".submit").css('display','none');
        $(".mob-field-one").css("display","block");
        $(".mob-field-two").css("display","none");
        $(".Continue").css('display','-webkit-inline-box');
    });


});


//  WOW FILES ========================================= 
     new WOW().init();
//  WOW FILES ========================================= 

//sticky header-->

    window.onscroll = function() {myFunction()};

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    }



//page scroll top   
$(document).ready(function() { //document ready start
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut(); 
        }
    }); 
    
//Scroll Top Icon 
    $('.scrollToTop').click(function() {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
});






//**************************** Form validation ********************************//


// 1) name validation //

    function name_val() {
        var cont_person = document.getElementById("if-name").value;
        var nameFirstCharec = cont_person.charAt(0);
        var Alpha = /^[a-zA-Z\s.,]*$/;
        var AlphaNumeric = /^[0-9]+$/;
        
        if(cont_person=='')
            {
                $("#name_div").append(" <span class='ValidationErrors' id='name_test'>  </span>");
                $("#name_test").html("Enter valid Name*");
                $('#if-name').addClass('ErrorField');
                return false;
            }
        else if (cont_person.match(AlphaNumeric))
            {
                $("#name_div").append(" <span class='ValidationErrors' id='name_test'>  </span>");
                $("#name_test").html("Enter valid Name*");
                $('#if-name').addClass('ErrorField');
                return false;
            }
        else if (nameFirstCharec == ' ')
            {
                $("#name_div").append(" <span class='ValidationErrors' id='name_test'>  </span>");
                $("#name_test").html("Enter valid Name*");
                $('#if-name').addClass('ErrorField');
                return false;
            }
        else if (cont_person.length<=2)
            {
                $("#name_div").append(" <span class='ValidationErrors' id='name_test'>  </span>");
                $("#name_test").html("Enter valid Name*");
                $('#if-name').addClass('ErrorField');
                return false; 
            }
        else if (cont_person.match(Alpha))
            {
                $('span.ValidationErrors:contains("Enter valid Name*")').remove();
                $('#if-name').removeClass('ErrorField');
                return true;
            }
    }

// 2) email validation //
    function email_check() {
        var emailch = document.getElementById("if-email").value;
        var emailcheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;

        if(emailch.match(emailcheck))
            {
                $('span.ValidationErrors:contains("Enter valid Email*")').remove();
                $('#if-email').removeClass('ErrorField');
                return true;
            }
        else if(emailch='')
            {
                $("#email_error").append(" <span class='ValidationErrors' id='email_test'>  </span>");
                $("#email_test").html("Enter valid Email*");
                $('#if-email').addClass('ErrorField');
                return false;
            }
        else if(!(emailch.match(emailcheck)))
            {
                $("#email_error").append(" <span class='ValidationErrors' id='email_test'>  </span>");
                $("#email_test").html("Enter valid Email*");
                $('#if-email').addClass('ErrorField');
                return false;   
            }
    }

// 3) Mobile-Number validation //

    function mobileNo() {
        var mobile = document.getElementById("if-phone").value;
        var FirstCharec = mobile.charAt(0);

        if(mobile=='')
            {
                $("#mobile_error").append(" <span class='ValidationErrors' id='mobile_test'>  </span>");
                $("#mobile_test").html("Enter valid Mobile No*");
                $('#if-phone').addClass('ErrorField');
                return false;
            }
        else if(mobile.length !=10)
            {
                $("#mobile_error").append(" <span class='ValidationErrors' id='mobile_test'>  </span>");
                $("#mobile_test").html("Enter valid Mobile No*");
                $('#if-phone').addClass('ErrorField');
                return false;
            }
        else if(isNaN(mobile))
            {
                $("#mobile_error").append(" <span class='ValidationErrors' id='mobile_test'>  </span>");
                $("#mobile_test").html("Enter valid Mobile No*");
                $('#if-phone').addClass('ErrorField');
                return false;
            }
        else if(mobile.indexOf(' ')>0)
            {
                $("#mobile_error").append(" <span class='ValidationErrors' id='mobile_test'>  </span>");
                $("#mobile_test").html("Enter valid Mobile No*");
                $('#if-phone').addClass('ErrorField');
                return false;
            }
        else if(FirstCharec == "6" || FirstCharec == "7" || FirstCharec == "8" || FirstCharec == "9" )
            {
                $('span.ValidationErrors:contains("Enter valid Mobile No*")').remove();
                $('#if-phone').removeClass('ErrorField');
                $(".mobile_button_div").show();
                return true;
            }
        else 
            {
                $("#mobile_error").append(" <span class='ValidationErrors' id='mobile_test'>  </span>");
                $("#mobile_test").html("Enter valid Mobile No*");
                $('#if-phone').addClass('ErrorField');
                return false;
            }
    }


// 4) city validation //

    function check_selected_city(){
        var city_test = document.getElementById("if-State").value;

        if(city_test == 'test_city')
            {
                $('#city_test').append(" <span class='ValidationErrors' id='in_test_state'> </span>");
                $('#if-State').addClass('ErrorField');
                $("#in_test_state").html("select State*");
                return false;
            }
        else if(city_test != 'test_city' )
            {
                $('span.ValidationErrors:contains("select State*")').remove();
                $('#city_test').removeClass('ValidationErrors');
                $('#if-State').removeClass('ErrorField');
                return true;
            }
    }


// 5) Age validation //
    function check_selected_age(){
        var age_test = document.getElementById("if-age_age").value;

       if(age_test == 'test_age')
            {
                $('#age_test').append(" <span class='ValidationErrors' id='in_test_age'> </span>");
                $('#if-age_age').addClass('ErrorField');
                $("#in_test_age").html("select Age*");
                return false;
            }
        else if(age_test != 'test_age')
            {
                $('span.ValidationErrors:contains("select Age*")').remove();
                $('#age_test').removeClass('ValidationErrors');
                $('#if-age_age').removeClass('ErrorField');
                return true;
            }
    }


// 6) Income validation //

    function check_selected_income() {
        var income_test = document.getElementById("income_id").value;
        
        if(income_test == 'test_income')
            {
                $('#income_test').append(" <span class='ValidationErrors' id='in_test'> </span>");
                $('#income_id').addClass('ErrorField');
                $("#in_test").html("select Income*");
                return false;
            }
        else if (income_test != 'test_income')
            {
                $('span.ValidationErrors:contains("select Income*")').remove();
                $('#income_test').removeClass('ValidationErrors');
                $('#income_id').removeClass('ErrorField');
                return true;
            }
    }



// 7) Product Validation
 
function check_selected_product() {
    var product_test = document.getElementById("product_id").value;

    if(product_test == 'test_product')
       {
           $('#product_test').append(" <span class='ValidationErrors' id='in_test_product'> </span>");
           $('#product_id').addClass('ErrorField');
           $("#in_test_product").html("select Product*");
           return false;
       }
   else if (product_test != 'test_product')
       {
           $('span.ValidationErrors:contains("select Product*")').remove();
           $('#product_test').removeClass('ValidationErrors');
           $('#product_id').removeClass('ErrorField');
           return true;
       }

}