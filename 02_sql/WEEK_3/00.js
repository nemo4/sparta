[스파르타코딩클럽] 엑셀보다 쉬운 SQL - 3주차
콜아웃 아이콘
매 주차 강의자료 시작에 PDF파일을 올려두었어요!
PDF 파일
스파르타코딩클럽_엑셀보다_쉬운_SQL_-_3주차.pdf
1674.2KB
[수업 목표]
여러 테이블의 정보를 연결하는 Join을 이해한다.
연결된 정보를 바탕으로 보다 풍부한 데이터분석을 연습한다.
아래 위로 결과를 연결하는 Union을 공부한다.
[목차]
01. 오늘 배울 것
02. 여러 테이블을 연결해보자: Join 이란?
03. Join 본격 사용해보기
04. 배웠던 문법을 Join과 함께 사용해보기
05. 이제는 실전! 본격 쿼리 작성해보기
06. 이렇게 끝내면 아쉽죠? 한번 더 총복습!
07. Left Join - 안써보니까 섭섭했죠?
08. 결과물 합치기! Union 배우기
09. 끝 & 숙제 설명
10. 3주차 숙제 답안 코드
💡
모든 토글을 열고 닫는 단축키
Windows : Ctrl + alt + t 
Mac : ⌘ + ⌥ + t 
01. 오늘 배울 것
1) Join: 여러 정보를 한 눈에 보고 싶다면
'오늘의 다짐'을 남긴 회원의 이름을 알고싶어요
기존의 방식대로 하면...
우리 모두의 시간은 소중하니까. Join을 사용하면?
2) Join을 사용한 여러가지 연습을 진행하기
👉
지금까지 배운 내용을 사용해 실전과 같은 데이터분석을 진행해봅니다!

회사에서 일을 하다보면, 저장된 데이터로부터 얻어내고 싶은 인사이트가 있겠죠? 
스파르타 데이터베이스를 사용해 실전 데이터분석을 함께 해봅시다.
02. 여러 테이블을 연결해보자: Join 이란?
3) Join 이란?
👉
Join이란?
두 테이블의 공통된 정보 (key값)를 기준으로 테이블을 연결해서 한 테이블처럼 보는 것을 의미해요.

예) user_id 필드를 기준으로 users 테이블과 orders 테이블을 연결해서 한 눈에 보고 싶어요!
👉
위의 예시와 같이, 두 테이블의 정보를 연결해서 함께 보고싶을 때가 있겠죠?

그럴 때를 대비해서 무언가 연결된 정보가 있을 때, user_id 처럼 동일한 이름과 정보가 담긴 필드를 두 테이블에 똑같이 담아놓는답니다. 이런 필드를 두 테이블을 연결시켜주는 열쇠라는 의미로 'key'라고 불러요.
직접 데이터로 살펴볼까요?
[코드스니펫] Join을 사용해서 Key값으로 두 테이블 연결해보기

👉
[오늘의 꿀팁!] 혹시 엑셀을 잘 쓰신다면? 

