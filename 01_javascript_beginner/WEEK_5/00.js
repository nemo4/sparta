[왕초보] 웹개발 종합반 - 5주차
[수업 목표]
Github를 이해하고 사용할 수 있다.
Github pages를 이용하여, 배포를 진행할 수 있다.
[목차]
01. 5주차 배울 것
02. [addDoc] 영화 데이터 넣기
03. [getDocs] Firestore Database에서 데이터 가져오기
04. 배포가 뭐예요?
05. Github 시작하기
06. Github Pages로 배포하기
07. 배포한 것 수정하기 및 주의 사항
08. 더 잘 만들고 싶다면?
09. 파이썬 맛보기(스크래핑)
10. 5주차 끝 숙제 설명
💡
모든 토글을 열고 닫는 단축키
Windows : Ctrl + alt + t 
Mac : ⌘ + ⌥ + t 
01. 5주차 배울 것
✔️
마지막 5주차 배울 내용을 알아 봅시다!
5주차 배울 내용
🤗
드디어 마지막 주차 입니다!!  
여기까지 오느라 너무 고생 많으셨습니다.

우리가 만든 프로젝트를 웹 서비스로 출시해보는 경험을 가질 겁니다!
여러분의 프로젝트를 가족, 친구, 지인들에게 자랑해 봐야겠죠!!
스파르타플렉스로 데이터 넣고, 가져오기 한번 더 복습!
스파르타플렉스 : 결과물 링크
➡️ 스파르타플렉스는 실제 웹서비스 넥플릭스를 기반으로 만든 프로젝트로 
     영화카드 추가 기능 기억하시죠? 

배포 툴 Github로 대망의 배포하기!

파이썬도 잠깐 맛 봐볼 거예요! 

➡️
파이썬은 다양한 분야에서 활용되는데, 웹 개발, 데이터 분석, 인공지능 등 다양한 작업에 활용됩니다. 그 활용 방식 중 하나 웹 개발을 해볼 거예요! 
➡️
파이썬은 컴퓨터 프로그래밍 교육을 위해 많이 사용하지만, 기업의 실무를 위해서도 많이 사용하는 언어입니다. 그 대표적인 서비스로 인스타그램, 트위터, 넷플릭스 등이 있습니다! 
02. [addDoc] 영화 데이터 넣기 
✔️
Firestore Database에 새로운 영화 데이터를 추가해봅시다!
영화 데이터 넣기
👀
만들 것 구경하기!
스파르타플렉스 : 결과물 링크

➡️
이미지 주소, 제목, 별점, 추천 이유를 적고 기록하기 버튼을 누르면 어떻게 돼야 하죠?!
파이어스토어에 데이터가 들어가야 합니다. 

