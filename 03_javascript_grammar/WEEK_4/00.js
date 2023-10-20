[JS 문법 종합반] 4주차 : 콜백 함수와 동기/비동기 처리
콜아웃 아이콘
매 주차 강의자료 시작에 PDF파일을 올려두었어요!
PDF 파일
4주차__콜백_함수와_동기비동기_처리.pdf
1925.3KB
🚩
[학습 목표]

자바스크립트의 콜백함수의 개념과 예시에 대해 학습해요.
어떤 항목에서 콜백함수를 전달받은 함수에게 제어권이 이양되는지를 이해하고 그 예시를 테스트해볼 수 있습니다.
비동기적인 코드 작성에서 발생할 수 있는 콜백지옥을 예방하고 비동기제어를 할 수 있는 Promise, async/await 등의 기술을 이해하고 활용하는 능력을 배양합니다.
1. 콜백함수
이번 시간엔 콜백 함수에 대해 배울거에요. 앞 시간에 수 차례 우리는 콜백 함수를 이미 사용해 왔습니다. 가령 예를 들면, setTimeout, 배열에 대한 forEach 등에서요.
JavaScript
복사
// setTimeout
setTimeout(function() {
  console.log("Hello, world!");
}, 1000);

// forEach
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});
​
이처럼 다른 코드의 인자로 넘겨주는 함수인 콜백함수의 여러가지 특징과 바람직하지 않은 상황(콜백 지옥)을 만났을 때 어떻게 대처해야 할지 등에 대한 내용을 배워봅시다. 이러한 과정에서 자연스럽게 동기 vs 비동기의 개념도 학습하게 돼요. Let’s get it!!
(1) 콜백함수란
다른 코드의 인자로 넘겨주는 함수에요! 인자로 넘겨준다는 얘기는 콜백함수를 넘겨받는 코드가 있다는 얘기겠죠. forEach, setTimeout 등이 되겠네요.
콜백 함수를 넘겨받은 위와 같은 코드 forEach, setTimeout 등은 이 콜백 함수를 필요에 따라 적절한 시점에 실행하게 돼요.(제어권이 그들에게 있는거죠)
(코어자바스크립트의 예시) 다음 날 친구와 8시에 만나기로 한 스펀지밥 😂​
(현명하지 않은) 알람을 안 맞춘 스펀지밥..

불안한 마음으로 계-속 깨요
밤새 몇시인지 확인하느라 뒤척여 컨디션이 좋지 않아요
수시로 시간을 구하는 함수를 직접 호출했어요(제어권 : 스펀지밥)
시간을 구하는 함수 : 눈 뜨고 → 일어나고 → 시계 보고 → 아직 안됐네? → 다시 눕고 → 눈 감고 → 잠 들고
(현명한) 알람을 맞춘 스밥

알람시계를 세팅하고 꿀잠을 자요!
6시에 알람소리를 듣고 상쾌하게 일어나 컨디션이 너무 좋아요
시계의 알람을 설정하는 함수(알람시계)를 호출했고, 그 함수(알람시계)가 ‘알아서’ 스펀지밥이 정해놓은 시간이 됐을 때 ‘알람이 울리는 결과’를 반환했어요(제어권 : 함수 즉, 알람시계) → action에 대한 제어권은 함수에게 있었어요 😎​
callback = call(부르다) + back(되돌아오다) = 되돌아와서 호출해줘!
💡
다시 말하면, 제어권을 넘겨줄테니 너가 알고 있는 그 로직으로 처리해줘!
즉, 콜백 함수는 다른 코드(함수 또는 메서드)에게 인자로 넘겨줌으로써 그 제어권도 함께 위임한 함수. 콜백 함수를 위임받은 코드는 자체적으로 내부 로직에 의해 이 콜백 함수를 적절한 시점에 실행 ← 이 적절한 시점 역시 제어권이 있는 위임받은 코드가 알아서 하겠네요 👍​
(2) 제어권
다양한 예를 통해서 제어권에 대해 자세히 살펴보도록 합시다. 어떠한 제어권을 콜백함수를 넘겨받은 코드는 갖게될까요?
호출 시점
💡
콜백 함수의 제어권을 넘겨받은 코드는 콜백 함수 호출 시점에 대한 제어권을 가져요!
위 설명처럼, 아래 예시에서는 콜백 함수의 제어권을 넘겨받은 코드(=setInterval)가 언제 콜백함수를 호출할지에 대한 제어권을 가지게 돼요! 0.3초라는 적절한 시점을 본인의 함수에 적어놓은대로 실행하는 거죠.
JavaScript
복사
var count = 0;

