2회차) Git & Github으로 협업하는 법
Tags
비어 있음
1️⃣ Git branch 다루기 (+ 추가 명령어)
프로젝트 복사본 만들기 - git branch
워드나 한글 파일의 경우 수정 시 원본 파일이 바로 변경되기 때문에 복사본을 만들고 수정을 하기도 했죠? 

git 으로 코드를 관리하면 해당 프로젝트를 통째로 복사하지 않아도 알아서 복사본을 만들어줍니다. 
예를 들어, 여러분이 장바구니 기능을 만들기로 했습니다. 그런데 장바구니 기능이 꽤 오래걸릴 것 같고, 만들다가 에러가 많이 날 것 같습니다. 
그럼 차라리 복사본을 만들어서 기존 코드에 영향을 주지 않는 것이 좋겠죠?
이를 위해 코드의 복사본을 만들며, 이것을 바로 브랜치(branch)라고 합니다.

그럼 바로 브랜치를 한 번 만들어봅시다. 명령어는 다음과 같습니다. 
Bash
복사
git branch <브랜치명> 
ex) git branch cart
​
이때 브랜치명은 자유롭게 작성하시면 됩니다. 다만 내가 개발하려는 기능과 관련이 있는 이름을 짓는 것이 좋습니다.
저는 다음과 같이 입력하겠습니다.
JavaScript
복사
git branch login
​

이렇게 명령어를 입력하면 브랜치가 생성됐습니다. 
정말로 브랜치가 생성됐는지 확인하기 위해선 git branch 라는 명령어만 입력해보세요.
Bash
복사
git branch
​
login 브랜치가 생성된 것을 확인할 수 있습니다. 그리고 키보드 q를 입력하여 빠져나옵니다.

브랜치 이동하기 - git switch 혹은 git checkout
git branch <브랜치명> 명령어로 브랜치를 생성했습니다. 하지만 현재 브랜치를 이동한 것은 아닙니다.
그래서 다음 명령어를 통해 해당 브랜치로 이동해야 합니다.
Bash
복사
git switch <브랜치명>
ex) git switch login

혹은

git checkout <브랜치명>
ex) git checkout login
​
Switched to branch ‘login’ 이라는 글이 보이네요. 즉, 현재 login 브랜치로 변경되었습니다. 
이는 기존의 master(혹은 main) 브랜치에 있던 코드를 그대로 복사하여 새로운 곳에서 코드를 짤 수 있다는 뜻입니다.

그럼 login 브랜치에서 코드를 변경 후 코드를 저장해보겠습니다
Bash
복사
git add .
git commit -m "로그인 브랜치에서 index.html 수정"
​

login 브랜치에서 코드를 변경 및 저장했습니다. 그럼 기존의 main 브랜치로 이동을 해볼까요?
Bash
복사
git switch main

혹은 

git checkout main
​

login 브랜치와 main 브랜치를 비교해보면 login 브랜치에선 3번째 줄에 텍스트가 있고, main에는 여전히 3번째 줄에 아무것도 없다는 것을 알 수 있습니다. 
즉, 원본은 변경하지 않고 login 브랜치에서만 코드를 변경한 것입니다.
🍯 꿀팁 - 브랜치를 만들면서 한 번에 이동하는 법
JavaScript
복사
// -c 는 create의 약자입니다.
git switch -c feature/login 

// -b는 branch의 약자입니다.
git checkout -b feature/login
​
📙 Quiz
브랜치를 만드는 이유는?
기존 코드의 복사본을 만들기 위해 (기존 코드를 망치지 않기 위해)
→ 이제부터 모든 새로운 기능은 브랜치를 만들어서 진행합니다.
브랜치를 새로 만들고 싶을 땐 어떤 명령어를 입력하나요?
Bash
복사
git branch <브랜치명>
ex) git branch feature/login
​
내가 만든 브랜치 리스트들을 확인하고 싶다면?
JavaScript
복사
git branch
​
생성한 브랜치로 이동하고 싶으면 어떤 명령어를 입력하나요?
Bash
복사
git switch <브랜치명> 
ex) git switch feature/login

