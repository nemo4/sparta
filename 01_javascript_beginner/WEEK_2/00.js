[왕초보] 웹개발 종합반 - 2주차
[수업 목표]
Javascript의 사용 방식에 대해 이해하고, 문법에 익숙해진다.
JQuery를 활용하여 HTML을 조작할 수 있다.
[목차]
01. 2주차 배울 것
02. [스파르타플릭스]프로젝트 1
03. [스파르타플릭스]프로젝트 2
04. [스파르타플릭스]프로젝트 3
05. Javascript에 대해
06. Javascript 기초문법 1
07. Javascript 기초문법 2
08. Javascript 기초문법 3
09. Javascript 활용문법(DOM)
10. JQuery 시작하기
11. JQuery 연습하기
12. 2주차 끝 숙제 설명
HW. 2주차 숙제 해설
💡
모든 토글을 열고 닫는 단축키
Windows : Ctrl + alt + t 
Mac : ⌘ + ⌥ + t 
01. 2주차 배울 것 
✔️
2주차는 움직이기 Javascript에 대해 배울 거예요! 
2주차 배울 내용
HTML은 뼈대, CSS는 꾸미기, Javascript는 움직이기!
🔥
1주차는 뼈대를 만들고 꾸며보았다면, 이번 주차에는 움직이게 만들어 볼 거예요!

☑️ Javascript 는 웹을 움직이게 하는 코드에요! 
🤔
이거 세 개를 하면 뭘 할 수 있는데요?
모바일 청첩장으로 예를 들어 보자면요! 
지난 주차까지는 모바일 청첩장만 만들어 보낼 수 있어요! 화면에서 사용자는 그저 볼 수만 있었죠!
이번 주차까지 배우면, 요청을 보내면 친구의 이름으로 축하를 받을 수 있는 모바일 청첩장을 만들 수 있게 되는 거예요!
💁
이를테면, 클릭으로 사진이 바뀐 다거나 스크롤을 내리면 사진이 바뀌는 것 처럼요!
자바스크립트 배우기 전에!
🤨
자바스크립트 배우기 전에! 전에 배웠던 내용(HTML, CSS, Bootstrap) 을 한번 더 복습해 볼 거예요!
복습은 두 번째 프로젝트인 스파르타플릭스를 만들어 보면서 할 거예요
스파르타플릭스의 기본 뼈대는 추억앨범과 굉장히 유사해요!
우리 최대한 추억앨범 코드를 생각하면서 스파르타플릭스를 만들어 봐요! 

02. [스파르타플릭스]프로젝트 1
✔️
두 번째 프로젝트를 상단을 만들어 봅시다!
스파르타플릭스 환경 세팅
[코드스니펫] 스파르타플릭스 템플릿
HTML
복사
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>스파르타플릭스</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    
    <style>
    </style>

</head>

<body>
  
</body>

</html>
​
sparta폴더 안에 spartaflix폴더를 만듭시다!
spartaflix안에 index.html을 만든 후 템플릿을 넣어 주세요!
상단 만들기 
👀
만들 것 구경하기!

😎
남이 만들어 둔 것을 쓸 때는 잘 찾아다가 조금씩만 고쳐서 쓰는 게 답입니다!

🚩강의 진행 전에 한번 도전해보고 진행해 주세요!
Jumbotron 추가하기
부트스트랩 사이트에서 jumbotron을 검색해 주세요!

See our new Jumbotron example for a demo 클릭!

검사를 통해 개발자 도구를 열어 해당 부분을 복사해 주세요!

본인이 좋아하는 영화와 내용을 넣어주세요!

구글 폰트 적용하기 
[코드스니펫] 구글 웹 폰트
JavaScript
복사
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');

 * {
     font-family: 'Gowun Dodum', sans-serif;
 }
​
<style></style> 태그 안에 묶인 코드만 복사해서 style 태그 안에 넣습니다!
CSS
복사
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');
​
CSS
복사
* {
     font-family: 'Gowun Dodum', sans-serif;
 }
​
버튼 만들기
점보트론에 있는 버튼 코드 한번 더 추가
클래스 form-button 으로 바꾸기 
Headers 추가하기
부트스트랩 사이트에서 Examples → Headers 클릭!

검사를 통해서 해당 부분 복사하기!

body에 background-color: black; 넣기 
[코드스니펫] 부트스트랩
JavaScript
복사
https://getbootstrap.com/docs/5.3/getting-started/introduction/
​
[코드스니펫] 스파르타플릭스 배경
C#
복사
https://occ-0-1123-1217.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeIfo7VL_VDyKnljV66IkR-4XLb6xpZqhpLSo3JUtbivnEW4s60PD27muH1mdaANM_8rGpgbm6L2oDgA_iELHZLZ2IQjG5lvp5d2.jpg?r=e6e.jpg
​
[코드스니펫] 킹덤 설명
JavaScript
복사
병든 왕을 둘러싸고 흉흉한 소문이 떠돈다. 어둠에 뒤덮인 조선, 기이한 역병에 신음하는 산하. 정체 모를 악에 맞서 백성을 구원할 희망은 오직 세자뿐이다.
​
[완성코드] 스파르타플릭스 상단 
JavaScript
복사
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>스파르타플릭스</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');

        * {
            font-family: 'Gowun Dodum', sans-serif;
        }

        .main {
            color: white;

            background-image: url('https://occ-0-1123-1217.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeIfo7VL_VDyKnljV66IkR-4XLb6xpZqhpLSo3JUtbivnEW4s60PD27muH1mdaANM_8rGpgbm6L2oDgA_iELHZLZ2IQjG5lvp5d2.jpg?r=e6e.jpg');
            background-position: center;
            background-size: cover;
        }

        body {
            background-color: black;
        }
    </style>
