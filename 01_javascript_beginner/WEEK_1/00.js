[왕초보] 웹개발 종합반 - 1주차
[수업 목표]
웹의 작동 원리와 웹을 개발하기 위해 배워야 할 것을 알 수 있다.
웹의 뼈대인 HTML과 꾸미기인 CSS를 이해하고 사용할 수 있다.
부트스트랩을 활용하여 웹을 다양하게 구현할 수 있다.
[목차]
01. 1주차 오늘 배울 것
02. 웹 브라우저 작동 원리
03. 코딩 환경 세팅하기
04. HTML 기초
05. 로그인 페이지 만들기
06. CSS 기초
07. 자주 쓰는 CSS 1
08. 자주 쓰는 CSS 2
09. [구글폰트]잘 가져다 쓰기
10. [부트스트랩]잘 가져다 쓰기
11. [추억앨범]프로젝트 1
12. [추억앨범]프로젝트 2
13. 1주차 끝 숙제 설명
HW. 1주차 숙제 해설
💡
모든 토글을 열고 닫는 단축키
Windows : Ctrl + alt + t 
Mac : ⌘ + ⌥ + t 
01. 1주차 오늘 배울 것 
✔️
1주차에 어떤 내용을 배울지 알아 봅시다!
우리가 배울 것
😐
웹은 개발의 기초입니다
웹은 개발을 입문할 때 배우는 개발의 기초라고 할 수 있습니다!
앱 개발자도, 게임 개발자도 처음에는 웹으로 시작한다고 할 수 있죠!
💁
그러면 웹(Web)이란 무엇 인지부터 빠르게 시작해 볼까요?
우리가 1~5주차에 배울 순서!
1주차: HTML, CSS, Bootstrap 
🔥
1주차는 HTML과 CSS를 배우는 과정! 뼈대와 꾸미기에 해당해요!
1주차에서는 HTML과 CSS에 대해서 배울 거예요!
이 두 개를 배우면 브라우저에서 우리 눈에 보이는 웹의 뼈대를 만들 수 있어요!
웹을 쉽게 꾸밀 수 있는 부트스트랩도 활용해볼 거예요!
주로 배울 내용은 HTML, CSS 에요!

2주차: Bootstrap, Javascript 
🔥
2주차에는 Javascript 기초문법과 움직이기를 배워볼 거예요!
2주차에는 Javascript를 중심적으로 배울 거예요!
자바스크립트를 통해서 웹을 움직이게 만들 거예요!
자바스크립트를 배우면, 요청해서 받아온 데이터를 브라우저에 붙여 보여줄 수 있어요!
HTML 파일이나 데이터가 바뀔 때마다 맞는 데이터를 보여줘야겠죠?
주로 배울 내용은 Javascript에요!

3주차: JQuery, fetch 
🔥
3주차에는 JQuery, fetch 을 익혀볼 거예요!
3주차에는 JQuery와 fetch를 중심적으로 배울 거예요!
JQuery와 Fetch를 이용해 요청을 브라우저에 보여줄 수 있게 문법을 배워봐요!
먼저 문법을 연습하고, 라이브러리를 활용하여 데이터를 쫙 가져와 보겠습니다.
주로 배울 내용은 jQuery, fetch에요!
4주차: firebase project 1
🔥
4주차에는 서버를 만들어봅니다! 나만의 웹 서비스를 만들 거예요!
파이어베이스에 연동하여, 프로젝트1, 2를 완성해보죠! 굉장히 재미있을 거예요!
Firestore Database를 통해 데이터를 데이터베이스에 넣고 가져와 볼 거예요.
Javascript Firestore Database Firebase를 모두 활용해요!
🤔
나중에 또 이야기하겠지만 헷갈리면 안되는 것! 미리 알려드려요!- 
원래는 요청하는 클라이언트와 요청받은 데이터를 돌려주는 서버는 다른 컴퓨터예요! 
5주차: firebase project 2, Github, Python 
🔥
마지막 5주차에는 프로젝트를 최종 완성하고 배포까지 해볼 거예요!
지금까지 고생하며 만들어 왔던 프로젝트를 실제로 배포해 봅시다! 
아주 쉽게 내 컴퓨터를 꺼도 웹서비스를 써볼 수 있도록 할 거예요. 대단하죠! 네이버처럼 진짜 웹서비스가 나오는 거예요!
지금까지 배운 내용 모두를 총 동원해서 웹서비스 배포까지 AtoZ!
마지막으로 파이썬을 조금 맛볼 거예요! 
최종 결과물 구경하기