혹은 

git checkout <브랜치명>
ex) git checkout feature/login
​
브랜치를 만들면서 한 번에 이동하고 싶을 때 사용하는 명령어는?
JavaScript
복사

git switch -c <브랜치명>
ex) git switch -c feature/login

혹은

git checkout -b <브랜치명>
ex) git checkout -b feature/login
​
코드 합치기 - git merge
저희는 login 이라는 브랜치에서 코드를 새로 작성하였습니다.
안전하게 다른 브랜치에서 기능을 개발하였으니 이제는 원본 코드로 합치면 될 것 같습니다.
이때 사용하는 명령어가 바로 git merge 입니다. merge는 합치다라는 뜻입니다.
방법은 다음과 같습니다.
원본 브랜치(main)로 이동한다. 
JavaScript
복사
git switch main
​
git merge <새롭게 기능을 개발한 브랜치명> 명령어를 입력한다.
JavaScript
복사
git merge login
​
원본 브랜치로 코드가 합쳐진다.
❗충돌(conflict)이 발생한다면?

🤔 굳이 합쳐야 하나요?
혼자 개발을 한다면 어떻게 개발을 하든 상관 없을 수도 있습니다.
하지만 협업을 한다면 최종 브랜치에 코드를 계속 합쳐야겠죠? 그래서 보통 최종 브랜치는 원본 브랜치(main 혹은 master 브랜치)로 합니다
(참고) 코드 저장은 No! 하지만 코드를 임시 저장하고 싶어요! git stash
코드 변경 후 저장을 하지 않고, 즉 git add 및 git commit 으로 저장하지 않으면, git switch 명령어가 동작하지 않을 때가 있습니다.
(정확히는 항상 그런 것은 아니고, 이동하는 브랜치의 코드와 내가 변경한 코드에서 겹치는 부분이 있을 때 이동이 안됩니다!)
즉, git add 및 git commit 후에 브랜치를 변경(git switch)해야 합니다. 
예시 상황
새로운 브랜치(test)를 생성한다. 
기존 브랜치 (main)에서 코드를 변경 및 커밋한다. (협력하는 경우 있을 수 있는 상황입니다.)
새로운 브랜치(test)에서 main 브랜치에서 변경한 것과 같은 위치의 코드를 변경한다.
git switch 혹은 git checkout으로 main 이동해본다.
브랜치 이동 안됨
JavaScript
복사
Your local changes to the following files would be overwritten by checkout: 
index.html
Please commit your changes or stash them before you switch branches.
​

그런데 급하게 브랜치를 이동하고 싶으면서, 아직 코드 저장을 하기에는 개발을 마무리하지 못한 상황이라면 어떻게 할까요?
바로 이때 git stash라는 명령어를 사용할 수 있습니다.
git stash 명령어의 경우 임시로 코드를 저장해주는 역할을 합니다. 
현재 브랜치에서 index.html 파일을 다음과 같이 변경해봅시다. 

그리고 git stash 명령어를 다음과 같이 입력해봅시다.
JavaScript
복사
git stash -u -m "index.html 기능 개발 중"
​
-u는 untracked 파일들의 변경사항도 모두 저장하겠다는 뜻입니다. untracked 파일의 예시는 새로 만든 파일이 있을 수 있습니다.
-m 은 커밋 메세지처럼 어떤 기능을 개발하는 중이었는지 간단하게 메세지를 작성할 수 있게 하는 옵션입니다.

이 명령어 입력 후 여러분의 코드에서 변경했던 부분이 사라진 것을 확인할 수 있습니다. 즉, 이제 git switch로 브랜치를 이동할 수 있는 것이지요.

그리고 git stash list 명령어를 입력하면 임시로 저장된 부분을 확인할 수 있습니다. q 를 눌러 빠져나올 수 있습니다.
JavaScript
복사
git stash list
​


