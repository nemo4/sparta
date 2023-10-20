[왕초보] 웹개발 종합반 - 3주차
[수업 목표]
Fetch로 서버 API에 데이터를 주고, 결과를 받아온다.
서버와 클라이언트 개념을 이해할 수 있다.
[목차]
01. 3주차 배울 것
02. [추억앨범] 제이쿼리 적용 1
03. [추억앨범] 제이쿼리 적용 2
04. [스파르타플릭스] 제이쿼리 적용 1
05. [스파르타플릭스] 제이쿼리 적용 2
06. 클라이언트 - 서버 개념 이해하기
07. Fetch 시작하기
08. Fetch 연습하기 1
09. Fetch 연습하기 2
10. Fetch 연습하기 3
11. [추억앨범] Fetch 적용
12. [스파르타플릭스] Fetch 적용
13. 3주차 끝 숙제 설명
HW. 3주차 숙제 해설
💡
모든 토글을 열고 닫는 단축키
Windows : Ctrl + alt + t 
Mac : ⌘ + ⌥ + t 
01. 3주차 배울 것 
✔️
jQuery + fetch 로 웹페이지 제어 마스터하기!
3주차 배울 내용
🤨
지난 시간 Javascript를 더 쉽게 조작할 수 있는 JQuery 에 대해 배웠죠?!
☑️ 3주차에는 JQuery 를 저희 프로젝트에 적용해 보는 시간을 가져 볼 거예요! 
☑️ Bootstrap기억나시나요? JQuery도 남들이 만든 코드 모음, 라이브러리예요!
😃
그리고 fetch에 대해서 배울 거예요! fetch가 뭐냐구요?

간단히 말하면, 'fetch'는 인터넷을 통해 데이터를 요청하고 받아오는 과정을 의미합니다.
☑️ Fetch는 짧은 코드로 데이터를 가져올 수 있어요! 가져온 데이터를 프로젝트에도 적용해 볼 겁니다! 
02. [추억앨범] 제이쿼리 적용 1
✔️
버튼을 클릭하여 PostBox 열고 닫는 법을 배워 볼 거예요!
PostBox 열고 닫기
👀
만들 것 구경하기!


🙂
"토글(toggle)"은 두 가지 상태 사이를 전환하는 동작을 의미합니다. 즉, 어떤 속성이나 상태를 켜거나 끄는 동작을 말합니다.
head 태그 안에 script 태그 만들기!
script 태그 안에 function 함수 작성
추억 저장하기 버튼에 onclick 작성
div안에 id 선택자 가져오기
.toggle() 메서드 작성
03. [추억앨범] 제이쿼리 적용 2
✔️
PostBox 에 입력한 내용에 따라 카드 생성하는 법을 배워 볼 거예요!
데이터 넣고 카드 생성하기
👀
만들 것 구경하기!


🙂
지금부터 포스팅박스에 적은 데이터를 토대로 카드를 생성해 볼 거예요! 
.val()은 JQuery 메서드 중 하나로 선택한 요소의 값을 가져오는 역할을 합니다.
[코드스니펫] 제주도 이미지
JavaScript
복사
https://www.agoda.com/wp-content/uploads/2020/04/Jeju-Island-hotels-things-to-do-in-Jeju-Island-South-Korea.jpg
​
script 태그안에 새로운 function 함수 작성
기록하기 버튼에 onclick 작성
div안에 id  선택자 가져오기
메서드 val을 통해 postbox에 값들 변수에 담기 
카드 html코드 변수에 담기
div안에 class 선택자 선택 후 append메서드
04. [스파르타플릭스] 제이쿼리 적용 1
✔️
PostBox 열고 닫는 법을 한번 더 복습해 봅시다!
PostBox 열고 닫기
👀
만들 것 구경하기!


🙂
"토글(toggle)"은 두 가지 상태 사이를 전환하는 동작을 의미합니다. 
즉, 어떤 속성이나 상태를 켜거나 끄는 동작을 말합니다.

🚩스스로 한번 해보시고 강의를 진행해 주세요!
head 태그 안에 script 태그 만들기!
script 태그 안에 function 함수 작성
영화 기록하기 버튼에 onclick작성
div안에 id 선택자 가져오기
.toggle() 메서드 작성
05. [스파르타플릭스] 제이쿼리 적용 2
✔️
카드 생성하는 법을 한번 더 복습해 봅시다!
데이터 넣고 카드 생성하기
👀
만들 것 구경하기!


