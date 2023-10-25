1회차) Git & Github 기본 개념 및 기본 명령어
Tags
비어 있음
1️⃣ Git 이란?
어려운 개발 말고 일상 생활 예시를 살펴봅시다.
📝 다음주 수요일까지 과제 제출!

😉 과제 시작 전 상상 속의 나
한 번에 완벽한 레포트를 만듦

😭 과제 제출 직전의 나
최종, 최최종, 진짜최종, 이게진짜최종… 😭​

막상 제출할 때가 되니 수정할 것들이 보이고, 수정하다 망치면 안되니 백업본 만들어 놓으신 적 있으신가요? 

그런데 위와 같은 방법의 문제점?!
저장해야 할 파일이 많아지고 지저분해짐. 
각 파일마다 어떤 변경점이 있는지 명확히 확인이 안됨. 
복사본을 만들지 않고, 하나의 폴더 내에서 계속 수정 기록을 남길 순 없을까?
리눅스 토발즈 (몰라도 됩니다)

리눅스 운영체제를 개발하신 분
무료 코드 버전 관리 프로그램 git 개발

하나의 폴더 내에서 코드의 변경점을 기록하기 위해 git을 사용합니다. 
기능을 개발하면서 코드 변경점을 “기록”할 수 있습니다. 
문제가 생겼을 때 특정 지점으로 되돌아 가는 것이 쉽습니다. (물론 정말 어쩔 수 없는 상황이 아니라면 과거로 돌아가진 않습니다.)
이러한 특징 때문에 git을 버전 관리 도구, 형상 관리 도구라고 합니다. 
형상 관리 도구 - 소프트웨어의 변경사항을 체계적으로 추적하고 통제하는 것. (면접용)
2️⃣ Github 이란?
일상 생활 예시를 들어봅시다.
여러분의 레포트를 저장한 컴퓨터가 고장이 났습니다… 😱 
⇒ 다시 레포트 만들어야죠…

이런 상황을 방지(백업)하기 위해 드라이브, 클라우드 등을 사용하기도 합니다.

드라이브에 파일을 저장하면 함께 일하는 팀원분들에게도 쉽게 공유 가능합니다.
github도 마찬가지로 백업과 공유가 가능한 “온라인 코드 저장소”입니다. 
github 사용의 장점 정리
내 코드를 온라인 저장소에 백업을 할 수 있습니다.

팀원들과 협업할 때 내 코드를 공유할 수 있습니다.

함께 작업이 가능합니다.

(열기 전에 맞춰보세요) 📝 Quiz : Git과 Github은 왜 사용할까요? 
git: 버전 관리 도구
코드 변경점 기록
github: 온라인 저장소 
내 코드를 온라인에 백업하거나 다른 사람과 협업하는 도구
3️⃣ 알아야할 Git 명령어 리스트
❗
따라하는 중 에러 발생 시 수강생이 많아 강의 중 하나하나 다 봐드리기는 어렵습니다.

1. 강의 중 따라하지 말고, 강의만 듣기!
2. 강의 후 모르는 부분 혹은 에러 발생 시, 예병수 튜터에게 DM 혹은 각 반의 튜터님께 질문하기
Git은 코드를 기록하는 것이라고 했습니다. (버전 관리)