그럼 잠시 저장했던 것을 다시 되돌리고 싶다면 어떻게 할까요? git stash apply <stash@{숫자}>를 입력하면 됩니다. (* 숫자만 입력해도 됩니다)
stash@{숫자} ⇒ 이 부분은 git stash list 명령어 입력 후 확인할 수 있습니다.
JavaScript
복사
git stash apply stash@{0}
​



(참고) 과거의 커밋으로 되돌아가려면? git reset & git revert
이미 저장(커밋)을 했지만 해당 커밋이 너무 마음에 안든다면 어떻게 할까요?
git의 특징 중 하나는 과거의 커밋으로 되돌아갈 수 있다는 것입니다. 코드의 변경 사항을 커밋으로 모두 다 저장해놓고 있기 때문이죠.
하지만 해당 방법은 협업 시 문제가 될 수 있으므로 어쩔 수 없는 상황이 아니라면 사용하지 않는 것이 좋습니다. 
협업을 하고 있는 다른 사람들도 역시 커밋 내역이 변경되어 코드가 이상해질 수 있기 때문입니다.
혹시 필요할 때를 대비하여 이런 것들이 있다는 것만 알고 계시면 됩니다.
과거의 커밋으로 완전히 되돌아가는 git reset
완전히 과거 커밋으로 되돌아가는 git reset 명령어를 알아보겠습니다.
우선 간단하게 파일 수정 후 커밋을 여러 번 해보겠습니다.

git log 명령어를 입력하면 다음과 같이 커밋이 3개 더 추가된 것을 확인하실 수 있습니다.
JavaScript
복사
git log 
​

여기서 알 수 없는 문자열들을 확인하실 수 있는데요. 이 문자열이 바로 해당 커밋의 고유한 id입니다. 이 id를 통해 여러분은 해당 커밋으로 이동이 가능합니다.

만약 update: index.html 첫번째 줄 수정 이라고 작성한 과거 커밋으로 완전히 되돌아가고 싶다면 git reset 명령어를 사용합니다.
이때 5dc14b는 이전에 말했던 commit의 고유 id인데요. 전체 id를 입력할 필요없이 앞의 5~6 문자열만 복사해서 사용하시면 됩니다. 
--hard 옵션 이외에 --mixed 와 --soft 라는 옵션도 있습니다. 추후에 여러분들이 어떤 것들인지 한 번 검색해보시기 바랍니다.
JavaScript
복사
git reset --hard 5dc14b
​

git reset 후 git log를 입력해보면 다음과 같이 과거 커밋이 모두 사라지고 파일도 과거 버전으로 되돌아간 것을 확인하실 수 있습니다.


과거 커밋을 다음 커밋으로 만들어 되돌아가는 git revert
과거 커밋을 다음 커밋으로 만들어 되돌아간다는 말이 어떤 의미인지 정확히 이해가 되지 않으실 겁니다.
좀 더 자세히 설명하자면 아래 그림과 같이 과거 커밋을 새로운 커밋으로 만들어 과거 코드로 복구하는 것입니다.
이렇게 하는 이유는 git reset처럼 완전히 커밋이 사라지는 것이 아니기 때문에 그나마 조금 더 안전한 방법이기 때문입니다. 

커밋을 여러 개 만들어보겠습니다. index.html에서 한 줄씩 아무 텍스트나 작성하고 커밋을 2번 진행했습니다.

git log 명령어로 확인해보면 다음과 같이 커밋이 생성된 것을 보실 수 있습니다. 저는 여기서 “update: 두번째 커밋” 부분으로 돌아가기 위해 git revert 명령어를 입력해보겠습니다.
JavaScript
복사
git log
​

git revert <커밋id> 명령어 입력을 해보겠습니다. 여러분은 여러분의 커밋id를 보고 작성해주세요.
JavaScript
복사
git revert 483c0 
​
git revert 명령어를 입력하면 다음과 같이 충돌(conflict)이 발생합니다. 이는 새로운 커밋 생성 전 기존과 겹치는 부분에서 변경이 있으니 개발자가 알아서 어떻게 변경하고 싶은지 결정하라고 git에서 친절하게 물어보는 것입니다. (이 충돌이 없으면 커밋 메세지 입력하고 끝내면 됩니다)

