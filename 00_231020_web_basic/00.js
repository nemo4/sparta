The 기초 of 기초 for Web
https://zoom.us/rec/share/RAMXCoHbkAC5gP-8lhgp3BQ0M-5sBVr0HY0zg9yFD7bdb3DGZAAtLxE0RsCkbqX0.DjSoU3xyOz-jQomt
WEB 기본
💡
웹트랙 여러분 반갑습니다! 우리는 지금 열심히 달리고 있죠. 근데 가끔은 우리가 무엇을 위해 달리고 무엇을 하며 달리는지 모를 때가 있습니다. 혹시 그럴 수 있을 여러분을 위해 이번 시간을 준비했어요.
혹시 다음 질문에 즉각적인 답을 하기 어렵다면, 이번 시간은 아주 유용할 것입니다 🤔​
웹, 웹서비스, 웹서버 각각 무엇인가?
프론트엔드, 백엔드, 서버, 클라이언트는 각각 어떤 개념이며 어떤 관계를 갖는가?
근본적 질문
우리가 앞으로 하려고 하는 것이 뭔가요?
🤔 길동아 너 요즘 뭐 배운다며? 그거 뭐야?
😎 어, 나 개발자 되는거 그거
🤔 개발자? 그거 유명하자나. 근데 그거해서 뭐하는건데?
😎 어.. 그.. 있어, 넌 설명해도 몰라(자리 떠남)


답변은 → 웹 서비스를 만드는 것
웹 서비스란 무엇인가?
웹 이라는 공간에서 제공되는 서비스
그 서비스를 설계 / 제작 / 관리 하는 것이 웹 서비스 개발자(웹 개발자)
비유
식당 비유
서버가 존재
수저, 젓가락 기본 놔줘야 함
주문 이라는 요청을 하면 해당 요청에 알맞은 서비스를 제공
서비스를 누리는 사람 또는 해당 주문을 요청하는 사람은 클라이언트
고양이 비유
요청 ↔ 응답
고양이도 서버다. 엉덩이 두드리면(요청) 귀여움 발산(응답)
집사야 그만 때려라, 클라이언트 주제에 😾​

웹 서비스의 동작
웹 공간의 클라이언트가 요청, 누구든지

해당 요청을 받는 서버(feat. 식당) = 웹 서버라고 함
웹 서버, 좀 더 자세히
컴퓨터(물론 Apache, Nginx, IIS 등 소프트웨어도 있지만)
카카오 데이터 센터 화재(SK C&C)
이 안에는 수 없이 많은 컴퓨터가 빼곡하게 들어서 있음

이 중에는 전 세계의 인터넷을 통해 접속한 클라이언트의 요청을 받고 적절한 웹서비스를 제공하는 웹서버가 존재
그렇게 할 수 있는 이유 = 웹서버(컴퓨터)들이 인터넷으로 연결되어 있기 때문
내 초라한 노트북이 인터넷에 연결되어 있다면, 그리고 웹서버로 기능을 할 수 있도록 프로그래밍을 해놓는다면 → 웹서버 ok

미국에서 근무할 당시 초 소기업
사장님 pc
항온항습
웹서비스를 원활하게 하기 위한 도구
✅
AWS(Amazon Web Services), Vercel, Netlify 등이 존재해요!



왜 쓸까?
컴퓨터 다 살 수 없으니까 빌리는 것
auto scaling
과금제(비쌈)
웹서비스를 좀 더 원활하게 하기 위한 S3와 같은 서비스도 존재

클라이언트 ↔ 서버 상호작용 확인
클라이언트(초 간단 버전)

요청하는 주체
여러분이 브라우저라는 도구를 활용하여 웹서버에 요청
여러분 + 브라우저 = 클라이언트
여러분이 브라우저라는 매개를 이용하여 서버에 어떠한 것을 요청하는 것
서버(초 간단 버전)
요청에 대한 처리를 한 후에 응답을 줌
❗
이말, 정말 중요해요! 예시를 통해 알아볼까요?
www.naver.com 접속 예시


회원가입 예시
[회원가입] 버튼 똭 눌렀을 때!

카드사용명세서 이메일 요청 예시
…  말로 잘 설명해볼께요 🥲​

서버(라는 컴퓨터) 내부에는 많은 프로그램(코드화 되어있는)이 존재(그림)
많은 방식이 있을 수 있지만, 아주 간단하게는 “서버의 해당 프로그램의 내부에 설계된 요청을 캐치하는 부분 → 각 요청에 따른 서비스를 실시 및 응답을 제공하는 부분” 으로 나눌 수 있음
요청은 어떻게 하는 것인가요?