02. 웹 브라우저 작동 원리 
✔️
웹의 동작 개념에 대해 배워 봅시다!
서버/클라이언트
👀
크롬 창에서 보이는 웹 페이지는 어떤 원리로 보여지는 것일까요?

네이버를 한 번 해킹해 봅시다!
네이버로 접속해봅시다!
같이 한 번 해볼까요? 네이버에서 뉴스스탠드라고 쓰인 곳을 한번 스파르타라고 바꿔볼게요!
뉴스스탠드 부분에 마우스 오른쪽 클릭을 눌러 검사 탭을 열어주세요!

오른쪽에 뜨는 것은 개발자 도구예요! 개발자 도구에서 뉴스스탠드라고 쓰여있는 부분을 더블클릭하고 스파르타라고 바꿔쓰고 엔터를 눌러볼까요?


🤔
앗! 뉴스스탠드가 스파르타로 바뀌었어요! 우리가 네이버를 해킹한 걸까요?
웹의 동작 개념
😎
브라우저의 역할은 1. 요청을 보내고, 2. 받은 HTML 파일을 그려주는 것
브라우저는 그려주는 역할
요청은 어디에 보내는 거죠?
그럼 항상 HTML 파일로 돌려주나요?
03. 코딩 환경 세팅하기 
✔️
본격적으로 시작 전에 개발 환경 세팅해 보아요!
VS Code란?
🤗
VS Code(Visual Studio Code)는 마이크로소프트 사에서 개발한 코드 에디터예요!
VS Code는 코딩하는데 효율적인 프로그램이죠.

우리가 문서 작업을 할 때 한글, 
데이터 작업을 할 때 엑셀을 쓰는 것처럼 
코딩을 할 때 코드 에디터 VS Code를 사용한답니다!
😁
VS Code가 없으면 코딩 못하나요?

메모장으로도 할 수 있긴 하지만….엄청 힘들죠
편리한 도구를 사용해봐요!!
☑️ 메모장으로도 코딩을 할 수 있어요! 하지만 코딩은 한 번에 뚝딱 만들어지는 것이 아니기 때문에 우리는 자주 자주 코딩한 내용을 바탕으로 확인해줘야 한답니다!
☑️ VS Code가 제공하는 다양한 기능을 사용하면서 코딩하는 것이 눈에 보기도 쉽고, 편해요!
VS Code 설치
1) Window 환경
[📌 다운로드 링크] Window(exe)
[코드스니펫] VS Code - Window 다운로드
2) Mac 환경
[📌다운로드 링크] MacOS(dmg) → 인텔 칩을 사용하시는 맥 사용자 분은 이쪽!
[📌다운로드 링크] MacOS Apple Silicon(dmg) → m1, m2 칩을 사용하시는 분은 이쪽!
내 맥 환경 알아보기(인텔, 애플실리콘)
[코드스니펫] VS Code - Mac 다운로드(인텔)
[코드스니펫] VS Code - Mac 다운로드(애플 실리콘)
Open In Browser 설치
😎
실시간으로 코드를 확인할 수 있는 VS Code의 확장 기능이에요!
VS Code를 실행해서 화면 왼쪽의 퍼즐 모양의 아이콘(Extension)을 클릭해 열어주세요!
검색창에 ‘live server’라고 검색하시면 아래와 같은 아이콘의 이미지가 나와요!
install을 눌러 설치해주세요! 

VS Code 한국어 팩 설치
extensions 클릭

korean 타이핑 하기

설치하기

04. HTML 기초
✔️
웹의 뼈대인 HTML에 대해서 알아 봅시다!
폴더 및 파일 만들기
바탕화면에서 sparta 폴더 만들기
sparta 폴더 안에 frontend 폴더 만들기
frontend 폴더 안에 tags.html 파일 만들기

