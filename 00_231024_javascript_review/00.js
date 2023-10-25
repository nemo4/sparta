자바스크립트 복습 가이드
✅
안녕하세요 여러분!
어려운 자바스크립트 그래도 포기하지 않고 끝까지 들으시느라 그리고 개인과제까지 잘 마무리하느라 고생 많으셨습니다.
앞으로 추가로 몇일동안은 팀과제와 더불어 자바스크립트 복습을 진행하셔야 할텐데요, 막막하신 분들을 위해 아래 같이 가이드를 드립니다.
[1] 자바스크립트 함수 이해도 평가 항목
검증문제 3개 중 2개를 풀 수 있는 분은 skip하시면 됩니다.
문제1
JavaScript
복사
// [요구사항]
// 아래 함수 multiply는 두 인자를 받아 곱한 값을 반환합니다. 해당 함수를 완성하십시오.

// [코드]
function multiply(a, b) { // 여기에 코드를 작성하세요. }

// [테스트]
// multiply(2, 3)은 6을 반환해야 합니다.
​
문제2
JavaScript
복사
// [요구사항]
// 주어진 숫자 배열의 모든 요소를 더하는 함수 sumArray를 작성하세요.

// [코드]
function sumArray(arr) {
    // 여기에 코드를 작성하세요.
}

// [테스트]
// sumArray([1, 2, 3, 4, 5])은 15를 반환해야 합니다.
​
문제3
JavaScript
복사
// [요구사항]
// 문자열 배열을 받아 모든 문자열을 대문자로 변환하고, 새로운 배열로 반환하는 함수 toUpperCaseArray를 작성하세요.

// [코드]
function toUpperCaseArray(strings) { // 여기에 코드를 작성하세요. }

// [테스트]
toUpperCaseArray(['apple', 'banana'])는 ['APPLE', 'BANANA']를 반환해야 합니다.
​
3개 중 2개 이상 풀지 못하였다면 당신은? 🤔​
✓ 진단명 : 함수 울렁증
✓ 진단내용: 함수의 정의, 매개변수의 이해, 반환 값의 개념에 어려움을 겪음. 기본적인 함수 호출 및 함수의 작동 방식에 혼란을 느낌.
✓ 솔루션 : 자바스크립트 1주차 1-6(연산자) ~ 1-8(스코프 및 화살표함수) 복습
[2] 자바스크립트 제어문 이해도 평가 항목
검증문제 3개 중 2개를 풀 수 있는 분은 skip하시면 됩니다.
문제1
JavaScript
복사
// [요구사항]
// 다음 배열에서 5보다 큰 숫자만 출력하세요. 그러나 8을 만났을 때 반복문을 종료하세요.

// [코드]
let numbers = [2, 4, 6, 8, 10, 12];
// 여기에 코드를 작성하세요.

// [테스트]
// 출력: 6
​
문제2
JavaScript
복사
// [요구사항]
// 1부터 100까지의 숫자 중에서 홀수만 출력하세요. 그러나 3의 배수인 홀수는 출력하지 마세요.

// [코드]
// 여기에 코드를 작성하세요.

// [테스트]
// 출력: 1, 5, 7, 11, 13, 17, ...
​
문제3
JavaScript
복사
// [요구사항]
// 다음 문자열 배열에서 'stop' 문자를 만났을 때 반복을 중지하고, 'skip' 문자를 만났을 때 해당 반복을 건너뛰고 나머지 문자열들을 출력하세요.

// [코드]
let words = ['apple', 'banana', 'skip', 'cherry', 'stop', 'date', 'elephant'];
// 여기에 코드를 작성하세요.

// [테스트]
// 출력: apple, banana, cherry
​
3개 중 2개 이상 풀지 못하였다면 당신은? 🤔​
✓ 진단명 : 제어문 무기력증
✓ 진단내용: for문, if문, continue, break의 기본적인 사용 방법 및 흐름 제어에 대한 이해가 부족함.
✓ 솔루션 : 자바스크립트 2주차 1-9(조건문) ~ 1-15(break continue) 복습
[3] 자바스크립트 ES6+ 기능 이해도 평가 항목
검증문제 5개 중 3개를 풀 수 있는 분은 skip하시면 됩니다.
문제1
JavaScript
복사
// [요구사항]
// 아래의 함수를 화살표 함수로 변환하세요.

// [코드]
function add(a, b) {
    return a + b;
}
// 여기에 코드를 작성하세요.
​
문제2
JavaScript
복사
// [요구사항]
// 아래 변수 value의 값이 10보다 크면 "big"을, 그렇지 않으면 "small"을 변수 result에 저장하는 삼항연산자를 작성하세요.

// [코드]
let value = 8;
let result;
// 여기에 코드를 작성하세요.

// [테스트]
// result의 값이 "small"인지 확인하세요.
​
문제3
JavaScript
복사
// [요구사항]
// 아래의 객체에서 name과 age 속성을 구조분해할당을 사용하여 각각의 변수에 저장하세요.

// [코드]
let person = { name: "Alice", age: 25, job: "Engineer" };
// 여기에 코드를 작성하세요.

// [테스트]
// name 변수의 값이 "Alice"이고, age 변수의 값이 25인지 확인하세요.
​
문제4
JavaScript
복사
// [요구사항]
// 아래의 변수들을 사용하여 단축 속성명을 이용한 객체를 생성하세요.

// [코드]
let a = "hello";
let b = "world";
// 여기에 코드를 작성하세요.
const obj = { ... ?????? }

// [테스트]
// 생성된 객체의 a 속성의 값이 "hello"이고, b 속성의 값이 "world"인지 확인하세요.
​
문제5
JavaScript
복사
// [요구사항]
// 아래의 배열을 전개구문을 사용하여 새로운 배열에 복사하세요.

// [코드]
let fruits = ["apple", "banana", "cherry"];
let newFruits;
// 여기에 코드를 작성하세요.

// [테스트]
// newFruits 배열이 ["apple", "banana", "cherry"]인지 확인하고, 원본 fruits 배열과는 다른 참조를 가지고 있는지 확인하세요.
​
5개 중 3개 이상 풀지 못하였다면 당신은? 🤔​
✓ 진단명 : ES6 문법 우울증
✓ 진단내용: ES6+의 주요 기능인 화살표 함수, 삼항연산자, 구조분해할당, 단축 속성명, 전개구문의 사용법 및 적용에 대한 이해가 부족함.
✓ 솔루션 : 자바스크립트 2주차 2-1(ES6 문법 소개 및 실습1) ~ 2-2(ES6 문법 소개 및 실습2) 복습
[4] 자바스크립트 비동기 처리 이해도 평가 항목
검증문제 4개 중 3개를 풀 수 있는 분은 skip하시면 됩니다.
문제1
JavaScript
복사
// [요구사항]
// 아래의 함수를 async/await를 사용하여 비동기로 작동하게 만드세요.

// [코드]
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 1000);
    });
}