</head>

<body>
    <header class="p-3 text-bg-dark">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                        <use xlink:href="#bootstrap"></use>
                    </svg>
                </a>
 
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" class="nav-link px-2 text-danger">spartaflix</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">홈</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">시리즈</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">영화</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">내가 찜한 콘텐츠</a></li>
                </ul>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..."
                        aria-label="Search">
                </form>

                <div class="text-end">
                    <button type="button" class="btn btn-outline-light me-2">Login</button>
                    <button type="button" class="btn btn-danger">Sign-up</button>
                </div>
            </div>
        </div>
    </header>
    <div class="main">
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">킹덤</h1>
                <p class="col-md-8 fs-4">병든 왕을 둘러싸고 흉흉한 소문이 떠돈다. 어둠에 뒤덮인 조선, 기이한 역병에 신음하는 산하. 정체 모를 악에 맞서 백성을 구원할 희망은 오직
                    세자뿐이다.</p>
                <button onclick="openclose()" type="button" class="btn btn-outline-light">영화 기록하기</button>
                <button type="button" class="btn btn-outline-light">상세정보</button>
            </div>
        </div>
    </div>
</body>

</html>
​
03. [스파르타플릭스]프로젝트 2
✔️
두 번째 프로젝트를 만들어 봅시다!
카드 추가하기 

👀
아래 순서 참고해서 만들어보세요!
카드 복사해서 붙여넣기
[코드스니펫] 카드 붙여 넣기
JavaScript
복사
https://getbootstrap.com/docs/5.3/components/card/
​
Card 카테고리에서 여러 개 있는 Card 를 클릭!
이미지 넣고, 개수 조절하기
[코드스니펫] 포스터 이미지
C#
복사
https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg
​
row-cols-md-3 g-4 → row-cols-md-4 g-4 로 바꾸기
카드 내용 변경 및 별점 넣기
영화 제목, 영화 코멘트 변경
영화 제목, 영화 코멘트 사이에 <p> 태그를 활용하여 별 넣기
[코드스니펫] 별 이모티콘
SQL
복사
⭐⭐⭐
​
여기까지 완성 코드!
[완성 코드] 스파르타플릭스 카드 
JavaScript
복사
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>스파르타플릭스</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');

        * {
            font-family: 'Gowun Dodum', sans-serif;
        }

        .main {
            color: white;

            background-image: url('https://occ-0-1123-1217.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeIfo7VL_VDyKnljV66IkR-4XLb6xpZqhpLSo3JUtbivnEW4s60PD27muH1mdaANM_8rGpgbm6L2oDgA_iELHZLZ2IQjG5lvp5d2.jpg?r=e6e.jpg');
            background-position: center;
            background-size: cover;
        }

        body {
            background-color: black;
        }

        .mycards {
            width: 1200px;
            margin: 20px auto 20px auto;
        }
    </style>
</head>

<body>
    <header class="p-3 text-bg-dark">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                        <use xlink:href="#bootstrap"></use>
                    </svg>
                </a>
 
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" class="nav-link px-2 text-danger">spartaflix</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">홈</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">시리즈</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">영화</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">내가 찜한 콘텐츠</a></li>
                </ul>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..."
                        aria-label="Search">
                </form>

                <div class="text-end">
                    <button type="button" class="btn btn-outline-light me-2">Login</button>
                    <button type="button" class="btn btn-danger">Sign-up</button>
                </div>
            </div>
        </div>
    </header>
    <div class="main">
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">킹덤</h1>
                <p class="col-md-8 fs-4">병든 왕을 둘러싸고 흉흉한 소문이 떠돈다. 어둠에 뒤덮인 조선, 기이한 역병에 신음하는 산하. 정체 모를 악에 맞서 백성을 구원할 희망은 오직
                    세자뿐이다.</p>
                <button onclick="openclose()" type="button" class="btn btn-outline-light">영화 기록하기</button>
                <button type="button" class="btn btn-outline-light">상세정보</button>
            </div>
        </div>
    </div>
    <div class="mycards">
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <div class="card h-100">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">영화 제목</h5>
                        <p class="card-text">⭐⭐⭐</p>
                        <p class="card-text">영화 코멘트</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">영화 제목</h5>
                        <p class="card-text">⭐⭐⭐</p>
                        <p class="card-text">영화 코멘트</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">영화 제목</h5>
                        <p class="card-text">⭐⭐⭐</p>
                        <p class="card-text">영화 코멘트</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">영화 제목</h5>
                        <p class="card-text">⭐⭐⭐</p>
                        <p class="card-text">영화 코멘트</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
​
04. [스파르타플릭스]프로젝트 3
✔️
두 번째 프로젝트를 만들어 봅시다!
포스팅 박스 만들기 