이렇게 충돌이 발생하면 원하는 형태로 코드를 변경 후 git add & git commit 명령어를 입력해주시면 됩니다.
JavaScript
복사
git add .
git commit -m "커밋메세지"
​

다시 한 번 말씀드리지만 해당 명령어를 실제 현업에서 쓸 일은 많이 없습니다. 즉, 정말 어쩔 수 없는 상황이 아니라면 크게 사용할 일이 없으니 나중에 필요하면 찾아보시면 될 것 같습니다.
(참고) 텍스트 편집기 vim 간단하게 알아보기
vim이란?
그냥 텍스트 편집기입니다.
하지만 우리가 일반적으로 텍스트를 작성하는 방법과는 다릅니다.
vim 사용법은 추후에 찾아보시고, 오늘은 꼭 필요한 vim 사용법만 알아보겠습니다.
vim을 갑자기 왜 배우나요?
git commit 시 -m 옵션을 사용하지 않으면 vim 텍스트 편집기가 열립니다.
github에서 발생하는 몇몇 상황들에서 마주칠 수 있습니다. (conflict 혹은 git pull 할 때)
이때 당황하지 않도록 하기 위함입니다.
vim 사용법 정리
코드 변경 후 git commit 시 -m 명령어를 입력하지 말아보세요.
hint: waiting for your editor to close the file. 에러가 뜬다면? 
혹은 vim이 아니고 다른 것이 뜬다면?
JavaScript
복사
git config --global core.editor "vim"
​
JavaScript
복사
git add .
git commit 
​

다음과 같은 특이한 편집기(vim)가 열립니다. 글자를 입력해도 입력되지 않습니다.
여기에 커밋 메세지를 작성할 수 있습니다.
아래의 # 뒤에 있는 글들은 주석과 같기 때문에 실제로 저장되지 않습니다.

커밋 메세지 작성법
i키보드 누르고 메세지 입력하기 (한글로 되어 있으면 안됩니다)
i 키보드 누르면 — INSERT — 라는 표시가 나오는데, 입력이 가능한 상태라는 뜻입니다.

메세지 작성이 끝나면 ESC 키보드를 누릅니다. 그러면  — INSERT — 표시가 사라집니다.

: + w + q 를 순서대로 입력 후 엔터를 눌러줍니다.

다음과 같이 vim 편집기에서 빠져나오면서 커밋 메세지가 저장이 됩니다.

⚠️ hint: Waiting for your editor to close the file. 에러 발생 시
JavaScript
복사
git config --global core.editor 'vim'
​
ref: 참고 자료
⚠️ LF will be replaced by CRLF the next time Git touches it 라는 경고문이 뜬다면?
window
JavaScript
복사
git config --global core.autocrlf true
​
mac
JavaScript
복사
git config --global core.autocrlf input
​
ref: 참고 자료
2️⃣ 협업을 위한 pull request 
사실 협업 시 git merge 명령어로 바로 합치는 경우는 거의 없습니다. 
보통 github에서 합칩니다. 그 이유는 merge 전 코드 리뷰📝가 가능하기 때문입니다.
코드를 합치기 전 팀원 간 코드에 문제가 없는지 확인하고 서로의 코드에 대한 리뷰를 해줄 수 있습니다. 그 이외에도 충돌 여부 확인💥, 테스트 자동화 🚗 등 다양한 이점들이 있습니다.
github에서 코드를 merge 하기 위해선 pull request를 생성해야 하는데요. 
Pull request의 의미는 코드를 “기본 브랜치(main)로 당겨와 합치는 것(Pull)을 요청(Request)한다” 라는 뜻입니다.
쉽게 말해 코드를 합쳐도 되는지 팀원들에게 물어보는 것이죠.
그럼 본격적으로 pull request를 활용하는 방법을 알아보겠습니다.
📝 pull request 활용하기
브랜치 생성 및 브랜치 이동
Bash
복사
git switch -c <브랜치명>
ex) git switch -c logout