코드 기록을 위해 여러분은 Git의 명령어를 알아야 합니다. 
여러분이 알아야 할 명령어들은 다음과 같습니다. 
(물론 명령어는 정말 많지만 이 정도만 알면 협업에 큰 문제는 없습니다)
1회차
git init
git add <파일명>  혹은 git add .
git commit -m "기능 개발과 관련된 기록"
git status
git log
git push
git clone
git pull (+ 컨플릭트(Conflict) 해결법)
2회차
git branch
git switch <브랜치명> 혹은 git checkout <브랜치명>
git merge
git stash
branch를 활용한 협업하기
😱 너무 많다구요?? 🤯​
달달 외울 필요 없습니다!! 
각 명령어의 의미를 알고, 순서만 정확하게 사용한다면 사용하면서 자연스럽게 익숙해집니다!
이제 각 명령어의 의미를 파악해보고 코드에 직접 적용해보겠습니다
필수 리눅스 명령어 정리
pwd
print working directory의 약자입니다.
현재 내가 작업하는 폴더를 보여달라는 뜻입니다.
ls
list의 약자입니다.
현재 위치의 모든 파일 및 폴더 리스트를 보여줍니다.
ls -a
- 는 앞의 명령어(ex. ls)의 추가 기능을 사용하고 싶을 때 붙입니다.
a는 all 의 약자입니다.
숨겨진 폴더도 보여줍니다.
mkdir <폴더명>
make directory의 약자입니다.
현재 경로에서 폴더를 생성하는 명령어입니다.
touch <파일명>
현재 경로에서 파일을 생성하는 명령어입니다.
원래는 파일의 생성과 파일의 날짜, 시간을 변경하는 명령어라고 합니다.
cd <경로>
change directory의 약자입니다.
터미널에서 폴더 위치를 이동하기 위해 사용합니다.
ls 명령어 입력 후 현재 내가 어떤 폴더로 이동할 수 있는지 확인부터 해야 합니다.
/(슬래시)는 ‘~안에서’라고 생각하시면 됩니다.
.. (점 두 개)는 상위 폴더(디렉토리)입니다.
Bash
복사
cd Desktop/git-test // 데스크탑 폴더 안의 git-test 폴더로 이동합니다
cd ../git-test // 현재 폴더의 한 단계 상위 폴더 안에서 git-test 폴더로 이동합니다
​
git 으로 코드 관리를 시작하자!! git init
init 은 initialize(초기화하다, 초기 설정하다)의 준말입니다. 
즉, 프로그래밍을 git으로 관리하기 위해 딱 한 번만 입력하면 되는 명령어입니다. 
git init 명령어를 배우기 전 간단하게 테스트할 파일을 만들어보겠습니다.
우선 바탕화면에 새로운 폴더를 하나 만들어보세요. 저는 git-test 라는 폴더를 하나 만들었습니다.

그 다음 visual studio code를 열고 Open 이라는 부분을 클릭합니다.

이전에 만들었던 폴더(git-test)를 클릭하여 열어줍니다.

visual studio code에서 파일(index.html)을 하나 만들고 간단한 텍스트를 입력해보겠습니다. 항상 저장하는 것 잊지 마세요. 
MacOS: cmd + s
Window: ctrl + s

visual studio code에서도 터미널을 열 수 있는데요. 상단의 New Terminal로 새로운 터미널을 열어봅시다. 
** Unity 개발자분들은 터미널(Mac OS), 파워쉘(Windows) 혹은 git bash(Windows)를 열어서 진행해주세요.
현재 제 폴더 위치가 표시되는 것을 확인할 수 있습니다. 
참고 명령어 (내 위치 변경하는 명령어)
JavaScript
복사
cd <폴더경로>
​
현재 위치: ~/Desktop/git-test


git init 명령어를 입력 후 엔터를 누릅니다. 
initialize empty Git repository in ~~~ 이라고 나오면 성공입니다.

ls -al 이라는 명령어 입력 후 확인을 해보면 .git 이라는 폴더가 하나 생긴 것을 확인하실 수 있습니다. 
.git 이라는 곳에서 여러분의 코드 변경을 계속 추적합니다. .git 이라는 폴더가 있으면 해당 프로젝트에선 더 이상 git init 명령어를 입력할 필요가 없습니다.
참고: ls -al 이라는 명령어는 현재 폴더에 모든 파일 및 폴더를 보여주는 명령어입니다. 

📙 Quiz
git init 명령어는 개발 프로젝트 시작 시 딱 한 번만 입력하면 된다? Yes Or No
정답: YES!! 
git init 을 하면 현재 프로젝트에 어떤 변화가 일어나나요?
정답: .git 이라는 폴더가 생깁니다. 이때부터 코드 변경을 git에서 추적합니다.
git을 이용해서 코드 변경을 저장하자!! git add 와 git commit (+ git status)
git init 명령어로 코드 관리를 하기로 했습니다.
이제는 실제로 코드를 저장해보겠습니다. 
❗ 그 전에 git으로 이메일과 이름을 설정하셨나요?
다음과 같이 이메일과 닉네임을 등록하세요. 이왕이면 github의 이메일 및 닉네임과 똑같이 하는 것이 좋습니다.
미리 하지 않으면 Please tell me who you are. 이라고 뜨면서 커밋이 되지 않습니다.
참고: https://coding-groot.tistory.com/97
JavaScript
복사
git config --global user.email "abc1234@gmail.com"
git config --global user.name "nickname"
​
터미널에서 git add <파일명>과 git commit -m “메세지”를 다음과 같이 입력해보세요.
git add index.html
git commit -m “index.html 파일에 하하하 추가”