🙂
추억앨범때 적은 데이터를 토대로 카드를 생성하는 방법 기억하시죠?
한번 스스로 만들어 봅시다!

.val()은 jQuery 메서드 중 하나로 선택한 요소의 값을 가져오는 역할을 합니다.
[코드스니펫] 태극기 휘날리며
script 태그안에 새로운 function 함수 작성
기록하기 버튼에 onclick 작성
div안에 id  선택자 가져오기
메서드 val을 통해 postbox에 값들 변수에 담기 
카드 html코드 변수에 담기
div안에 class 선택자 선택 후 append 메서드
06. 클라이언트 - 서버 개념 이해하기
✔️
클라이언트와 서버 개념에 대해 이해해 봅시다!
[서버→클라이언트]: JSON 이해하기
☑️ 서울시 OpenAPI에 접속해서 어떻게 생겼는지 구경해 봅시다!
[코드스니펫] 서울시 미세먼지 OpenAPI
HTML
복사
http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99
​
☑️ 크롬 익스텐션 JSONView를 설치해볼까요? 그럼 좀 더 예쁘게 JSON을 볼 수 있습니다.
[코드스니펫] Jsonview
HTML
복사
https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=ko
​
👉
JSON은 Key:Value로 이루어져 있습니다. 자료형 Dictionary와 아주 유사하죠! 

위 예제에서는 RealtimeCityAir라는 키 값에 딕셔너리 형 value가 들어가 있고,
그 안에 row라는 키 값에는 리스트형 value가 들어가 있습니다.

[클라이언트→서버]: GET 요청 이해하기
👉
API는 은행 창구와 같은 것!

같은 예금 창구에서도 개인 고객이냐 기업 고객이냐에 따라
가져와야 하는 것 / 처리해주는 것이 다른 것처럼,

클라이언트가 요청 할 때에도, "타입"이라는 것이 존재합니다.

* GET        →      통상적으로! 데이터 조회(Read)를 요청할 때
                           예) 영화 목록 조회

* POST     →      통상적으로! 데이터 생성(Create), 변경(Update), 삭제(Delete) 요청 할 때
                           예) 회원 가입, 회원 탈퇴, 비밀번호 수정

이 중에서 오늘은 GET 방식에 대해 배워보겠습니다. 
GET
명량
Daum영화에서 자세한 내용을 확인하세요!
https://movie.daum.net/moviedb/main?movieId=68593

🙂
https://movie.daum.net/moviedb/main?movieId=68593

위 주소는 크게 두 부분으로 쪼개집니다. 바로 "?"가 쪼개지는 지점인데요.
"?" 기준으로 앞 부분이 <서버 주소> 뒷 부분이 [영화 번호] 입니다.

* 서버 주소: https://movie.daum.net/moviedb/main?movieId=68593
* 영화 정보: movieId=68593
👉
GET 방식으로 데이터를 전달하는 방법

?  : 여기서부터 전달할 데이터가 작성된다는 의미입니다.
& : 전달할 데이터가 더 있다는 뜻입니다.

예시) google.com/search?q=아이폰&sourceid=chrome&ie=UTF-8

위 주소는 google.com의 search 창구에 다음 정보를 전달합니다!

         q=아이폰                     (검색어)
         sourceid=chrome        (브라우저 정보)
         ie=UTF-8                      (인코딩 정보)
👉
여기서 잠깐! 그럼 code라는 이름으로 영화 번호를 주자!는 것은
누가 정하는 것일까요?

→ 네. 바로 프론트엔드 개발자와 백엔드 개발자가 미리 정해둔 약속입니다.

프론트엔드: "code라는 이름으로 영화 번호를 주면 될까요?"
백엔드: "네 그렇게 하시죠. 그럼 code로 영화 번호가 들어온다고 생각하고 코딩하고 있을게요"
07. Fetch 시작하기 
✔️
Fetch에 대해 본격적으로 배워 봅시다!
Fetch 연습을 위한 파일
😃
prac2.html 를 만들고 시작합니다!
[코드스니펫] fetch 연습하기
SQL
복사
<!doctype html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <title>Fetch 시작하기</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        function hey() {
            alert('연결완료');
        }
    </script>
</head>

<body>
    <button onclick="hey()">fetch 연습!</button>
</body>