👀
아래 순서 참고해서 만들어보세요!
우선 큰 박스 먼저 만들기 (함께)
그림자 효과: box-shadow: 0px 0px 3px 0px gray;
안쪽으로 띄우기: padding: 20px;
영화 이미지, 영화 제목, 추천 이유 
Forms 의 Floating Labels 참고
별점 선택
Input group의 Custom forms 참고
기록하기
Buttons의 Variants 참고
[완성코드] 스파르타플릭스 포스팅 박스 
HTML
복사
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>스파르타플릭스</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');

        * {
            font-family: 'Gowun Dodum', sans-serif;
        }

        .main {
            color: white;

            background-image: url('https://occ-0-1123-1217.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeIfo7VL_VDyKnljV66IkR-4XLb6xpZqhpLSo3JUtbivnEW4s60PD27muH1mdaANM_8rGpgbm6L2oDgA_iELHZLZ2IQjG5lvp5d2.jpg?r=e6e.jpg');
            background-position: center;
            background-size: cover;
        }

        body {
            background-color: black;
        }

        .mycards {
            width: 1200px;
            margin: 20px auto 20px auto;
        }

        .mypostingbox {
            width: 500px;
            margin: 20px auto 20px auto;

            border: 1px solid white;
            padding: 20px;
            border-radius: 5px;
        }
        .form-floating > input {
            background-color: transparent;
            color: white;
        }
        .form-floating > label {
            color: white;
        }
        .input-group > label {
            background-color: transparent;
            color: white;
        }
        .mypostingbox > button {
            width: 100%;
        }
    </style>
</head>

<body>
    <header class="p-3 text-bg-dark">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                        <use xlink:href="#bootstrap"></use>
                    </svg>
                </a>
 
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" class="nav-link px-2 text-danger">spartaflix</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">홈</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">시리즈</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">영화</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">내가 찜한 콘텐츠</a></li>
                </ul>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..."
                        aria-label="Search">
                </form>

                <div class="text-end">
                    <button type="button" class="btn btn-outline-light me-2">Login</button>
                    <button type="button" class="btn btn-danger">Sign-up</button>
                </div>
            </div>
        </div>
    </header>
    <div class="main">
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">킹덤</h1>
                <p class="col-md-8 fs-4">병든 왕을 둘러싸고 흉흉한 소문이 떠돈다. 어둠에 뒤덮인 조선, 기이한 역병에 신음하는 산하. 정체 모를 악에 맞서 백성을 구원할 희망은 오직
                    세자뿐이다.</p>
                <button type="button" class="btn btn-outline-light">영화 기록하기</button>
                <button type="button" class="btn btn-outline-light">상세정보</button>
            </div>
        </div>
    </div>

    <div class="mypostingbox">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="영화 이미지 주소">
            <label for="floatingInput">영화 이미지 주소</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="영화 제목">
            <label for="floatingInput">영화 제목</label>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">별점</label>
            <select class="form-select">
                <option selected>별점선택</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="추천 이유">
            <label for="floatingInput">추천 이유</label>
        </div>
        <button type="button" class="btn btn-danger">기록하기</button>
    </div>

    <div class="mycards">
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <div class="card h-100">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">영화 제목</h5>
                        <p class="card-text">⭐⭐⭐</p>
                        <p class="card-text">영화 코멘트</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">영화 제목</h5>
                        <p class="card-text">⭐⭐⭐</p>
                        <p class="card-text">영화 코멘트</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">영화 제목</h5>
                        <p class="card-text">⭐⭐⭐</p>
                        <p class="card-text">영화 코멘트</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">영화 제목</h5>
                        <p class="card-text">⭐⭐⭐</p>
                        <p class="card-text">영화 코멘트</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
​
05. Javascript에 대해 
✔️
자바스크립트는 왜 배워야 할까요?
자바스크립트란?
프로그래밍 언어 중 하나로, 브라우저가 알아들을 수 있는 언어입니다.
😎
이론 설명 때, 클라이언트가 서버에 요청하면 서버가 클라이언트에게
HTML+CSS+Javascript를 준다고 했던 것, 기억하시나요?
🤔
잠깐 상식!

Q. 왜 브라우저를 움직이게 하기 위해 Javascript를 사용해야 하나요?

A. 브라우저가 JavaScript를 주로 사용하는 이유는 역사적으로 JavaScript가 웹 브라우저에서 실행되는 스크립트 언어로 사용되어 왔기 때문입니다. 웹 페이지의 동적인 기능을 구현하기 위해 JavaScript가 개발되었으며, 많은 웹 개발자들이 JavaScript를 사용하여 웹 애플리케이션을 구축하고 유지 관리해왔습니다. 결국, Javascript가 브라우저한테 명령을 내리는 ‘표준’이라고 생각하시면 됩니다!
Java와 Javascript는 어떤 차이가 있나요?
🤔
인도와 인도네시아…
햄과 햄스터…

아무 관련 없습니다.
자바스크립트 범용성
☑️ 자바스크립트는 다양한 이유로 배우면 매우 유용한 프로그래밍 언어입니다.
😎
자바스크립트를 통해서 서버도 만들 수 있습니다! 
즉, 자바스크립트 하나로 프론트엔드, 백엔드를 다 가능하다는 거죠.
또한 IOS와 안드로이드 앱은 물론 게임 개발 엔진이나 IoT(사물 인터넷) 애플리케이션 개발도 가능합니다.

웹 개발을 위해서는 거의 필수적이며 다양한 분야에서 널리 사용되고 있는 자바스크립트 본격적으로 배우러 가시죠!!
06. Javascript 기초문법 1
✔️
자바스크립트 가장 기초부터 배워 보아요!
개발자 도구 사용하기
💁
기초 문법은 자바스크립트 뿐만이 아니라 개념 자체는 어느 프로그래밍 언어를 가도 똑같습니다! 