// timer : 콜백 내부에서 사용할 수 있는 '어떤 게 돌고있는지'
// 알려주는 id값
var timer = setInterval(function() {
	console.log(count);
	if(++count > 4) clearInterval(timer);
}, 300);
​
JavaScript
복사
var count = 0;
var cbFunc = function () {
	console.log(count);
	if (++count > 4) clearInterval(timer);
};
var timer = setInterval(cbFunc, 300);

// 실행 결과
// 0 (0.3sec)
// 1 (0.6sec)
// 2 (0.9sec)
// 3 (1.2sec)
// 4 (1.5sec)
​
그 모습을 아래 표 처럼 정리해봤습니다 🐿​
→ 원래 cbFunc()를 수행한다면 그 호출주체와 제어권은 모두 사용자가 되죠.
→ setInterval로 넘겨주게 되면 그 호출주체와 제어권은 모두 setInterval이 돼요.
code
호출 주체
제어권
cbFunc();
사용자
사용자
setInterval(cbFunc, 300);
setInterval
setInterval
인자
map 함수는 각 배열 요소를 변환하여 새로운 배열을 반환합니다. 기존 배열을 변경하지 않고, 새로운 배열을 생성한다는 것을 알고 계시죠? 👍👍​
JavaScript
복사
// map 함수에 의해 새로운 배열을 생성해서 newArr에 담고 있네요!
var newArr = [10, 20, 30].map(function (currentValue, index) {
	console.log(currentValue, index);
	return currentValue + 5;
});
console.log(newArr);

// -- 실행 결과 --
// 10 0
// 20 1
// 30 2
// [ 15, 25, 35 ]
​
자, 그렇다면 콜백함수에서 여러분이 넣으신 currentValue, index 이 변수의 순서를 바꾸면 어떻게 될까요? 자동으로 인식할까요?
JavaScript
복사
// map 함수에 의해 새로운 배열을 생성해서 newArr에 담고 있네요!
var newArr2 = [10, 20, 30].map(function (index, currentValue) {
	console.log(index, currentValue);
	return currentValue + 5;
});
console.log(newArr2);

