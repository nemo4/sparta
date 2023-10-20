자바스크립트 예제30문제
💡
학습에 도움이 되는 자바스크립트 예제 30문제를 류제천튜터님께서 준비해주셨습니다. 🙂
아래 문제를 풀어보고 본인의 실력을 점검해보세요. 
1주차: 기초 문법
문자열 길이
JavaScript
복사
// 입력받은 문자열의 길이를 구해서 result 값이 아래와 같이 출력되도록 함수를 완성해 보세요.

function getLengthOfString(str) {
	// 이 부분에 코드를 작성하세요.
}

const result = getLengthOfString("abcde");
console.log(result); // 출력 결과: 5
​
문자열 자르기
JavaScript
복사
// 입력받은 문자열을 잘라서 result 값이 아래와 같이 출력되도록 함수를 완성해 보세요.
// 메소드는 slice 를 이용해 보세요.

function getToken(str) {
	// 이 부분에 코드를 작성하세요.
}

const result = getToken("Bearer a012345");
console.log(result); // 출력 결과: 'a012345'
​
문자열 대체
JavaScript
복사
// 아래 결과와 같이 출력되도록 newStr에 들어갈 코드를 작성해 보세요.

const str = "I like coffee but I don't like coffee shop.";

const newStr =  //  replace 메소드를 이용하여 이 부분을 완성해 보세요.

console.log(newStr);
// 출력 결과: "I like tea but I don't like coffee shop."
​
문자열 분할
JavaScript
복사
// 아래 결과와 같이 출력되도록 newStr에 들어갈 코드를 작성해 보세요.

const str = "green/red/yellow/blue/white";

const splittedArr =  // split 메소드를 이용하여 이 부분을 작성해 보세요.

console.log(splittedArr);
// 출력 결과: ["green", "red", "yellow", "blue", "white"]
​
명시적 형변환 - 숫자 형변환
JavaScript
복사
// 문자열을 입력받아도 result 값이 아래와 같이 출력되도록 함수를 완성해 보세요.
// if문과 typeof 키워드를 이용해야 합니다.

function add(a, b) {
	// 이 부분을 완성해 보세요.
}

const result1 = add(5, "5");
const result2 = add("5", 5);

console.log(result1); // 출력 결과: 10
console.log(result2); // 출력 결과: 10
​
Truthy / Falsy
JavaScript
복사
// 아래 함수는 배열을 입력받아서 배열 요소들 중 truthy한 요소들만 필터링하여 반환합니다.
// Truthy 란 boolean type을 기대하는 문맥에서 true 로 평가되는 값을 의미합니다.
// for문과 if문을 이용하여 작성해 보세요.

function getTruthyArray(arr) {
	const truthyArr = [];
	// 이 부분을 완성해 보세요.
	
	return truthyArr;
}

const result = getTruthyArray( [ -1, 0, "", {}, [], null, undefined, NaN ] );
console.log(result); // 출력 결과: [-1, {}, []]

​
연산자 - 홀수/짝수 구분
JavaScript
복사
// 숫자 배열을 입력받아서 홀수의 값만 합치는 함수를 완성해 보세요.
// result 값이 아래아 같이 출력되어야 합니다.
// for문, if문, %(나머지) 연산자를 사용해 보세요.

function sumOdd(arr) {
	let sum = 0;
	// 이 부분을 완성해 보세요.
	
	return sum;
}

const result = sumOdd( [1,2,3,4,5 ] );
console.log(result); // 출력 결과: 9
​
논리연산자 ||
JavaScript
복사
// 아래의 결과와 같이 출력되도록 함수를 완성해 보세요.

function order(item, quantity, price) {
	// item, quantity, price 중 하나라도 입력이 되어 있지 않으면
	// '주문 정보를 모두 입력해주세요' 를 리턴합니다.
	// quantity 수량이 0이하면
	// '수량은 1개 이상 입력해주세요' 를 리턴합니다.
	// 위 두 가지 경우만 아닌 경우에만 아래와 같이 주문 완료 메시지를 출력합니다.
  // 이 부분에 코드를 작성해 보세요.
}

console.log(order('아이폰 12', 2, 1200000));
// 출력 결과: '주문이 완료되었습니다. 아이폰 12 2개를 2400000원에 구매하셨습니다.'

console.log(order('맥북 프로', -1, 2500000));
// 출력 결과: '수량은 1개 이상 입력해주세요'

console.log(order('아이패드 에어', 1, null));
// 출력 결과: '주문 정보를 모두 입력해주세요'
​
논리연산자 &&
JavaScript
복사
// 전통주 시음회가 있다고 가정합니다. 입장 티켓을 소유하고 나이 19세 이상이어먄 입장이 가능합니다.
// 2가지 조건을 모두 만족하는 지 검사하는 아래 함수를 완성해 보세요.

function checkAgeAndTicket(age, hasTicket) {
	// "Pass" 또는 "Fail" 을 반환해야 합니다.
	return (age >= 19 && hasTicket) ? "Pass" : "Fail";
}

const result1 = checkAgeAndTicket(19, true);
console.log(result1); // "Pass"