끝입니다. 🤨​
사실 코드 저장은 이렇게 하면 바로 끝납니다.
그런데 여기서 궁금증이 하나 생기실 수도 있습니다. 
🤔 저장하는데 왜 2개의 명령어를 입력하나요?? 
그 이유는 다음과 같습니다.
코드 변경 시 파일을 여러 개 만들 수 있습니다. 
그런데 모든 변경된 파일을 저장하고 싶지 않을 수도 있겠죠? 
ex) 흠… 이 파일은 지금 저장하기에는 좀 마음에 안드는데?? 
그래서 저장하고 싶은 파일을 지정하는 것이 바로 git add 명령어이고, 실제로 저장하는 명령어가 git commit 명령어입니다.
그럼 파일을 여러 개 만들고 특정 파일만 저장해볼까요?
우선 파일을 하나 더 만들어보겠습니다. 저는 hello.html 이라는 파일을 만들었습니다.

그리고 기존의 index.html 파일을 수정해보았습니다. 하하하였는데 후후후로 바뀌었군요.

이제 hello.html 파일만 저장해보겠습니다. 
git add hello.html
git commit -m “hello.html 파일 추가”

실제로 index.html 파일은 저장이 안됐나요? 어떻게 알죠? 라는 생각이 드시죠?? 그럼 git status 라는 명령어를 한 번 입력해보세요.
git status 명령어를 입력하면 다음과 같은 글이 나오는데요. 
코드의 변경은 있지만 저장을 하지 않은 파일은 다음과 같이 표시가 됩니다. (modified: index.html)

그런데 만약 변경한 파일이 10개, 100개가 넘어간다면 어떨까요? 모든 파일을 이렇게 다 입력해줘야 할까요?
너무 귀찮은 일이지 않을까요?? 그래서 사실은 다음과 같이 명령어를 입력하는 경우가 더 많습니다.
git add .
git add . 의 뒤에 점(.)은 현재 폴더(디렉토리)에 있는 모든 파일들을 의미한다고 생각하시면 됩니다. 
다시 파일을 여러 개 변경하고 한 번에 모든 파일을 저장할 수 있게 지정해보겠습니다. 
이 전에 만들었던 2개의 파일 모두 변경 후 git add . 이라는 명령어와 git commit 명령어를 입력해보세요.
git add .
git commit -m “파일 2개 다 변경”

이제 git status 명령어를 입력하면 commit 할 파일이 없다고 나옵니다. 즉, 모든 파일의 변경 사항을 저장했다는 뜻입니다.
📙 Quiz
git add 와 git commit 의 차이는 무엇인가요?
git add 는 저장할 파일을 지정하는 것
git commit 은 실제로 저장하는 것 
좀 더 전문적으로 git 과정을 설명하려면?
working directory → git add → staging area → git commit → repository
git status 는 무엇인가요?
어떤 파일이 add 됐는지, 어떤 파일이 변경됐는지, 현재 브랜치명 확인 등 확인 가능한 명령어
내가 저장한 커밋 내역을 보고 싶다. git log
git log라는 명령어를 입력해봅시다.
JavaScript
복사
git log
​

그러면 다음과 같이 제가 이전에 입력한 커밋 내역들이 나옵니다. 추후에 이 커밋 메세지를 보고 특정 시점에 어떤 변경점이 있었는지 추측할 수 있습니다. 또한 여기에 있는 커밋 id를 이용하여 과거의 코드 저장 시점으로 되돌아갈 수도 있습니다.

