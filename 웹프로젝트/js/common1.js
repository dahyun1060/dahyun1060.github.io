$(function() {
    $("#menuimg1").click(function(e) {
        $("#foodmenu").animate({width:"1150px"}, 500);
        e.preventDefault();
    });
    $("#menuimg2").click(function(e) {
        $("#foodmenu").animate({width:"195px"}, 500);
        e.preventDefault();
    });
    $("#firstbtn").click(function(e){
        $("#firstbtn").text("●")
        $("#secondbtn").text("○");
        $("#thirdbtn").text("○");
        $("#firstlist").fadeIn("slow");
        $("#secondlist").fadeOut("slow");
        $("#thirdlist").fadeOut("slow");
        e.preventDefault();
    });  
    $("#secondbtn").click(function(e){
        $("#secondbtn").text("●")
        $("#firstbtn").text("○");
        $("#thirdbtn").text("○");
        $("#secondlist").fadeIn("slow");
        $("#firstlist").fadeOut("slow");
        $("#thirdlist").fadeOut("slow");
        e.preventDefault();
    });
    $("#thirdbtn").click(function(e){
        $("#thirdbtn").text("●")
        $("#secondbtn").text("○");
        $("#firstbtn").text("○");
        $("#thirdlist").fadeIn("slow");
        $("#secondlist").fadeOut("slow");
        $("#firstlist").fadeOut("slow");
        e.preventDefault();
    });
});