// 여기에 코드를 작성하세요.

// [테스트]
// fetchData 함수를 호출하여 "Data fetched!" 문자열이 정상적으로 반환되는지 확인하세요.


​
문제2
JavaScript
복사
// [요구사항]
// 아래의 함수에서 then, catch, finally를 사용하여 비동기 처리를 하고,
// 성공적으로 데이터를 가져오면 "Data: [데이터]", 에러가 발생하면 "Error: [에러 메시지]",
// 그리고 작업이 끝났을 때 "Process completed"를 출력하세요.

// [코드]
function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Network Error");
        }, 1000);
    });
}

// 여기에 코드를 작성하세요.

// [테스트]
// fetchDataWithError 함수를 호출하여 적절한 메시지들이 출력되는지 확인하세요.


​
문제3
JavaScript
복사
// [요구사항]
// 아래의 async/await 함수를 then ~ catch로 변환하세요.

// [코드]
async function getData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    return data;
}

// 여기에 코드를 작성하세요.

// [테스트]
// 변환된 함수를 호출하여 동일하게 데이터를 반환하는지 확인하세요.


​
문제4
JavaScript
복사
// [요구사항]
// setTimeout을 사용하여 2초 후에 "Hello after 2 seconds"를 출력하는 함수를 작성하세요.