[출처] https://mannhowie.com/rest-api
URL과 Method의 조합으로 실시합니다.
HTTP라는, 서로간에 약속된 상호작용 방법 안에서 url + method로 하는 것
url
method: GET, POST, PUT, PATCH, DELETE
예시
네이버 접속
어떤 아이콘 위에 마우스 올리면 좌측 하단에 URL 출력
클릭 시, dict.naver.com 이라는 요청이 서버에게 감. 지금은 GET, POST 등 어떤 방식인지 노출은 안되어있지만 코드 상에 적혀 있겠죠.
어떻게 적혀있을까요?(코드)
HTML
복사
<button onclick="sendRequest()">사전</button>

<script>
function sendRequest() {
    fetch("https://example.com/dictionary", {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}
</script>
​
그러면 서버는 다음과 같이 알맞은 요청을 받아 처리를 준비해요(node, spring)
node(express)
JavaScript
복사
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/dictionary', (req, res) => {
    res.send('사전 페이지 입니다.');
});

app.post('/dictionary', (req, res) => {
    //
});

app.get('/dictionari', (req, res) => {
    res.send('조금 이상한 사전 페이지 입니다.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
​
spring
Java
복사
package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// 어노테이션을 이용해 명시
// @RestController: 해당 클래스가 RESTful 웹 서비스의 컨트롤러 역할을 하는 클래스임을 나타냅니다.
// @GetMapping: 해당 메서드가 GET 요청을 처리하는 메서드임을 나타냅니다.

@RestController
public class DictionaryController {

    @GetMapping("/dictionary")
    public String getDictionary() {
        return "사전 페이지 입니다.";
    }
}
​
웹서버, 주요기능 중심으로 좀 더 깊게 들어가기
개요
여러분이 만드는 것은, 웹서비스 제공을 위한 웹서버라는 것을 기억하세요!
웹서버는 프론트엔드와 백갠드로 구성되어 있습니다.

[출처] https://www.nearpartner.com/
(웹)서버의 주요 기능은 (정적)페이지 제공, API 제공입니다.
⇒ 물론 다른 기능(보안, 모니터링 …)이 있을 수 있지만, 이 정도만 알아도 훌륭합니다.
[기능1] API 제공
🔥
API(Application Programming Interface)란?
여러 소프트웨어 간에 정보나 기능을 공유하게 해주는 중간 매개체
일종의 규약(약속)
한 프로그램이 다른 프로그램의 기능을 사용하거나 정보를 가져올 수 있음
API는 클라이언트의 요청에 따라 동적으로 데이터나 정보를 제공
주로 JSON이나 XML형식으로 응답을 반환
RESTful API, GraphQL API

더 알고싶다면?
RESTFul API
웹 서비스에서 사용하는 API 설계 방법
자원(resource)을 URL로 표현 + 처리 종류를 HTTP 메서드를 통해 효현
XML, JSON 형태로 데이터를 주고 받음
GraphQL API
API 쿼리 언어
클라이언트가 필요로 하는 데이터의 형태와 구조 요청
서버가 그에 따른 데이터를 상세히 반환
오버페칭 + 언더페칭 해결
두 방법 모두 정답은 아니에요. 장/단점이 존재합니다. 구현코자 하는 프로젝트의 상황과 환경, 요구사항에 따라 적합한 방법을 선택하세요.
RESTful은 많은 웹 서비스에서 널리 사용되는 전통적인 방식이며, GraphQL은 복잡한 데이터 요구 사항을 효과적으로 처리할 수 있는 현대적인 방식입니다.
가장 쉬운 테스트
JSONPlaceholder
https://jsonplaceholder.typicode.com/posts/1
Open API
날씨데이터
날씨 정보를 제공하는 국내외 오픈 API 세 가지
하루에도 몇 번씩 오락가락하는 날씨. 특히 요즘 같은 장마철에는 외출 전 날씨를 미리 확인하는 것이 필수입니다. 스마트폰이 대중화되지 않았던 과거에 우리는 뉴스의 일기예보를 기다리거나, 기상청 사이트를 이용하곤 했습니다. 하지만 이제는 대부분의 사람들이 날씨 앱을 이용하고 있죠.

https://blog.hectodata.co.kr/weather_api/

도로명주소 데이터
API 체험하기
사용중인 휴대전화번호로 인증

https://business.juso.go.kr/addrlink/openApi/apiExprn.do?cPath=99JA
etc…
HYPHEN
비즈니스를 위한 모든 API, 하이픈 데이터마켓

https://hyphen.im/?utm_source=google&utm_medium=cpc&utm_campaign=pc&utm_content=1-3+API마켓+키워드&utm_term=오픈API&utm_source=google&utm_medium=cpc&utm_campaign={19482532748}&utm_content={144523188626}&utm_term=오픈api&gclid=Cj0KCQjw4bipBhCyARIsAFsieCyq2tqrxIzRUFkAPwolZyoW-fR9RzM8oJ-SrW9o-2hicqoj9O8GbGsaAlAREALw_wcB

[기능2] 페이지(정적) 제공
☝
우리가 가장 쉽게 이해할 수 있는 서버의 기능이죠.
www.naver.com을 입력했을 때 일어나는 현상을 떠올리면 쉽습니다!
내부 로직은 어떻게 구성되어 있을까요?
express.js
HTML
복사
// public/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Express Static Page</title>
</head>
<body>
    <h1>Welcome to Express!</h1>
</body>
</html>
​
JavaScript
복사
const express = require('express');
const app = express();
const PORT = 3000;

// 정적 파일 제공
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
​
spring
HTML
복사
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spring Boot Static Page</title>
</head>
<body>
    <h1>Welcome to Spring Boot!</h1>
</body>
</html>
​
모던 웹서비스 구성방법 알아보기
☝
주요 개념, 프론트엔드(리액트 👏)와 백엔드(노드, 스프링 🥳)에 대해 알아봅시다.
쉬운 이해를 위해 우리는 스파르타 레스토랑으로 들어가볼거에요! RED SUN!

프론트엔드:
레스토랑의 앞쪽에 해당합니다.
이곳에서는 고객이 메뉴를 보고 주문하며, 음식이 서빙되는 공간입니다.
레스토랑의 인테리어, 음식의 플레이팅, 메뉴판의 디자인 등 고객이 눈으로 보고 느끼는 모든 경험이 이곳에서 제공됩니다.
백엔드:
레스토랑의 주방에 해당합니다.
고객이 주문한 음식을 조리하는 공간이며, 식재료를 보관하고 관리하는 장소입니다.
고객은 직접 주방의 내부를 보거나, 요리 과정을 알 수 없습니다. 그들은 주방에서 나오는 완성된 음식 결과물만을 기다립니다.
이 비유를 웹서비스에 적용해보면:
프론트엔드는 사용자가 웹사이트에서 직접 보고 상호작용하는 부분입니다. 웹 페이지의 디자인, 버튼 클릭, 입력 폼 등 사용자 인터페이스와 관련된 모든 것을 포함합니다.
백엔드는 서버, 데이터베이스, 애플리케이션 로직 등 사용자의 눈에 보이지 않는 부분을 관리합니다. 사용자가 웹사이트에서 정보를 요청하면, 백엔드는 해당 정보를 처리하거나 데이터베이스에서 가져와 프론트엔드에 전달합니다.
이렇게 프론트엔드와 백엔드는 각각 다른 역할을 수행하면서도 웹사이트나 애플리케이션을 구동하기 위해 서로 협력합니다.
이를 구성하는 방법은 너무나 다양하지만, 아래 4가지로 한번 정리해보죠!
프론트엔드와 백엔드를 각각 구성하여 각각 배포하는 방법 → 웹서버 2개
리액트 프로젝트 만들어 Vercel 등에 별도 배포
스프링, (또는 노드) 프로젝트 만들어 ec2 등으로 별도 배포
특징
FE와 BE가 독립적으로 웹 서버에 배포됨.
주요 기능의 담당
페이지 전달 : 리액트
API 제공 : 스프링(또는 node)
장점:
프론트엔드와 백엔드를 독립적으로 스케일 아웃할 수 있다.
한쪽에 문제가 발생해도 다른 쪽에 영향을 주지 않는다.
단점:
배포 및 관리가 복잡할 수 있다.
프론트엔드와 백엔드 간의 통신 오버헤드가 발생할 수 있다.
예시
전자 상거래 웹사이트 : React로 제작된 프론트엔드 웹사이트와 Express로 구축된 백엔드 API 서버. 사용자는 React 웹사이트를 통해 상품을 검색하고, 주문하며, Express 백엔드는 상품 데이터나 주문 처리와 같은 서비스를 제공합니다.
프론트엔드와 백엔드를 동시에 구성하는 방법 in 웹서버 1개
프로젝트 디렉토리(폴더) 안에 리액트와 스프링(또는 Node) 폴더가 각각 존재하여 한번 배포, 끝! (빌드 bla bla…)
특징
하나의 웹서버에서 프론트엔드와 백엔드를 동시에 처리함.
주요 기능의 담당
페이지 전달 : 리액트
API 제공 : 스프링(또는 node)
장점
배포 및 관리가 간단하다.
네트워크 통신 오버헤드가 없거나 적다.
단점
백엔드와 프론트엔드가 동일한 리소스를 공유하기 때문에 성능 이슈가 발생할 수 있다.
스케일 아웃이 어려울 수 있다.
예시
블로그 시스템 : 스프링 백엔드에 React로 작성된 프론트엔드를 결합하여 하나의 웹 서버에서 작동하게 하는 블로그 시스템. 이 때, React는 블로그 포스트를 표시하는 프론트엔드와 스프링은 데이터베이스에서 포스트를 가져오는 백엔드 역할을 합니다.
백엔드만 구성하여 배포하는 방법 → 웹서버 1개
특징
백엔드에서 정적 페이지와 API를 함께 제공.
주요 기능의 담당
페이지 전달 : 스프링(또는 node)
API 제공 : 스프링(또는 node - express/nest)
장점
프론트엔드의 별도 배포가 필요 없다.설정 및 관리가 상대적으로 간단하다.
단점
모던 프론트엔드 프레임워크의 이점을 제대로 활용하기 어려울 수 있다.백엔드 리소스가 정적 페이지 제공에도 사용되므로 퍼포먼스 이슈가 발생할 수 있다.
예시
간단한 회사 홈페이지: 스프링 프레임워크를 사용하여 회사 소개, 연락처, 서비스 정보 등의 정적 페이지와 함께 간단한 문의 폼을 제공하는 웹사이트. 모든 페이지는 스프링의 JSP 기능을 통해 제공됩니다.
프론트엔드만 구성하여 배포하는 방법 → 웹서버 1개
특징
프론트엔드만 배포하여 서비스.
주요 기능의 담당
페이지 전달 : 리액트
API 제공 : 없거나, next를 사용하는 경우
장점
백엔드 없이 순수한 클라이언트 사이드 렌더링을 활용할 수 있다.프론트엔드 리소스만 관리하면 되므로 간단한 웹사이트나 앱에 적합하다.
단점
데이터를 처리하거나 복잡한 기능을 구현하기 위해서는 별도의 백엔드 서비스가 필요하다.SEO 최적화를 위해 서버 사이드 렌더링이 필요할 경우 별도의 설정 및 구성이 필요하다.
예시
포트폴리오 웹사이트 : 개인의 스킬과 경험을 소개하는 포트폴리오 웹사이트. React로 작성되었으며, GitHub Pages나 Netlify와 같은 정적 사이트 호스팅 서비스를 사용하여 배포되었습니다. 데이터는 공개 API나 정적 데이터 파일을 사용하여 가져옵니다.
HISTORY of WEB
고조선

[출처] 위키
모든 웹은 정적 페이지
모든 내용이 하나의 파일에 포함
CGI(Common Gateway Interface)를 이용하여 동적 콘텐츠 제공
공용 게이트웨이 인터페이스
공용 게이트웨이 인터페이스(영어: Common Gateway Interface; CGI)는 웹 서버 상에서 사용자 프로그램을 동작시키기 위한 조합이다. 존재하는 많은 웹 서버 프로그램은 CGI의 기능을 이용할 수 있다.

https://ko.wikipedia.org/wiki/공용_게이트웨이_인터페이스

삼국시대

[출처] 영화 황산벌
서버측에서 웹 애플리케이션 로직과 뷰를 함께 관리
MVC 패턴 대 유행의 시대
Spring, JSP, PHP, ASP.NET
조선시대

[출처] 문화재청 공식 블로그
동적 웹의 시대
Ajax의 등장 → 웹 페이지 동적 변경 가능 → FE 라이브러리(프레임워크) 등장
ex: React, Angular, Vue
RESTful API를 통한 프론트엔드와 백엔드의 명확한 분리
대한민국

[출처] 다나와자동차
다양한 백엔드 아키텍처
Monolithic에서 Microservices로의 전환
서버리스 아키텍처, 그래프QL 등 등장
풀스택 프레임워크의 등장
Nest.js와 같은 백엔드 프레임워크 등장
Next.js와 같은 서버 사이드 렌더링(SSR)을 지원하는 프론트엔드 프레임워크 등장
이를 통해 개발의 효율성과 성능 최적화 가능
Jamstack
프론트엔드와 백엔드의 완전한 분리를 추구하는 아키텍처
정적 사이트 생성기와 헤드리스 CMS가 주요 트렌드
개발환경의 표준화와 자동화
Docker, Kubernetes와 같은 컨테이너 기술 등장
개발과 배포 프로세스 표준화&자동화
실전예시(겡미)
스벅 상품권을 두고 겨루어봅니다!
sparta-web-basic-game.vercel.app
스무고개 게임 with

https://sparta-web-basic-game.vercel.app/