git log에서 빠져나오고 싶다면 키보드에서 q를 입력하시면 됩니다. 
(안된다면 한글(ㅂ)로 되어있을 가능성이 있습니다. 영어로 바꾸셔야 합니다)
4️⃣ 내 컴퓨터의 코드를 Github에 올려보자!
Github 을 사용하는 이유는 무엇인가요?
내 코드를 온라인 저장소에 백업을 할 수 있습니다. ⇒ 우선 이것부터 공부해보겠습니다!
팀원들과 협업할 때 내 코드를 공유할 수 있습니다.
함께 작업이 가능합니다.
온라인 저장소를 만들어봅시다! Github repository (깃헙 레포지토리) 생성하기 
repository(레포지토리)란?
repository란 저장소라는 의미입니다.
즉, Github repository(깃헙 레포지토리)는 온라인 저장소를 의미합니다.
🪜 Github repository를 만들어봅시다.
깃헙 홈페이지에 들어갑니다. 
github.com 을 주소창에 입력해주세요.
로그인이 되어있지 않은 경우 로그인을 해주세요.
New 버튼을 클릭해주세요.

레포지토리 이름을 입력하고, create repository 버튼을 클릭합니다.
저는 github-test라고 작성했습니다. 여러분은 원하는대로 작성해주세요.

생성한 github repository 화면을 보실 수 있습니다.

내 컴퓨터의 코드를 Github repository로 업로드해봅시다!
visual studio code를 열어 이전에 만든 프로젝트 코드를 열어줍니다.

github에 들어가서 붉은 박스의 명령어들을 복사합니다. * 우측에 복사하기 버튼이 있습니다. 

❗위 3개의 명령어 의미를 알고 싶다면?
git remote add origin <github 주소>
github repository 주소 쓰기 귀찮을 때 쓰는 명령어입니다. 
원래는 git push를 할 때, git push <github 주소> <브랜치명> 이렇게 입력해야 하는데, 이 주소가 너무 길어서 매번 입력하기 귀찮습니다. 
그래서 더 간단하게 push하기 위해 <github 주소>를 origin이라고 “명명”하겠다!라는 명령어입니다.
git branch -M main
기본 브랜치 이름을 master에서 main으로 바꿔주는 명령어입니다.
git push -u origin main
github에 코드를 업로드할 때 사용하는 명령어입니다.
원래 github에 코드를 업로드할 땐 git push origin <브랜치명> 과 같이 입력합니다. 
하지만 -u 옵션을 추가하면 git push 명령어만 입력해도 알아서 <브랜치명>에 입력한 브랜치로 업로드해줍니다.
visual studio code로 다시 이동하여 터미널에 명령어를 그대로 붙여넣기 및 엔터를 클릭합니다.

github 홈페이지로 이동 후 새로고침을 하면 내 컴퓨터에 있는 코드가 올라간 것을 확인할 수 있습니다.

수정된 내 코드를 온라인 저장소에 백업하기 git push
visual studio code에서 코드를 수정하고, git add & git commit 명령어를 입력합니다. 
- Quiz: git add & git commit 명령어는 왜 입력한다고 했나요?
git push origin <브랜치명> 명령어를 입력합니다. ⇒ 코드를 업로드할 때 필요한 명령어입니다.
Bash
복사
git push origin <브랜치명>
ex) git push origin main
​
이제 변경된 코드가 올라간 것을 보실 수 있습니다.
5️⃣ Github으로 협업하기  (+ 컨플릭트)
github에 있는 프로젝트 가져오기 git clone
협업하는 사람들은 프로젝트를 가져와야 코드를 수정할 수 있겠죠?
github에 있는 프로젝트를 복제해오는 명령어가 바로 git clone입니다.
1) 팀원들을 대표자 github의 collaborator(협력자)로 등록하기
github 레포지토리 → Settings → Collaborators → Add people 클릭

팀원들의 username 혹은 email로 추가 ⇒ 팀원들은 이메일 초대장을 수락해야 합니다.

2) 각 팀원들이 git clone 명령어로 github에 있는 프로젝트 가져오기
대표자의 github의 github 주소를 복사합니다.

로컬 컴퓨터에서 프로젝트를 위한 폴더를 만듭니다.

visual studio code를 열어 해당 폴더를 열어줍니다.

터미널을 열어 git clone <github 주소> . 명령어를 입력합니다.
명령어 맨 뒤에 . 빼먹지 마세요