SQL의 Join은 엑셀의 vlookup과 동일하다고 생각하시면 됩니다 :-) 
4) Join의 종류: Left Join, Inner Join
Left Join: 유저 데이터로 Left Join 이해해보기
Inner Join: 유저 데이터로 Inner Join 이해해보기
03. Join 본격 사용해보기
5) Join 함께 연습해보기
👉
자, 이제 본격 여러 테이블을 연결해 볼까요? 두근두근! 
SQL 쿼리는 직접 짜면서 가장 빠르게 배운답니다.
[실습] orders 테이블에 users 테이블 연결해보기
[실습] checkins 테이블에 users 테이블 연결해보기
[실습] enrolleds 테이블에 courses 테이블 연결해보기
6) SQL 쿼리가 실행되는 순서
SQL
복사
select * from enrolleds e
inner join courses c
on e.course_id = c.course_id;
​
👉
위 쿼리가 실행되는 순서: from → join → select
from enrolleds: enrolleds 테이블 데이터 전체를 가져옵니다.
inner join courses on e.course_id = c.course_id: courses를 enrolleds 테이블에 붙이는데, enrolleds 테이블의 course_id와 동일한 course_id를 갖는 courses의 테이블을 붙입니다.
select * : 붙여진 모든 데이터를 출력합니다.
👉
항상 from에 들어간 테이블을 기준으로, 다른 테이블이 붙는다고 생각하면 편합니다!
04. 배웠던 문법을 Join과 함께 사용해보기
7) 배웠던 문법 Join과 함께 연습해보기
checkins 테이블에 courses 테이블 연결해서 통계치 내보기
point_users 테이블에 users 테이블 연결해서 순서대로 정렬해보기
orders 테이블에 users 테이블 연결해서 통계치 내보기
8) SQL 쿼리가 실행되는 순서
SQL
복사
select u.name, count(u.name) as count_name from orders o
inner join users u
on o.user_id = u.user_id 
where u.email like '%naver.com'
group by u.name
​
👉
위 쿼리가 실행되는 순서: from → join → where → group by → select
from orders o: orders 테이블 데이터 전체를 가져오고 o라는 별칭을 붙입니다.
inner join users u on o.user_id = u.user_id : users 테이블을 orders 테이블에 붙이는데, orders 테이블의 user_id와 동일한 user_id를 갖는 users 테이블 데이터를 붙입니다. (*users 테이블에 u라는 별칭을 붙입니다)
where u.email like '%naver.com': users 테이블 email 필드값이 naver.com으로 끝나는 값만 가져옵니다.
group by u.name: users 테이블의 name값이 같은 값들을 뭉쳐줍니다.
select u.name, count(u.name) as count_name : users 테이블의 name필드와 name 필드를 기준으로 뭉쳐진 갯수를 세어서 출력해줍니다. 
👉
Join의 실행 순서는 항상 from 과 붙어다닌다고 생각하면 편해요!
05. 이제는 실전! 본격 쿼리 작성해보기
9) [퀴즈] Join 연습1
👉
결제 수단 별 유저 포인트의 평균값 구해보기
(어느 결제수단이 가장 열심히 듣고 있나~)

join 할 테이블: point_users 에, orders 를 붙이기
꿀팁! → round(숫자,자릿수) 를 이용해서 반올림을 해볼까요?

정답 쿼리 살펴보기!
10) [퀴즈] Join 연습2
👉
결제하고 시작하지 않은 유저들을 성씨별로 세어보기
(어느 성이 가장 시작을 안하였는가~)

join 할 테이블: enrolleds 에, users 를 붙이기
꿀팁! → is_registered = 0 인 사람들을 세어보아요!
꿀팁! → order by 를 이용해서 내림차순으로 정렬하면 보기 좋겠죠?

정답 쿼리 살펴보기!
11) [퀴즈] Join 연습3
👉
과목 별로 시작하지 않은 유저들을 세어보기

join 할 테이블: courses에, enrolleds 를 붙이기
꿀팁! → is_registered = 0 인 사람들을 세어보아요!

정답 쿼리 살펴보기!
06. 이렇게 끝내면 아쉽죠? 한번 더 총복습!
12) [퀴즈] Join 연습4
👉
웹개발, 앱개발 종합반의 week 별 체크인 수를 세어볼까요? 보기 좋게 정리해보기!

join 할 테이블: courses에 checkins 를 붙이기
꿀팁! → group by, order by에 콤마로 이어서 두 개 필드를 걸어보세요!

정답 쿼리 살펴보기!
13) [퀴즈] Join 연습5
👉
연습4번에서, 8월 1일 이후에 구매한 고객들만 발라내어 보세요!

join 할 테이블: courses에, checkins 를 붙이고!
+ checkins 에, orders 를 한번 더 붙이기!
꿀팁! → orders 테이블에 inner join을 한번 더 걸고, where 절로 마무리!

정답 쿼리 살펴보기!
07. Left Join - 안써보니까 섭섭했죠?
14) 다시한번 복습! inner join vs left join
💡
inner join 은 교집합, left join 은 첫번째 원에 붙이는 것!
그림으로 복습하기
inner join
left join
그래서! left join은 어디에 → 뭐를 붙일건지, 순서가 중요하답니다!
15) Left join 언제쓸까요? (복습)
💡
바로 한번 볼까요?
예를 들면 모든 유저가 포인트를 갖고 있지를 않을 수 있잖아요!
users 테이블과 ↔ point_users 테이블을 left join 해봅시다.
JavaScript
복사
select * from users u
left join point_users pu on u.user_id = pu.user_id
​