HTML과 CSS의 개념
😎
html은 웹페이지에서 뼈대를 담당합니다.
HTML은 웹의 뼈대를 잡아주는 구역을 나타내는 코드입니다! 웹의 전반을 HTML을 통해서 작성할 수 있습니다!
CSS는 HTML을 통해 작성된 뼈대를 예쁘게 꾸며주는 코드입니다!
하지만 CSS를 잘 사용할 줄 아는 것과 '예쁘게' 만드는 것은 다른 영역이기 때문에(붓을 잡을 줄 아는 것과 그림을 잘 그릴 줄 아는 것의 차이), 많은 경우 웹디자이너나 퍼블리셔에게 의존하게 됩니다.
HTML 기초
😐
일단 우리가 만들 뼈대를 만들어 봅시다!
VS Code에서 html 파일을 만드시고, 코드를 적는 공간에 html이라고 적어보세요!
자동완성 항목에 html:5 라고 있습니다! 클릭해주세요!

그러면 짠! html 뼈대가 쉽게 만들어집니다!

코드화면에서 우클릭 ▶ Open In Default Browser 클릭! 

이것저것 바꾸면서 한 번 확인해봅시다!
title이라고 써 있는 곳 안의 글씨를 바꿔 봅시다! 어떻게 되나요?
body라고 써 있는 곳 안의 글씨를 써봅시다! 어떻게 되나요?
😲
HTML친구는 크게 <head> 영역과 <body>영역으로 이루어져 있어요.
head안에는 페이지의 속성 정보를, body안에는 페이지의 내용을 담습니다.
😎
head에서는 페이지의 속성을 정의하거나, 필요한 스크립트들을 부릅니다. 
즉, 눈에 안 보이는 필요한 것들을 담는 것. 
나중에 body 작업을 하면서 필요한 정보들을 넣어보겠습니다.
head 안에 들어가는 대표적인 요소들: meta, script, style, link, title 등
body 안에 들어가는 대표적인 요소들: span, img, input, textarea 등 
[코드스니펫] HTML tag기초
HTML
복사
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>스파르타코딩클럽 | HTML 기초</title>
</head>

<body>
    <!-- 구역을 나누는 태그들 -->
    <div>나는 구역을 나누죠</div>
    <p>나는 문단이에요</p>
    <ul>
        <li> bullet point!1 </li>
        <li> bullet point!2 </li>
    </ul>

    <!-- 구역 내 콘텐츠 태그들 -->
    <h1>h1은 제목을 나타내는 태그입니다. 페이지마다 하나씩 꼭 써주는 게 좋아요. 그래야 구글 검색이 잘 되거든요.</h1>
    <h2>h2는 소제목입니다.</h2>
    <h3>h3~h6도 각자의 역할이 있죠. 비중은 작지만..</h3>
    <hr>
    span 태그입니다: 특정 <span style="color:red">글자</span>를 꾸밀 때 써요
    <hr>
    a 태그입니다: <a href="http://naver.com/"> 하이퍼링크 </a>
    <hr>
    img 태그입니다: <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
    <hr>
    input 태그입니다: <input type="text" />
    <hr>
    button 태그입니다: <button> 버튼입니다</button>
    <hr>
    textarea 태그입니다: <textarea>나는 무엇일까요?</textarea>
</body>

</html>
​
👀
이 외에도 아주 많지만, 개발자들도 모두 외우고 있지 않습니다! 
필요할 때마다 찾아서 사용합시다
코드 정렬
📌
잠깐! 정렬의 중요성
코드의 정렬이 제대로 되어있지 않으면, 코드의 생김새를 파악할 수 없어 오류를 해결하기가 무척 어려워집니다. 
✔️
Format Document(문서 서식)
VS Code에서 Shift + Alt + F (맥은 Shift + Option + F) 로 자동정렬 기능을 사용해보세요!
05. 로그인 페이지 만들기
✔️
간단한 로그인 페이지 만들어 보아요!
간단한 로그인 페이지 만들기
👀
힌트: 위의 HTML기초에서 봤던 코드들을 적절히 조합해보세요!
ctrl+c,v 사용해보세요!

login.html 파일 만들기

기본 코드가 없다면?
VS Code에서 html 파일을 만드시고, 코드를 적는 공간에 !이라고 적어보세요!
자동완성 항목에 ! 라고 있습니다! 클릭해주세요!