// [코드]
// 여기에 코드를 작성하세요.

// [테스트]
// 해당 함수를 호출하여 2초 뒤에 정해진 메시지가 출력되는지 확인하세요.
​
4개 중 3개 이상 풀지 못하였다면 당신은? 🤔​
✓ 진단명 : 비동기 처리 혼란증
✓ 진단내용: JavaScript의 비동기 처리 방식, 특히 async/await, Promise와 관련된 메서드(then, catch, finally) 및 setTimeout의 사용법과 원리에 대한 이해가 부족함.
✓ 솔루션 : 자바스크립트 4주차 4-8(콜백함수_promise) ~ 4-10(콜백함수_제너레이터 및 async await) 복습 ⇒ generator 제외
[5] 자바스크립트 DOM API 이해도 평가 항목
검증문제 4개 중 3개를 풀 수 있는 분은 skip하시면 됩니다.
문제1
JavaScript
복사
// [요구사항]
// 아래의 HTML 요소에서 id가 "myText"인 요소의 텍스트를 "Hello, DOM!"로 변경하세요.

// [HTML]
/*
<div id="container">
    <p id="myText">Replace this text.</p>
</div>
*/

// [코드]
// 여기에 코드를 작성하세요.

// [테스트]
// 웹 페이지에서 "myText" 요소의 텍스트가 "Hello, DOM!"으로 바뀌었는지 확인하세요.
​
문제2
JavaScript
복사
// [요구사항]
// 버튼을 클릭하면 "Clicked!"라는 텍스트를 alert으로 띄우는 이벤트 리스너를 추가하세요.

// [HTML]
/*
<button id="clickButton">Click me!</button>
*/

// [코드]
// 여기에 코드를 작성하세요.

// [테스트]
// 웹 페이지에서 "clickButton" 버튼을 클릭했을 때 "Clicked!"라는 메시지가 alert으로 나타나는지 확인하세요.
​
문제3
JavaScript
복사
// [요구사항]
// 아래의 HTML 요소에서 class가 "highlight"인 모든 요소의 텍스트색을 빨간색으로 변경하세요.

// [HTML]
/*
<div class="content">
    <p class="highlight">Change my color!</p>
    <p>Don't change my color.</p>
    <p class="highlight">Change my color too!</p>
</div>
*/

// [코드]
// 여기에 코드를 작성하세요.

// [테스트]
// 웹 페이지에서 class "highlight"를 가진 모든 요소의 텍스트색이 빨간색인지 확인하세요.
​
문제4
JavaScript
복사
// [요구사항]
// 아래의 HTML 요소 중 "myList"에 새로운 항목 "Mango"를 추가하세요.

// [HTML]
/*
<ul id="myList">
    <li>Apple</li>
    <li>Banana</li>
</ul>
*/

// [코드]
// 여기에 코드를 작성하세요.

// [테스트]
// 웹 페이지에서 "myList"에 "Mango" 항목이 추가되었는지 확인하세요.
​
4개 중 3개 이상 풀지 못하였다면 당신은? 🤔​
✓ 진단명 : DOM API 무감각증
✓ 진단내용: 웹 페이지의 구조와 내용을 동적으로 변경하기 위한 JavaScript의 DOM (Document Object Model) API에 대한 기본적인 이해와 활용 능력이 부족함.
✓ 솔루션 : 자바스크립트 5주차 5-2(선택자) ~ 5-5(이벤트 리스너) 복습.
[부록] 나는 다 섬렵하였다면,,
✅
3주차의 아래 내용을 추가로 학습하시기 바래요. 라디오 듣듯, 산책하면서 & 밥먹으면서 계속해서 들어보세요. 좀 더 깊은 자바스크립트 세계로 들어가보세요 🙂​
데이터타입 종류 및 메모리
실행컨텍스트
this binding