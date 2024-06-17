$(document).ready(function(){
    var count = 1;
    setInterval(function(){
        var margins = -count * 618;
        $("#imglist").animate({marginLeft: margins + "px"}, 1000);
        count++;
        if(count == 5)
            count = 0;
    }, 3000);
});

$(function() {
    $("#fs").click(function(e) {
        $("#ss").text("○");
        $("#ts").text("○");
        $(this).text("●");
        var posY = $($(this).attr("href")).position();
        $("html").animate({'scrollTop':posY.top -100}, 500);
        $("html,body").stop().animate({'scrollTop':posY.top -100}, 700);
        e.preventDefault();
    });
    $("#ss").click(function(e) {
        $("#fs").text("○");
        $("#ts").text("○");
        $(this).text("●");
        var posY = $($(this).attr("href")).position();
        $("html").animate({'scrollTop':posY.top -170}, 500);
        $("html,body").stop().animate({'scrollTop':posY.top -170}, 700);
        e.preventDefault();
    });
    $("#ts").click(function(e) {
        $("#ss").text("○");
        $("#fs").text("○");
        $(this).text("●");
        var posY = $($(this).attr("href")).position();
        $("html").animate({'scrollTop':posY.top -10}, 500);
        $("html,body").stop().animate({'scrollTop':posY.top -10}, 700);
        e.preventDefault();
    });
});