const result2 = checkAgeAndTicket(17, true);
console.log(result2); // "Fail"
​
논리연산자 ||
JavaScript
복사
// 결제 카드에 따라 할인율이 다른 쇼핑몰이 있다고 가정합니다.
// 우리카드 또는 신한카드는 10% 할인.
// 롯데카드 또는 현대카드는 5% 할인.
// 아래 결과를 출력하는 함수를 완성해 보세요.

function getDiscountedPrice(original_price, card) {
	// 할인 전 가격과 결제 카드에 따라 할인을 적용한 가격을 반환해야 합니다.
	// 이 부분에 코드를 작성하세요.
	
}

const result = getDiscountedPrice(70000, "신한카드");
console.log(result); // 출력 결과: 63000


​
함수 정의 문법
JavaScript
복사
// 함수 선언문으로 정의한 foo 함수
function foo() {
	console.log("함수 선언문");
}
foo(); // 출력 결과: '함수 선언문'

// "함수 표현식"을 콘솔로그로 출력하는 foo2 함수를 함수 표현식으로 만들어 보세요.
// function 키워드를 사용해 주세요.

foo2(); // 출력 결과: '함수 표현식'

// "화살표 함수"를 콘솔로그로 출력하는 foo3 함수를 화살표 함수로 만들어 보세요.

foo3(); // 출력 결과: '화살표 함수'

/* 참고로 화살표 함수 역시 변수에 함수가 할당되는 함수 표현식 입니다. */
​
if-else 문
JavaScript
복사
// 아래는 점수에 따라 학점을 반환해 주는 함수입니다.
// if / else if 문을 활용하여 아래 결과대로 출력되도록 함수를 완성해 보세요.
// 90 ~ 100 : A
// 80 ~ 90: B
// 70 ~ 80: C
// 60 ~ 70: D
// 60 미만: F


function getGrade(score) {
	// 이 부분에 코드를 작성하세요.
}

const result1 = getGrade(85);
const result2 = getGrade(65);

console.log(result1); // 출력 결과: 'B'
console.log(result2); // 출력 결과: 'D'

​
객체 및 배열 메소드 응용
JavaScript
복사
// 아래와 같은 결과가 출력되도록 함수를 완성해 보세요.
const db = [
	{
		"id": 7,
		"name": "Jay",
		"age": 33,
		"phone": "010-1212-5678",
		"email": "qwe@gmail.com"
	},
	{
		"id": 10,
		"name": "James",
		"age": 30,
		"phone": "010-1234-5678",
		"email": "abc@gmail.com"
	}
]
	
function handleEdit(id, editingObj) {
	// db에서 id에 해당하는 객체를 찾아서 내용을 바꿉니다.
	// 배열 요소를 찾을 때 배열의 find 또는 findIndex 메소드를 사용해 보세요.
	// Object.assign 을 사용해서 객체의 내용을 수정해 보세요.
	// 여기에 코드를 작성하세요.
	
}

handleEdit(10, { name: "Paul", age: 35 });

console.log(db);
/*
출력 결과:
[
	{
		"id": 7,
		"name": "Jay",
		"age": 33,
		"phone": "010-1212-5678",
		"email": "qwe@gmail.com"
	},
	{
		"id": 10,
		"name": "Paul",
		"age": 35,
		"phone": "010-1234-5678",
		"email": "abc@gmail.com"
	}
]
*/
​
배열 메소드 filter
JavaScript
복사
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function getEvenNumbers(arr) {
	// 인자로 받은 숫자를 요소를 갖는 배열에서 짝수만 필터하여 배열로 반환하세요. 
	// 배열의 filter 메소드를 이용하세요.
	// 여기에 코드를 작성하세요.
	
}

const result = getEvenNumbers( [1,2,3,4,5,6,7,8,9,10] );
console.log(result); // [2,4,6,8,10]
​
for문, continue, break
JavaScript
복사
// for문과 continue, break 키워드를 사용하여 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function countEvenNumbersUpto5(numArr) {
	// numArr 배열을 요소들을 탐색하여 요소가 짝수인 경우 개수를 카운트 해야 합니다.
	// 그러나 개수는 최대 5개까지만 셀 수 있도록 제한합니다.
  let count = 0;

  // 이 부분을 완성해 보세요.

  return count;
}

const result1 = countEvenNumbersUpto5( [1,2,3,4,6,8,10,12,13,14,15,16] );
console.log(result1); // 출력 결과: 5

const result2 = countEvenNumbersUpto5( [1,3,5,6,8,10] );
console.log(result2); // 출력 결과: 3
​
2주차: ES6, 일급객체 함수, Map, Set
ES6 - 삼항연산자
JavaScript
복사
// 아래와 같이 출력되도록 함수를 완성해 보세요.
// if문 없이 삼항연산자를 사용해 보세요.

function getMessageIfHot(temperature) {
	// temperature 가 26보다 크면 "It's hot!", 작으면 "Its' not hot!"
	// 여기에 코드를 작성하세요.
	
}

const result = getMessageIfHot(26);
console.log(result); // 출력 결과: 'It's not hot!'
​
ES6 - 구조분해할당
JavaScript
복사
// 호텔의 예약 확인 시스템의 함수라고 가정합니다.
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function confirmReservation(user) {
	// 여기에 user 객체를 구조 분해 할당 하세요.
	
	return `${name} 고객님의 ${roomType}룸 입실날짜는 ${firstDate} 입니다.`
}