혹은

git checkout -b <브랜치명>
ex) git checkout -b logout
​

코드 수정

코드 변경 저장 
Bash
복사
git add .
git commit -m "update: 로그아웃 기능 생성"
​

github에 코드 업로드
(‼️ “업로드도 안해놓고 왜 반영이 안되나요? 🤓”  라고 하지 말기)
Bash
복사
git push origin <브랜치명>
ex) git push origin logout
​

github 홈페이지에서 Compare & pull request 버튼 클릭
❗Compare & pull request 알림이 안생기거나 사라졌다면?
→ Pull requests 탭 클릭 후 New pull request를 누르시면 됩니다


Create pull request 클릭

pull request 생성 결과

merge 하기
Merge pull request 버튼 클릭

Confirm merge 버튼 클릭 

merge 완료

내 로컬 컴퓨터에서 다시 기본 브랜치(main)으로 이동
Bash
복사
Your branch is behind ‘origin/main’ by 2 commits, and can be fast-forwarded. 
(use “git pull” to update your local branch)
​
→ “github repository보다 뒤쳐져있으니 git pull 명령어로 똑같이 맞추세요” 라는 뜻

git pull 명령어로 온라인 저장소(github repository)의 코드와 내 로컬 저장소의 코드를 똑같이 맞추기
Bash
복사
git pull origin <브랜치명>
ex) git pull origin main
​

🎨 그림으로 살펴보기 (PPT 다운로드)
github 협업의 흐름 기초편.pptx
66.2KB
현재 상황

git clone 혹은 git pull

브랜치 만들고 이동하기

기능 개발하기

github에 업로드 (pull request 생성)

main에 합치기 (merge)

git pull 로 내 로컬 컴퓨터의 main 브랜치에도 변경 사항 가져오기

3️⃣ 협업 실전
지금까지 기본적인 git, github 사용법을 모두 학습했습니다. 

❗하지만 현재 방식으로는 실전 협업 시 문제가 발생할 수 있습니다.
🚨 문제점 
main 브랜치(배포용 브랜치)로 merge 했는데 ⚠️ 에러가 터진다면??? 😭​
완벽하게 기능이 개발된 후에야 merge 할 수 있습니다.
👊🏻 해결책
merge 전 내 기능 브랜치(ex. feature/login)에서 먼저 합쳐서 테스트하기
merge 후 테스트를 하면 예상치 못한 에러, 버그가 발생할 수도 있기 때문에 내 로컬의 기능 브랜치에서 먼저 테스트를 합니다.
합쳐진 코드에 에러 및 버그가 있다는 것을 인지하지 못한 다른 팀원들이 코드를 내려받아 기능을 개발할 수도 있습니다.
테스트용 개발 브랜치를 하나 더 만들기 (dev 혹은 develop 브랜치)
완벽하지 않지만 작은 단위의 기능들을 합칠 수 있습니다. 
ex) main 브랜치에 합쳐야 하는 경우: 회원가입, 로그인, 로그아웃 기능을 한 번에 만들고 합쳐야 함 
main에 합치기 전 dev에 합칠 경우: 회원가입 기능 merge → 로그인 기능 merge → 로그아웃 기능 merge 로 작은 단위로 개발하고 합칠 수 있음
한 번에 많은 기능 개발로 버그 수정이 어려울 수 있습니다.
💡
참고)

위 해결책 역시 완벽한 방법은 아니며, 원래 git flow, github flow, trunk based 전략 등 다양한 방법이 존재합니다. 

하지만 이런 전략은 회사마다 다르고, 현재 시점에선 너무 어렵기 때문에 가장 간단한 방법만 학습합니다.
📝 실전 협업 단계별 설명
1️⃣ 협업 초기 세팅
팀장의 초기 코드 작성 및 github repository로 업로드
github에 dev 브랜치 생성
과정 살펴보기
dev 브랜치 생성 및 이동
Bash
복사
git switch -c dev