➡️
새로운 서비스를 만들기 위해서는 새로운 데이터베이스 작업이 필요하죠?
새로운 컬렉션을 만들어봅시다!
[코드스니펫] 파이어베이스 기본 세팅
🚩
파이어베이스 기본 세팅 코드스니펫을 사용하여 html 파일에 붙여 주세요!
[코드스니펫] 영화 데이터 추가 스켈레톤
➡️
스켈레톤 코드에서 우리가 채워야 하는 내용에 대해 알아볼까요?
$("빈칸").click(async function () { 빈칸 } 
버튼의 아이디를 넣어서 버튼을 클릭하면, 작동되는 함수를 만들 거예요
let doc = { 빈칸 }; 
영화 카드에 넣어줄 데이터들, 입력 폼에서 받는 것 기억하시죠?
이미지(image), 제목(title), 내용(content), 날짜(date)를 하나씩 변수에 담아 줍시다! 
await addDoc(collection(db, "빈칸"), doc)
postbox에 입력했던 값들을 데이터베이스에 넣어볼 거예요!
우리는 영화 데이터베이스 컬렉션에 넣어줘야겠죠? 컬렉션을 써줍니다!
alert코드와 reload코드도 추가해 주세요!
📌
alert → 팝업 창을 표시하여 사용자에게 메시지를 전달하는 기능을 제공
reload → 현재 페이지를 새로고침 하는 기능을 제공
[완성코드] 새로운 영화 추가하기 
추가자료
03. [getDocs] Firestore Database에서 데이터 가져오기
✔️
Firestore Database에서 데이터 가져와서 카드를 생성해 봐요!
데이터 가져오기

➡️
현재 데이터베이스에 들어가 있는 데이터를 이제 웹 브라우저에 카드 형식으로 그려줘야겠죠?
지금부터 코드를 추가해 봅시다!
[코드스니펫] 영화 데이터 가져오기 스켈레톤 코드
➡️
스켈레톤 코드에서 우리가 채워야 하는 내용에 대해 알아볼까요?
let docs = await getDocs(collection(db, ""));
docs.forEach((doc) => {
	 //코드 작성
});
컬렉션 명 설정해 주기
이미지, 제목, 별, 추천 이유 값들을 변수에 담기
카드 코드 가져와서 변수에 담아주기
append 메서드를 통해 카드 붙여주기
[완성코드] 영화 데이터 가져와서 카드 생성
04. 배포가 뭐예요?
✔️
배포가 무엇인지 알아 봅시다!
배포란?
스파르타플릭스 : 배포 링크
추액앨범: 배포 링크
🥺
배포는 소프트웨어 개발 과정에서 개발한 애플리케이션, 웹사이트, 서비스 등을 실제 사용자들에게 제공하는 과정을 말합니다.

스파르타플릭스와 추억앨범도 배포를 완료하였기 때문에, 여러분이 들어갈 수 있는 거죠! 

즉, 배포는 만든 작업 물을 외부에 공개하는 일!!
링크가 생겨서 요청하면 결과를 볼 수 있는 서비스를 세상에 내놓는 일!!

💡
우리가 접속하는 모든 사이트는 이미 배포가 완료된 것이죠! 
☑️ 배포는 코드 작성부터 테스트, 실행 파일로 변환하여 인터넷에 공개하고 업데이트하는 과정입니다. 이렇게 하면 다른 사람들이 프로그램을 사용 할 수 있죠!
☑️ 배포는 소프트웨어 개발 과정에서 중요한 단계로, 사용자들이 개발한 소프트웨어를 이용할 수 있도록 만들어줍니다. 
URL이란?
🌎
URL은 "Uniform Resource Locator"의 약자로, 인터넷에서 특정 리소스의 위치를 나타내는 주소입니다. 간단히 말해서, 웹 페이지나 파일의 고유한 주소로 생각할 수 있습니다.

URL은 일반적으로 다음과 같은 형식을 가지고 있습니다 :)
Python
복사
프로토콜://도메인/경로
​
☑️ 프로토콜(protocol): 웹 브라우저와 웹 서버 간의 통신 방식을 지정합니다. 가장 일반적으로 사용되는 프로토콜은 "http://"와 "https://"입니다.
☑️ 도메인(domain): 인터넷 상에서 고유한 식별자로 사용되는 웹 사이트의 주소입니다. 도메인은 일반적으로 사이트의 이름과 최상위 도메인(Top-Level Domain, 예: .com, .org)으로 구성됩니다.
☑️ 경로(path): 웹 사이트 내에서 특정 페이지나 파일의 위치를 지정합니다. 경로는 슬래시("/")로 구분된 디렉토리 경로와 파일명으로 구성됩니다.
Python
복사
ex) https://spartacodingclub.kr/catalog

예를 들어, https://spartacodingclub.kr/catalog 라는 URL은 HTTPS 프로토콜을 사용하며, 
spartacodingclub.kr 라는 도메인에 위치한 catalog라는 경로에 있는 페이지를 나타냅니다.
​
🚩
URL을 사용하여 웹 브라우저에서 웹 페이지에 접속하거나, 웹 서버에서 파일을 다운로드하거나, 웹 사이트 간에 정보를 전달할 수 있습니다. URL은 웹의 기본적인 동작과 정보의 위치를 식별하는 데 중요한 역할을 합니다.
05. Github 시작하기
✔️
깃 허브가 무엇인지 알아 봅시다!
깃허브(Github)란?
😐
깃허브는 인터넷에서 개발자들이 자신의 코드를 저장하고 다른 사람들과 공유하는 곳입니다.

예를 들어, 게임이나 앱을 만들고 그 코드를 깃허브에 올리면 다른 친구들도 그 코드를 볼 수 있죠! 현업에서는 깃허브를 통해서 다양한 사람들과 함께 일하고 프로젝트를 진행할 수 있는 강력한 협업 툴로 사용되고 있습니다.

깃 허브를 안 쓰는 개발자는 거의 없다고 봐도 될 정도죠……
🚩
깃허브의 주요 4가지 기능