프로젝트 파일들이 잘 들어와진 것을 확인할 수 있습니다. 이제 다른 팀원들도 코드를 변경할 수 있습니다.

온라인 저장소에서 변경된 코드 적용하기 git pull
팀원들도 코드 변경 후 git push origin <브랜치명> 로 코드 업로드
Bash
복사
git push origin main
​

이땐 코드 수정 후 git push 안됨
⇒ 내가 다른 팀원의 코드를 덮어써서 없애버릴 위험이 있음

Bash
복사
git push origin main
​

그래서 git pull을 통해 최신 코드를 내 코드에 적용시키고, 그 다음 git push 해야 함
Bash
복사
git pull origin <브랜치명>
ex) git pull origin main
​
⚠️ fatal: Need to specify how to reconcile divergent branches. 에러가 뜬다면?
아래와 같은 에러 발생 시 git config pull.rebase false 를 입력하시면 됩니다.
Bash
복사
git config pull.rebase false
git pull origin main
​


⚠️ 터미널에 키보드 입력이 안되는 vim 에디터가 뜬다면?
키보드 esc 클릭
키보드 : 클릭
키보드 wq 클릭
키보드 enter 클릭


Bash
복사
git push origin main
​

⚠️ 충돌(conflict) 해결하기
git pull 로 코드를 가져왔는데, 코드가 이상해졌어요!!! 😫  

충돌 (conflict) 결과

🙄 왜 이런 일이 발생했을까요?
그 이유는 같은 파일의 같은 위치에 코드가 변경되었기 때문입니다.
A 개발자 - index.html 의 2번째 줄 코드 변경 
B 개발자 - index.html 의 2번째 줄 코드 변경


이때 A 개발자가 git pull 명령어 실행 시 git에서 같은 파일의 같은 위치에서 코드가 변경되었다고 (conflict 발생) 말해줍니다.


git pull 시 발생하는 conflict를 해결하는 법
<<<<<<<< HEAD 삭제
======= 삭제
>>>>>>> 4182…. 삭제
원하는 코드로 수정 
코드를 변경한 팀원과 상의하는 것을 추천

git add & git commit & git push
Bash
복사
git add .
​
Bash
복사
git commit -m "<커밋 메세지>"
​
Bash
복사
git push origin <브랜치명>
​

🤔 이후 계속 언급될, merge와 conflict에 대해 간단히 알아봐요!
💡
[합병 - merge에 대해]
merge(코드 합병)는 깃을 이용하여 협업을 진행할 때, 같은 파일(파일단위로 병합/충돌 개념이 적용된다는 것을 이해해야 해요)을 동시에 수정하거나 다른 브랜치에서 작업한 내용을 합칠 때 사용되는 개념이에요.

출처 : https://www.datacamp.com/
여러분과 친구가 함께 동화책을 만들고 있다고 가정해볼께요. 각자 다른 페이지에서 작업하고 작업한 내용을 하나로 합치기(merge 하기)로 했습니다.
여러분은 동화책의 첫 번째 페이지에 귀여운 동물을 그리고, 친구는 두 번째 페이지에 아름다운 배경을 그렸어요. 그리고 나서 두 페이지를 merge를 사용해서 합칠 수 있어요.
merge를 이용해서 합친 새로운 페이지(동화책)에서는 귀여운 동물과 아름다운 배경이 함께 보여지게 되겠죠. 이처럼 git의 merge는 각자가 작업한 내용을 모아서 하나로 합치는 역할을 한답니다.