혹은 

git checkout -b dev
​

dev 브랜치에서 git push 
Bash
복사
git push origin dev
​

dev 브랜치를 base 브랜치로 변경
과정 살펴보기
Settings → Default Branch 에서 아래 버튼 클릭

dev 로 변경 후 update 클릭

Code 탭의 기본 브랜치 확인

팀원들의 git clone 및 collaborator 등록
2️⃣ 기능 개발
dev 브랜치를 기준으로 기능 브랜치 만들기 ex) feature/login, feature/signup, feature/likes …
Bash
복사
git switch -c <브랜치명>

혹은 

git checkout -b <브랜치명>
​

기능 개발 및 git add & git commit & git push 
Bash
복사
git add .
git commit -m "<커밋메세지>"
git push origin <브랜치명>
​

github에서 Pull request 만들기
과정 살펴보기
Compare & pull request 클릭

base 브랜치(ex. dev) 및 기능 브랜치(ex. feature/signup) 이름 확인 & Pull request 생성

Pull requests 탭에서 확인

⚠️ Conflict 발생 시 다음과 같이 merge가 불가능합니다.

리뷰 요청 및 승인받기 
💡
모두 초보라 코드 리뷰에 어려움이 있을 수 있습니다.

리뷰 요청 및 승인 방법을 익히고, 서로의 코드를 보며 코드 의미를 학습하는데 의의를 두시면 됩니다.
🗣️ 리뷰 요청하기
Pull requests 탭의 Reviewers에서 리뷰 요청

💬 리뷰 답변하기
File changed로 이동 후 리뷰할 부분 선택

리뷰 작성 및 Start a review 클릭

Finish your review 클릭 및 Comment(코멘트), Approve(변경 승인), Request Changes(변경 요청) 중 하나 선택 후 Submit review 클릭

결과

내 로컬에서 dev branch 코드를 pull 해서 가져오기 (리뷰 요청 전에 git pull 을 해도 상관 없음)
Bash
복사
git pull origin dev
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

코드 실행 후 문제 없는지 확인 ( ⚠️ conflict 발생 시 해결하기)
문제 없으면 github에서 merge 하기 
(코드를 수정했거나 conflict 해결한 경우 다시 git add & git commit & git push 이후 merge 하기)


3️⃣ 추가 기능 개발
내 로컬에서 dev 브랜치로 이동 및 최신 코드 가져오기
💡 git pull 하지 않고, 왜 로컬엔 적용안됐어요? 라고 하지 말기
Bash
복사
git switch dev 혹은 git checkout dev
git pull origin dev
​

2️⃣ 기능 개발 반복
🎨 그림으로 보는 github 협업의 흐름 (PPT 다운로드)
github 협업의 흐름.pptx
91.3KB
🪜 순서로 살펴보기 

➕ 추가 자료
.gitignore란 뭘까?
git이 관리하지 않으면 하는 파일을 .gitignore라는 파일에 작성합니다.
git으로 관리하고 싶지 않은 파일!
github에 업로드하고 싶지 않은 파일!
ex) 남들이 알면 안되는 비밀번호, 키 등이 숨겨져있는 파일을 .gitignore에 작성합니다.


gitignore.io 라는 웹사이트를 활용하면 편리하게 불필요한 파일을 .gitignore에 추가해줍니다.

README란 뭘까?
프로젝트의 설명 혹은 프로젝트 협업 시 세팅방법 등을 작성하는 파일입니다.
github에 업로드 시 바로 확인이 가능합니다.
README.md라는 파일을 생성해서 글을 작성하시고, github에 코드를 업로드해보세요.

github에 다음과 같이 README.md의 내용이 보입니다.

비밀번호 대신 사용하는 git token 설정하는 법 참고자료
공식문서
https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
https://github.com/settings/tokens
블로그: https://lifefun.tistory.com/161