</html>
​
Fetch 시작하기
☑️ Fetch 코드 해설
[코드스니펫] 미세먼지 OpenAPI
HTML
복사
http://spartacodingclub.shop/sparta_api/seoulair
​
[코드스니펫] Fetch 기본 골격
JavaScript
복사
fetch("여기에 URL을 입력").then(res => res.json()).then(data => {
		console.log(data)
})
​
JavaScript
복사
fetch("여기에 URL을 입력")
// 이 URL로 웹 통신을 요청한다. 괄호 안에 다른 것이 없다면 GET!
	.then(res => res.json()) 
// 통신 요청을 받은 데이터는 res라는 이름으로 JSON화 한다
	.then(data => { 
		console.log(data) // 개발자 도구에 찍어보기
	}) // JSON 형태로 바뀐 데이터를 data라는 이름으로 붙여 사용한다
​
☑️ Fetch 코드 설명
😐
fetch("여기에 URL을 입력") ← 이 URL로 웹 통신 요청을 보낼 거야!
← 이 괄호 안에 URL밖에 들어있지 않다면 기본상태인 GET!
.then() ← 통신 요청을 받은 다음 이렇게 할 거야!
res ⇒ res.json() 
← 통신 요청을 받은 데이터는 res 라는 이름을 붙일 거야(변경 가능)
← res는 JSON 형태로 바꿔서 조작할 수 있게 할 거야!
.then(data ⇒ {}) ←JSON 형태로 바뀐 데이터를 data 라는 이름으로 붙일 거야
👀
리마인드
GET 요청은, url뒤에 아래와 같이 붙여서 데이터를 가져갑니다.
http://naver.com?param=value&param2=value2 

POST 요청은, data : {} 에 넣어서 데이터를 가져갑니다.
data: { param: 'value', param2: 'value2' },
☑️ success: 성공하면, response 값에 서버의 결과 값을 담아서 함수를 실행한다.
😎
결과가 어떻게 res에 들어가나요? then이 뭐에요?
 → 일단 모르는 느낌이 있어도 받아들이셔야 합니다..! 형태를 암기하세요!

(대부분의 개발자들도 내부 원리는 코드를 안 뜯어봐서 몰라요.^^;;)
08. Fetch 연습하기 1
✔️
미세먼지 OpenAPI 데이터를 다루어 보아요!
Fetch 통신의 결과 값을 이용해보기
😎
천천히 따라해 볼 수 있도록 복습 자료를 첨부해요!
미세먼지 데이터가 어디에 있는지 찾기

💁
위 그림과 같이 RealtimeCityAir > row 에 미세먼지 데이터가 들어있습니다. 

이걸 꺼내볼까요?
JavaScript
복사
fetch("http://spartacodingclub.shop/sparta_api/seoulair")
	.then(res => res.json()) 
	.then(data => { 
		console.log(data['RealtimeCityAir']['row'][0]);
	})
​
반복문으로 구 데이터를 출력해보기

💁
row의 값을 rows에 담았으니, 반복문을 이용해보겠습니다!
JavaScript
복사
fetch("http://spartacodingclub.shop/sparta_api/seoulair") // 기본 요청(GET)
	.then(res => res.json()) // 요청해서 받은 데이터를 JSON화
	.then(data => { // JSON화 한 데이터를 다시 data로 이름짓기
		let rows = data['RealtimeCityAir']['row']
		rows.forEach((a) => {
			// 미세먼지 데이터 리스트의 길이만큼 반복해서 하나씩 개발자 도구에서 보기
			console.log(a)
		})
	})
​
구 데이터에서 구 이름, 미세먼지 수치를 골라내어 출력하기

💁
구 이름 키 값인 "MSRSTE_NM", 미세먼지 수치 키값인 "IDEX_MVL"의 밸류를 출력합시다!
JavaScript
복사
fetch("http://spartacodingclub.shop/sparta_api/seoulair") // 기본 요청(GET)
	.then(res => res.json()) // 요청해서 받은 데이터를 JSON화
	.then(data => { // JSON화 한 데이터를 다시 data로 이름짓기
		let rows = data['RealtimeCityAir']['row']
		rows.forEach((a) => {
			// 미세먼지 데이터 리스트의 길이만큼 반복해서 하나씩 개발자 도구에서 보기
			// 구의 이름, 미세먼지 수치 값을 개발자 도구에서 찍어보기
			console.log(a['MSRSTE_NM'], a['IDEX_MVL'])
		})
	})