🤔
어때요, 할만했나요? 다만 조금씩 다른 방법으로 해결하셨더라도,
다음 강의 진행을 위해 아래 코드를 복사→붙여넣기 해주세요!
[완성코드] login.html
JavaScript
복사
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>로그인페이지</title>
	</head>
	<body>
		<h1>로그인 페이지</h1>
		<p>ID: <input type="text"/></p>
		<p>PW: <input type="text"/></p>
		<button>로그인하기</button>
	</body>
</html>
​
06. CSS 기초
✔️
뼈대를 꾸미는 CSS 기초에 대해 알아보아요!
HTML 부모와 자식 구조
😎
html 태그는 "누가 누구 안에 있느냐"를 이해하는 것이 가장 중요합니다. 
나를 감싸고 있는 태그가 바뀌면, 그 안의 내용물도 모두 영향을 받지요!
빨간색 div 안에, 초록색/파란색 div가 들어있습니다. 
아래와 같은 상황에서 빨간색 div를 가운데로 옮기면, 내용물인 초록/파란 div도 모두 함께 이동하겠죠!
즉, 박스를 옮기면 안의 내용물도 함께 옮겨지는 것과 같은 원리입니다.
같은 원리로 초록 div의 글씨 색을 바꾸면, [나는 버튼1]의 글씨 색도 바뀐답니다!

CSS 기초
✔️
꾸미기 위해서는 지칭할 수 있는 대상이 중요합니다!
CSS는 어떻게 사용하나요?
😎
<head>…..</head> 안에 <style>…..</style>로 공간을 만들어 작성합니다.
아래 코드를 통해 간단한 사용 방법을 알아봅니다.

mytitle라는 클래스를 가리킬 때,
.mytitle { } 라고 써줘야 하는 것을 꼭! 기억하세요!
모든 CSS들을 다 알 수는 없겠죠? 오늘 쓰는 것만 알아도 좋아요!
나머지는 검색해서 쓰시면 된답니다!
예를 들어.. “CSS 모서리 둥글게”
👀
배경관련
background-color
background-image
background-size

사이즈
width
height

폰트
font-size
font-weight
font-family
color

간격
margin
padding
[완성코드] 로그인 페이지 꾸미기
Python
복사
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .mytitle {
            color: red;
            font-size: 40px;
        }

        .mybtn {
            font-size: 12px;
            color: white;
            background-color: green;
        }

        .mytxt {
            color: red;
        }
    </style>
</head>

<body>
    <h1 class="mytitle">로그인 페이지</h1>
    <p class="mytxt">ID: <input type="text" /></p>
    <p class="mytxt">PW: <input type="text" /></p>
    <button class="mybtn">로그인하기</button>
</body>

</html>
​
07. 자주 쓰는 CSS 1
✔️
로그인 페이지를 더 이쁘게 꾸며 봅시다!
자주 쓰이는 CSS 연습하기 
👀
[연습할 내용들]

h1, h5, background-image, background-size, background-position
color, width, height, border-radius, margin, padding

☑️ 꼭 기억 할 것! 박스는 div(구역) 이다!
☺️
margin과 padding     
→ margin은 바깥 여백을, padding은 내 안쪽 여백을
→ div에 색깔을 넣고, 직접 사용해서 차이를 비교해보세요!
[코드스니펫] 이미지URL
HTML
복사
https://www.ancient-origins.net/sites/default/files/field/image/Agesilaus-II-cover.jpg
​
[완성코드] 로그인 화면 만들기
HTML
복사
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .mytitle {
            width:300px;
            height:200px;

            color: white;
            text-align: center;

            padding-top: 30px;
            border-radius: 8px;

            background-image: url('https://www.ancient-origins.net/sites/default/files/field/image/Agesilaus-II-cover.jpg');
            background-position: center;
            background-size: cover;
        }
    </style>
</head>
<body>
    <div class="mytitle">
        <h1>로그인 페이지</h1>
        <h5>아이디, 비밀번호를 입력해주세요</h5>
    </div>
    <p>ID : <input type="text" /></p>
    <p>PW : <input type="text" /></p>
    <button>로그인하기</button>
</body>
</html>
​
08. 자주 쓰는 CSS 2
✔️
로그인 페이지를 가운데로 옮겨 봅시다!
만들어둔 로그인 페이지를 가운데로 가져오려면?
😎
박스 씌우고 → 양쪽 여백 조정하기
즉, 전체 div를 만들고, width를 주고, margin: auto를 사용하자!