프로그래밍 언어는 기계와 사람이 소통하기 위해 만든 언어입니다! 
사람이 썼기 때문에, 우리 눈에 친숙할 거예요!
일단 코드 화면과 브라우저 화면을 줄여서 둘로 나눠봅시다!

script 태그 안에 있는 function hey의 코드를 바꿔서 적어봅시다
JavaScript
복사
<script>
	function hey() {
		console.log('안녕하세요')
	}
</script>

<body>
	<button onclick="hey()">영화 기록하기</button>
</body>
​
🤔
alert에서 console.log를 바꿔서 실행하라는 것은 알겠는데…
대체 화면 어디에 나오는 거죠?
브라우저 화면에서 오른쪽 클릭! 검사를 눌러주세요!

화면에 뜨는 건 개발자 도구예요! Console 탭을 눌러봅시다!

💁
우리가 코딩한 것이 맞게 출력 되는가…? 를 확인하기 위해 개발자들이 미리 찍어보는 도구가 console.log 입니다!
변수 & 기본연산
✔️
변수는 값을 담는 상자!

프로그래밍 언어에서는 = 가 같다 의 개념이 아닌 오른쪽에 값을 왼쪽에 넣어줘! 

변수 대입( a = 2 )의 의미→ "오른쪽에 있는 것을 왼쪽에 넣어!"
(2를 a라는 변수에 넣는다)
let으로 변수를 선언합니다.
JavaScript
복사
let a = 2
a = 'Bob' // 문자열은 작은 따옴표로 감싸줍니다!

// 처음 변수를 저장하려면, let을 앞에 붙여주세요!
// 한 번 선언했으면, 다시 선언하지 않고 값을 넣습니다.
​
사칙연산 그리고 문자열 더하기가 기본적으로 가능합니다.
JavaScript
복사
let a = 2
let b = 3

console.log(a+b) // 5

let c = '대한'
let d = '민국'

console.log(c+d) // 대한민국
​
07. Javascript 기초문법 2
✔️
리스트와 딕셔너리 문법에 대해 배워 봅시다!
리스트 & 딕셔너리
리스트: 순서를 지켜서 가지고 있는 형태입니다.
💁
컴퓨터는 0부터 세요! 리스트에 들어있는 첫 번째 값은 [0]으로 불러옵니다!
JavaScript
복사
let a_list = []  // 리스트를 선언. 변수 이름은 역시 아무렇게나 가능!

// 또는,

let a = ['사과','수박','딸기','감'] // 로 선언 가능

console.log(a[1]) // 수박
console.log(a[0]) // 사과

//리스트 길이 구하기
console.log(a.length) //4

​
딕셔너리: 키(Key)-밸류(Value) 값의 묶음
JavaScript
복사
let a_dict = {}  // 딕셔너리 선언. 변수 이름은 역시 아무렇게나 가능!

// 또는,

let a = {'name':'영수','age':27} // 로 선언 가능

console.log(a)
console.log(a['name']) // 영수
console.log(b_dict['age']) // 27
​
💁
리스트는 []가 생겼으니까 []로 가져오는데, 
딕셔너리는 {}로 만들었는데 {}로 왜 안 가져 오는가… 
이게 이렇게 생긴 이유와 원리를 찾아가면 너~무 코딩이 어려워져요..!
☑️ 이런 규칙들은 프로그래밍 언어를 만든 사람이 그때그때 목적에 맞게 작성한 것이에요! 
     있는 그대로! 아 얘는 이렇게 쓰는 거구나.. 하고 받아 들여주세요! 😄​
→ 따라서 규칙을 설정하는 것도 다 제각각이겠죠? 
리스트와 딕셔너리의 조합
💁
꺾쇠와 키-밸류, 이 두 가지로 이뤄진 형태의 자료를 정~말 많이 씁니다!
이게 기초가 되는 문법이에요!
JavaScript
복사
let a = [
	{'name':'영수','age':27},
	{'name':'철수','age':15},
	{'name':'영희','age':20}
]
console.log(a[0]['name']) //영수
console.log(a[1]['age']) //15
​
왜 필요할까요?
💡
순서를 표시할 수 있고, 정보를 묶을 수 있습니다.

앞에서 언급한 <스파르타과일가게>가 정말 잘 되어서 전국에서 손님이 찾아오고 있습니다. 대기표를 작성하기 위해서 온 순서대로 이름,  휴대폰 번호를 적도록 하였는데요. 변수만을 사용한 모습은 다음과 같습니다.

let customer_1_name = '김스파';
let customer_1_phone = '010-1234-1234';
let customer_2_name = '박르탄';
let customer_2_phone = '010-4321-4321';
...(알아보기 힘듭니다.)

👉딕셔너리를 활용한다면 다음과 같이 고객 별로 정보를 묶을 수 있습니다.
let customer_1 = {'name': '김스파', 'phone': '010-1234-1234'};
let customer_2 = {'name': '박르탄', 'phone': '010-4321-4321'};

👉그리고 순서를 나타내기 위해 리스트를 사용하면, 이렇게나 깔끔해집니다.
let customer = [
    {'name': '김스파', 'phone': '010-1234-1234'},
    {'name': '박르탄', 'phone': '010-4321-4321'}
]