[충돌 - conflict에 대해]
배경을 그리기로 한 친구가 욕심이 났는지, 귀여운 동물 부분까지 일부 그려버렸네요. 충돌(conflict)이 난거죠. 이런 경우 각각 작업한 내용이 겹치게 되고 누구의 것이 더 적절한지, 중간 의견은 어떨지 등등 서로 의견조율을 통해 합치는 과정을 마무리해야 해요.
📝 Quiz
프로젝트를 처음 만들었고, git으로 버전관리를 시작하고 싶다. 어떤 명령어를 입력할까?
Shell
복사
git init
​
코드를 작성하고, 코드를 저장하고 싶다. 이때 사용해야 할 두 가지 명령어는?
Shell
복사
git add <파일명> 혹은 git add . (현재 위치의 모든 파일들) 
git commit -m "커밋 메세지"
​
코드 저장 이후 저장 기록(커밋 내역)을 보고 싶다면 어떤 명령어를 입력할까?
Shell
복사
git log
​
현재 git 상태를 확인하고 싶다면? 
ex) 현재 브랜치명 확인 or 어떤 파일이 git add 됐는지, 어떤 파일이 변경됐는지 등
Shell
복사
git status
​
github에 코드를 업로드하고 싶을 때 사용하는 명령어는?
JavaScript
복사
git push origin <브랜치명>
​
github에 있는 프로젝트를 복제해오고 싶은 경우 사용하는 명령어는?
Bash
복사
// (폴더를 이미 만들었다면 . 붙이기)
git clone <github 주소> . 

혹은

// (폴더가 없다면 . 없애기)
git clone <github 주소>  
​
github repository에서 변경된 코드를 내 로컬 컴퓨터로 가져오고 싶을 때 사용하는 명령어는?
Bash
복사
git pull origin <브랜치명>
​
충돌 발생 시 어떻게 해결하면 될까요?
<<<<<<<< HEAD 삭제
======= 삭제
>>>>>>> 4182…. 삭제
원하는 코드로 수정 
git add & git commit & git push
Bash
복사
git add .
​
Bash
복사
git commit -m "<커밋 메세지>"
​
Bash
복사
git push origin main
​

📄 요약 정리
🗣️ 팀장
폴더 생성 및 visual studio code로 폴더 오픈
코드 작성 (git init 이후에 작성해도 상관없음)
코드 관리 시작 (팀원 중 한 명만 하면 됨)
Bash
복사
git init
​
코드 저장
Bash
복사
git add .
git commit -m "<메세지>"
​
⚠️ please tell me who you are 이라는 에러가 뜬다면?
Bash
복사
git config --global user.email "abc1234@gmail.com"
git config --global [user.name](http://user.name/) "nickname"
​
github에 온라인 저장소 생성 
github에 초기 코드 업로드
Bash
복사
git remote add origin <github 주소>
git branch -M main
git push -u origin main
​
코드 수정
코드 저장
Bash
복사
git add .
git commit -m "<메세지>"
​
github에 변경된 코드 업로드 
Bash
복사
git push origin <브랜치명>
​
코드 업로드 안될 땐 git pull 진행 후 git push (7 ~ 10번 반복)
Bash
복사
git pull origin <브랜치명>
git push origin <브랜치명>
​
⚠️ git pull 명령어 입력 시 fatal: Need to specify how to reconcile divergent branches. 에러가 뜬다면?
Bash
복사
git config pull.rebase false
git pull origin <브랜치명>
​
⚠️ 터미널에 키보드 입력이 안되는 vim 에디터가 뜬다면?
git pull 이후 conflict(충돌)가 발생했다면?
<<<<<<<< HEAD 삭제
======= 삭제
>>>>>>> 4182…. 삭제
원하는 코드로 수정 
add & commit & push 명령어들 입력
👤 팀원
팀원들이 본인 컴퓨터에 폴더 생성 및 visual studio code로 폴더 오픈
github에서 코드 복제
Bash
복사
git clone <github 주소> .
​
코드 수정
코드 저장
Bash
복사
git add .
git commit -m "<메세지>"
​
github에 변경된 코드 업로드 
⚠️ 업로드가 안된다면 github collaborator 등록했는지 확인
Bash
복사
git push origin <브랜치명>
​
코드 업로드 안될 땐 git pull 진행 후 git push (3 ~ 6번 반복)
Bash
복사
git pull origin <브랜치명>
git push origin <브랜치명>
​
⚠️ git pull 명령어 입력 시 fatal: Need to specify how to reconcile divergent branches. 에러가 뜬다면?
Bash
복사
git config pull.rebase false
git pull origin main
​
⚠️ 터미널에 키보드 입력이 안되는 vim 에디터가 뜬다면?
git pull 이후 conflict가 발생했다면?
<<<<<<<< HEAD 삭제
======= 삭제
>>>>>>> 4182…. 삭제
원하는 코드로 수정 
add & commit & push 명령어들 입력