☑️ 코드 관리: 깃허브는 코드의 버전 관리를 할 수 있습니다. 
☑️ 협업: 여러 개발자가 한 프로젝트에 참여할 수 있습니다. 
☑️ 웹 호스팅: 개발자가 작성한 코드를 인터넷에 공개적으로 호스팅하여 다른 사람들이 쉽게 접근하고 이용할 수 있습니다.
☑️ 지식 공유: 깃허브는 개방된 플랫폼으로 다른 개발자들과 코드, 프로젝트, 라이브러리 등을 공유할 수 있습니다. 
——————————————————————————————————————
깃허브는 도서관과 비슷합니다. 여러 개발자들이 책을 작성하고 저장할 수 있는 도서관이라고 생각해보세요!
코드 관리 기능은 마치 작성한 책의 버전을 관리하는 것과 비슷합니다. 여러 번 수정하며 책의 내용을 변경할 수 있고, 깃허브를 통해 변경 사항을 추적하고 저장할 수 있습니다. 또한, 이전 버전과의 차이점을 비교해보며 필요한 경우 이전 버전으로 돌아갈 수도 있답니다. 
협업 기능은 여러 작가들이 함께 책을 쓰는 것과 비슷합니다. 여러 개발자가 한 프로젝트에 참여하여 코드를 공유하고 함께 작업할 수 있습니다. 작성한 내용을 서로 리뷰하고 피드백을 주고받을 수 있는 거죠. 
웹 호스팅 기능은 작성한 책을 인터넷에 공개하는 것과 비슷합니다. 깃허브를 통해 작성한 코드를 웹 호스팅 서비스에 업로드하면, 해당 코드와 관련된 웹 페이지가 웹 서버에 저장되고 인터넷 상에서 접근 가능해집니다. 이렇게 함으로써 프로젝트의 문서나 데모 페이지 등을 온라인에서 공유하고 다른 사람들이 쉽게 접근하고 필요한 파일을 다운로드할 수 있습니다.
지식 공유 기능은 다른 작가들과 책을 공유하고 읽는 것과 비슷합니다. 깃허브는 개방된 플랫폼으로 다른 개발자들과 코드, 프로젝트, 라이브러리 등을 공유할 수 있습니다. 다른 사람들의 오픈 소스 프로젝트를 참고하거나 기여할 수 있습니다. 이는 마치 여러 작가들이 서로의 책을 읽고 참고하며 함께 책을 발전시키는 것과 비슷합니다.
깃허브 가입하기
[코드스니펫] github 주소 
깃허브 홈페이지 접속 후 Sign up을 눌러 주세요!

이메일과 닉네임, 비밀번호를 차례대로 입력해 주세요!


Skip Personalization을 클릭하여 상세 정보 기입란을 넘겨주세요!

free 서비스를 체크합니다!

06. Github Pages로 배포하기
✔️
Github Pages를 이용해 배포를 해봅시다!
Github Pages란?
😙
GitHub Pages는 GitHub에서 제공하는 다른 사람들에게 인터넷으로 공유할 수 있는 서비스입니다. 

호스팅? 인터넷에 올리는 것!!
✅
정적 웹 페이지란? 
실시간 변경되는 내용은 없고 HTML, CSS, JavaScript 등으로 이루어진 단순한 웹 페이지를 의미합니다. GitHub Pages를 이용하여 자신의 프로젝트를 온라인으로 호스팅하여 웹 브라우저에서 접속 가능하게 할 수 있죠!
😆
지금부터 Github Pages를 이용하여 배포해 봅시다!
저장소 생성하기
Create Repository 를 선택합니다

저장소 이름을 적고, public을 선택하고 Create Repository를 클릭!

파일 업로드하기
Upload Exsiting Files를 선택!

choose your files 누른 후 파일 선택해 업로드합니다.

배포하기
저장소에서 settings로 들어갑니다

settings 화면 왼쪽부분에서 Pages를 찾아 클릭합니다

Branch Name을 main으로 설정하고 save 버튼을 누릅니다

조금 기다리셨다가 새로고침 하시면 화면에 주소가 노출됩니다!

07. 배포한 것 수정하기 및 주의 사항
✔️
배포한 것을 수정하는 법 및 주의 사항에 대해 알아 봅시다!
수정 해보기 
🤔
배포한 내용을 업데이트 하거나 수정하고 싶을 때가 있겠죠!?
지금부터 한번 해 보시죠!
수정하고 싶은 프로젝트에 repository로 들어와 주세요!

수정하고 싶은 파일을 선택해 주세요! 저희는 index.html을 수정해 보겠습니다.