// -- 실행 결과 --
// 10 0
// 20 1
// 30 2
// [ 5, 6, 7 ]
​
컴퓨터는 사람이 아니기 때문에, index - currentValue의 의미를 사람처럼 이해할 수 없어요. 따라서 의도하지 않은 값이 나와버리죠.
이처럼, map 메서드를 호출해서 원하는 배열을 얻고자 한다면 정의된 규칙대로 작성해야 해요(콜백 내부의 인자도 물론 포함이죠!) 이 모든것은 전적으로 map 메서드. 즉, 콜백 함수를 넘겨받은 코드에게 그 제어권이 있습니다. 인자(의 순서)까지도 제어권이 그에게 있는 것이죠.
제어권이 넘어갈 map 함수의 규칙에 맞게 ‘나는’ 호출해야 합니다!
this
앞전 시간에서 우리는 콜백 함수도 함수이기 때문에 기본적으로는 this가 전역객체를 참조한다 라고 귀가 아프도록 들어왔어요. 하지만, 예외사항 기억 나세요? 🙄​
💡
제어권을 넘겨받을 코드에서 콜백 함수에 별도로 this가 될 대상을 지정한 경우에는 그 대상을 참조한다.
내부적으로는 어떻게 이걸 가능케 하는 것일까요? 별도의 this를 지정하는 방식을 이해하기 위해서. 그리고, 제어권에 대한 이해를 높이기 위해서 map함수를 직접 구현해 볼까요?
핵심은 call, apply에 있어요!
JavaScript
복사
// Array.prototype.map을 직접 구현해봤어요!
Array.prototype.mapaaa = function (callback, thisArg) {
  var mappedArr = [];

  for (var i = 0; i < this.length; i++) {
    // call의 첫 번째 인자는 thisArg가 존재하는 경우는 그 객체, 없으면 전역객체
    // call의 두 번째 인자는 this가 배열일 것(호출의 주체가 배열)이므로,
		// i번째 요소를 넣어서 인자로 전달
    var mappedValue = callback.call(thisArg || global, this[i]);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
};

const a = [1, 2, 3].mapaaa((item) => {
  return item * 2;
});

console.log(a);
​
아하, 그러니까 바로 제어권을 넘겨받을 코드에서 call/apply 메서드의 첫 번째 인자에서 콜백 함수 내부에서 사용될 this를 명시적으로 binding 하기 때문에 this에 다른 값이 담길 수 있는 거군요!
아래 코드는 우리가 3주차에서 보았던 코드에요.
💡
(다시 한번) 제어권을 넘겨받을 코드에서 콜백 함수에 별도로 this가 될 대상을 지정한 경우에는 그 대상을 참조한다.
JavaScript
복사
//이젠 이 코드를 좀 더 잘 이해할 수 있어요!!

// setTimeout은 내부에서 콜백 함수를 호출할 때, call 메서드의 첫 번째 인자에
// 전역객체를 넘겨요
// 따라서 콜백 함수 내부에서의 this가 전역객체를 가리켜요
setTimeout(function() { console.log(this); }, 300); // Window { ... }

// forEach도 마찬가지로, 콜백 뒷 부분에 this를 명시해주지 않으면 전역객체를 넘겨요!
// 만약 명시한다면 해당 객체를 넘기긴 해요!
[1, 2, 3, 4, 5].forEach(function (x) {
	console.log(this); // Window { ... }
});

//addEventListener는 내부에서 콜백 함수를 호출할 때, call 메서드의 첫 번째
//인자에 addEventListener메서드의 this를 그대로 넘겨주도록 정의돼 있어요(상속)
document.body.innerHTML += '<button id="a">클릭</button';
document.body.querySelector('#a').addEventListener('click', function(e) {
	console.log(this, e);
});
​
(3) 콜백 함수는 함수다
콜백 함수로 어떤 객체의 메서드를 전달하더라도, 그 메서드는 메서드가 아닌 함수로 호출해요.
JavaScript
복사
var obj = {
	vals: [1, 2, 3],
	logValues: function(v, i) {
		console.log(this, v, i);
	}
};

//method로써 호출
obj.logValues(1, 2);

//callback => obj를 this로 하는 메서드를 그대로 전달한게 아니에요
//단지, obj.logValues가 가리키는 함수만 전달한거에요(obj 객체와는 연관이 없습니다)
[4, 5, 6].forEach(obj.logValues);
​
(4) 콜백 함수 내부의 this에 다른 값 바인딩하기
🤔 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까요?
🤔 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법
<전통적 방식>
우리가 이전에 강제로 this를 제어하는 방법에서 살짝 다뤘던 방식이에요 👀​
JavaScript
복사
var obj1 = {
	name: 'obj1',
	func: function() {
		var self = this; //이 부분!
		return function () {
			console.log(self.name);
		};
	}
};

// 단순히 함수만 전달한 것이기 때문에, obj1 객체와는 상관이 없어요.
// 메서드가 아닌 함수로서 호출한 것과 동일하죠.
var callback = obj1.func();
setTimeout(callback, 1000);
​
실제로는 this를 사용하는게 아니기도 하고, 번거롭네요.
그렇다면, 콜백 함수 내부에서 아에 this를 사용하지 않는다면 어떨까요?
JavaScript
복사
var obj1 = {
	name: 'obj1',
	func: function () {
		console.log(obj1.name);
	}
};
setTimeout(obj1.func, 1000);
​
첫 번째 예시보다는 훨씬 간결하긴 해요. 하지만 this를 사용하지 않으면서 결과만을 위한 코딩이 되어버렸네요. this를 이용해서 다양한 것을 할 수 있는 장점을 놓치게 되었어요 ㅠㅠ
오히려, 첫 번째 예시를 재활용하는 방향으로 선회해볼까요?
코드가 헷갈릴 수 있으니, VSCode 상에서 직접 function을 대입해보면서 순서를 따라가시기 바래요!
JavaScript
복사
var obj1 = {
	name: 'obj1',
	func: function() {
		var self = this; //이 부분!
		return function () {
			console.log(self.name);
		};
	}
};

// ---------------------------------

// obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
var obj2 = {
	name: 'obj2',
	func: obj1.func
};
var callback2 = obj2.func();
setTimeout(callback2, 1500);

// 역시, obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
var obj3 = { name: 'obj3' };
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 2000);
​
위 방법은 조금 번거롭긴 해도 this를 우회적으로나마 활용하여 원하는 객체를 바라보게 할 수 있었어요!
지금까지 전통적인 방법으로 해결했던 모습을 보여드렸어요. 하지만 이제는 이러한 부분을 아주 쉽게 해결할 수 있는데요. 바로 bind 메서드를 이용하는 방법이에요.
<가장 좋은 방법 → bind메서드의 활용>
JavaScript
복사
var obj1 = {
	name: 'obj1',
	func: function () {
		console.log(this.name);
	}
};
//함수 자체를 obj1에 바인딩
//obj1.func를 실행할 때 무조건 this는 obj1로 고정해줘!
setTimeout(obj1.func.bind(obj1), 1000);