✅보기에도 깔끔해지고, 다루기도 쉬워지고, 고객이 새로 한 명 더 오더라도 .push 함수를 이용해 간단하게 대응할 수 있습니다.
추가자료
사칙연산 외에도, 기본적으로 제공하는 여러 함수들이 존재합니다.
🤔
왠지 이건 있을 것 같은데?(예 - 특정 문자를 바꾸고 싶다 등) 싶으면 직접 만들지 말고 구글에 먼저 찾아보세요!
JavaScript
복사
예를 들면, '나눗셈의나머지'를 구하고 싶은 경우

let a = 20
let b = 7

a % b = 6
​
JavaScript
복사
또, 특정 문자로 문자열을 나누고 싶은 경우

let myemail = 'sparta@gmail.com'

let result = myemail.split('@') // ['sparta','gmail.com']

result[0] // sparta
result[1] // gmail.com

let result2 = result[1].split('.') // ['gmail','com']

result2[0] // gmail -> 우리가 알고 싶었던 것!
result2[1] // com

myemail.split('@')[1].split('.')[0] // gmail -> 간단하게 쓸 수도 있다!
​
08. Javascript 기초문법 3
✔️
반복문과 조건문 문법에 대해 배워 봅시다!
반복문
😎
리스트, 리스트-딕셔너리 형식의 자료는 하나하나 뽑아 써야 하나요? 그렇지 않겠죠!
리스트 자료형의 데이터를 일일이 뽑아보는데..
JavaScript
복사
let fruits = ['사과','배','감', ... ,'귤']
console.log('사과')
console.log('배')
console.log('감')
...
console.log('귤')

// 이렇게 100개 씩 쓰기엔 무리가 있겠죠? 그래서, 반복문이라는 것이 존재합니다!
​
우리는 그 중에서도 forEach라는 친구로 간단하게 뽑아볼 거에요!
JavaScript
복사
fruits.forEach((a) => {
	console.log(a)
}) 
// fruits 의 요소를 하나씩 확인하는데 이름은 a라고 할 거에요!
// a는 b,c,zzz,fruit 어떤 걸로 해도 상관 없어요!
​
💁
생긴게 조금 어렵죠..? 괜찮아요! 이번에만 오타내지 마시고, 다음 번에는 복사 붙여넣기해요!
과일의 목록이 담긴 리스트로 반복 해봅시다!
JavaScript
복사
let fruits = ['사과','배','감','귤']
fruits.forEach((a) => {
	console.log(a)
})
​

💁
사과, 배, 감, 귤 총 네 번이 개발자 도구에 찍혔죠? 그럼 반복문을 쓰면 몇 번 찍히는 거죠?
바로 리스트 안에 들어 있는 값의 개수만큼!
조건문
😎
반복문과 더불어 조건에 맞춰 실행을 다르게 해주는 “조건문”도 프로그래밍에선 빼놓을 수 없답니다!
JavaScript
복사
if (조건) {
	// 조건에 맞다면~
} else {
	// ~가 아니라면~
}
​
만약 20살보다 크면 성인입니다 작으면 청소년입니다 를 출력하려면?
JavaScript
복사
let age = 24

if (age > 20) {
	console.log('성인입니다')
} else {
	console.log('청소년입니다')
}
​
반복문+조건문 합치기!
JavaScript
복사
let ages = [12,15,20,25,17,37,24]

ages.forEach((a)=> {
	if (a > 20) {
		console.log('성인입니다')
	} else {
		console.log('청소년입니다')
	}
})
​
09. Javascript 활용문법(DOM)
✔️
자바스크립트로 움직이는 법을 배워볼 거예요!
자바스크립트로 Alert 띄우기 
함수를 만들어두기
JavaScript
복사
function hey(){
	alert('안녕!');
}
​
👉
script 태그 안에 자바스크립트를 작성하는 것이죠
아래 코드를 통해 간단한 사용 방법을 알아봅니다.
버튼에 함수를 연결하기. 버튼을 누르면 함수가 불립니다.
HTML
복사
<button class="form-button" type="button" onclick="hey()">영화 기록하기</button>
​

💁
직독직해 하면 
1. 버튼을 클릭하면 
2. hey를 불러라! 
3. alert(’안녕’)을 실행해라!

프로그래밍에서는 정해진 일을 반복하는 친구를 함수라고 불러요!

우리는 방금 function hey()라는 규칙으로 hey라는 함수를 만들었고,
alert(’안녕’)이라는 작업을 원할 때마다 반복적으로 수행하게 만들었습니다!
자바스크립트로 HTML 조작
☑️ 웹 환경에서 자바스크립의 목적 → HTML 조작과 변경 (튜터만 합니다!)
🙂
자바스크립트를 활용하여 HTML 요소를 선택하고 선택한 요소의 내용이나 스타일 등을 변경하는 연습을 해볼게요! 
document는 웹문서 
 . 은 ~의 라는 의미 
getElementById → html 요소 가져와 ById에 의해 
바꾸고 싶은 아이디 즉 셀렉터를 넣고, 바꿀 내용 적기! 
프로그래밍은 컴퓨터에게 일 시키는 것! 정확히 명령해야 한다.
JavaScript
복사
function hey(){
	alert('안녕!');
	document.getElementById('hello').style.color = 'red';
}
​
10. JQuery 시작하기
✔️
제이쿼리에 대해 알아 봅시다!
JQuery란?
자바스크립트를 더 쉽게 사용하는 방법을 배워 볼까요?
☑️ HTML의 요소들을 조작하는 Javascript를 미리 더 쉽게 작성해둔 것. 라이브러리!
💁
자바스크립트를 왜 쓴다구요? 웹을 조작하려고! 
왜 조작하죠? 움직이게 만드려고!
그런데 순수 javascript만 사용하면 길고 복잡하니까 JQuery를 쓰는 겁니다!

