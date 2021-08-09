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

    // 헤더 영역 Lnb 메뉴 하이라이트 효과
    $("#headerLnb a").mouseover(function(){
        $(this).siblings("span").css({"visibility" : "visible"});
    });
    $("#headerLnb a").mouseout(function(){
        $(this).siblings("span").css({"visibility" : "hidden"});
    });
});