var obj2 = { name: 'obj2' };
//함수 자체를 obj2에 바인딩
//obj1.func를 실행할 때 무조건 this는 obj2로 고정해줘!
setTimeout(obj1.func.bind(obj2), 1500);
​
(5) 콜백 지옥과 비동기 제어
콜백지옥이란
콜백 함수를 익명 함수(아래 이미지로 살짝 보시면…)로 전달하는 과정이 반복되어 코드의 들여쓰기 수준이 헬 수준인 경우를 말해요! 😂😂😂​
주로 이벤트 처리 및 서버 통신과 같은 비동기적 작업을 수행할 때 발생하죠.
뭐가문제일까요? 가독성이 정말 지옥(hell)이구요. 오랜 상태로 이렇게 짜여왔기 때문에, 수정도 어렵습니다.

(출처 : https://preiner.medium.com/callback지옥에-promise-적용하기-d02272ecbabe)
동기 vs 비동기
동기와 비동기의 개념

출처 : https://smallzoodevs-organization.gitbook.io/copy-of-javascript-study/day-05./1.
동기 : synchronous
현재 실행중인 코드가 끝나야 다음 코드를 실행하는 방식을 말해요!
CPU의 계산에 의해 즉시 처리가 가능한 대부분의 코드는 동기적 코드구요.
계산이 복잡해서 CPU가 계산하는 데에 오래 걸리는 코드 역시도 동기적 코드에요 😎​
비동기 : a + synchronous ⇒ async라고들 흔히 부르죠
실행 중인 코드의 완료 여부와 무관하게 즉시 다음 코드로 넘어가는 방식
setTimeout, addEventListner 등
별도의 요청, 실행 대기, 보류 등과 관련된 코드는 모두 비동기적 코드

(출처 : https://velog.io/@mrbartrns/til-16-asynchronous-of-js)
웹의 복잡도가 올라갈 수록 비동기적 코드의 비중이 늘어납니다 🥲​
콜백지옥의 예시와 해결방안
우리가 그래도 조금은 익숙한 setTimeout을 통해 콜백 지옥의 간단한 예시를 살펴볼게요!
JavaScript
복사
// setTimeout 함수의 동작원리
setTimeout(function(){
	// 기본적으로 1000ms이 지나야 여기 로직이 실행이 된답니다 :)
	console.log('hi');
}, 1000);
​
아래 예시코드는 다음과 같은 문제가 있는데요, 한번 볼까요?
들여쓰기 수준 📉​
값 전달 순서 : 아래 → 위
JavaScript
복사
setTimeout(
  function (name) {
    var coffeeList = name;
    console.log(coffeeList);

    setTimeout(
      function (name) {
        coffeeList += ", " + name;
        console.log(coffeeList);

        setTimeout(
          function (name) {
            coffeeList += ", " + name;
            console.log(coffeeList);

            setTimeout(
              function (name) {
                coffeeList += ", " + name;
                console.log(coffeeList);
              },
              500,
              "카페라떼"
            );
          },
          500,
          "카페모카"
        );
      },
      500,
      "아메리카노"
    );
  },
  500,
  "에스프레소"
);
​
첫 번째 해결방법은 [기명함수로 변환]하는 방법이에요.
물고 물리면서 결국 끝까지 수행하죠!
JavaScript
복사
var coffeeList = '';

var addEspresso = function (name) {
	coffeeList = name;
	console.log(coffeeList);
	setTimeout(addAmericano, 500, '아메리카노');
};

var addAmericano = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
	setTimeout(addMocha, 500, '카페모카');
};

var addMocha = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
	setTimeout(addLatte, 500, '카페라떼');
};

var addLatte = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
};

