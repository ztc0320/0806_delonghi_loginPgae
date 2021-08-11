[드롱기 로그인페이지 URL]
https://www.delonghivip.co.kr/Login/login


[작업관련사항]
1. 홈디렉토리 및 관련 구성요소는
   모두 작업자가 임의지정합니다.
2. 작업에 필요한 자료는 드롱기 홈페이지
   개발자도구에서 다운로드 받습니다.

    <!-- 점검용 임시코드 -->
        <style>
            div#temp > div {
                width: 160px;
                align-items: center;
                border: 1px solid #f80;
            }
            div#temp > div:hover span:last-child {
                color: #08f;
            }
            div#temp > div:hover span:first-child {
                background-color: #08f;
                background-image : url(images/icon01_on.png);
            }
            div#temp span:first-child {
                margin-right: 10px;
                /* border: 1px solid #000; */
                width: 80px;
                height: 80px;
                border-radius: 40px;
                background-image: url(images/icon01.png);
                background-size: 35px 27px;
                background-repeat: no-repeat;
                background-position: center;
                display: inline-block;
            }
        </style>
        <div id="temp" style="width: 400px; margin: 400px auto; border: 1px solid #000; padding: 40px">
            <div class="flexContainer">
                <span></span>
                <span>아이디 찾기</span>
            </div>
        </div>
        <!-- 점검용 임시코드 -->