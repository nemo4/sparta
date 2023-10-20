[왕초보] 웹개발 종합반 - 4주차
[수업 목표]
파이어베이스와 파이어스토어를 이해하고 사용할 수 있다.
파이어스토어에 데이터를 넣고, 가져올 수 있다. 
[목차]
01. 4주차 배울 것
02. Firebase 시작하기
03. 데이터베이스 개념 이해하기
04. Firestore Database 시작하기
05. [addDoc] Firestore Database에 데이터 넣기
06. [addDoc] 데이터 넣고, 화면 새로고침 하기(location, alert)
07. [getDocs] Firestore Database에서 데이터 가져오기
08. 앨범 데이터 카드 불러오기 기능 돌아보기
09. 4주차 끝 숙제 설명
HW. 4주차 숙제 해설
💡
모든 토글을 열고 닫는 단축키
Windows : Ctrl + alt + t 
Mac : ⌘ + ⌥ + t 
01. 4주차 배울 것 
✔️
4주차 배울 내용을 알아 봅시다!
4주차 배울 내용 
🙂
지금까지 추억앨범, 스파르타플릭스의 프론트엔드를 만드느라 너무 고생하셨습니다!
프론트엔드를 다 완성했으니깐 이제 무엇을 해야 할까요?!

맞습니다! 바로 백엔드입니다. 

☑️ 4주차는 백엔드에 대해 배우고 알아 볼 거예요!
☑️ 백엔드는 파이어베이스를 이용할 거예요!
☑️ 파이어베이스를 통해 데이터를 넣고 빼는 법을 배워볼 거예요!

02. Firebase 시작하기
✔️
Firebase에 대해 알아 봅시다!
파이어베이스(Firebase)란?
🙂
파이어베이스(Firebase)는 구글(Google)이 개발한 모바일 및 웹 애플리케이션 개발 플랫폼입니다. 개발자들이 백엔드 인프라를 구축하거나 관리하는 복잡한 작업 없이 핵심 기능에 집중할 수 있도록 도와줍니다.
☑️ 설명이 조금 어렵죠? 쉽게 설명 드리면! 
파이어베이스는 웹 서버를 대신 만들어 주는 서비스 
서버 개발 없이 제작 가능 
백엔드 코드 한 줄 없이도 프론트지식(HTML, CSS, JS)만 알아도 웹 서비스 출시 가능!

😃
개발 코드 1. 서버로 데이터를 전송하는 코드 (프론트엔드에서 작성)
개발 코드 2. 데이터를 받으면 데이터베이스에 저장하는 코드 (파이어베이스에서 작성)
사용량만 넘어가지 않으면 무료❗ 
Firebase Pricing
무료로 Firebase를 시작하고 전 세계 수백만 명의 사용자로 확장하세요. 무료 할당량 소진 후 사용한 만큼만 비용을 지불하면 됩니다.

https://firebase.google.com/pricing?hl=ko

파이어베이스 로그인
[코드스니펫] 파이어베이스 링크
사이트에 접속해서 로그인을 눌러 주세요!

구글 로그인한 이후에 콘솔로 이동 

프로젝트 만들기를 눌러주세요!

파이어베이스 프로젝트 생성
프로젝트 이름 sparta 입력 후! 약관 체크 및 계속

애널리틱스 사용 설정 해제 후 프로젝트 만들기!

프로젝트 준비 완료되면 계속하기!

웹으로 선택 후 진행해 봅시다!

앱 닉네임에 spart-projects 적은 후 앱 등록 클릭! 

파이어베이스 코드 가져오기
<script> 태그 사용 누른 후 복사해서 따로 보관해주세요! 콘솔로 이동 클릭!

03. 데이터베이스 개념 이해하기
✔️
데이터베이스 개념에 대해 이해해 보아요!
데이터베이스란?
😎
데이터베이스는 데이터를 저장하고 여러 사람들이 관리하는 데이터의 모음입니다.  

방 정리는 왜 하는 걸까요?
잘 보관하려고 vs 잘 찾으려고

나중에 우리가 잘 찾으려고 미리 정리를 해두는 거예요
즉, 데이터베이스는 데이터를 잘 찾기 위해서 존재하는 것!!
☑️ 데이터베이스를 사용하면 정보를 쉽게 찾고 업데이트할 수 있고, 많은 양의 정보를 효율적으로 관리할 수 있어요. 그래서 많은 조직과 기업들이 데이터베이스를 사용하고 있답니다!
☑️ 데이터분석 하기 위해 SQL을 배운다 ▶ SQL DB에서 데이터를 빼내는 방법을 배운다.
😃
데이터베이스는 크게 두 가지 종류가 있습니다. 