[완성 코드] 로그인 화면 가운데로 옮기기 
HTML
복사
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .mytitle {
            background-color: green;

            width: 300px;

            border-radius: 10px;
            color: white;

            text-align: center;

            padding: 30px 0px 0px 0px;

            background-image: url('https://www.ancient-origins.net/sites/default/files/field/image/Agesilaus-II-cover.jpg');
            background-position: center;
            background-size: cover;
        }
        .wrap {
            width: 300px;
            margin: 20px auto 0px auto;
        }
    </style>
</head>

<body>
    <div class="wrap">
        <div class="mytitle">
            <h1>로그인 페이지</h1>
            <h5>아이디, 비밀번호를 입력하세요</h5>
        </div>
        <p>ID : <input type="text" /></p>
        <p>PW : <input type="text" /></p>
        <button>로그인하기</button>
    </div>
</body>

</html>
​
09. [구글폰트]잘 가져다 쓰기
✔️
폰트를 적용하는 방법을 알아 봅시다!
window/mac 공통 웹 폰트 사용법 영상
구글 폰트 적용하기 
구글 폰트
😎
구글 폰트를 사용해 내가 원하는 폰트로 바꿔봅시다!
크롬 브라우저에서 google fonts를 검색합니다!
[코드스니펫] 구글 폰트
JavaScript
복사
https://fonts.google.com/?subset=korean
​
옵션에서 language를 korean으로 변경해 줍니다! 

원하는 폰트를 클릭!

스크롤을 내려 폰트 두께를 결정해서 select (폰트두께)를 클릭합니다!

화면 오른쪽의 아이콘을 클릭하여 공유 화면을 열어주세요!

아래와 같은 이미지가 뜨면 코드를 가져다 쓰는 것으로 적용할 수 있게 됩니다!

오른쪽의 Use On Web 탭에서 import 버튼을 클릭합니다!

<style></style> 태그 안에 묶인 코드만 복사해서 style 태그 안에 넣습니다!
CSS
복사
@import url('https://fonts.googleapis.com/css2?family=Hahmlet:wght@300&display=swap');
​
CSS rules to specify families 탭의 코드를 복사한 후, 전체 적용(*{})을 css에 넣으면 완성!
CSS
복사
* {
	font-family: 'Hahmlet', serif;
}
​
10. [부트스트랩]잘 가져다 쓰기
✔️
부트스트랩(Bootstrap)을 연습해 봅시다!
부트스트랩이란?
😎
부트스트랩이란? 예쁜 CSS를 미리 모아둔 것 !
CSS를 다룰 줄 아는 것과 미적 감각을 발휘하여 예쁘게 만드는 것은 다른 이야기이기 때문에, 현업에서는 미리 완성된 부트스트랩을 가져다 쓰는 경우가 많습니다!
우리도 부트스트랩을 가져와서 빠르고 예쁘게 만들어볼까요?
[추억앨범] 환경 세팅 
✔️
부트스트랩을 활용하여 첫 번째 프로젝트 추억 앨범을 만들어 볼 거예요! 
sparta폴더 안에 album 폴더를 만듭시다!
album안에 index.html을 만든 후 템플릿을 넣어 주세요!
😃
남이 미리 작성한 CSS를 불러와 내 HTML 파일에 사용하기 위해서는 설정을 해야 합니다! 이러한 설정을 통해 Bootstrap 라이브러리의 CSS의 기능을 사용할 수 있게 됩니다.
해당 코드를 <head> 안에 넣어주세요!
[코드스니펫] 부트스트랩 CDN
HTML
복사
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
​
[코드스니펫] 부트스트랩 버튼
JavaScript
복사
https://getbootstrap.com/docs/5.3/components/buttons/
​
HTML
복사
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
​
11. [추억앨범]프로젝트 1
✔️
지금까지 배운 내용과 부트스트랩을 활용하여 첫 프로젝트를 만들어 봅시다! 
상단 만들기 
👀
최종적으로 만들 것 구경하기!