const userInfo = {
  name: "James",
	roomType: "Deluxe",
	date: "2023-05-30"
}
const result = confirmReservation(userInfo);
console.log(result);
// 출력 결과: 'James 고객님의 Deluxe룸 입실날짜는 2023-05-30 입니다.'
​
ES6 - spread operator
JavaScript
복사
// 아래와 같은 결과가 출력되도록 함수를 완성해 보세요.
const db = [
	{
		"id": 7,
		"name": "Jay",
		"age": 33,
		"phone": "010-1212-5678",
		"email": "qwe@gmail.com"
	},
	{
		"id": 10,
		"name": "James",
		"age": 30,
		"phone": "010-1234-5678",
		"email": "abc@gmail.com"
	}
]
	
function handleEdit(id, editingObj) {
	// db에서 id에 해당하는 객체를 찾아서 내용을 바꿉니다.
	// Object.assign 대신 spread syntax(...)를 사용해야 합니다.
	// 여기에 코드를 작성하세요.
	
}

handleEdit(10, { name: "Paul", age: 35 });

console.log(db);
/*
출력 결과:
[
	{
		"id": 7,
		"name": "Jay",
		"age": 33,
		"phone": "010-1212-5678",
		"email": "qwe@gmail.com"
	},
	{
		"id": 10,
		"name": "Paul",
		"age": 35,
		"phone": "010-1234-5678",
		"email": "abc@gmail.com"
	}
]
*/
​
고차 함수
JavaScript
복사
// 고차 함수: 함수를 매개변수로 받거나 리턴하는 함수
// 아래 결과와 같이 출력되도록 고차 함수를 완성해 보세요.

function divideBy(num) {
	// 여기에 코드를 작성하세요.
	
}

const divideBy100 = divideBy(100);
const result = divideBy100(10);
console.log(result); // 출력 결과: 0.1

​
Set
JavaScript
복사
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.
// 자료구조 Set 의 인자로 배열을 넣으면 중복요소가 없는 배열을 반환받을 수 있습니다.
// spread syntax 를 사용해 보세요. Set을 배열로 변환할 수 있습니다.

function getNoDuplicates(arr) {
	// 여기에 코드를 작성하세요.
	
}

const result = getNoDuplicates([1, 5, 2, 3, 4, 1, 2, 5, 6, 3]);
console.log(result); // 출력 결과: [1, 5, 2, 3, 4, 6]
​
3주차: 깊은 복사/얕은 복사, 실행 컨텍스트
얕은 복사(Shallow Copy)
JavaScript
복사

// 아래 결과와 같이 나오도록 아래 함수를 완성해 보세요.

function shallowCopy(obj) {
	// Object.assign 또는 spread syntax를 이용해 보세요.
	// 여기에 코드를 작성하세요.
	
}

const obj = {
  name: 'John',
  age: 30,
  address: {
    city: 'Seoul',
    country: 'South Korea',
		details: ['도로명주소', '지번주소']
  }
};

const shallowCopied = shallowCopy(obj);

console.log( obj === shallowCopied ); // 출력 결과: false
console.log( obj.age === shallowCopied.age) ; // 출력 결과: true
console.log( obj.address === shallowCopied.address ); // 출력 결과: true
console.log( obj.address.city === shallowCopied.address.city ); // 출력 결과: true
console.log( obj.address.details === shallowCopied.address.details ); // 출력 결과: true
​
깊은 복사(Deep Copy)
JavaScript
복사

// 아래 결과와 같이 나오도록 아래 함수를 완성해 보세요.

function deepCopy(obj) {
	// 모든 depth 까지 재귀적으로 탐색하여 복사한 객체를 return 하세요.
	// if문과 typeof 키워드를 이용해 보세요.
	const clonedObj = {};
	for (const key in obj) {
		// 이 부분을 완성해 보세요. 
		
	}
	return clonedObj;
}

const obj = {
  name: 'John',
  age: 30,
  address: {
    city: 'Seoul',
    country: 'South Korea',
		details: ['도로명주소', '지번주소']
  }
};

const deepCopied = deepCopy(obj);
console.log( obj === deepCopied ); // 출력 결과: false
console.log( obj.age === deepCopied.age) ; // 출력 결과: true
console.log( obj.address === deepCopied.address ); // 출력 결과: false
console.log( obj.address.city === deepCopied.address.city ); // 출력 결과: true
console.log( obj.address.details === deepCopied.address.details ); // 출력 결과: false
​
최대값
JavaScript
복사
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.
// apply 또는 spread syntax를 이용해 보세요.

function getMaxNumber(arr) {
	// 자바스크립트의 내장 객체인 Math 를 이용하세요.
	// arr 는 숫자로만 이루어진 배열입니다.
	// 여기에 코드를 작성하세요.
	
}

const result = getMaxNumber( [5,10,3,12,1,9] );
console.log(result); // 출력 결과: 12
​
4주차: 콜백함수, Promise, async/await
콜백함수 - setInterval 의 인자
JavaScript
복사
// 아래 타이머 함수를 요구사항에 맞게 완성해 보세요.