☑️ 각각의 데이터베이스 유형은 다른 용도와 장단점을 가지고 있어요. 데이터의 구조와 요구 사항에 맞춰서 적절한 데이터베이스 유형을 선택하는 것이 중요합니다.
데이터베이스 실체에 관하여
🤔
자, 그럼 DB의 실체는 무엇일까요? 특별한 컴퓨터일까요?
아닙니다! 아주 간단하게, 우리가 쓰는 프로그램과 같은 것이랍니다.
즉, 내 컴퓨터에 게임도 설치하고, PPT도 설치하고, DB도 설치할 수 있는 것이죠.
😎
그런데! 이 마저도 요새는 Cloud 형태로 제공해주는 곳들이 많답니다.
유저가 몰리거나, DB를 백업해야 하거나, 모니터링 하기가 아주 용이하기 때문이죠!
그래서, 우리도 최신 클라우드 서비스인 Firestore Database를 사용해 볼 거예요!
04. Firestore Database 시작하기
✔️
Firestore Database에 대해 배워 봅시다!
파이어스토어(Firestore)란?
😯
파이어스토어(Firestore)는 구글의 클라우드 기반 NoSQL 데이터베이스입니다.
☑️ 간단히 말하면, 파이어스토어는 데이터베이스 서비스로 데이터를 저장하고 관리할 수 있는 기능을 제공합니다.

🧐
 파이어스토어는 마치 커다란 창고와 같다고 생각해봅시다. 이 창고 안에는 많은 서랍장들이 있고, 각각의 서랍장에는 다양한 종류의 문서들이 들어있습니다.
컬렉션(Collection): 서랍장 그룹이라고 생각해봅시다. 여러 개의 문서들이 특정한 주제 또는 유형으로 그룹화되어 있습니다. 예를 들어, “albums"이라는 컬렉션 안에는 문서들이 저장될 수 있습니다.
문서(Document): 서랍장 안에 들어있는 작은 종이로 생각해봅시다. 하나의 종이는 여러 개의 필드(Field)로 구성되어 있습니다. 필드는 종이에 저장된 데이터를 나타냅니다.
필드(Field): 문서 안에 있는 데이터의 작은 부분입니다. 각 필드는 값으로 구성됩니다. 예를 들어, 사용자 문서의 필드로는 "내용", "날짜", "이미지주소", “제목” 등이 있을 수 있습니다.
파이어스토어 시작하기
 빌드에서 Firestore Database를 선택해 주세요!

 테이터베이스 만들기 눌러 주세요!

 프로덕션 모드에서 시작하기 눌러 주세요!

 Cloud Firestore위치는 Seoul로 설정하고, 사용 설정 눌러 주세요!

파이어스토어 규칙 수정하기
규칙을 눌러 주세요!

false → true 변경 후, 게시 눌러 주세요!

파이어스토어 세팅 코드 넣기 
firebaseConfig 정보는 전에 저장해 두었던 각자 정보를 넣어주세요!

[코드스니펫] 파이어스토어 세팅 코드
🤔
저장하지 않았거나! 잊어버린 경우! 
프로젝트 설정 눌러 보시면 나와있습니다!
05. [addDoc] Firestore Database에 데이터 넣기
✔️
Firestore Database에 데이터를 넣는 법을 배워 봅시다!
앨범 데이터 넣기
👀
만들 것 구경하기!


😁
코드스니펫에 있는 코드를 활용하여 완성해 봅시다!
[코드스니펫] 데이터 추가 스켈레톤
Plain Text
복사
$("#id").click(async function () {
    let doc = {};
    await addDoc(collection(db, "콜렉션이름"), doc);
})
​
postbox에 입력했던 값들을 데이터베이스에 넣어볼 거예요!
06. [addDoc] 데이터 넣고, 화면 새로고침 하기(location, alert)
✔️
데이터를 넣고 새로고침 해보아요!
알림 내용 추가하기

😁
기록하기 버튼을 눌렀을 때! 잘 됐다면 알림이 오는게 좋겠죠?!
알림 오는 코드를 추가해 봅시다!
데이터 추가 코드 안에 코드를 추가해 봅시다!
alert() 코드 추가 하기!
화면 새로고침 하기
😁
새로운 앨범이 추가되었으므로 업데이트 된 정보를 사용자에게 보여주기 위한 코드가 필요합니다! 페이지를 새로 고침 함으로써 업데이트 된 데이터를 가져와서 표시하기 위함이죠!
데이터 추가 코드 안에 코드를 추가해 봅시다!
window.location.reload() 코드 추가 하기!
[완성코드]
JavaScript
복사
$("#save").click(async function () {
    let image = $('#image').val();
    let title = $('#title').val();
    let content = $('#content').val();
    let date = $('#date').val();

    await addDoc(collection(db, "album"), {
        image: image,
        title: title,
        content: content,
        date: date
    });
    alert('추억앨범 등록 완료!')
    window.location.reload();
})
​
07. [getDocs] Firestore Database에서 데이터 가져오기
✔️
Firestore Database에서 데이터 가져와서 카드를 생성해 봐요!
데이터 가져오기