오른쪽 연필 모양의 버튼을 누르면, 코드 수정이 가능합니다!

💡
여기서 잠깐!
코드 수정이 많은 경우는 VScode에서 작성해서 코드 전체를 교체하는 것이 좋습니다.
깃 허브 안에서 수정할 경우 오류 날 확률이 높기 때문입니다!
<h1> 태그 내용을 수정해 봅시다!

코드 내용을 수정한 후, Commit changes 를 눌러 주세요!

잠시 기다리시면 해당 내용이 반영된 걸 확인 하실 수 있습니다!


주의 사항❗​
☑️ 배포하기 전에 반드시 로컬에서 테스트를 수행해 보세요! 배포된 페이지에 오류가 발생하지 않도록 하는 데 도움이 됩니다.
☑️ 원격 저장소에는 중요한 정보를 포함하지 않도록 주의하세요. 비밀번호, API 키, 개인정보 등 민감한 정보는 소스 코드에서 제거해 주셔야 합니다!
08. 더 잘 만들고 싶다면?
✔️
더 잘 만들기 위해서는 어떤 방법이 있을까요?
파이어베이스 한계점
🔥
파이어베이스를 사용하여 웹 애플리케이션을 호스팅하면 편리함과 빠른 개발 속도를 얻을 수 있지만, 일부 제한 사항이 존재합니다. 

주요한 한계 중 하나는 백엔드에 대한 컨트롤을 일부 잃게 된다는 점!
🚫 서버 제어 제한: 파이어베이스는 서버 인프라에 대한 직접적인 컨트롤이 제한됩니다. 파이어베이스에서 제공하는 기능과 방식에 따라 작업을 수행해야 합니다.
📈 확장성 제약: 파이어베이스는 규모에 따른 가로 확장성 측면에서 제한이 있을 수 있습니다.
🔗 종속성: 파이어베이스를 사용하면 Google의 서비스에 의존하게 됩니다. 파이어베이스 외부의 다른 서비스나 기능을 활용하기 어렵거나 제한적일 수 있습니다.
😶
결국은, 내 입맛에 맞게 구축하기 위해서는 다른 서버를 써야 합니다!!
붕어빵 가게로 예를 들어 보겠습니다
🏪 파이어베이스 붕어빵 가게: 파이어베이스를 사용하여 열린 붕어빵 가게는 매우 편리합니다. 파이어베이스는 이미 붕어빵을 만들어주는 기계를 갖추고 있으며, 손님들은 다양한 맛과 크기의 붕어빵을 선택할 수 있습니다. 그러나 붕어빵 가게 주인은 파이어베이스에서 제공하는 기능과 방식에 따라서만 붕어빵을 제조하고 판매할 수 있습니다.
⭐️ 다른 개발 플랫폼 붕어빵 가게: 반면에 다른 백엔드 서버를 사용하여 열린 붕어빵 가게는 더 다양한 가능성을 가지고 있습니다. 주인은 자신만의 고유한 붕어빵 레시피를 개발하고, 붕어빵 뿐만 아니라 다른 요리도 제공할 수 있습니다.  다른 백엔드 서버를 사용하면 주인은 자유롭게 가게를 운영하고, 요리를 다양화하여 다른 맛과 제품을 손님들에게 제공할 수 있습니다.
파이썬의 사용
🐍
파이썬을 사용하는 이유는 파이어베이스의 제한 사항을 넘어선 다양성과 유연성을 가지고 더 많은 컨트롤을 할 수 있다는 점! 
☑️ 파이썬은 다양한 웹 애플리케이션 개발 가능성을 제공하며, 개발자가 원하는 방식으로 서버를 구축하고 관리할 수 있게 해줍니다.
☑️ 파이썬은 서버에 대한 완전한 컨트롤을 갖게 됩니다. 주인은 자신만의 고유한 방식으로 서버를 구축하고 관리할 수 있죠.
☑️ 파이썬을 사용하는 경우, 서버의 확장성을 조절할 수 있으며, 필요에 따라 리소스를 추가하거나 조정할 수 있습니다. 이는 대규모 기업이나 많은 트래픽을 처리해야 하는 프로젝트에서 중요한 요소입니다. 
☑️ 파이썬을 사용하는 경우, 다른 서비스와의 통합이나 원하는 기능을 더욱 유연하게 구현할 수 있습니다.
09. 파이썬 맛보기(스크래핑)
✔️
파이썬을 사용하여 스크래핑을 한번 경험해 봅시다!
Google Colab 시작하기
👨‍🏫
Google Colab 은 구글에서 제공하는 클라우드 기반 무료 Python 실행 환경입니다
[코드스니펫] colab 주소
콜아웃 아이콘
함께 따라해봅시다 어렵지 않아요 :)
Google Colabo 웹페이지에 접속 후 우측 상단의 로그인 버튼을 클릭합니다

