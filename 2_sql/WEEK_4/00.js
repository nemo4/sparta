[스파르타코딩클럽] 엑셀보다 쉬운 SQL - 4주차
콜아웃 아이콘
매 주차 강의자료 시작에 PDF파일을 올려두었어요!
PDF 파일
스파르타코딩클럽_엑셀보다_쉬운_SQL_-_4주차.pdf
873.8KB
[수업 목표]
Subquery(서브쿼리)의 사용 방법을 배워본다
실전에서 유용한 SQL 문법을 더 배워본다
SQL을 사용하여 실전과 같은 데이터분석을 진행해본다
[목차]
01. 오늘 배울 것
02. 원하는 데이터를 더 쉽게: Subquery
03. Subquery 본격 사용해보기
04. Subquery 연습해보기 (where, select)
05. Subquery 연습해보기 (from, inner join)
06. with절 연습하기
07. 실전에서 유용한 SQL 문법 (문자열)
08. 실전에서 유용한 SQL 문법 (Case)
09. SQL 문법 복습. 또 복습! (초급)
10. SQL 문법 복습. 또 복습! (중급)
11. 끝 & 숙제 설명
💡
모든 토글을 열고 닫는 단축키
Windows : Ctrl + alt + t 
Mac : ⌘ + ⌥ + t 
01. 오늘 배울 것
1) Subquery: 원하는 데이터를 더 쉽게 얻어보기
👉
Subquery란? 쿼리 안의 쿼리라는 의미입니다.

하위 쿼리의 결과를 상위 쿼리에서 사용하면, SQL 쿼리가 훨씬 간단해져요!
즉, Subquery를 사용하지 않아도 원하는 데이터를 얻어낼 수 있겠지만, 더 편하고 간단하게 원하는 데이터를 얻기 위해 사용되는 파워풀한 기능입니다.
Subquery에 대한 이해도가 생기면, With구문을 이용해서 더 간단하게 만들어볼게요!
2) 실전에서 유용한 SQL 문법들
😂
생각보다 실무에서의 데이터는 지저분하고 복잡합니다.

주어진 데이터를 원하는 유의미한 정보로 만들기 위해서는 이것저것 해야할 일이 많습니다. 문자열을 한 번에 정리한다든지, 조건에 따라 데이터를 구분한다든지요. 실무 속 날것의 데이터에서도 원하는 데이터를 뽑아낼 수 있는 유용한 기능을 배워봅니다!
3) 이제 여러분은...
🎉
축하합니다! 

이제 여러분은 DB에 저장된 데이터를 꺼내서 필요한 분석을 해낼 수 있는 사람이 되었습니다. 하지만, 실전에서의 데이터분석을 위해서 아직 배워야 할 것들이 아직 조금 남았습니다.
02. 원하는 데이터를 더 쉽게: Subquery
4) Subquery 사용방법 익혀보기
👉
하나의 SQL 쿼리 안에 또다른 SQL 쿼리가 있는 것을 의미합니다.
여러 번 듣는 것보다, 한 번 보는게 이해가 빠르겠죠? 바로 가보시죠!
kakaopay로 결제한 유저들의 정보 보기
→ 우선, 이렇게 볼 수 있겠죠? users 와 orders 의 inner join으로!
SQL
복사
select u.user_id, u.name, u.email from users u
inner join orders o on u.user_id = o.user_id
where o.payment_method = 'kakaopay'
​
그런데, 이것을 이렇게 할 수도 있습니다. 조금 더 직관적이지 않나요?
1. 우선 kakaopay로 결제한 user_id를 모두 구해보기 → K 라고 합시다.
SQL
복사
select user_id from orders
where payment_method = 'kakaopay'
​
2. 그 후에, user_id가 K 에 있는 유저들만 골라보기
→ 이게 바로 서브쿼리!
SQL
복사
select u.user_id, u.name, u.email from users u
where u.user_id in (
	select user_id from orders
	where payment_method = 'kakaopay'
)
​
03. Subquery 본격 사용해보기
5) 자주 쓰이는 Subquery 유형 알아보기
👉
자주 쓰는 Subquery를 먼저 알아볼까요?
Subquery는 where, select, from 절에서 유용하게 사용될 수 있어요!
6) Where 에 들어가는 Subquery
👉
Where은 조건문이죠? Subquery의 결과를 조건에 활용하는 방식으로 유용하게 사용합니다.

where 필드명 in (subquery) 이런 방식으로요!
예를 들면, 카카오페이로 결제한 주문건 유저들만, 유저 테이블에서 출력해주고 싶을 때는 아래와 같이 표현할 수 있겠죠.
SQL
복사
select * from users u
where u.user_id in (select o.user_id from orders o 
					where o.payment_method = 'kakaopay');