​
[완성코드] 미세먼지 데이터 찍어보기
JavaScript
복사
fetch("http://spartacodingclub.shop/sparta_api/seoulair").then(res => res.json()).then(data => { 
		let rows = data['RealtimeCityAir']['row']
		rows.forEach((a) => {
			console.log(a['MSRSTE_NM'], a['IDEX_MVL'])
		})
	})
​
09. Fetch 연습하기 2
✔️
미세먼지 OpenAPI 데이터를 더 연습해 봅시다!
서울시 OpenAPI(실시간 미세먼지)를 이용하기
fetch 퀴즈(결과보기)
Python
복사
http://spartacodingclub.shop/ajaxquiz/01
​
📌
prac3.html 를 만들고 시작합니다!
[코드스니펫] 미세먼지 OpenAPI
HTML
복사
http://spartacodingclub.shop/sparta_api/seoulair
​
[코드스니펫] fetch 연습(1)
JavaScript
복사
<!doctype html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <title>미세먼지 API로Fetch 연습하고 가기!</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <style type="text/css">
        div.question-box {
            margin: 10px 0 20px 0;
        }
    </style>

    <script>
        function q1() {
            // 여기에 코드를 입력하세요
        }
    </script>

</head>

<body>
    <h1>Fetch 연습하자!</h1>

    <hr/>

    <div class="question-box">
        <h2>1. 서울시 OpenAPI(실시간 미세먼지 상태)를 이용하기</h2>
        <p>모든 구의 미세먼지를 표기해주세요</p>
        <p>업데이트 버튼을 누를 때마다 지웠다 새로 씌여져야 합니다.</p>
        <button onclick="q1()">업데이트</button>
        <ul id="names-q1">
            <li>중구 : 82</li>
            <li>종로구 : 87</li>
            <li>용산구 : 84</li>
            <li>은평구 : 82</li>
        </ul>
    </div>
</body>

</html>
​
[코드스니펫] fetch 기본 골격
JavaScript
복사
fetch("여기에 URL을 입력").then(res => res.json()).then(data => {
		console.log(data)
})
​
뼈대에 fetch 기본 골격을 붙여봅시다!
JavaScript
복사
<script>
	fetch("http://spartacodingclub.shop/sparta_api/seoulair").then(res => res.json()).then(data => {
			console.log(data)
	})
</script>
​
브라우저 개발자도구(오른쪽 클릭→검사)에서 console탭에서 확인해 보러 가시죠!
💁
data에서 RealtimeCityAir를 타고, row를 타고 들어가야 하네요!
어떤 데이터를 가져와야 할 지, console.log()로 찾아봅시다!
💁
리스트는 어떻게 하고 싶죠? 막 반복을 하고 싶지 않나요? forEach!
JavaScript
복사
let rows = data['RealtimeCityAir']['row']
rows.forEach((a) => {
	let gu_name = a['MSRSTE_NM']
	let gu_mise = a['IDEX_MVL']
	console.log(gu_name, gu_mise)
})
​
forEach문을 사용해서 하나하나 뽑아 보시죠! forEach문의 만듬새 오타에 주의하세요!
→ 문법을 모두 외우지 않아도 괜찮아요! 그때그때 가져다 쓰세요!
구 이름, 미세먼지 수치와 관련된 데이터를 뽑아서 console에서 또 확인해 봅시다!
웹에 붙일 temp_html을 만들어봅시다!
JavaScript
복사
let rows = data['RealtimeCityAir']['row']
rows.forEach((a) => {
	let gu_name = a['MSRSTE_NM']
	let gu_mise = a['IDEX_MVL']
	console.log(gu_name, gu_mise)

	let temp_html = `<li>중구 : 82</li>`
	$('#names-q1').append(temp_html)
})
​
💁
어디에 들어갈 지를 확인하고, 아이디 값을 지정해준 뒤 append!
가져올 데이터를 temp_html에 넣어봅시다!
JavaScript
복사
let rows = data['RealtimeCityAir']['row']
rows.forEach((a) => {
	let gu_name = a[]
	let gu_mise = a[]
	console.log(gu_name, gu_mise)

	let temp_html = `<li>${gu_name} : ${gu_mise}</li>`
	$('#names-q1').append(temp_html)
})
​
처음에 보이는 정보는 지워줍시다!
JavaScript
복사
let rows = data['RealtimeCityAir']['row']
$('#names-q1').empty()
rows.forEach((a) => {
	let gu_name = a[]
	let gu_mise = a[]
	console.log(gu_name, gu_mise)

	let temp_html = `<li>${gu_name} : ${gu_mise}</li>`
	$('#names-q1').append(temp_html)
})
​
[완성코드] fetch
JavaScript
복사
<!doctype html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <title>미세먼지 API로Fetch 연습하고 가기!</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <style type="text/css">
        div.question-box {
            margin: 10px 0 20px 0;
        }
    </style>

    <script>
        function q1() {
            fetch("http://spartacodingclub.shop/sparta_api/seoulair").then((response) => response.json()).then((data) => {
                    $('#names-q1').empty()
										let rows = data['RealtimeCityAir']['row']
                    rows.forEach((a) => {
                        let gu_name = a['MSRSTE_NM']
												let gu_mise = a['IDEX_MVL']
                        let temp_html = `<li>${gu_name} : ${gu_mise}</li>`
                        $('#names-q1').append(temp_html)
                    });
                })
        }
    </script>