setTimeout(addEspresso, 500, '에스프레소');
​
가독성 좋죠? 위에서 아래로 코드 흐름이 이어지니까요. 근데, 한 번만 쓰고 말텐데, 이렇게 이름을 다 붙여야 하는건 좀 그렇지 않을까요?
아쉽지만 위 코드는 근본적인 해결책은 아닌 것 같아요. 이런 경우 때문에 자바스크립트에서는 비동기적인 작업을 동기적으로(동기적인 것 처럼 보이도록) 처리해주는 장치를 계속해서 마련해주고 있어요. Promise, Generator(ES6), async/await(ES7)같은 것들이죠.
비동기 작업의 동기적 표현이 필요합니다.
<비동기 작업의 동기적 표현(1) - Promise(1)>
💡
Promise에 대해

사실, Promise를 지금 완벽히 이해하기는 정말 어려운 일이에요. 비동기 작업의 동기적 표현이라는 주제를 이해할 수 있을 만큼의 설명을 여러분께 드릴께요 🙂​
Promise는 비동기 처리에 대해, 처리가 끝나면 알려달라는 ‘약속’이에요.
new 연산자로 호출한 Promise의 인자로 넘어가는 콜백은 바로 실행돼요.
그 내부의 resolve(또는 reject) 함수를 호출하는 구문이 있을 경우 resolve(또는 reject) 둘 중 하나가 실행되기 전까지는 다음(then), 오류(catch)로 넘어가지 않아요.
따라서, 비동기작업이 완료될 때 비로소 resolve, reject 호출해요.
우리는 이 방법으로 비동기 -> 동기적 표현을 구현할 수 있습니다 🙂​
JavaScript
복사
new Promise(function (resolve) {
	setTimeout(function () {
		var name = '에스프레소';
		console.log(name);
		resolve(name);
	}, 500);
}).then(function (prevName) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			var name = prevName + ', 아메리카노';
			console.log(name);
			resolve(name);
		}, 500);
	});
}).then(function (prevName) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			var name = prevName + ', 카페모카';
			console.log(name);
			resolve(name);
		}, 500);
	});
}).then(function (prevName) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			var name = prevName + ', 카페라떼';
			console.log(name);
			resolve(name);
		}, 500);
	});
});
​
<비동기 작업의 동기적 표현(2) - Promise(2)>
직전 예제의 반복부분을 함수화 한 코드에요. trigger를 걸어주기 위해 클로저 개념이 나왔지만, 여기서는 skip 하고, 다음 chapter에서 다루게 될거에요!
JavaScript
복사
var addCoffee = function (name) {
	return function (prevName) {
		return new Promise(function (resolve) {
			setTimeout(function () {
				var newName = prevName ? (prevName + ', ' + name) : name;
				console.log(newName);
				resolve(newName);
			}, 500);
		});
	};
};

addCoffee('에스프레소')()
	.then(addCoffee('아메리카노'))
	.then(addCoffee('카페모카'))
	.then(addCoffee('카페라떼'));
​
<비동기 작업의 동기적 표현(3) - Generator>
💡
이터러블 객체(Iterable)


제너레이터 문법이 등장해요. 생소하시죠?

*가 붙은 함수가 제너레이터 함수입니다. 제너레이터 함수는 실행하면, Iterator 객체가 반환(next()를 가지고 있음)돼요.
iterator 은 객체는 next 메서드로 순환 할 수 있는 객체구요. next 메서드 호출 시, Generator 함수 내부에서 가장 먼저 등장하는 yield에서 stop 이후 다시 next 메서드를 호출하면 멈췄던 부분 -> 그 다음의 yield까지 실행 후 stop
즉, 비동기 작업이 완료되는 시점마다 next 메서드를 호출해주면 Generator 함수 내부소스가 위 -> 아래 순차적으로 진행돼요 😊​