​
쿼리가 실행되는 순서를 이렇게 상상하면 편해요!
👉
(1) from 실행: users 데이터를 가져와줌
(2) Subquery 실행: 해당되는 user_id의 명단을 뽑아줌
(3) where .. in 절에서 subquery의 결과에 해당되는 'user_id의 명단' 조건으로 필터링 해줌
(4) 조건에 맞는 결과 출력
7) Select 에 들어가는 Subquery
👉
Select는 결과를 출력해주는 부분이죠? 기존 테이블에 함께 보고싶은 통계 데이터를 손쉽게 붙이는 것에 사용합니다.

select 필드명, 필드명, (subquery) from .. 이렇게요!
앞서 보았던것처럼, '오늘의 다짐' 데이터를 보고 싶은데 '오늘의 다짐' 좋아요의 수가, 본인이 평소에 받았던 좋아요 수에 비해 얼마나 높고 낮은지가 궁금할 수 있겠죠?
그럼, 평균을 먼저 구해봅시다! user_id='4b8a10e6' 를 예시로!
Shell
복사
select avg(likes) from checkins c2
where c2.user_id = '4b8a10e6'
​
그러면, 이렇게 표현할 수 있어요!
SQL
복사
select c.checkin_id, c.user_id, c.likes, 
	(select avg(likes) from checkins c2
	where c2.user_id = c.user_id) as avg_like_user
from checkins c;
​
쿼리가 실행되는 순서를 이렇게 상상하면 편해요!
👉
(1) 밖의 select * from 문에서 데이터를 한줄한줄 출력하는 과정에서
(2) select 안의 subquery가 매 데이터 한줄마다 실행되는데
(3) 그 데이터 한 줄의 user_id를 갖는 데이터의 평균 좋아요 값을 subquery에서 계산해서
(4) 함께 출력해준다!
8) From 에 들어가는 Subquery (가장 많이 사용되는 유형!)
👉
From은 언제 사용하면 좋을까요? 내가 만든 Select와 이미 있는 테이블을 Join하고 싶을 때 사용하면 딱이겠죠!
자, 우선 유저 별 좋아요 평균을 먼저 구해볼까요?
→ checkins 테이블을 user_id로 group by 하면 되겠죠?
SQL
복사
select user_id, round(avg(likes),1) as avg_like from checkins
group by user_id
​
자, 이제 여기서 해당 유저 별 포인트를 보고 싶다면?
→ 그러면, 포인트와 like의 상관정도를 알 수 있겠죠?
SQL
복사
select pu.user_id, a.avg_like, pu.point from point_users pu
inner join (
	select user_id, round(avg(likes),1) as avg_like from checkins
	group by user_id
) a on pu.user_id = a.user_id
​
쿼리가 실행되는 순서를 이렇게 상상하면 편해요!
👉
(1) 먼저 서브쿼리의 select가 실행되고,
(2) 이것을 테이블처럼 여기고 밖의 select가 실행!
04. Subquery 연습해보기 (where, select)
9) Where 절에 들어가는 Subquery 연습해보기
[연습] 전체 유저의 포인트의 평균보다 큰 유저들의 데이터 추출하기
[연습] 이씨 성을 가진 유저의 포인트의 평균보다 큰 유저들의 데이터 추출하기
10) Select 절에 들어가는 Subquery 연습해보기
[연습] checkins 테이블에 course_id별 평균 likes수 필드 우측에 붙여보기
[연습] checkins 테이블에 과목명별 평균 likes수 필드 우측에 붙여보기
05. Subquery 연습해보기 (from, inner join)
11) From 절에 들어가는 Subquery 연습해보기
[준비1] course_id별 유저의 체크인 개수를 구해보기!
[준비2] course_id별 인원을 구해보기!
[진짜 하고 싶은 것] course_id별 check in 개수에 전체 인원을 붙이기
[한 걸음 더] 퍼센트를 나타내기
[반 걸음 더] 앗, 강의 제목도 나타나면 좋겠네요!
06. with절 연습하기
12) with 절로 더 깔끔하게 쿼리문을 정리하기
[코드스니펫] 코스제목별 like 개수, 전체, 비율
다시 위의 코드를 볼까요?
SQL
복사
select c.title,
       a.cnt_checkins,
       b.cnt_total,
       (a.cnt_checkins/b.cnt_total) as ratio
from
(
	select course_id, count(distinct(user_id)) as cnt_checkins from checkins
	group by course_id
) a
inner join
(
	select course_id, count(*) as cnt_total from orders
	group by course_id 
) b on a.course_id = b.course_id
inner join courses c on a.course_id = c.course_id
​
이렇게 계속 서브쿼리가 붙으면, inner join 안쪽이 너무 헷갈리겠죠!
→ 그 때 쓰는 것이 with 절! 결과는 같은데 훨씬 보기가 좋죠?
SQL
복사
with table1 as (
	select course_id, count(distinct(user_id)) as cnt_checkins from checkins
	group by course_id
), table2 as (
	select course_id, count(*) as cnt_total from orders
	group by course_id
)
select c.title,
       a.cnt_checkins,
       b.cnt_total,
       (a.cnt_checkins/b.cnt_total) as ratio