Javascript로도 모든 기능(예 - 버튼 글씨 바꾸기 등)을 구현할 수는 있지만,

1) 코드가 복잡하고, 2) 브라우저 간 호환성 문제도 고려해야 해서,
JQuery라는 라이브러리가 등장하게 되었답니다.
☑️ JQuery와 Javascript - 코드 비교해보기
🤔
JQuery는 Javascript와 다른 특별한 소프트웨어가 아니라 미리 작성된 Javascript 코드입니다. 전문 개발자들이 짜둔 코드를 잘 가져와서 사용하는 것임을 기억해주세요! (그렇게 때문에, 쓰기 전에 "임포트"를 해야합니다!)
Javascript로 길고 복잡하게 써야 하는 것을
JavaScript
복사
document.getElementById('hello').innerHTML = '안녕';
​
jQuery로 보다 직관적으로 쓸 수 있어요. 편리하죠? :-)
JavaScript
복사
$('#hello').html('안녕');
​
JQuery 사용하기
[코드스니펫] jQuery CDN
HTML
복사
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
​
미리 작성된 Javascript 코드를 가져오는 것을 '임포트'라고 부릅니다.
<head> 와 </head> 사이에 아래를 넣으면 끝!
HTML
복사
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
​
jQuery를 사용하는 방법
😎
css와 마찬가지로 jQuery를 쓸 때에도 "가리켜야" → 조작할 수 있습니다.
예) 특정 인풋박스의 값을 → 가져와줘!
예) 특정 div를 → 안보이게 해줘!

css에서는 선택자로 class를 썼지요?
jQuery에서는 id 값을 통해 특정 버튼/인풋박스/div/.. 등을 가리키게 됩니다.

백문이불여일타! 자주 쓰는 jQuery들을 함께 다뤄보면서 익혀보죠!
JQuery 연습하기
📌
새로운 폴더 jsprac 을 만들고, 그 안에 prac1.html 로 시작해봐요!
[코드스니펫] prac.html 스켈레톤
HTML
복사
<!DOCTYPE html>
<html>
    <head>
        <title>자바스크립트 문법 연습하기!</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </head>
    <style>
        .button-part {
            display: flex;
            height: 50px;
        }
    </style>
    <script>
        
    </script>
    <body>
        <div class="top-part">
            <h1>자바스크립트 문법 연습하기!</h1>
        </div>
        <hr/>
        <br>
        <h2>1. 함수</h2>
        <div class="button-part">
            <button onclick="checkResult()">결과 확인하기!</button>
        </div>
        <div class="list-part">
            <h2>2. 리스트</h2>
            <div id="q1"></div>
        </div>
        <div class="dict-part">
            <h2>3. 딕셔너리</h2>
            <div id="q2"></div>
        </div>
        <div>
            <h2>4. 리스트 딕셔너리</h2>
            <div id="q3"></div>
        </div>
    </body>
</html>
​
prac.html에 뼈대를 붙여넣어 봅시다!
script 태그에 checkResult() 함수를 만들어 봅시다
JavaScript
복사
<script>
function checkResult() {}
</script>
​
alert(’안녕하세요’)를 적어 똑같이 작동하는지 한 번 해봅시다
JavaScript
복사
function checkResult() {
	alert('안녕하세요')
}
​
💁
css-클래스처럼 자바스크립트에서 html을 움직이게 하기 위한 명찰, id 값이 필요합니다!
html 태그에 id를 적어주어야 합니다! 예제에 달려있는지 볼까요?
JavaScript
복사
<div id="q1"></div>
​
div태그가 존재하는데 우리 눈에 안 보이는 이유는 껍데기는 있는데, 내용은 없어서 그래요!
JavaScript
복사
<div id="q1">테스트</div>
​
값을 넣을 변수를 써봅시다
JavaScript
복사
let a = '사과'
​
💁
테스트라는 글씨를 값을 사과로 바꿔볼 겁니다! 이게 움직이기입니다!