그럼 설명은 이쯤에서 하고, 실제 예제를 들여다볼까요?
JavaScript
복사
var addCoffee = function (prevName, name) {
	setTimeout(function () {
		coffeeMaker.next(prevName ? prevName + ', ' + name : name);
	}, 500);
};
var coffeeGenerator = function* () {
	var espresso = yield addCoffee('', '에스프레소');
	console.log(espresso);
	var americano = yield addCoffee(espresso, '아메리카노');
	console.log(americano);
	var mocha = yield addCoffee(americano, '카페모카');
	console.log(mocha);
	var latte = yield addCoffee(mocha, '카페라떼');
	console.log(latte);
};
var coffeeMaker = coffeeGenerator();
coffeeMaker.next();
​
<비동기 작업의 동기적 표현(4) - Promise + Async/await>
ES2017에서 새롭게 추가된 async/await 문을 이용했어요. 비동기 작업을 수행코자 하는 함수 앞에 async 함수 내부에서 실질적인 비동기 작업이 필요한 위치마다 await를 붙여주면 된답니다.
Promise ~ then과 동일한 효과를 얻을 수 있어요
JavaScript
복사
var addCoffee = function (name) {
	return new Promise(function (resolve) {
		setTimeout(function(){
			resolve(name);
		}, 500);
	});
};
var coffeeMaker = async function () {
	var coffeeList = '';
	var _addCoffee = async function (name) {
		coffeeList += (coffeeList ? ', ' : '') + await addCoffee(name);
	};
	await _addCoffee('에스프레소');
	console.log(coffeeList);
	await _addCoffee('아메리카노');
	console.log(coffeeList);
	await _addCoffee('카페모카');
	console.log(coffeeList);
	await _addCoffee('카페라떼');
	console.log(coffeeList);
};
coffeeMaker();
​
2. 숙제
문제 소개
이번 주차의 문제는 아래의 코드를 async/await 로 리팩토링 하기 입니다.
JavaScript
복사
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}


function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}

function narutoIsNotOtaku() {
  let title = prompt("애니메이션 제목을 입력하세요.", "naruto");

    return loadJson(`https://animechan.vercel.app/api/random/anime?title=${title}`)
    .then(res => {
            alert(`${res.character}: ${res.quote}.`);
      return res;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("일치하는 애니메이션이 없습니다. 일반인이시면 naruto, onepiece 정도나 입력해주세요!");
        return narutoIsNotOtaku();
      } else {
        throw err;
      }
    });
}

narutoIsNotOtaku();
​
코드 이해하기
먼저 콘솔에 위의 코드를 입력하고 엔터를 입력해주세요
해당 코드는 애니메이션 제목을 입력하면, 해당 애니메이션의 캐릭터와 명대사를 출력해주는 코드입니다.
나루토를 입력하면..

다음과 같이 결과가 나옵니다.

우치하 이타치 : 자기희생… 이름없는 닌자가 그림자 안에서 평화를 지키는 것. 그것이 진정한 닌자다..
먼저 fetch() 함수는 지금은 browser에서 네트워크 통신을 할 수 있도록 해두는 함수라고만 이해하시면 좋을 것 같습니다. “네트워크 통신”이므로 결과로 프로미스를 반환하는 대표적인 함수 입니다.
그걸 감싼 loadJson() 함수는 아주 간단하게, url을 입력받아 fetch 함수를 호출해주고, 그 통신이 성공했을 때(statusCode 200), 결과를 반환해주는 함수입니다. 
만약 통신이 실패하는 경우 위에 작성한(지금은 이해 못하셔도 상관없습니다) 에러 객체를 반환해줍니다.
그리고 아래의 코드에서, loadJson() 함수의 결과를 받아, 결과값을 화면에 띄워주는 일을 하고 있습니다.
JavaScript
복사
function narutoIsNotOtaku() {
  let title = prompt("애니메이션 제목을 입력하세요.", "naruto");

    return loadJson(`https://animechan.vercel.app/api/random/anime?title=${title}`)
    .then(res => {
            alert(`${res.character}: ${res.quote}.`);
      return res;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("일치하는 애니메이션이 없습니다. 일반인이시면 naruto, onepiece 정도나 입력해주세요!");
        return narutoIsNotOtaku();
      } else {
        throw err;
      }
    });
}
​
이제 위의 코드를 async/await를 이용하여 리팩토링 후 제출해주세요!
class HttpError extends Error 쪽은 수정하지 않아도 됩니다.
꼭 결과를 확인하고 제출해주세요
정답 코드 / 해설 영상
JavaScript
복사
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}


async function loadJson(url) {
	// promise then 부분
  let response = await fetch(url);
  if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}

async function narutoIsNotOtaku() {

  let title;
  while(true) {
    title = prompt("애니메이션 제목을 입력하세요.", "naruto");
		// promise 체이닝 catch 부분 -> try catch문 사용해서 동일 로직 시행 가능
    try {
      res = await loadJson(`https://animechan.vercel.app/api/random/anime?title=${title}`);
      break;
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("일치하는 애니메이션이 없습니다. 일반인이시면 naruto, onepiece정도나 입력해주세요.");
      } else {
        throw err;
      }
    }
  }


  alert(`${res.character}: ${res.quote}.`);
  return res;
}

narutoIsNotOtaku();
​