이 상태에선, 이런 게 가능합니다.
💡
유저 중에, 포인트가 없는 사람(=즉, 시작하지 않은 사람들)의 통계!
속닥속닥) is NULL , is not NULL 을 함께 배워보아요!
JavaScript
복사
select name, count(*) from users u
left join point_users pu on u.user_id = pu.user_id
where pu.point_user_id is NULL
group by name
​
JavaScript
복사
select name, count(*) from users u
left join point_users pu on u.user_id = pu.user_id
where pu.point_user_id is not NULL
group by name
​
16) [퀴즈] 여기서 퀴즈! - 막해보기
💡
7월10일 ~ 7월19일에 가입한 고객 중,
포인트를 가진 고객의 숫자, 그리고 전체 숫자, 그리고 비율을 보고 싶어요!

아래와 같은 결과를 보고 싶다면 어떻게 해야할까요?
이렇게 저렇게 해볼까요?
힌트1 → count 은 NULL을 세지 않는답니다!
힌트2 → Alias(별칭)도 잘 붙여주세요!
힌트3 → 비율은 소수점 둘째자리에서 반올림!

정답 쿼리 살펴보기
08. 결과물 합치기! Union 배우기
17) Select를 두 번 할 게 아니라, 한번에 모아서 보고싶은 경우, 있을걸요!
예를 들면 이렇게!
👉
근데, 그러려면 한 가지 조건이 있어요! 노란색과 파란색 박스의 필드명이 같아야 한답니다. 🙂 (당연하겠죠?)

18) Union을 이용해서 아래와 같은 모습을 만들어볼까요?
[코드스니펫] - 퀴즈5 쿼리
보고 싶은 모습!

우선, 'month'를 붙여줘야겠네요!
SQL
복사
select '7월' as month, c.title, c2.week, count(*) as cnt from checkins c2
inner join courses c on c2.course_id = c.course_id
inner join orders o on o.user_id = c2.user_id
where o.created_at < '2020-08-01'
group by c2.course_id, c2.week
order by c2.course_id, c2.week
​
여기에 아래 위로 Union all을 사용해 붙여주면 끝!
SQL
복사
(
	select '7월' as month, c.title, c2.week, count(*) as cnt from checkins c2
	inner join courses c on c2.course_id = c.course_id
	inner join orders o on o.user_id = c2.user_id
	where o.created_at < '2020-08-01'
	group by c2.course_id, c2.week
  order by c2.course_id, c2.week
)
union all
(
	select '8월' as month, c.title, c2.week, count(*) as cnt from checkins c2
	inner join courses c on c2.course_id = c.course_id
	inner join orders o on o.user_id = c2.user_id
	where o.created_at > '2020-08-01'
	group by c2.course_id, c2.week
  order by c2.course_id, c2.week
)
​
앗, 그런데, 한 가지! 정렬이 깨졌네요!? 😂​
👉
네 맞습니다! union을 사용하면 내부 정렬이 먹지 않아요.
이 때 유용한 방법이 있지요. 바로, SubQuery(서브쿼리) !
그런데 이번주는 푹 쉬구요! 4주차에 나올 거니까 기대해주세요!
09. 끝 & 숙제 설명
📃
이번 3주차도 고생 많았습니다. 역시 한 주의 마무리는 숙제죠!

숙제: enrolled_id별 수강완료(done=1)한 강의 갯수를 세어보고, 완료한 강의 수가 많은 순서대로 정렬해보기. user_id도 같이 출력되어야 한다.
힌트!
조인해야 하는 테이블: enrolleds, enrolleds_detail
조인하는 필드: enrolled_id
결과

😎
이런 결과가 나오면 정답! 👏​
10. 3주차 숙제 답안 코드
[코드스니펫] - 3주차 숙제 답안 코드
SQL
복사
select e.enrolled_id,
	     e.user_id,
	     count(*) as cnt
  from enrolleds e
 inner join enrolleds_detail ed on e.enrolled_id = ed.enrolled_id
 where ed.done = 1
 group by e.enrolled_id, e.user_id
 order by cnt desc