from table1 a inner join table2 b on a.course_id = b.course_id
inner join courses c on a.course_id = c.course_id
​
07. 실전에서 유용한 SQL 문법 (문자열)
13) 문자열 데이터 다뤄보기
👉
실제 업무에서는, 문자열 데이터를 원하는 형태로 한번 정리해야 하는 경우가 많습니다.
문자열 쪼개보기
문자열 일부만 출력하기
08. 실전에서 유용한 SQL 문법 (Case)
14) CASE: 경우에 따라 원하는 값을 새 필드에 출력해보기
👉
10000점보다 높은 포인트를 가지고 있으면 '잘 하고 있어요!', 평균보다 낮으면 '조금 더 달려주세요!' 라고 표시해 주려면 어떻게 해야할까요?
[코드스니펫] 포인트 보유액에 따라 다르게 표시해주기
15) CASE: 실전을 위한 트릭!
👉
Subquery를 이용하면 이런 통계도 낼 수 있어요!
우선 몇 가지로 구분을 나누고,

SQL
복사
select pu.point_user_id, pu.point,
case 
when pu.point >= 10000 then '1만 이상'
when pu.point >= 5000 then '5천 이상'
else '5천 미만'
END as level
from point_users pu
​
서브쿼리를 이용해서 group by로 통계를 낼 수 있습니다.

SQL
복사
select level, count(*) as cnt from (
	select pu.point_user_id, pu.point,
	case 
	when pu.point >= 10000 then '1만 이상'
	when pu.point >= 5000 then '5천 이상'
	else '5천 미만'
	END as level
	from point_users pu
) a
group by level
​
with 절과 함께하면 금상첨화죠!
SQL
복사
with table1 as (
	select pu.point_user_id, pu.point,
	case 
	when pu.point >= 10000 then '1만 이상'
	when pu.point >= 5000 then '5천 이상'
	else '5천 미만'
	END as level
	from point_users pu
)
select level, count(*) as cnt from table1
group by level
​
09. SQL 문법 복습. 또 복습! (초급)
16) [퀴즈] 평균 이상 포인트를 가지고 있으면 '잘 하고 있어요' / 낮으면 '열심히 합시다!' 표시하기!
👉
[힌트!] CASE 문법 사용, CASE 안에서 Subquery로 평균을 계산하여 비교!

정답 같이 풀어보기
17) [퀴즈] 이메일 도메인별 유저의 수 세어보기
👉
[힌트!] SUBSTRING_INDEX와 Group by를 잘 사용하면 끝!

정답 살펴보기!
18) [퀴즈] '화이팅'이 포함된 오늘의 다짐만 출력해보기
👉
이번 건 쉽죠? 잊어버리셨을까봐! like를 어떻게 썼더라~

정답 쿼리 살펴보기!
10. SQL 문법 복습. 또 복습! (중급)
19) [퀴즈] 수강등록정보(enrolled_id)별 전체 강의 수와 들은 강의의 수 출력해보기
👉
[힌트!] subquery 두 개를 만들어놓고, inner join!

살펴볼 테이블: enrolled_details

done_cnt는 들은 강의의 수(done=1),
total_cnt는 전체 강의의 수

정답 쿼리 살펴보기!
20) [퀴즈] 수강등록정보(enrolled_id)별 전체 강의 수와 들은 강의의 수, 그리고 진도율 출력해보기
👉
[힌트!] 진도율 = (들은 강의의 수 / 전체 강의 수)

정답 쿼리 살펴보기!
21) [함께] 그러나, 더 간단하게 만들 수 있지 않을까!
👉
아래와 같이 써도 같은 결과겠죠? 이렇게, 가끔 멀리서 보면 더 나은 쿼리를 만들 수 있어요!
SQL
복사
select enrolled_id,
       sum(done) as cnt_done,
       count(*) as cnt_total
from enrolleds_detail ed
group by enrolled_id
​
11. 끝 & 숙제 설명
📃
4주 동안 고생 많았습니다! 숙제로 유종의 미를 같이 거둬볼까요?
마지막 숙제는, 문제를 푸는 것이 아니라, 문법을 정리해보는 것이에요!

SQL 쿼리문은 문법 종류가 다양하지 않아서,
한번 정리해두면 정말 요긴하게 써먹을 수 있습니다!

블로그를 하나 만들고 문법을 정리한 다음, 제출해주세요!
(이미 있는 분들은 쓰던 것을 사용하셔도 무방합니다)
블로그 만들 수 있는 곳들
네이버블로그 만들기: (링크)
Velog: (링크)
.. 아무데나!
