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


    //이메일/멤버십 번호 멀티탭 구현
    $("#multiTabArea button").click(function(){
        
        //버튼 모두 초기상태로 만듦
        $("#multiTabArea button").css({
            "color" : "#666",
            "border" : "1px solid #aaa"
        });
        // 클릭한 버튼 스타일 적용
        $(this).css({
            "color" : "#3289e8",
            "border" : "1px solid #3289e8",
            "border-bottom-color" : "#fff"
        });
        // 클릭하지 않은 버튼의 스타일 적용
        $(this).siblings("button").css({
            "border-bottom" : "1px solid #3289e8"
        });
        var txt = $(this).text();
        var placeholderTxt;
        if(txt == '이메일') {
            $(this).siblings("button").css({
                "border-bottom" : "1px solid #3289e8",
                "border-left": "none"
            });
            placeholderTxt = "E-mail";
        }else {
            $(this).siblings("button").css({
                "border-bottom" : "1px solid #3289e8",
                "border-right": "none"
            });
            placeholderTxt = "Membership Number";
        }
        // 사용자 아이디(이메일, 멤버십 번호) placeholder 적용
        // attr 메서드는 html 요소의 속성을 참조하는 기능
        // js에서 참조한다는 말은 값을 입력, 조회, 수정, 삭제 한다는 것을 의미
        $("#userId").attr("placeholder", placeholderTxt);

        // var txt = $(this).text();
        // var cssAttr;
        // var placeholderTxt;
        // if(txt == '이메일') {
        //     cssAttr = "border-left"
        //        placeholderTxt = "E-mail";
        // }else {
        //     cssAttr = "border-right"
        //     placeholderTxt = "Membership Number";
        // }
        // $(this).siblings("button").css({
        //     cssAttr : "none",
        //     "border-bottom" : "1px solid #3289e8"
        // });
    });
    // input outline
    
});