구글에 로그인합니다

로그인 후, 메인 화면 좌측 상단의 “파일” → “새 노트”를 클릭합니다

Colab에 오신걸 환영합니다 🙂​

웹 스크래핑 연습하기
😯
지난 시간에 파이어베이스 한계점에 대해 알아 보았습니다. 이번에는 직접 서버를 구축하여 백엔드 개발을 할 수 있는 파이썬에 대해 맛보기를 해보려고 합니다.

파이썬을 서버로 사용하면 개발자가 원하는 방식으로 서버를 커스터마이징 하고 확장할 수 있어 더 많은 유연성을 가질 수 있습니다!
[코드스니펫] 다음 영화 페이지
➡️
인터넷에는 많은 웹 페이지들이 있는데 그 웹 페이지들은 컴퓨터로 만들어진 문서와 비슷해요. 그러면 우리가 필요한 정보를 얻으려면 그 웹 페이지를 일일이 읽어야 할까요? 

그럴 필요 없이 스크래핑을 사용하면 필요한 정보를 간단하게 추출할 수 있죠!
스크래핑은 웹 페이지의 특정 부분에서 필요한 정보를 추출하는 작업을 말합니다.

예를 들어, 여러분이 필요한 노트북의 정보를 알고 싶다고 가정해 보죠.
그럼 쇼핑몰 웹 페이지에 접속해 스크래핑을 사용하여 제품의 이름과 가격을 추출할 수 있어요!
❓
스크래핑의 원리

스크래핑은 인터넷에서 필요한 정보를 가져오기 위해 웹 페이지의 구조와 내용을 읽어오는 것이에요. 스크래핑을 할 때, 우리는 웹 페이지의 HTML 코드를 이용해요. HTML은 웹 페이지의 구조와 내용을 담고 있는 언어인데, 마치 웹 페이지의 뼈대라고 생각하면 돼요. 스크래핑은 이 HTML 코드를 컴퓨터가 이해할 수 있는 방식으로 읽어오는 것이에요.
[코드스니펫] 스크래핑 기본 세팅
colab에서 연습해 봅시다! 다음 영화를 스크래핑하여 가져와 볼 거예요.
select / select_one의 사용법을 익혀봅니다.
👀
태그 안의 텍스트를 찍고 싶을 땐 → 태그.text
태그 안의 속성을 찍고 싶을 땐 → 태그['속성']
💡
개발자도구에서 어떤 뼈대를 가져와야 하는 지 찾아봅시다.
원하는 부분에서 마우스 우클릭한 후 검사를 눌러주세요.
Copy → Copy selector로 선택자를 복사할 수 있음

💡
영화 제목 하나를 가져와 볼까요?

원하는 영화 제목 마우스 우클릭한 후 검사
개발자 도구에서 제목에 해당하는 데이터 뼈대 마우스 오른쪽 클릭
Copy → Copy Selector로 선택자 복사
📌
Python
복사
title = soup.select_one("#mainContent > div > div.box_ranking > ol > li:nth-child(1) > div > div.thumb_cont > strong > a").text
print(title)
​
soup.select_one()안에 셀렉터 값을 넣고 원하는 뼈대만 꺼내봅시다.
print()로 어떻게 가져와 졌는지 확인해보세요!
가져온 데이터는 html의 뼈대이기 때문에 .text()를 사용해서 문자 값만 꺼내줍니다.
Python
복사
# 선택자를 사용하는 방법 (copy selector)
soup.select('태그명')
soup.select('.클래스명')
soup.select('#아이디명')

soup.select('상위태그명 > 하위태그명 > 하위태그명')
soup.select('상위태그명.클래스명 > 하위태그명.클래스명')

# 태그와 속성값으로 찾는 방법
soup.select('태그명[속성="값"]')

# 한 개만 가져오고 싶은 경우
soup.select_one('위와 동일')
​
10. 5주차 끝 숙제 설명
✔️
5주차 끝 숙제 설명 
5주차 끝 숙제 설명 
💯
수고하셨습니다! 배포한 링크를 제출해주세요!