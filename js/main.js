let burger= document.querySelector(".burger");
let menu= document.querySelector(".menu");

burger.addEventListener("click", function(){
    menu.classList.toggle("active")
});

//Feature-menu-jquery
// $(".click").click(function() {
//     $(".bf1").toggle(200);
//     $("i").toggle(200);
    
// })

$(".feature:nth-of-type(1)").addClass("addActive");
$(".feature:nth-of-type(1) .bf1").show();

$(".click").click(function(){
    if ($(this).parent(".feature").hasClass("addActive")) {
        $(this).siblings(".bf1").slideToggle();
        $(this).parent(".feature").toggleClass("addActive");
    } else {
        $(".feature").removeClass("addActive");
        $(this).parent(".feature").addClass("addActive");
        $(".bf1").slideUp();
        $(this).siblings(".bf1").slideDown();
    }


    //$(".feature").removeClass("addActive"); // rajouter la class en scss en display : none et displat block
    //console.log($(".f1"))
    
    //$(this).parent(".feature").addClass("addActive");
    
    //$(this).siblings(".bf1").addClass("addActive");  //this, celui sur lequel j'ai cliquer
    //$(this).find(".ima i").addClass("addActive");
});