[코드스니펫] 추억앨범 배경사진
JavaScript
복사
https://images.unsplash.com/photo-1511992243105-2992b3fd0410?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80
​
[완성코드] 추억앨범 상단 
JavaScript
복사
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

    <title>My Album</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');

        * {
            font-family: 'Gowun Dodum', sans-serif;
        }

        .mytitle {
            color: white;

            height: 250px;

            /* 내용물을 정렬 */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-image: url('https://images.unsplash.com/photo-1511992243105-2992b3fd0410?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
            background-position: center;
            background-size: cover;
        }

        .mytitle > button {
            width: 150px;
            height: 50px;
            background-color: transparent;
            border: none;
            color: white;
            font-size: 18px;
            font-weight: bold;
            border-radius: 5px;

            border: 1px solid white;
            margin-top: 20px;
        }

  
    </style>
</head>

<body>
    <div class="mytitle">
        <h1>나만의 추억 앨범</h1>
        <button>추억 저장하기</button>
    </div>
</body>

</html>
​
카드 추가하기 
😎
남이 만들어 둔 것을 쓸 때는 잘 찾아다가 조금씩만 고쳐서 쓰는 게 답입니다!

카드 복사해서 붙여넣기
[코드스니펫] 카드 붙여 넣기
JavaScript
복사
https://getbootstrap.com/docs/5.3/components/card/
​
Card 카테고리에서 맨 마지막에 있는 Card 를 선택!
이미지 넣고, 개수 조절하기
[코드스니펫] 포스터 이미지
C#
복사
https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80
​
row-cols-md-3 g-4 → row-cols-md-4 g-4 로 바꾸기
→ 한 줄에 3개에서 4개로 보여주겠다는 것을 의미
카드 내용 변경해보기 
앨범 제목, 앨범 내용, 앨범 날짜 등으로 내용 변경하기!
여기까지 완성 코드!
[완성코드] 추억앨범 카드 
JavaScript
복사
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

    <title>My Album</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');

        * {
            font-family: 'Gowun Dodum', sans-serif;
        }

        .mytitle {
            background-color: green;
            color: white;

            height: 250px;

            /* 내용물을 정렬 */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://images.unsplash.com/photo-1511992243105-2992b3fd0410?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
            background-position: center;
            background-size: cover;
        }

        .mytitle > button {
            width: 150px;
            height: 50px;
            background-color: transparent;
            border: none;
            color: white;
            font-size: 18px;
            font-weight: bold;
            border-radius: 5px;

            border: 1px solid white;
            margin-top: 20px;
        }

        .mycards {
            margin: 20px auto 20px auto;
            width: 1200px;
        }
    </style>
</head>

<body>
    <div class="mytitle">
        <h1>나 만의 추억 앨범</h1>
        <button>추억 저장하기</button>
    </div>


    <div class="mycards">
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <div class="card h-100">
                    <img src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">앨범 제목</h5>
                        <p class="card-text">앨범 내용</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">앨범 날짜</small>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">앨범 제목</h5>
                        <p class="card-text">앨범 내용</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">앨범 날짜</small>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">앨범 제목</h5>
                        <p class="card-text">앨범 내용</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">앨범 날짜</small>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">앨범 제목</h5>
                        <p class="card-text">앨범 내용</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">앨범 날짜</small>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </div>

</body>

</html>
​
12. [추억앨범]프로젝트 2
✔️
추억 앨범을 포스팅 박스를 만들어 봅시다!
포스팅 박스 만들기

👀
아래 순서대로 만들어보세요!
우선 큰 박스 먼저 만들기 (함께)
그림자 효과: box-shadow: 0px 0px 3px 0px blue;
안쪽으로 띄우기: padding: 20px;
앨범 이미지, 앨범 제목, 앨범 날짜
Forms 의 Floating Labels 참고
앨범 내용 
Forms 의 Floating Labels의 Textareas 참고
기록하기
Buttons의 Variants 참고
[완성코드] 추억앨범 포스팅 박스
HTML
복사
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>


    <title>My Album</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');

        * {
            font-family: 'Gowun Dodum', sans-serif;
        }

        .mytitle {
            background-color: green;
            color: white;

            height: 250px;

            /* 내용물을 정렬 */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-image: url('https://images.unsplash.com/photo-1511992243105-2992b3fd0410?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
            background-position: center;
            background-size: cover;
        }

        .mytitle > button {
            width: 150px;
            height: 50px;
            background-color: transparent;
            border: none;
            color: white;
            font-size: 18px;
            font-weight: bold;
            border-radius: 5px;

            border: 1px solid white;
            margin-top: 20px;
        }

        .mycards {
            margin: 20px auto 20px auto;
            width: 1200px;
        }

        .mypostbox {
            width: 500px;
            margin: 20px auto 20px auto;
            padding: 20px 20px 20px 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 3px 0px blue;
        }

        .mybtn {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            margin-top: 10px;
        }

        .mybtn>button {
            margin-right: 10px;
        }
    </style>
</head>

<body>
    <div class="mytitle">
        <h1>나만의 추억 앨범</h1>
        <button>추억 저장하기</button>
    </div>

    <div class="mypostbox">

        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">앨범 이미지</label>
        </div>

        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">앨범 제목</label>
        </div>

        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">앨범 날짜</label>
        </div>

        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">앨범 내용</label>
        </div>

        <div class="mybtn">
            <button type="button" class="btn btn-dark">기록하기</button>
            <button type="button" class="btn btn-outline-dark">닫기</button>
        </div>
    </div>

    <div class="mycards">
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <div class="card h-100">
                    <img src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">앨범 제목</h5>
                        <p class="card-text">앨범 내용</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">앨범 날짜</small>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">앨범 제목</h5>
                        <p class="card-text">앨범 내용</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">앨범 날짜</small>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">앨범 제목</h5>
                        <p class="card-text">앨범 내용</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">앨범 날짜</small>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">앨범 제목</h5>
                        <p class="card-text">앨범 내용</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">앨범 날짜</small>
                    </div>
                </div>
            </div>
        </div>
    </div>


</body>

</html>
​
13. 1주차 끝 숙제 설명
📖
반드시 숙제를 하고 넘어가야 같은 완성본을 만들 수 있어요!
숙제 설명
부트스트랩 Buttons 링크를 참고해서, 기록하기, 닫기 버튼을 파란색으로 바꿔보아요!
[코드스니펫] 부트스트랩 버튼
JavaScript
복사
https://getbootstrap.com/docs/5.3/components/buttons/
​
완성된 모습



HW. 1주차 숙제 해설
📌
정답 코드를 살펴보아요!
정답 코드
JavaScript
복사
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>


    <title>My Album</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');

        * {
            font-family: 'Gowun Dodum', sans-serif;
        }

        .mytitle {
            background-color: green;
            color: white;

            height: 250px;

            /* 내용물을 정렬 */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://images.unsplash.com/photo-1511992243105-2992b3fd0410?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
            background-position: center;
            background-size: cover;
        }

        .mytitle > button {
            width: 150px;
            height: 50px;
            background-color: transparent;
            border: none;
            color: white;
            font-size: 18px;
            font-weight: bold;
            border-radius: 5px;

            border: 1px solid white;
            margin-top: 20px;
        }

        .mycards {
            margin: 20px auto 20px auto;
            width: 1200px;
        }

        .mypostbox {
            width: 500px;
            margin: 20px auto 20px auto;
            padding: 20px 20px 20px 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 3px 0px blue;
        }

        .mybtn {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            margin-top: 10px;
        }

        .mybtn>button {
            margin-right: 10px;
        }
    </style>
</head>

<body>
    <div class="mytitle">
        <h1>나만의 추억 앨범</h1>
        <button>추억 저장하기</button>
    </div>

    <div class="mypostbox">

        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">앨범 이미지</label>
        </div>

        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">앨범 제목</label>
        </div>

        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">앨범 날짜</label>
        </div>

        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">앨범 내용</label>
        </div>

        <div class="mybtn">
            <button type="button" class="btn btn-primary">기록하기</button>
            <button type="button" class="btn btn-outline-primary">닫기</button>
        </div>
    </div>

    <div class="mycards">
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <div class="card h-100">
                    <img src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">앨범 제목</h5>
                        <p class="card-text">앨범 내용</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">앨범 날짜</small>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">앨범 제목</h5>
                        <p class="card-text">앨범 내용</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">앨범 날짜</small>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">앨범 제목</h5>
                        <p class="card-text">앨범 내용</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">앨범 날짜</small>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">앨범 제목</h5>
                        <p class="card-text">앨범 내용</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">앨범 날짜</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>