여기서부터 오타 작렬에 주의! 잘 따라오세요!
JavaScript
복사
function checkResult() {
	let a = '사과'
	$('#q1').text(a)
}
​
$(’#아이디값’) 으로 어떤 html 태그를 바꿀 것인지 지정해줍니다!
지정했다면, 바꿔줄 명령어를 적어줍니다 text(a)를 넣어 글자 값으로 a를 넣습니다!
😐
이번엔 리스트를 써서 해봅시다!
[코드스니펫] 리스트 자료형
JavaScript
복사
let a = ['사과', '배', '감', '귤']
​
리스트 형태의 코드를 적고 변수에 저장해봅시다!
a의 내용을 문자열에서 리스트로 바꿔봅시다!
JavaScript
복사
let a = ['사과', '배', '감', '귤']
​
문자열에서 리스트의 두 번째 값으로 바꿔서 넣어봅시다!
JavaScript
복사
$('#q1').text(a[1])
​
☑️ 이외에 필요한 부분들은 “구글링” 하여 찾아 보면 좋아요! 
😄
이번엔 딕셔너리를 써서 해봅시다!
[코드스니펫] 자바스크립트 딕셔너리 자료형
JavaScript
복사
let b = {'name' : '영수','age' : 30}
​
딕셔너리 형태의 코드를 적고 변수에 저장해봅시다!
JavaScript
복사
let b = {'name' : '영수','age' : 30}
​
딕셔너리의 키 값을 불러내서 q2라는 아이디 값이 있는 곳에 넣어봅시다!
JavaScript
복사
$('#q2').text(b['name'])
​
😆
이번엔 리스트-딕셔너리를 써서 해봅시다!
[코드스니펫] 리스트-딕셔너리 자료형
JavaScript
복사
let c = [
	{'name':'영수', 'age':30},
	{'name':'철수', 'age':35}
]
​
리스트-딕셔너리 형태의 코드를 적고 변수에 저장해봅시다!
JavaScript
복사
let c = [
	{'name':'영수', 'age':30},
	{'name':'철수', 'age':35}
]
​
리스트에서 원하는 딕셔너리를 부르고, 딕셔너리에서 키 값을 불러내서 q3에 넣어봅시다!
JavaScript
복사
$('#q3').text(c[1]['age'])
​
😎
완성된 결과물은?

[완성 코드]
JavaScript
복사
<!DOCTYPE html>
<html>
    <head>
        <title>자바스크립트 문법 연습하기!</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </head>
    <style>
        .button-part {
            display: flex;
            height: 50px;
        }
    </style>
    <script>
        function checkResult(){
            let a = ['사과','배','감','귤']
            $('#q1').text(a[1])

            let b = {'name':'영수','age':30}
            $('#q2').text(b['name'])

            let c = [
                {'name':'영수','age':30},
                {'name':'철수','age':35}
            ]
            $('#q3').text(c[1]['age'])
        }
    </script>
    <body>
        <div class="top-part">
            <h1>자바스크립트 문법 연습하기!</h1>
        </div>
        <hr/>
        <br>
        <h2>1. 함수</h2>
        <div class="button-part">
            <button onclick="checkResult()">결과 확인하기!</button>
        </div>
        <div class="list-part">
            <h2>2. 리스트</h2>
            <div id="q1">테스트</div>
        </div>
        <div class="dict-part">
            <h2>3. 딕셔너리</h2>
            <div id="q2">테스트</div>
        </div>
        <div>
            <h2>4. 리스트 딕셔너리</h2>
            <div id="q3">테스트</div>
        </div>
    </body>
</html>
​
11. JQuery 연습하기 
✔️
제이쿼리에 대해 조금 더 연습해 봅시다!
JQuery - append (1)
지난 시간에 적었던 코드를 모두 지우고 아래로 새로 붙여보세요!
[코드스니펫] 제이쿼리 연습 코드
SQL
복사
<!DOCTYPE html>
<html>

<head>
    <title>자바스크립트 문법 연습하기!</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<script>
    function checkResult() {

    }
</script>

<body>
    <div class="top-part">
        <h1>자바스크립트 문법 연습하기!</h1>
    </div>
    <hr />
    <br>
    <h2>1. 함수</h2>
    <div class="button-part">
        <button onclick="checkResult()">결과 확인하기!</button>
    </div>
    <div class="list-part">
        <h2>2. 붙이기</h2>
        <div id="q1">
            <p>사과</p>
            <p>귤</p>
            <p>감</p>
        </div>
    </div>
    <div class="list-part">
        <h2>3. 붙이기</h2>
        <div id="q2">
            <p>영수는 24살입니다.</p>
            <p>세종은 30살입니다.</p>
            <p>수영은 20살입니다.</p>
        </div>
    </div>
</body>

</html>
​
checkResult() 함수 안에 적어봅시다!
[코드스니펫] fruits
JavaScript
복사
let fruits = ['사과','배','감','귤','수박']
​
💁
이제 리스트! 가 들어오면 뭘 해야 할지 아시죠! 바로 반복문으로 착착 뽑아내고 싶지 않으신가요?
JavaScript
복사
function checkResult() {
	let fruits = ['사과','배','감','귤','수박']
	fruits.forEach((a)=>{
	// 이제 이 안에서 뭔가 해야 반복문이 보이겠죠!
	})
}
​
백틱(`)이라는 친구를 사용해 볼 겁니다! 숫자 키 1 왼쪽에 있는 기호예요!
temp_html 이라는 변수를 만들 때 백틱을 사용해봅시다!
💁
맥이라면 한글은 ₩로, 영어는 `으로 나옵니다!
JavaScript
복사
function checkResult() {
	let fruits = ['사과','배','감','귤','수박']
	fruits.forEach((a)=>{
		let temp_html = ``
	})
}
​
우리가 원하는 html 태그를 백틱 안에 넣어줍니다!
JavaScript
복사
let temp_html = `<p>사과</p>`
​
JQuery를 사용해서, temp_html을 html 태그처럼 붙여볼 거예요!
JavaScript
복사
$('#q1').append(temp_html)
​
자! 결과는? 사과가 잔뜩 밑에 붙었네요?

사과가 아니라 forEach문으로 돌린 반복문의 데이터가 들어가야겠죠?
JavaScript
복사
function checkResult() {
	let fruits = ['사과','배','감','귤','수박']
	fruits.forEach((a)=>{
		let temp_html = `<p>${a}</p>`
		$('#q1').append(temp_html)
	})
}
​
처음에 나오는 사과, 귤 감은 빼줘야겠죠?
JavaScript
복사
$('#q1').empty()
​
.append() 를 활용하기
🤔
어? `` 에 ${} 까지 너무 어려운데요?
걱정마세요! 왜 이렇게 생겼는지 이해하려고 하지 마시고, 규칙이 있다고만 생각하고 작성하시면 얼마든지 따라 쓸 수 있어요!
1) 원하는 html 태그를 백틱(``)으로 묶어 주세요!
2) 태그 안에 들어갈 값은 ${} 로 표시하고, 그 안에는 자료가 있는 변수를 넣어주세요!
3) 통째로 넣을 html 요소를 $('#아이디')로 골라주시고 appnd(변수)를 넣어주세요!
😎
아직 너무 어렵다면, 계속 반복해서 연습할 테니 걱정 마세요!
문자와 변수를 같이 쓰는 백틱(``)
아까 리스트를 HTML에 추가할 때 썼던 백틱(``) 기억나시나요? HTML요소를 통째로 넣을 때 묶어주는 기호였었습니다!
이 백틱은 문자와 변수를 함께 써줄 수 있도록 하는 특수기호입니다! 이렇게도 쓸 수 있죠!
JavaScript
복사
let profile = `${}의 나이는 ${}살 입니다`
​
이러면 한꺼번에 변수와 문자를 쓸 수 있게 되었습니다. ${} 자리에 변수만 넣어줘 볼까요?
우리가 원하는 이름 값은 nameDict[’name’]으로 가져올 수 있었죠?
우리가 원하는  나이 값은 nameDict[’age’]로 가져올 수 있었습니다!
JavaScript
복사
let profile = `${nameDict['name']}의 나이는 ${nameDict['age']}살 입니다`
​
[완성코드] fruits
JavaScript
복사
function checkResult() {
	let fruits = ['사과','배','감','귤','수박']
	$('#q1').empty()
	fruits.forEach((a)=>{
		let temp_html = `<p>${a}</p>`
		$('#q1').append(temp_html)
	})
}
​
JQuery - append (2)
💁
한 번 더 해볼까요?
함수의 밑에 코드스니펫을 붙여주세요!
[코드스니펫] people
JavaScript
복사
let people = [
	{'name':'서영','age':24},
	{'name':'현아','age':30},
	{'name':'영환','age':12},
	{'name':'서연','age':15},
	{'name':'지용','age':18},
	{'name':'예지','age':36}
]
​
위에서 작성한 코드를 그대로 복사 및 붙여넣기 합시다!
JavaScript
복사
let people = [
	{'name':'서영','age':24},
	{'name':'현아','age':30},
	{'name':'영환','age':12},
	{'name':'서연','age':15},
	{'name':'지용','age':18},
	{'name':'예지','age':36}
]
$('#q1').empty()
fruits.forEach((a)=>{
		let temp_html = `<p>${a}</p>`
		$('#q1').append(temp_html)
	})