let count = 0;

const timerId = setInterval(callbackFunc, 1000);

function callbackFunc() {
	// count 가 7이 되면 타이머를 멈추도록 해보세요.
	// 이 부분을 완성해 보세요.	

	console.log(count);
}
/*
출력 결과:
1
2
3
4
5
6
7
*/
​
콜백함수 - map 의 인자
JavaScript
복사
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function mapArray(arr) {
	// 배열의 map 메소드를 이용해 보세요.
	// 객체 {key: value}의 key가 변수를 참조하려면 [key] 이렇게 대괄호 안에 넣으세요.
  // 여기에 코드를 작성하세요.
	
}

const result = mapArray( ["a","b","c"] );
console.log(result); // 출력 결과: [{0: 'a'}, {1: 'b'}, {2: 'c'}]
​
Promise 
JavaScript
복사
// fetch API는 Response 객체를 Resolving하는 Promise를 반환합니다.
// Response의 body 값에 접근하는 방법은 Response.json() 입니다.
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function fetchAndPrintJson(url) {
  // 매개변수로 받은 url 주소의 데이터를 fetch 받아와서 출력하는 함수를 작성하세요.
	
}

fetchAndPrintJson('https://jsonplaceholder.typicode.com/posts/1');
/*
출력 결과:
{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/

​
async/await
JavaScript
복사
// fetch API는 Response 객체를 Resolving하는 Promise를 반환합니다.
// await Promise(result) 는 result 값을 반환해 줍니다.
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

async function fetchJson(url) {
  // 여기에 코드를 작성하세요.

}

fetchJson('https://jsonplaceholder.typicode.com/posts/1');
/*
{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/
​
5주차: DOM, class, 클로저
DOM API
HTML
복사
<!-- 출력 버튼을 클릭 했을 때 'dragon_ball'이 출력되도록 함수를 완성하세요. -->

<!DOCTYPE html>
<html>
<head>
	<title>DOM API Example</title>
</head>
<body>
	<section id="dragon_ball">
		<div>
			<h1>버튼을 눌러서 dragon_ball이 콘솔창에 출력되도록 해보세요.</h1>
			<button onclick="printDragonBall(event)">출력</button>
		</div>
	</section>
	<script>
		function printDragonBall(event) {
			// event.target 을 이용해서 클릭한 DOM element에 접근합니다.
			// parentNode 속성을 이용해 보세요
			let button = event.target;
			const id = // 여기에 코드를 작성해 보세요.
			console.log(id); // 출력 결과: dragon_ball
		}
	</script>
</body>
</html>
​
class
JavaScript
복사
// 아래와 같이 출력되도록 클래스를 완성해 보세요.
// 코드 작성하는 공간이 2 곳입니다.

class Movie {
  constructor(title, director, releaseYear) {
		// constructor 를 완성해 보세요
		// 속성은 title, director, releaseYear 를 갖습니다.
    this._title = title;
    this._director = director;
    this._releaseYear = releaseYear;
  }
	
	// printMovie 메소드를 완성해 보세요.
	printMovie() {
		// 여기에 코드를 작성하세요.
		
	}

	// getter 속성으로 title 을 완성해 보세요.
	get title() {
		return this._title;
	}
	
	// setter 속성으로 newTitle을 매개변수로 받는 title 재할당문을 완성해보세요.
	// newTitle 매개변수에 대해 2가지 유효성 검사가 선행되어야 합니다.
	// 1. type 이 string 이 아니면 throw new Error(`영화제목의 data type은 string 이어야 합니다. 현재 타입: ${typeof newTitle}`);
	// 2. newTitle 이 빈문자열이면 throw new Error(`한 글자 이상의 문자열을 할당해 줘야 합니다.`);
	set title(newTitle) {
		// 여기에 코드를 작성하세요.
		
	}

}

const myMovie = new Movie("굿 윌 헌팅", "구스 반 산트", 1997);

myMovie.printMovie();
// 출력 결과: '영화 제목은 굿 윌 헌팅, 감독은 구스 반 산트, 개봉연도는 1997 입니다.'

console.log(myMovie.title); // 출력 결과: '굿 윌 헌팅'
myMovie.title = "Good Will Hunting";
console.log(myMovie.title); // 출력 결과: 'Good Will Hunting'

​
클로저
JavaScript
복사
// 클로저는 "함수와 함수가 선언된 시점의 렉시컬 환경의 조합"입니다.
// 위 정의가 어렵다면, 실행컨텍스트가 체화되기전까지
// "외부 함수의 변수를 참조하는 내부 함수"로 생각해 주셔도 좋습니다.

// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function outerFunction() {
  const outerVariable = "I am outside!";

  function innerFunction() {
		// 여기에 코드를 작성하세요.
  }

  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // 출력 결과: 'I am outside!'

​
예시답안
예시답안은 말 그대로 예시이며, 코드가 정확히 똑같을 필요는 없습니다. 
주석으로 표현한 제약사항들을 지키며 동일한 출력결과가 나오면 정답입니다!
1주차: 기초 문법
문자열 길이
JavaScript
복사
// 입력받은 문자열의 길이를 구해서 result 값이 아래와 같이 출력되도록 함수를 완성해 보세요.

function getLengthOfString(str) {
	return str.length;
}

const result = getLengthOfString("abcde");
console.log(result); // 5
​
문자열 자르기
JavaScript
복사
// 입력받은 문자열을 잘라서 result 값이 아래와 같이 출력되도록 함수를 완성해 보세요.
// 메소드는 slice 를 이용해 보세요.

function getToken(str) {
	return str.slice(-7);
}

const result = getToken("Bearer a012345");
console.log(result); // a012345
​
문자열 대체
JavaScript
복사
// 아래 결과와 같이 출력되도록 newStr에 들어갈 코드를 작성해 보세요.

const str = "I like coffee but I don't like coffee shop.";

const newStr = str.replace("coffee", "tea") //  replace 메소드를 이용하여 이 부분을 완성해 보세요.

console.log(newStr);
// 출력 결과: "I like tea but I don't like coffee shop."
​
문자열 분할
JavaScript
복사
// 아래 결과와 같이 출력되도록 newStr에 들어갈 코드를 작성해 보세요.

const str = "green/red/yellow/blue/white";

const splittedArr = str.split("/"); // split 메소드를 이용하여 이 부분을 작성해 보세요.

console.log(splittedArr);
// 출력 결과: ["green", "red", "yellow", "blue", "white"]
​
명시적 형변환 - 숫자 형변환
JavaScript
복사
// 문자열을 입력받아도 result 값이 아래와 같이 출력되도록 함수를 완성해 보세요.
// if문과 typeof 키워드를 이용해 보세요.

function add(a, b) {
	let _a = a;
	let _b = b;
	if (typeof a !== 'number') {
		_a = Number(a);
	} else if (typeof b !== 'number') {
		_b = Number(b);
	}
	return _a + _b;
}

const result1 = add(5, "5");
const result2 = add("5", 5);

console.log(result1); // 출력 결과: 10
console.log(result2); // 출력 결과: 10
​
Truthy / Falsy
JavaScript
복사
// 아래 함수는 배열을 입력받아서 배열 요소들 중 truthy한 요소들만 필터링하여 반환합니다.
// Truthy 란 boolean type을 기대하는 문맥에서 true 로 평가되는 값을 의미합니다.
// for문과 if문을 이용하여 작성해 보세요.

function getTruthyArray(arr) {
	const truthyArr = [];
	for (const el of arr) {
		if (el) truthyArr.push(el);
	}
	return truthyArr;
}

const result = getTruthyArray( [ -1, 0, "", {}, [], null, undefined, NaN ] );
console.log(result); // [-1, {}, []]

​
연산자 - 홀수/짝수 구분
JavaScript
복사
// 숫자 배열을 입력받아서 홀수의 값만 합치는 함수를 완성해 보세요.
// result 값이 아래아 같이 출력되어야 합니다.
// for문, if문, %(나머지) 연산자를 사용해 보세요.

function sumOdd(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			sum += arr[i];
		}
	}
	return sum;
}

const result = sumOdd( [1,2,3,4,5 ] );
console.log(result); // 9
​
논리연산자 ||
JavaScript
복사
// 아래의 결과와 같이 출력되도록 함수를 완성해 보세요.

function order(item, quantity, price) {
	// item, quantity, price 중 하나라도 입력이 되어 있지 않으면
	// '주문 정보를 모두 입력해주세요' 를 리턴합니다.
	// quantity 수량이 0이하면
	// '수량은 1개 이상 입력해주세요' 를 리턴합니다.
	// 위 두 가지 경우만 아닌 경우에만 아래와 같이 주문 완료 메시지를 출력합니다.
  if (!item || !quantity || !price) {
    return '주문 정보를 모두 입력해주세요';
  } else if (quantity <= 0) {
    return '수량은 1개 이상 입력해주세요';
  } else {
    const total = quantity * price;
    return `주문이 완료되었습니다. ${item} ${quantity}개를 ${total}원에 구매하셨습니다.`;
  }
}

console.log(order('아이폰 12', 2, 1200000));
// 출력 결과: '주문이 완료되었습니다. 아이폰 12 2개를 2400000원에 구매하셨습니다.'

console.log(order('맥북 프로', -1, 2500000));
// 출력 결과: '수량은 1개 이상 입력해주세요'

console.log(order('아이패드 에어', 1, null));
// 출력 결과: '주문 정보를 모두 입력해주세요'
​
논리연산자 &&
JavaScript
복사
// 전통주 시음회가 있다고 가정합니다. 입장 티켓과 나이 19세 이상이어먄 입장이 가능합니다.
// 2가지 조건을 만족하는 지 검사하는 아래 함수를 완성해 보세요.

function checkAgeAndTicket(age, hasTicket) {
	// "Pass" 또는 "Fail" 을 반환해야 합니다.
	return (age >= 19 && hasTicket) ? "Pass" : "Fail";
}

const result1 = checkAgeAndTicket(19, true);
console.log(result1); // "Pass"

const result2 = checkAgeAndTicket(17, true);
console.log(result2); // "Fail"
​
논리연산자 ||
JavaScript
복사
// 결제 카드에 따라 할인율이 다른 쇼핑몰이 있다고 가정합니다.
// 우리카드 또는 신한카드는 10% 할인.
// 롯데카드 또는 현대카드는 5% 할인.
// 아래 결과를 출력하는 함수를 완성해 보세요.

function getDiscountedPrice(original_price, card) {
	// 할인 전 가격과 결제 카드에 따라 할인을 적용한 가격을 반환해야 합니다.
	// 카드 명칭은 한글로 사용해도 됩니다.
	if (card === "우리카드" || card === "신한카드") {
			return original_price * 0.9;
	} else if (card === "롯데카드" || card === "현대카드") {
			return original_price * 0.95;
	}
}

const result = getDiscountedPrice(70000, "신한카드");
console.log(result); // 63000


​
함수 정의 문법
JavaScript
복사
// 함수 선언문으로 정의한 foo 함수
function foo() {
	console.log("함수 선언문");
}
foo(); // 함수 선언문

// "함수 표현식"을 콘솔로그로 출력하는 foo2 함수 표현식으로 만들어 보세요.
// function 키워드를 사용해 주세요.
const foo2 = function() {
		
}
foo2(); // 함수 표현식

// "화살표 함수"를 콘솔로그로 출력하는 foo3 화살표 함수를 만들어 보세요.
const foo3 = () => console.log("화살표 함수");
foo3(); // 화살표 함수

/* 참고로 화살표 함수 역시 변수에 함수가 할당되는 함수 표현식 입니다. */
​
if-else 문
JavaScript
복사
// 아래는 점수에 따른 학점을 반환해 주는 함수입니다.
// if / else if 문을 활용하여 아래 결과대로 출력되도록 함수를 완성해 보세요.
// 90 ~ 100 : A
// 80 ~ 90: B
// 70 ~ 80: C
// 60 ~ 70: D
// 60 미만: F


