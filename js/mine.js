let width=  $(".navbar").outerWidth(true);
var text1 = document.querySelector(".txt1");
var text2 = document.querySelector(".txt2");

$(".link").click(function (){


    let leftVal= $(".navbar").css("left");

    if(leftVal == "0px"){

        $(".navbar").animate({left:`-${width}`} , 500);

        text1.classList.replace("d-block" , "d-none");
        text2.classList.replace("d-none" , "d-block");
    }
    

    //1 close
    //2 open
    
else{
   
    $(".navbar").animate({left:"0px"} , 500);
    
    text1.classList.replace("d-none" , "d-block");
    text2.classList.replace("d-block" , "d-none");
}



  
});

//////////////////////////////////////////////////////

//===== close pic

let leftVal= $(".navbar").css("left");

let nav = document.querySelector(".navbar");

var closeIcon= document.querySelector(".fa-window-close");

closeIcon.addEventListener("click" , icon);

function icon(){
 
    if(leftVal == "0px"){

        $(".navbar").animate({left:`-${width}`} , 500)
    }
    else{
    
    $(".navbar").animate({left:"0px"} , 500)
    }

}





// //////////////////////////////////////////////////////////




$(".text h2").click(function(){
    $(".text p").toggleClass("d-none" , 1000);

   
});



// //////////////////////////////////////////////////////////

$(function () {
    var max = 100;
    $("textarea").keyup(function () {
        var length = $(this).val().length;
        var character = max - length;
        console.log(character)
        if (character <= 0) {
            $("#Rchar").text("your available character finished");
        } else {
            $("#Rchar").text(character);
        }
    });
});










// //////////////////////////////////////////////////////////





function countdown() {
    var now = new Date();
    var eventDate = new Date(2023, 1, 20);

    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
    document.getElementById("hours").innerHTML = "<h3>" + h + " h" + "</h3>";
    document.getElementById("minutes").innerHTML = "<h3>" + m + " m" + "</h3>";
    document.getElementById("seconds").innerHTML = "<h3>" + s + " s" + "</h3>";

    setTimeout(countdown);
}

countdown();



$(document).ready(function () {
    $("#singers div:first").css("display", "block");
    $("#singers h3").click(function () {
        $(this).next().slideToggle(500);
        $("#singers div").not($(this).next()).slideUp(500);
    });
});


