$(function(){
    $(".subMenu").css({"display" : "none"});
    $(".mainLi").mouseover(function(){
        $(this).children("ul").stop().show();
        $("div#subMenuBG").css({"display" : "block"});
    });
    $(".mainLi").mouseout(function(){
        $(this).children("ul").stop().hide();
        $("div#subMenuBG").css({"display" : "none"});
    });
});