😁
현재 데이터베이스에 들어가 있는 데이터를 이제 웹 브라우저에 그려줘야겠죠?
지금부터 코드를 추가해 봅시다!
[코드스니펫] 데이터 읽기 스켈레톤 코드
firebase.js에 스켈레톤 코드 넣고 작성해 봅시다! 
가져온 데이터를 변수에 담기!
카드 동적 생성하기
👀
만들 것 구경하기!

html에서 카드 코드 가져오기!
카드 코드에 필요한 값들을 넣어 줍시다!
append 함수를 통해 카드 붙여주기!
마지막으로 firebase에서 형식에 맞지 않는 document를 없애주기!
[완성 코드]
08. 앨범 데이터 카드 불러오기 기능 돌아보기
✔️
지금까지 만들었던 기능을 돌아 봅시다! 
기능 돌아보기

😯
지금까지 데이터를 넣고, 데이터를 가져오는 작업을 수행했습니다. 과정을 다시 한번 살펴 보겠습니다.
첫 번째, 파이어베이스를 사용하기 위한 세팅을 진행했습니다. 
두 번째, 파이어스토어에 데이터를 넣었습니다. postbox에 들어온 값들을 변수에 담고, 변수 값들을 컬렉션에 추가했습니다.
세 번째, 파이어스토어에 데이터를 가져왔습니다. 가져온 데이터를 변수에 담고, 카드형식에 각각 값들을 넣어서 카드를 생성했습니다. 
09. 4주차 끝 숙제 설명 
✔️
배웠던 내용을 갖고 4주차 숙제를 풀어보아요!
4주차 끝 숙제 설명 
⇒ 처음에 있던 카드들이 나오지 않게 해주세요! 이렇게!
⇒ 힌트, 처음부터 없거나 / 아니면 없애거나!

HW. 4주차 숙제 해설
💁‍♀️
숙제 내용 한 줄 정리
정답 코드
JavaScript
복사
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>나만의 추억앨범</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');

        * {
            font-family: 'Gowun Dodum', sans-serif;
        }

        .mytitle {
            height: 250px;
            color: white;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-image: url('https://images.unsplash.com/photo-1511992243105-2992b3fd0410?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
            background-position: center;
            background-size: cover;
        }

        .mytitle>button {
            width: 150px;
            height: 50px;
            background-color: transparent;
            color: white;
            border: 1px solid white;
            border-radius: 5px;

            margin-top: 20px;
        }

        .mycards {
            width: 1200px;
            margin: 30px auto 0px auto;
        }

        .mypostingbox {
            width: 500px;
            margin: 30px auto 0px auto;
            padding: 20px;
            box-shadow: 0px 0px 3px 0px blue;
            border-radius: 5px;
        }

        .mybtn {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        .mybtn>button {
            margin-right: 5px;
        }
    </style>
    <script type="module">
        // Firebase SDK 라이브러리 가져오기
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
        import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
        import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
        import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";


        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            각자의 정보를 넣기
        };


        // Firebase 인스턴스 초기화
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        $("#postingbtn").click(async function () {
            let image = $('#image').val();
            let title = $('#title').val();
            let content = $('#content').val();
            let date = $('#date').val();

            let doc = {
                'image': image,
                'title': title,
                'content': content,
                'date': date
            };
            await addDoc(collection(db, "albums"), doc);
            alert('저장 완료!');
            window.location.reload();
        })

        $("#savebtn").click(async function () {
            $('#postingbox').toggle();
        })

        let url = "http://spartacodingclub.shop/sparta_api/seoulair";
        fetch(url).then(res => res.json()).then(data => {
            let mise = data['RealtimeCityAir']['row'][0]['IDEX_NM']
            $('#msg').text(mise)
        })

        let docs = await getDocs(collection(db, "albums"));
        docs.forEach((doc) => {
            let row = doc.data();
            let image = row['image']
            let title = row['title']
            let content = row['content']
            let date = row['date']

            let temp_html = `            
            <div class="col">
                <div class="card h-100">
                    <img src="${image}"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${content}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">${date}</small>
                    </div>
                </div>
            </div>`;
            $('#card').append(temp_html);
        });
    </script>
</head>

<body>
    <div class="mytitle">
        <h1>나만의 추억앨범</h1>
        <p>현재 서울의 미세먼지 : <span id="msg">나쁨</span></p>
        <button id="savebtn">추억 저장하기</button>
    </div>
    <div class="mypostingbox" id="postingbox">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="image" placeholder="앨범 이미지">
            <label for="floatingInput">앨범 이미지</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="title" placeholder="앨범 제목">
            <label for="floatingInput">앨범 제목</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="content" placeholder="앨범 내용">
            <label for="floatingInput">앨범 내용</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="date" placeholder="앨범 날짜">
            <label for="floatingInput">앨범 날짜</label>
        </div>
        <div class="mybtn">
            <button id="postingbtn" type="button" class="btn btn-primary">기록하기</button>
            <button type="button" class="btn btn-outline-primary">닫기</button>
        </div>
    </div>
    <div class="mycards">
        <div id="card" class="row row-cols-1 row-cols-md-4 g-4">
            
        </div>
    </div>
</body>

</html>