</head>

<body>
    <h1>Fetch 연습하자!</h1>

    <hr/>

    <div class="question-box">
        <h2>1. 서울시 OpenAPI(실시간 미세먼지 상태)를 이용하기</h2>
        <p>모든 구의 미세먼지를 표기해주세요</p>
        <p>업데이트 버튼을 누를 때마다 지웠다 새로 씌여져야 합니다.</p>
        <button onclick="q1()">업데이트</button>
        <ul id="names-q1">
            <li>중구 : 82</li>
            <li>종로구 : 87</li>
            <li>용산구 : 84</li>
            <li>은평구 : 82</li>
        </ul>
    </div>
</body>

</html>
​
10. Fetch 연습하기 3
✔️
fetch 배운 내용을 복습해 보아요!
fetch 한걸음 더 연습하기 
[코드스니펫] fetch 연습(2)
JavaScript
복사
<!doctype html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <title>미세먼지 API로 Fetch 연습하고 가기!</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <style>
        div.question-box {
            margin: 10px 0 20px 0;
        }
        .bad {
            color: red;
        }
    </style>

    <script>
			function q1() {
        fetch("http://spartacodingclub.shop/sparta_api/seoulair").then((response) => response.json()).then((data) => {
            $('#names-q1').empty()
						let rows = data['RealtimeCityAir']['row']
            rows.forEach((a) => {
                let gu_name = a['MSRSTE_NM']
								let gu_mise = a['IDEX_MVL']
								let temp_html = ``
								if (gu_mise > 40) {
									temp_html = `<li class="bad">${gu_name} : ${gu_mise}</li>`
								} else {
									temp_html = `<li>${gu_name} : ${gu_mise}</li>`
								}
                $('#names-q1').append(temp_html)
            });
          })
      }
    </script>

</head>

<body>
    <h1>Fetch 연습하자!</h1>

    <hr/>

    <div class="question-box">
        <h2>1. 서울시 OpenAPI(실시간 미세먼지 상태)를 이용하기</h2>
        <p>모든 구의 미세먼지를 표기해주세요</p>
        <p>업데이트 버튼을 누를 때마다 지웠다 새로 씌여져야 합니다.</p>
        <button onclick="q1()">업데이트</button>
        <ul id="names-q1">
            <li>중구 : 82</li>
            <li>종로구 : 87</li>
            <li>용산구 : 84</li>
            <li>은평구 : 82</li>
        </ul>
    </div>
</body>

</html>
​
일단 빨간색으로 바꿔주려면? 
👉
[한걸음 더]
미세먼지 수치가 40이상인 곳은 빨갛게 보여줄까요?
💁
temp_html에 css 속성을 먹인 html태그를 넣으면 되겠죠?
JavaScript
복사
<style>
	.bad {
		color: red;		
	}