​
변수 이름과 넣을 위치를 바꿔 줍시다!
JavaScript
복사
let people = [
	{'name':'서영','age':24},
	{'name':'현아','age':30},
	{'name':'영환','age':12},
	{'name':'서연','age':15},
	{'name':'지용','age':18},
	{'name':'예지','age':36}
]
$('#q2').empty()
people.forEach((a)=>{
		let temp_html = `<p>${a}</p>`
		$('#q2').append(temp_html)
	})
​
이름과 나이로 나눠서 변수를 지정해봅시다!
JavaScript
복사
let name = a['name']
let age = a['age']
let temp_html = `<p>${name}는 ${age}살</p>`
​
[완성코드] people
JavaScript
복사
let people = [
	{'name':'서영','age':24},
	{'name':'현아','age':30},
	{'name':'영환','age':12},
	{'name':'서연','age':15},
	{'name':'지용','age':18},
	{'name':'예지','age':36}
]
$('#q2').empty()
people.forEach((a)=>{
		let name = a['name']
		let age = a['age']
		let temp_html = `<p>${name}는 ${age}살</p>`
		$('#q2').append(temp_html)
	})
​
12. 2주차 끝 숙제 설명
✔️
배웠던 내용을 갖고 2주차 숙제를 풀어보아요!
2주차 끝 숙제 설명 
💯
아래와 같은 결과를 만들어보세요!
⇒ 아주 약간만 수정을 하면 된답니다. 아래를 붙어넣고 시작해보세요!
[코드스니펫] people 준비
JavaScript
복사
let people = [
    { 'name': '서영', 'height': 165 },
    { 'name': '현아', 'height': 170 },
    { 'name': '영환', 'height': 175 },
    { 'name': '서연', 'height': 162 },
    { 'name': '지용', 'height': 190 },
    { 'name': '예지', 'height': 168 }
]
​

HW. 2주차 숙제 해설
💁‍♀️
숙제 내용 한 줄 정리
정답 코드 확인하기
JavaScript
복사
function checkResult() {
    let people = [
        { 'name': '서영', 'height': 165 },
        { 'name': '현아', 'height': 170 },
        { 'name': '영환', 'height': 175 },
        { 'name': '서연', 'height': 162 },
        { 'name': '지용', 'height': 190 },
        { 'name': '예지', 'height': 168 }
    ]
    $('#q2').empty()
    people.forEach((a) => {
        let name = a['name']
        let height = a['height']
        let temp_html = `<p>${name}의 키는 ${height}cm 입니다.</p>`
        $('#q2').append(temp_html)
    })
}