function getGrade(score) {
	let grade = "F";
	if (score >= 90) {
		grade = "A";
	} else if (score >= 80) {
		grade = "B";
	} else if (score >= 70) {
		grade = "C";
	} else if (score >= 60) {
		grade = "D";
	}
	return grade;
}

const result1 = getGrade(85);
const result2 = getGrade(65);

console.log(result1); // B
console.log(result2); // D

​
객체 및 배열 메소드 응용
JavaScript
복사
// 객체를 인자로 받아서 아래와 같은 결과가 출력되도록 함수를 완성해 보세요.
const db = [
	{
		"id": 7,
		"name": "Jay",
		"age": 33,
		"phone": "010-1212-5678",
		"email": "qwe@gmail.com"
	},
	{
		"id": 10,
		"name": "James",
		"age": 30,
		"phone": "010-1234-5678",
		"email": "abc@gmail.com"
	}
]
	
function handleEdit(id, editingObj) {
	// db에서 id에 해당하는 객체를 찾아서 내용을 바꿉니다.
	// Object.assign 을 사용해 보세요.
	const idx = db.findIndex(el => el.id === id);
	Object.assign(db[idx], editingObj);
}

handleEdit(10, { name: "Paul", age: 35 });

console.log(db);
/*
[
	{
		"id": 7,
		"name": "Jay",
		"age": 33,
		"phone": "010-1212-5678",
		"email": "qwe@gmail.com"
	},
	{
		"id": 10,
		"name": "Paul",
		"age": 35,
		"phone": "010-1234-5678",
		"email": "abc@gmail.com"
	}
]
​
배열 메소드 filter
JavaScript
복사
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function getEvenNumbers(arr) {
	// 인자로 받은 숫자를 요소를 갖는 배열에서 짝수만 필터하여 배열로 반환하세요.
	// 배열의 filter 메소드를 이용하세요.
	return arr.filter(num => num % 2 === 0);
}

const result = getEvenNumbers( [1,2,3,4,5,6,7,8,9,10] );
console.log(result); // [2,4,6,8,10]
​
for문, continue, break
JavaScript
복사
// for문과 continue, break 키워드를 사용하여 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function countEvenNumbersUpto5(numArr) {
	// numArr 배열을 요소들을 탐색하여 요소가 짝수인 경우 개수를 카운트 해야 합니다.
	// 그러나 개수는 최대 5개까지만 셀 수 있도록 제한합니다.
  let count = 0;

  for (let num = 0; num < numArr.length; num++) {
    if (num % 2 !== 0) {
      continue;
    }

    count += 1;

    if (count === 5) {
      break;
    }
  }

  return count;
}

const result1 = countEvenNumbersUpto5( [1,2,3,4,6,8,10,12,13,14,15,16] );
console.log(result1); // 5

const result2 = countEvenNumbersUpto5( [1,3,5,6,8,10] );
console.log(result2); // 3
​
2주차: ES6, 일급객체 함수, Map, Set
ES6 - 삼항연산자
JavaScript
복사
// 입력받은 숫자에 따라 분기처리하여 result 값이 아래와 같이 출력되도록 함수를 완성해 보세요.
// if문 없이 삼항연산자를 사용해 보세요.

function getMessageIfHot(temperature) {
	// temperature 가 26보다 크면 "It's hot!", 작으면 "Its' not hot!"
	return temperature > 26 ? "It's hot!" : "It's not hot!";
}

const result = getMessageIfHot(26);
console.log(result); // It's not hot!
​
ES6 - 구조분해할당
JavaScript
복사
// 호텔의 예약 확인 시스템의 함수라고 가정합니다.
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function confirmReservation(user) {
	// 여기에 user 객체를 구조 분해 할당 하세요.
	const { name, roomType, date: firstDate } = user;
	return `${name} 고객님의 ${roomType}룸 입실날짜는 ${firstDate} 입니다.`
}

const userInfo = {
  name: "James",
	roomType: "Deluxe",
	date: "2023-05-30"
}
const result = confirmReservation(userInfo);
console.log(result); // James 고객님의 Deluxe룸 입실날짜는 2023-05-30 입니다.
​
ES6 - spread operator
JavaScript
복사
// 객체를 인자로 받아서 아래와 같은 결과가 출력되도록 함수를 완성해 보세요.
const db = [
	{
		"id": 7,
		"name": "Jay",
		"age": 33,
		"phone": "010-1212-5678",
		"email": "qwe@gmail.com"
	},
	{
		"id": 10,
		"name": "James",
		"age": 30,
		"phone": "010-1234-5678",
		"email": "abc@gmail.com"
	}
]
	
function handleEdit(id, editingObj) {
	// db에서 id에 해당하는 객체를 찾아서 내용을 바꿉니다.
	// spread syntax(...)를 사용해 보세요.
	const idx = db.findIndex(el => el.id === id);
	db[idx] = { ...db[idx], ...editingObj }
}

handleEdit(10, { name: "Paul", age: 35 });

console.log(db);
/*
[
	{
		"id": 7,
		"name": "Jay",
		"age": 33,
		"phone": "010-1212-5678",
		"email": "qwe@gmail.com"
	},
	{
		"id": 10,
		"name": "Paul",
		"age": 35,
		"phone": "010-1234-5678",
		"email": "abc@gmail.com"
	}
]
​
고차 함수
JavaScript
복사
// 고차 함수: 함수를 매개변수로 받거나 리턴하는 함수
// 아래 결과와 같이 출력되도록 고차 함수를 완성해 보세요.

function divideBy(num) {
	return x => x / num;
}

const divideBy100 = divideBy(100);
const result = divideBy100(10);
console.log(result); // 0.1

​
Set
JavaScript
복사
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.
// 자료구조 Set 의 인자로 배열을 넣으면 중복요소가 없는 배열을 반환받을 수 있습니다.
// spread syntax 를 사용해 보세요. Set을 배열로 변환할 수 있습니다.

function getNoDuplicates(arr) {
	return [...new Set(arr)];
}

const result = getNoDuplicates([1, 5, 2, 3, 4, 1, 2, 5, 6, 3]);
console.log(result); // 출력 결과: [1, 5, 2, 3, 4, 6]
​
3주차: 깊은 복사/얕은 복사, 실행 컨텍스트
얕은 복사(Shallow Copy)
JavaScript
복사

// 아래 결과와 같이 나오도록 아래 함수를 완성해 보세요.

function shallowCopy(obj) {
	// 1 depth 까지 복사를 수행한 객체를 return 하세요.
	return {...obj};
}

const obj = {
  name: 'John',
  age: 30,
  address: {
    city: 'Seoul',
    country: 'South Korea',
		details: ['도로명주소', '지번주소']
  }
};

const shallowCopied = shallowCopy(obj);
console.log( obj === shallowCopied ); // false
console.log( obj.age === shallowCopied.age) ; // true
console.log( obj.address === shallowCopied.address ); // true
console.log( obj.address.city === shallowCopied.address.city ); // true
console.log( obj.address.details === shallowCopied.address.details ); // true
​
깊은 복사(Deep Copy)
JavaScript
복사

// 아래 결과와 같이 나오도록 아래 함수를 완성해 보세요.

function deepCopy(obj) {
	// 모든 depth 까지 재귀적으로 탐색하여 복사한 객체를 return 하세요.
	// for in 문과 typeof 키워드를 이용해 보세요.
	const clonedObj = {};
	for (const key in obj) {
		if(typeof obj[key] === 'object') {
			clonedObj[key] = deepCopy(obj[key]);
		} else {
			clonedObj[key] = obj[key];
		}
	}
	return clonedObj;
}

const obj = {
  name: 'John',
  age: 30,
  address: {
    city: 'Seoul',
    country: 'South Korea',
		details: ['도로명주소', '지번주소']
  }
};

const deepCopied = deepCopy(obj);
console.log( obj === deepCopied ); // false
console.log( obj.age === deepCopied.age) ; // true
console.log( obj.address === deepCopied.address ); // false
console.log( obj.address.city === deepCopied.address.city ); // true
console.log( obj.address.details === deepCopied.address.details ); // false
​
최대값
JavaScript
복사
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.
// apply 또는 spread syntax를 이용해 보세요.

function getMaxNumber(arr) {
	// 자바스크립트의 내장 객체인 Math 를 이용하세요.
	// arr 는 숫자로만 이루어진 배열입니다.
	return Math.max(...arr); // 또는 Math.max.apply(null, arr);
}

const result = getMaxNumber( [5,10,3,12,1,9] );
console.log(result); // 12
​
4주차: 콜백함수, Promise, async/await
콜백함수 - setInterval 의 인자
JavaScript
복사
// 아래 타이머 함수를 요구사항에 맞게 완성해 보세요.

let count = 0;

const timerId = setInterval(callbackFunc, 1000);

function callbackFunc() {
	// count 가 7이 되면 타이머를 멈추도록 해보세요.
	count += 1;
	if(count === 7) clearInterval(timerId);
	console.log(count);
}
​
콜백함수 - map 의 인자
JavaScript
복사
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function mapArray(arr) {
	// 배열의 map 메소드를 이용해 보세요.
	// 객체 {key: value}의 key가 변수를 참조하려면 [key] 이렇게 대괄호 안에 넣으세요.
  // 여기에 코드를 작성하세요.
	return arr.map((el, idx) => ({ [idx]: el }) );
}

const result = mapArray( ["a","b","c"] );
console.log(result); // 출력 결과: [{0: 'a'}, {1: 'b'}, {2: 'c'}]
​
Promise 
JavaScript
복사
// fetch API는 Response 객체를 Resolving하는 Promise를 반환합니다.
// Response의 body 값에 접근하는 방법은 Response.json() 입니다.
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function fetchAndPrintJson(url) {
  return fetch(url)
    .then((response) => {
			return response.json()
		})
    .then((data) => {
	      console.log(data);
    });
}

fetchAndPrintJson('https://jsonplaceholder.typicode.com/posts/1');
/*
출력 결과:
{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/

​
async/await
JavaScript
복사
// fetch API는 Response 객체를 Resolving하는 Promise를 반환합니다.
// await Promise(result) 는 result 값을 반환해 줍니다.
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

async function fetchJson(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

fetchJson('https://jsonplaceholder.typicode.com/posts/1');
/*
{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/
​
5주차: DOM, class, 클로저
DOM API
HTML
복사
<!-- 출력 버튼을 클릭 했을 때 'dragon_ball'이 출력되도록 함수를 완성하세요. -->

<!DOCTYPE html>
<html>
<head>
	<title>DOM API Example</title>
</head>
<body>
	<section id="dragon_ball">
		<div>
			<h1>버튼을 눌러서 dragon_ball이 콘솔창에 출력되도록 해보세요.</h1>
			<button onclick="printDragonBall(event)">출력</button>
		</div>
	</section>
	<script>
		function printDragonBall(event) {
			// event.target 을 이용해서 클릭한 DOM element에 접근하고
			// parentNode 속성을 이용해 보세요
			let button = event.target;
			const id = button.parentNode.parentNode.id;
			console.log(id); // dragon_ball
		}
	</script>
</body>
</html>
​
class
JavaScript
복사
// 아래와 같이 출력되도록 클래스를 완성해 보세요.

class Movie {
  constructor(title, director, releaseYear) {
		// constructor 를 완성해 보세요
		// 속성은 title, director, releaseYear 를 갖습니다.
    this._title = title;
    this._director = director;
    this._releaseYear = releaseYear;
  }
	
	// printMovie 메소드를 완성해 보세요
	printMovie() {
		console.log(`영화 제목은 ${this.title}, 감독은 ${this._director}, 개봉연도는 ${this._releaseYear} 입니다.`)
	}

	// getter 속성으로 title 을 완성해 보세요.
	get title() {
		return this._title;
	}
	
	// setter 속성으로 newTitle을 매개변수로 받는 title 을 완성해보세요.
	// newTitle 매개변수에 대해 2가지 검사가 선행되어야 합니다.
	// 1. type 이 string 이 아니면 throw new Error(`영화제목의 data type은 string 이어야 합니다. 현재 타입: ${typeof newTitle}`);
	// 2. newTitle 이 빈문자열이면 throw new Error(`한 글자 이상의 문자열을 할당해 줘야 합니다.`);
	set title(newTitle) {
		if(typeof newTitle !== "string") {
			throw new Error(`영화제목의 data type은 string 이어야 합니다. 현재 타입: ${typeof newTitle}`);
		} else if(!newTitle) {
			throw new Error(`한 글자 이상의 문자열을 할당해 줘야 합니다.`);
		}
	this._title = newTitle;
	}

}

const myMovie = new Movie("굿 윌 헌팅", "구스 반 산트", 1997);

myMovie.printMovie();
// 영화 제목은 굿 윌 헌팅, 감독은 구스 반 산트, 개봉연도는 1997 입니다.

console.log(myMovie.title); // 굿 윌 헌팅
myMovie.title = "Good Will Hunting";
console.log(myMovie.title); // Good Will Hunting

​
클로저
JavaScript
복사
// 클로저는 "함수와 함수가 선언된 시점의 렉시컬 환경의 조합"입니다.
// 위 정의가 어렵다면, 실행컨텍스트가 체화되기전까지
// "외부 함수의 변수를 참조하는 내부 함수"로 생각해 주셔도 좋습니다.

// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function outerFunction() {
  const outerVariable = "I am outside!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // I am outside!