</style>
<script>
	function q1() {
    fetch("http://spartacodingclub.shop/sparta_api/seoulair").then((response) => response.json()).then((data) => {
	    $('#names-q1').empty()
	    let rows = data['RealtimeCityAir']['row']
			rows.forEach((a) => {
			let gu_name = a[]
			let gu_mise = a[]
			
			let temp_html = `<li class="bad">${gu_name} : ${gu_mise}</li>`
			$('#names-q1').append(temp_html)
		})
  }
</script>
​
미세먼지 수치가 40을 넘긴다면 빨간색을 줘야 한다면?
→ gu_mise 값을 확인하는 조건문을 달아줍시다!
💁
비어있는 temp_html을 먼저 만들어 준 다음, gu_mise를 확인한 값이 True일 때, 클래스를 먹이고 False일 때 이전 그대로 빼주면 되겠죠?
JavaScript
복사
    <style>
        div.question-box {
            margin: 10px 0 20px 0;
        }
        .bad {
            color: red;
        }
    </style>

    <script>
			function q1() {
        fetch("http://spartacodingclub.shop/sparta_api/seoulair").then((response) => response.json()).then((data) => {
            $('#names-q1').empty()
						let rows = data['RealtimeCityAir']['row']
            rows.forEach((a) => {
                let gu_name = a['MSRSTE_NM']
								let gu_mise = a['IDEX_MVL']
								let temp_html = ``
								if (gu_mise > 40) {
									temp_html = `<li class="bad">${gu_name} : ${gu_mise}</li>`
								} else {
									temp_html = `<li>${gu_name} : ${gu_mise}</li>`
								}
                $('#names-q1').append(temp_html)
            });
          })
      }
    </script>
​
11. [추억앨범] Fetch 적용 
✔️
서울의 실시간 대기 정보를 가져와 웹 페이지에 표시 해봅시다!
fetch를 통해 데이터 넣기
👀
만들 것 구경하기!

🙂
지금까지 fetch로 데이터 다루는 법을 배웠는데, 이제 써먹어 봐야겠죠!
저희 프로젝트에 fetch를 통해 데이터를 넣어 봅시다!
[코드스니펫] 미세먼지 fetch 골격
JavaScript
복사
let url = "http://spartacodingclub.shop/sparta_api/seoulair";
fetch(url).then(res => res.json()).then(data => {
    console.log(data);
})
​
[코드스니펫] document ready
JavaScript
복사
$(document).ready(function () {
	alert('안녕!');
})
​
script 태그안에 새로운 $(document).ready(function() { ... }) 함수 작성
fetch 함수를 사용하여 주어진 URL에서 데이터를 가져오기
.then(res => res.json()) 반환 된 응답(response)내용을 JSON 형식으로 만들기
.then(data => { ... }) JSON 데이터를 가져온 후
temperature 값을 변수에 담는다!
선택자 선택 후 IDEX_NM의 값을 문자열로 삽입
[완성코드] 추억앨범 fetch 완성
JavaScript
복사
$(document).ready(function () {
    let url = "http://spartacodingclub.shop/sparta_api/seoulair";
    fetch(url).then(res => res.json()).then(data => {
        let mise = data['RealtimeCityAir']['row'][0]['IDEX_NM']
        $('#msg').text(mise)
    })
})
​
12. [스파르타플릭스] Fetch 적용 
✔️
서울의 온도를 가져와 웹 페이지에 표시 해봅시다!
fetch를 통해 데이터 넣기
👀
만들 것 구경하기!

🙂
추억앨범때 미세먼지 데이터를 붙여 보았죠?
스파르타플릭스는 서울 온도 데이터를 붙여 볼 거예요!! 

🚩스스로 한번 해보시고 강의를 진행해 주세요!
[코드스니펫] 서울온도 OpenAPI
script 태그안에 새로운 $(document).ready(function() { ... }) 함수 작성
fetch 함수를 사용하여 주어진 URL에서 데이터를 가져오기
.then(res => res.json()) 반환 된 응답(response)내용을 JSON 형식으로 만들기
.then(data => { ... }) JSON 데이터를 가져온 후 
temp 값을 변수에 담는다!
선택자 선택 후 temp의 값을 문자열로 삽입
[완성코드] 스파르타플릭스 fetch 완성
13. 3주차 끝 숙제 설명
✔️
배웠던 내용을 갖고 3주차 숙제를 풀어보아요!
3주차 숙제 
⇒ 20도를 기준으로 높으면 “더워요”, 낮으면 “추워요”가 나오게 해주세요!

HW. 3주차 숙제 해설
💁‍♀️
숙제 내용 한 줄 정리
정답 코드 확인하기
JavaScript
복사
$(document).ready(function () {
    fetch("http://spartacodingclub.shop/sparta_api/weather/seoul").then(res => res.json()).then(data => {
        let temperature = data['temp']
        if (temperature < 20) {
            $('#temp').text('추워요');
        } else {
            $('#temp').text('더워요');
        }
    })
})