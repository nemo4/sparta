[JS 문법 종합반] 5주차 : DOM과 클래스, 클로저
콜아웃 아이콘
매 주차 강의자료 시작에 PDF파일을 올려두었어요!
PDF 파일
5주차__DOM과_클래스_클로저.pdf
3038.8KB
🚩
[학습 목표]

1. DOM의 기본 개념을 익히고, 접근 및 제어하는 방법을 통해 DOM을 이해합니다.
2. Class 문법의 주요 개념(클래스, 인스턴스, getter, setter, 상속, static method 등)을 이해하고 활용할 수 있습니다.
3. 클로저의 주 개념을 통해 활용하는 능력을 배양합니다.
1. DOM
(1) DOM의 기본 개념
javascript가 왜 생겼는데?
브라우저에서 쓰려고 만들어진 JS에요!

출처 : https://roseline.oopy.io/dev/javascript-back-to-the-basic/history-of-javascript
본연의 역할 : 웹 페이지를 동적으로 만들기 위해! 즉, HTML문서를 조작해서 생명력을 불어넣어주기 위해 만들어진 언어에요.
웹 페이지가 뜨는 과정
사용자가 브라우저에 ‘www.naver.com’ 주소를 입력합니다.
💡
사용자 = 브라우저 = 클라이언트, 같은 의미로 생각해주세요 🙂​
클라이언트가 서버에게 ‘요청(request)’를 했네요.
여러분이 크롬을 통해 클라이언트의 역할을 하는 것이랍니다 🚀​
HTML 문서를 서버로부터 수신합니다.
네이버서버는 여러분(=브라우저 =클라이언트)에게 ‘응답(response)’를 줬네요.
그 응답은 HTML 문서(document)랍니다.
브라우저가 HTML 파일을 해석(parsing 파싱)
브라우저에는 기본적으로 렌더링 엔진이 있어요. 어떤 것을 렌더링 한다는 것일까요? 서버가 클라이언트(여러분)에게 준 HTML문서를 렌더링 한다는 것이겠죠.

랜더링 엔진이 HTML문서에 코드 한줄, 한줄 보면서 ‘해석'해요. 그리고 d로 가는거죠
💡
해석은 언제 필요할까요?
어떠한 것을 이해하지 못할 때, 우리는 해석을 해야 합니다. 마찬가지로 서버로부터 받아 온 그 문서를 javascript는 이해할 수 없기 때문에 javascript가 알아들을 수 있는 방법으로 ‘해석’하는 과정이 필요해요.
javascript가 알아들을 수 있는 방식으로 해석한 내용을 토대로 DOM Tree를 구성해요. 다음 이미지 처럼요.(한번 그려볼까요?)

출처 : 짐코딩의 CODING GYM
DOM Tree랑 CSSOM Tree를 묶어서 Render Tree를 구성
렌더 트리(Render Tree)는 HTML, CSS 및 JavaScript 문서를 파싱하여 브라우저에서 실제로 렌더링되는 최종 문서 모델을 나타내는 객체의 계층 구조입니다.

결국은, 브라우저 화면에 그리기 위한 최종 버전을 만들어낸다는 것이죠. 그리고 나서 브라우저에 그림을 그리기 위한 레이아웃 계산 → 페인팅 과정이 시작돼요.

너무 설명이 깊으면 이해가 어려우니 우린 여기까지  😅​
💡
더 알고싶으신 분들은 아래 링크를 통해 브라우저 렌더링 과정을 학습해보세요 😎​
브라우저 렌더링 과정 이해하기.
최근에 백엔드 팀원들과 CS공부를 하면서, 주소창에 google.com 을 입력했을 때 일어나는 일에 대해 공부하였다. 이때 백엔드 팀원이 받아온 HTML 파일은 어떻게 브라우저에 그려지는지 물어보았는데, 명확하게 답을 하지못해서 내가 아직 브라우저 렌더링 과정을 정확하게 이해하지 못하고 있다는 걸 알게 되었다. 그래서 이번 시간에는 브라우저 렌더링 과정에 대해서 공부하고 정리해보려고 한다.

https://tecoble.techcourse.co.kr/post/2021-10-24-browser-rendering/

그래서 DOM이 뭐라고?
Document(HTML 파일)를 Javascript가 알아먹을 수 있는 Object 형태로 Modeling 한 것이에요(2-c과정의 결과물)
브라우저에 기본적으로 내장되어 있는 API 중 하나에요 👍​
💡
API가 뭘까요?
API는 무언가를 주문할 때 메뉴판과 같은 것이라고 생각해볼 수 있습니다. 예를 들어, 카페에서 커피를 주문할 때, 메뉴판을 통해 주문하게 됩니다. 메뉴판은 고객과 카페 사이의 인터페이스 역할을 하며, 고객은 메뉴판에서 주문할 음료나 음식을 선택하고, 카페는 해당 요청을 처리하여 음료나 음식을 제공합니다.
API도 비슷한 개념입니다. 다른 시스템에서 데이터나 서비스를 요청할 때, API는 해당 시스템과 사용자 간의 인터페이스 역할을 합니다. 예를 들어, 날씨 앱에서 사용자가 현재 위치의 날씨를 확인하려면, 앱은 해당 기능을 제공하는 날씨 서비스의 API를 호출하여 날씨 정보를 받아오게 됩니다.
따라서, API는 다른 시스템에서 제공하는 기능을 사용할 수 있도록 도와주는 중간자 역할을 합니다. 브라우저의 경우 역시, 기본적으로 DOM과 관련된 API를 제공함으로써 브라우저의 DOM 객체에 접근할 수 있도록 도와준답니다. 아래에서 여러가지 DOM 관련 API를 다뤄볼 예정이에요!
document를 다음 두 환경에서 입력해볼까요?
chrome browser 개발자 도구
VSCode
런타임(런타임 환경)

출처 : https://beomy.github.io/tech/javascript/javascript-runtime/
DOM이 브라우저에 내장되어있기 때문에 우리는 HTML의 내용을 javascript로
접근할 수 있어요
제어할 수 있어요
모든 DOM의 node들은 ‘속성’과 ‘메서드'를 갖고있어요.
💡
DOM의 node?

DOM에서 Node란 웹 페이지를 구성하는 모든 HTML 태그와 텍스트, 그리고 속성 등을 하나의 블록으로 취급하는 것이라고 생각할 수 있습니다. 이러한 블록들은 서로 계층 구조로 연결되어 있으며, 각 블록은 자식 노드, 부모 노드, 형제 노드와 관계를 가지고 있습니다. 이러한 관계를 이용하여 DOM 트리를 탐색하고 조작할 수 있습니다.
아래 DOM 요소 하나 하나를(네모, 동그라미) 노드라고 할 수 있어요 🥸​


💡
DOM 요소의 속성과 메서드를 구분해볼까요?

DOM의 Node 객체에서 속성과 메서드를 구분하는 가장 쉬운 방법은 Node 객체의 속성은 값을 가지고 있는 반면, 메서드는 동작을 수행한다는 것입니다.
즉, Node 객체의 속성은 해당 객체의 특성을 나타내는 값을 가져오거나 설정하는 데 사용되며, 메서드는 해당 객체가 수행하는 작업을 나타내는 함수입니다.
예를 들어, Node 객체의 nodeName 속성은 해당 노드의 이름을 나타내는 문자열 값을 반환합니다. 반면에 appendChild() 메서드는 해당 노드의 자식 노드를 추가하는 메서드이며, DOM 트리에서 해당 노드의 위치를 변경하는 동작을 수행합니다.
JavaScript
복사
// 아래 코드에서 속성과 메서드를 구분해보세요.
document.getElementById("demo").innerHTML = "Hello World!";
​
참고(함수와 메서드의 차이)

출처 : 네이버 사전
JavaScript
복사
// example1(메서드의 예)
person.getName();

// example2(함수의 예)
testLogging();
​
(2) DOM에 접근 및 제어해보기
항상 돔트리의 최상단 노드는 document
JavaScript
복사
// 무슨 결과가 나올까요?
document.getRootNode();
​
childNodes, parentNode를 이용해 기어다녀보기 :)
DOM은 모두 노드로 이루어져 있기 때문에 부모노드 - 자식노드관계로 이루어져 있습니다. 왔다갔다 해 보는 연습을 통해서 익숙해 질 수 있어요!

출처 : https://www.maeili.com/cms/contents/contentsView.do?idx=4256&categoryCd1=3&categoryCd2=2&categoryCd3=2&reCome=1&gubn=1
document 관련 api
Finding
JavaScript
복사
/** 찾아봅시다 */

// 해당 id명을 가진 요소 하나를 반환합니다.
document.getElementById("id명")

// 해당 선택자를 만족하는 요소 하나를 반환합니다.
document.querySelector("선택자")

// 해당 class명을 가진 요소들을 배열에 담아 인덱스에 맞는 요소를 반환합니다.
document.getElementsByClassName("class명")[인덱스]

// 해당 태그명을 가진 요소들을 배열에 담아 인덱스에 맞는 요소를 반환합니다.
document.getElementsByTagName("태그명")[인덱스]

// 해당 선택자를 만족하는 모든 요소들을 배열에 인덱스에 맞는 요소를 반환합니다.
document.querySelectorAll("선택자명")[인덱스]

// 새로운 노드를 생성합니다.
const div = document.createElement('div');
document.body.append(div);
document.body.append(div);
​
changing
JavaScript
복사
/** property(=속성)을 바로 바꿔버려잇! */

// 이 둘은 차이가 있어요!
element.innerHTML = new html content
element.innerText = new text

// style을 바꿔요.
element.style.property = new style

//method를 통해 클래스를 추가해봐요.
element.setAttribute(attribute, value)

// 어랏? 그럼 이런것도 가능??
element.setAttribute("style", "background-color:red;");

// ....
element.style.backgroundColor = "red";

// input 필드의 변신
​
몇 가지만 더 해볼까요?
JavaScript
복사
// createElements
const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);

// createTextNode(elements는 아니구여, 그냥 글자...)
let textNode = document.createTextNode("Hello World");
document.body.appendChild(textNode);

// write. 조심 또 조심!
document.write("Hello World!");

document.write("<h2>Hello World!</h2><p>Have a nice day!</p>");

// 골로 가는 코드
function myFunction() {
  document.write("Hello World!");
}

// version 01
element.addEventListener("click", myFunction);
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

// version 02
element.addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello World";
});
​
2. Class
🌟
javascript의 클래스 문법은 ES6에서야 도입됐습니다.

자바스크립트 기반이 아닌 다른 언어에서는 대게 클래스 기반의 프로그래밍 개발 기법(생성자, 상속 등..)을 사용합니다. 그 개발자들이 자바스크립트로 넘어와서 자꾸 클래스 ‘처럼’ 개발하려 노력하다보니 JS 사이드에서도 그 니즈를 반영한 것이죠 😅😅​
(기초개념) 클래스와 인스턴스의 일반적 개념
우리가 살고 있는 실제 세계에서도 공장에서 ‘상품’을 다량으로 생산해내기 위해 ‘설계도’를 만듭니다. 그리고 그 설계도를 토대로 각각 특징이 있는 ‘상품’을 찍어내죠.
클래스(Class)는 학교에서 다양한 종류의 책상을 만드는 설계도와 비슷합니다. 이 설계도를 보면 어떤 종류의 책상을 만들 수 있는지, 책상이 가지고 있는 특징(이 특징은 변수-또는 속성과 메서드)은 무엇인지 알 수 있습니다.
인스턴스(Instance)는 이 설계도를 보고 만들어진 실제 책상이라고 생각해볼 수 있습니다. 책상의 모양, 크기, 색상, 재료 등은 모두 설계도에 따라 만들어지며, 이러한 책상들은 모두 다른 인스턴스가 됩니다.
이렇게 클래스는 객체를 만들기 위한 설계도라고 생각할 수 있고, 이 설계도를 바탕으로 만들어진 실제 객체들은 인스턴스라고 할 수 있습니다.
(1) 기본 개념 잡기 - Class란?
위에서 설명드린대로 Class는 객체를 생성하기 위한 일종의 템플릿이라고 생각할 수 있습니다. Class를 생성하기 위해서는 class 키워드를 사용합니다.
JavaScript
복사
class Person {
	// constructor는 이름을 변경할 수 없어요.
  constructor(name, age) {
		// 이름(name)과 나이(age)가 없으면 사람이 아니죠?
		// new라는 키워드를 이용해서 인스턴스를 만들 때, 기본적으로
		// 넣어야 하는 값들을 의미해요! :)
		// 여기서 말하는 this는 만들어질 인스턴스를 의미한다고 생각해주세요!
    this.name = name;
    this.age = age;
  }

	// 다양한 메소드를 아래와 같이 정의할 수 있어요.
	// 여기서 this.name으로 내부 값을 접근해야 함을 잊지 마세요! :)
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// 만든 객체를 토대로 메서드 호출해보기
person1.sayHello(); // 출력: "Hello, my name is Alice and I am 30 years old."
person2.sayHello(); // 출력: "Hello, my name is Bob and I am 25 years old."
​
위 코드에서 Person Class는 name과 age 속성을 가지고 있으며, sayHello 메소드를 정의합니다. new 키워드를 사용하여 Person Class의 인스턴스를 생성하고, sayHello 메소드를 호출합니다.
(2) 기본 개념 잡기 - Constructor란?
Constructor는 Class의 생성자 함수입니다. 생성자 함수는 객체를 생성할 때 호출되며, 객체를 초기화하는 역할을 합니다. constructor 키워드를 사용하여 정의합니다.
JavaScript
복사
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const person = new Person('Alice', 20);
​
위 코드에서 constructor 메소드는 name과 age를 인자로 받아 this.name과 this.age 속성을 초기화합니다.
(2)-1 클래스 연습해보기
Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는 다음 네 개의 값이 필수로 입력돼야 합니다!
modelName
modelYear
type
price
makeNoise() 메서드를 만들어 클락션을 출력해주세요.
이후 자동차를 3개 정도 만들어주세요.
JavaScript
복사
// 새로운 Car class 정의
class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  // 클락션을 울리는 메서드
  makeNoise() {
    console.log(`${this.modelName}: 빵!`);
  }
}

// 자동차 만들기
const car1 = new Car("Sorento", "2023", "e", 5000);
const car2 = new Car("SM5", "1999", "g", 3000);
const car3 = new Car("QM6", "2010", "g", 4500);
car1.makeNoise();
car2.makeNoise();
car3.makeNoise();
​
결과가 잘 나오시나요?

(3) Getter와 Setter
Class에서는 getter와 setter를 사용하여 Class의 속성에 접근할 수 있습니다. getter는 속성 값을 반환하는 메소드이며, setter는 속성 값을 설정하는 메소드입니다. 이를 통해 생성한 인스턴스를 정해진 규격 안에서 자유자제로 변경할 수 있습니다.
JavaScript
복사
// Getters와 Setters
// 객체지향 프로그래밍 언어 -> G, S
// 클래스 --> 객체(인스턴스)
// 프로퍼티(constructor)
// new Class(a, b, c)
class Rectangle {
  constructor(height, width) {
    // underscore : private(은밀하고, 감춰야 할 때)
    this._height = height;
    this._width = width;
  }

  // width를 위한 getter
  get width() {
    return this._width;
  }

  // width를 위한 setter
  set width(value) {
    // 검증 1 : value가 음수이면 오류!
    if (value <= 0) {
      //
      console.log("[오류] 가로길이는 0보다 커야 합니다!");
      return;
    } else if (typeof value !== "number") {
      console.log("[오류] 가로길이로 입력된 값이 숫자타입이 아닙니다!");
      return;
    }
    this._width = value;
  }

  // height를 위한 getter
  get height() {
    return this._height;
  }

  // height를 위한 setter
  set height(value) {
    // 검증 1 : value가 음수이면 오류!
    if (value <= 0) {
      //
      console.log("[오류] 세로길이는 0보다 커야 합니다!");
      return;
    } else if (typeof value !== "number") {
      console.log("[오류] 세로길이로 입력된 값이 숫자타입이 아닙니다!");
      return;
    }
    this._height = value;
  }

  // getArea : 가로 * 세로 => 넓이
  getArea() {
    const a = this._width * this._height;
    console.log(`넓이는 => ${a}입니다.`);
  }
}

// instance 생성
const rect1 = new Rectangle(10, 7);
rect1.getArea();
// const rect2 = new Rectangle(10, 30);
// const rect3 = new Rectangle(15, 20);
​
만약, 아래 이미지와 같은 오류가 발생한다면 this로 접근하는 property에 underscore(_)를 사용하지 않았을 확률이 높습니다!
setters, getters 둘 다에서 무한루프에 빠지게 된 현상이에요.

(3)-1 Getter와 Setter 연습해보기
💡
위에서 배워 본 내용을 우리의 Car class에 적용해봅시다!
modelName, modelYear, price를 가져오는 메서드 getModelName, getModelYear, getPrice를 작성해주세요. 그리고 가격변동이 일어났을 때 사용할 수 있는 메서드인 setPrice도 작성해주세요.
JavaScript
복사
// 클래스 연습해보기!
// [요구사항]
// 1. Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는
//    다음 네 개의 값이 필수로 입력돼야 합니다!
//    (1) modelName
//    (2) modelYear
//    (3) type : 가솔린, 전기차, 디젤
//    (4) price
// 2. makeNoise() 메서드를 만들어 클락션을 출력해주세요.
// 2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 작성!
// 3. 이후 자동차를 3개 정도 만들어주세요(객체 생성)

// [추가 요구사항]
// 1. modelName, modelYear, price, type을 가져오는 메서드
// 2. modelName, modelYear, price, type을 세팅하는 메서드
// 3. 만든 인스턴스를 통해서 마지막에 set 해서 get 하는 로직까지
class Car {
  constructor(modelName, modelYear, type, price) {
    this._modelName = modelName;
    this._modelYear = modelYear;
    this._type = type;
    this._price = price;
  }

  get modelName() {
    return this._modelName;
  }

  // 입력값에 대한 검증까지 가능하다
  set modelName(value) {
    // 유효성 검사
    if (value.length <= 0) {
      console.log("[오류] 모델명이 입력되지 않았습니다. 확인해주세요!");
      return;
    } else if (typeof value !== "string") {
      console.log("[오류] 입력된 모델명이 문자형이 아닙니다!");
      return;
    }

    // 검증이 완료된 경우에만 setting!
    this._modelName = value;
  }

  get modelYear() {
    return this._modelYear;
  }

  set modelYear(value) {
    // 유효성 검사
    if (value.length !== 4) {
      // 연도에 대한 유효성 검증 로직 ---> googling 엄청~~~~많이 나옵니다!!
      console.log("[오류] 입력된 년도가 4자리가 아닙니다.확인해주세요!");
      return;
    } else if (typeof value !== "string") {
      console.log("[오류] 입력된 모델명이 문자형이 아닙니다!");
      return;
    }

    // 검증이 완료된 경우에만 setting!
    this._modelYear = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    if (value.length <= 0) {
      console.log("[오류] 타입이 입력되지 않았습니다. 확인해주세요!");
      return;
    } else if (value !== "g" && value !== "d" && value !== "e") {
      // g(가솔린), d(디젤), e(전기차)가 아닌 경우 오류
      console.log("[오류] 입력된 타입이 잘못되었습니다. 확인해주세요!");
      return;
    }

    // 검증 완료!
    this._type = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (typeof value !== "number") {
      console.log("[오류] 가격으로 입력된 값이 숫자가 아닙니다. 확인해주세요!");
      return;
    } else if (value < "1000000") {
      console.log("[오류] 가격은 100만원보다 작을 수 없습니다. 확인해주세요!");
      return;
    }

    // 검증이 완료된 경우
    this._price = value;
  }

  // 클락션을 울리는 메서드
  makeNoise() {
    console.log(this._modelName + ": 빵!");
  }

  // 해당 자동차가 몇년도 모델인지 출력하는 메서드 작성!
  printModelYear() {
    console.log(
      this._modelName + "은 " + this._modelYear + "년도의 모델입니다."
    );
  }
}

// 자동차 만들기
const car1 = new Car("Sorento", "2023", "e", 5000);
const car2 = new Car("SM5", "1999", "g", 3000);
const car3 = new Car("Palisade", "2010", "d", 4500);
// car1.makeNoise();
// car1.printModelYear();
// car2.makeNoise();
// car2.printModelYear();
// car3.makeNoise();
// car3.printModelYear();

// getter 예시1
console.log(car1.modelName);
// setter 예시1
car1.modelName = 1;
console.log(car1.modelName);
​
(3) 상속(Inheritance)
Class는 상속을 통해 다른 Class의 기능을 물려받을 수 있습니다. 상속을 받는 Class를 subclass 또는 derived class라고 하며, 상속을 하는 Class를 superclass 또는 base class라고 합니다. 클래스 끼리의 상속관계를 잘 이해하기 위해서 다음 예시를 함께 보시죠!
<예시 1>
JavaScript
복사
// 동물 전체에 대한 클래스에요
class Animal {

	// 이름을 필수로 받아야 해요
  constructor(name) {
    this.name = name;
  }

	// 동물의 행동을 정의하는 메소드
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// 동물 클래스를 상속받는 Dog 클래스를 만들어요
class Dog extends Animal {
	// 상속받을 때, speak()를 입맛에 맞게 재정의해요.
  speak() {
    console.log(`${this.name} barks.`);
  }
}

// Dog를 만들 때는 Animal의 상속을 받은 class이기 때문에 이름을 필수로
// 받아야 해요!
let d = new Dog('Mitzie');

// speak는 'makes a noise'가 아니라, 'barks'가 출력되네요.
d.speak(); // "Mitzie barks."
​
위 코드에서 Dog Class는 Animal Class를 상속받았습니다. Dog Class에서 speak 메소드를 오버라이딩하여 Animal Class의 speak 메소드를 덮어씁니다.
(3)-1 상속(Inheritance) 연습해보기
(super를 적용하기 위해 함께합시다 🔥) 전기자동차 클래스를 같이 만들어볼게요. Car 클래스로부터 상속받아 만들어봅시다. 전기차이기 때문에 constructor 상에 type은 필요 없겠네요!
JavaScript
복사
// 새로운 Car class 정의
class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  // 모델명 출력하는 메서드
  makeNoise() {
    console.log(`${this.modelName}: 빵!`);
  }

  // getters
  getModelName() {
    return this.modelName;
  }
  getModelYear() {
    return this.modelYear;
  }
  getPrice() {
    return this.price;
  }

  // 새로운 가격 반영
  setPrice(newPrice) {
    this.price = newPrice;
  }
}

// 자동차 만들기
const car1 = new Car("Sorento", "2023", "e", 5000);
const car2 = new Car("SM5", "1999", "g", 3000);
const car3 = new Car("QM6", "2010", "g", 4500);
car1.makeNoise();
car2.makeNoise();
car3.makeNoise();

console.log(car1.getModelName());
console.log(car1.getModelYear());
console.log(car1.getPrice());

// 가격변동
car1.setPrice(6000);
console.log(car1.getPrice());

// 아래 부분이 상속에 관련된 코드에요!
class ElectronicCar extends Car {
  constructor(modelName, modelYear, price) {
    // Car에 있는 constructor를 통해 자동차를 만들었어요!
    super(modelName, modelYear, "e", price);
  }
}

const eleCar1 = new ElectronicCar("뉴아이오닉5", "2023", 7000);
console.log(eleCar1.getModelName());
​
전기자동차의 특성을 고려해서 충전시간도 추가해볼까요?
JavaScript
복사
// 새로운 Car class 정의
class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  // 모델명 출력하는 메서드
  makeNoise() {
    console.log(`${this.modelName}: 빵!`);
  }

  // getters
  getModelName() {
    return this.modelName;
  }
  getModelYear() {
    return this.modelYear;
  }
  getPrice() {
    return this.price;
  }

  // 새로운 가격 반영
  setPrice(newPrice) {
    this.price = newPrice;
  }
}

// 자동차 만들기
const car1 = new Car("Sorento", "2023", "e", 5000);
const car2 = new Car("SM5", "1999", "g", 3000);
const car3 = new Car("QM6", "2010", "g", 4500);
car1.makeNoise();
car2.makeNoise();
car3.makeNoise();

console.log(car1.getModelName());
console.log(car1.getModelYear());
console.log(car1.getPrice());

// 가격변동
car1.setPrice(6000);
console.log(car1.getPrice());

class ElectronicCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    // Car에 있는 constructor를 통해 자동차를 만들었어요!
    super(modelName, modelYear, "e", price);
    this.chargeTime = chargeTime;
  }

  // 전기자동차의 특수 기능 : 충전
  setChargeTime(time) {
    this.chargeTime = time;
  }

  getChargeTime() {
    return this.chargeTime;
  }
}

const eleCar1 = new ElectronicCar("뉴아이오닉5", "2023", 7000, 60);
console.log(eleCar1.getModelName()); // 추가
console.log(eleCar1.getChargeTime()); // 추가
eleCar1.setChargeTime(10); // 추가
console.log(eleCar1.getChargeTime()); // 추가
​
(4) Static Method
Class에서는 static 키워드를 사용하여 Class 레벨의 메소드를 정의할 수 있습니다. Class 레벨의 메소드는 인스턴스에서 호출할 수 없으며, Class 이름으로 직접 호출할 수 있어요.
static이라는 말에서 알 수 있듯이, 인스턴스를 만들지 않고 사용할 수 있기 때문에 유틸리티 함수, 정적 속성인 경우 인스턴스 간에 복제할 필요가 없는 데이터(똑같은 것을 공유해서 쓸 때)를 만들 때 사용되곤 합니다!!
즉, 인스턴스를 만들 필요가 없을 때 사용한다고 이해하시면 편해요 😎​
JavaScript
복사
class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log(Calculator.add(1, 2)); // 3
console.log(Calculator.subtract(3, 2)); // 1
​
위 코드에서 Calculator Class는 add와 subtract 메소드를 정의합니다. 두 메소드 모두 Class 레벨에서 호출할 수 있으며, 인스턴스에서 호출할 수 없습니다.
3. 클로저
(1) 클로저의 개념(정의)
클로저에 대한 정의
: A closure is the combination of a function and the lexical environment within which that function was declared(클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합니다.) - MDN

함수가 선언된 렉시컬 환경
아래 코드를 보면서, 결국 console.log(x)가 어떤 값을 출력하게 될지 생각해보시길 바래요!
JavaScript
복사
const x = 1;

function outerFunc() {
  const x = 10;
  function innerFunc() {
    console.log(x); // 10
  }

  innerFunc();
}

outerFunc();
​
흐름을 살펴볼까요?
innerFunc() 내부의 console.log(x)에서 참조하고 있는 x 값은
먼저 스코프 내부에서 x 값을 찾습니다.
없는 경우 scope chain에 의해 바로 바깥쪽 scope를 찾습니다.
실행컨텍스트에서 배웠던 outer를 찾는 것임을 잊지 마세요!
outer는 해당 실행컨텍스트의 생성시점의 LexicalEnvironment를 갖고 있습니다.
그래서 10에 먼저 접근하고, console.log(x)는 10이 출력되는 것이죠.
만약 아래와 같다면, innerFunc()에서 출력하는 x값은 어떻게 될까요?
❗
둘 다 1이 나옵니다.
outerFunc와, innerFunc는 서로 다른 scope를 가지고 있습니다. 따라서 변수를 공유할 수 없어요!
JavaScript
복사
const x = 1;

// innerFunc()에서는 outerFunc()의 x에 접근할 수 없죠.
// Lexical Scope를 따르는 프로그래밍 언어이기 때문
function outerFunc() {
  const x = 10;
  innerFunc(); // 1
}

function innerFunc() {
  console.log(x); // 1
}

outerFunc();
​
위 예시처럼 innerFunc 함수를 outerFunc 함수의 내부에서 호출한다 하더라도 outerFunc 함수의 변수에 접근할 수는 없어요!! Lexical Scope가 뭔지 더 살펴보기로 합시다.
렉시컬 스코프
JS엔진은 함수를 어디서 ‘호출했는지’가 아니라 함수를 어디에 ‘정의했는지’에 따라 상위 스코프를 결정하거든요 👀​
JavaScript
복사
const x = 1;

function foo() {
  const x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1
​
다시 말하면, “외부 렉시컬 환경에 대한 참조”에 저장할 참조값, 즉, 스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된 환경(위치)에 의해 결정된다. 이것이 바로 렉시컬 스코프다.
정의된 환경에 대한 정보를 저장하는 곳 : outer
위에서 본 예제처럼 함수가 정의된 환경(위치)과 호출된 환경(위치)은 다를 수 있어요. 따라서 호출되는 환경과는 상관없이 정의된 환경에 대한 정보를 LexicalEnvironment > outer에 기억한답니다.
JavaScript
복사
const x = 1;

function foo() {
  const x = 10;

  // 상위 스코프는 함수 정의 환경(위치)에 따라 결정된다.
  // 함수 호출 위치와 상위 스코프는 아무런 관계가 없다.
  bar();
}

// 여기보세요 여기!
// 함수 bar는 자신의 상위 스코프, 즉 전역 렉시컬 환경을 저장하여
// 기억한다.
function bar() {
  console.log(x);
}

foo();
bar();
​
클로저와 렉시컬 환경(LexicalEnvironment)
외부 함수보다 중접 함수가 더 오래 유지되는 경우, 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 (여전히) 참조할 수 있다. ← 이 개념에서 중첩 함수가 바로 클로저에요
여전히라는 말을 반드시 기억해주세요
JavaScript
복사
const x = 1;

// 1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

const innerFunc = outer();
innerFunc();
​
outer 함수를 호출하면 중첩 함수 inner를 반환(return)해요.
그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스탭에서 팝되어 제거된다(역할을 다 했으니깐)
inner 함수는 런타임에 평가된다.
inner함수가 innerFunc에 전달되었는데, 이는 outer 함수의 렉시컬환경을 (여전히) 참조하고 있다.
즉, outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 제거되지만 outer 함수의 렉시컬 환경까지 소멸하는 것은 아니다
어떻게 가능할까요? (feat. 똑똑한 가비지 컬렉터)
안쓰는 것만 가져가요! outer 함수의 렉시컬 환경은 참조하는 곳이 있으니 놔둘게욥!

(출처 : https://kr.123rf.com/photo_48150163_가비지-컬렉터-테마-이미지-1-eps10-벡터-일러스트-레이-션입니다.html)
클로저와 아닌 것을 구분해봅시다 🐿​
JavaScript
복사
function foo() {
  const x = 1;
  const y = 2;

  // 일반적으로 클로저라고 하지 않아요.
  function bar() {
    const z = 3;

    //상위 스코프의 식별자를 참조하지 않기 때문이죠.
    console.log(z);
  }

  return bar;
}

const bar = foo();
bar();
​
JavaScript
복사
function foo() {
  const x = 1;

  // bar 함수는 클로저였지만 곧바로 소멸한다.
  // 외부로 나가서 따로 호출되는게 아니라, 선언 후 바로
	// 실행 + 소멸
  // 이러한 함수는 일반적으로 클로저라고 하지 않는다.
  function bar() {
    debugger;
    //상위 스코프의 식별자를 참조한다.
    console.log(x);
  }
  bar();
}

foo();
​
JavaScript
복사
function foo() {
  const x = 1;
  const y = 2;

  // 클로저의 예
  // 중첩 함수 bar는 외부 함수보다 더 오래 유지되며
  // 상위 스코프의 식별자를 참조한다.
  function bar() {
    debugger;
    console.log(x);
  }
  return bar;
}

const bar = foo();
bar();
​
(2) 클로저의 활용
클로저의 활용
아… 클로저 어려운데 왜써요 ㅠ
아쉽지만, 클로저는 JS의 강력한 기능으로, 필요하다면 적극 활용해야 해요. 클로저가 유용하게 사용되는 상황을 봅시다
클로저는 주로 ‘상태를 안전하게 변경하고 유지하기 위해 사용’해요. 의도치 않은 상태의 변경을 막기 위해서죠(곧 자세한 설명!)
상태를 안전하게 은닉한다(특정 함수에게만 상태 변경을 허용한다)는 표현을 기억해주세요.
이 표현으로 사실 closure라는 용어의 의미를 좀 더 깊숙히 들여다볼 수 있어요!
예제(카운터)
JavaScript
복사
// 카운트 상태 변경 함수 #1
// 함수가 호출될 때마다 호출된 횟수를 누적하여 출력하는 카운터를 구현해요!

// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
    // 카운트 상태를 1만큼 증가시킨다.
    return ++num;
};

console.log(increase());
// num = 100; // 치명적인 단점이 있어요.
console.log(increase());
console.log(increase());
​
보완해야 할 사항
카운트 상태(num 변수의 값)는 increase 함수가 호출되기 전까지 변경되지 않고 유지돼야 한다.
이를 위해 카운트 상태(num 변수의 값)는 increase 함수만이 변경할 수 있어야 한다.
전역변수인 num이 문제다 -> 지역변수로 바꿔볼까?
JavaScript
복사
// 카운트 상태 변경 함수 #2
const increase = function () {
  // 카운트 상태 변수
  let num = 0;

  // 카운트 상태를 1만큼 증가시킨다.
  return ++num;
};

// 이전 상태값을 유지 못함
console.log(increase()); //1
console.log(increase()); //1
console.log(increase()); //1
​
리뷰
num 변수는 increase 함수의 지역변수로 선언됐기 때문에 의도치 않는 변경은 방지됐음!
즉, num 변수의 상태는 increase 함수만이 변경할 수 있다.
하지만, increase()가 호출될 때마다 num이 초기화 😅​
백번, 천번 호출해도 언제 1인 increase...
의도치 않은 변경은 방지하면서, 이전 상태를 유지해야 함!
클로저를 사용해보자!
JavaScript
복사
// 카운트 상태 변경 함수 #3
const increase = (function () {
  // 카운트 상태 변수
  let num = 0;

  // 클로저
  return function () {
    return ++num;
  };
})();

// 이전 상태값을 유지
console.log(increase()); //1
console.log(increase()); //2
console.log(increase()); //3
​
코드 설명
위 코드가 실행되면 즉시 실행 함수가 호출되고 즉시 실행 함수가 반환한 함수가 increase 변수에 할당된다.
increase 변수에 할당된 함수는 자신이 정의된 위치에 의해 결정된 상위 스코프인 즉시 실행 함수의 렉시컬 환경을 기억하는 클로저다
즉시 실행 함수는 호출된 이후 소멸되지만, 즉시 실행 함수가 반환한 클로저는 increase 변수에 할당되어 호출된다.
이때 즉시 실행 함수가 반환한 클로저는 자신이 정의된 위치에 의해 결정된 상위 스코프인 즉시 실행 함수의 렉시컬 환경을 기억하고 있다.
따라서 즉시 실행 함수가 반환한 클로저는 카운트 상태를 유지하기 위한 자유 변수 num을 언제 어디서 호출하든지 참조하고 변경할 수 있다.
num은 초기화되지 않을 것이며, 외부에서 직접 접근할 수 없는 은닉된 private 변수이므로, 전역 변수를 사용했을 때와 같이 의도되지 않은 변경을 걱정할 필요도 없다.
🌟
결론

클로저는 상태(state)가 의도치 않게 변경되지 않도록 안전하게 은닉(information hiding) 하고 특정 함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기 위해 사용합니다.
너무 잘 했는데요, 기능을 조금만 더 확장시켜볼까요?
값을 감소시키는 기능을 추가해볼께요. counter를 변수로 선언해서 increase와 decrease를 객체로 return하도록 하면 될 것 같아요 😉​
JavaScript
복사
// 카운트 상태 변경 함수 #4
// 클로저 카운트 기능 확장(값 감소 기능 추가)
const counter = (function () {
  //카운트 상태 변수
  let num = 0;

  // 클로저인 메서드(increase, decrease)를 갖는 객체를 반환한다.
  // property는 public -> 은닉되지 않는다.
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return num > 0 ? --num : 0;
    },
  };
})();

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2

console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0
​
캡슐화(encapsulation)와 정보 은닉
캡슐로 만들어서 묶어버리면, 자연스럽게 정보가 새어나가지 않겠죠? 💊​
캡슐화란 무엇일까요?
프로퍼티와 메서드를 하나로 묶는 것을 말해요!
프로퍼티 : 객체의 상태(state)
메서드 : 프로퍼티를 참조하고 조작할 수 있는 동작(behavior)
객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용해요. 가지고 있는 정보가 예민하고 민감해서 정보 은닉(information hiding)이 필요한 경우겠죠!
객체의 상태 변경을 방지함으로써 정보 보호
객체 간의 의존성(결합도 - coupling)을 낮춤
java 등 기타 객체지향 언어에서 사용하는 public, private, protected → 접근을 제한할 수 있는 기능이에요.
자바스크립트는 제공 안해요 : 즉, 별도의 조치를 취하지 않으면 기본적으로 외부 공개가 된다는 의미!
JavaScript
복사
// 생성자 함수
function Person(name, age) {
  this.name = name; //public
  let _age = age; //private

  // 인스턴스 메서드
  // 따라서, Person 객체가 생성될 때 마다 중복 생성됨
  // : 해결방법 -> prototype
  this.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
  };
}

const me = new Person("Choi", 33);
me.sayHi(); // Hi!, My name is Choi. I am 33.
console.log(me.name); // Choi
console.log(me._age); // undefined

const you = new Person("Lee", 30);
you.sayHi(); // Hi! My name is Lee. I am 30.
console.log(you.name); // Lee
console.log(you.age); // undefined
​
자주 발생하는 실수
다음 코드를 살펴보자
JavaScript
복사
var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs[i] = function () { return i; };
}

for (var j = 0; j < funcs.length; j++) {
    console.log(funcs[j]());
}

// for 문의 변수 선언문에서 var 키워드로 선언한 i 변수는 "블록 레벨 스코프"가 아닌
// "함수레벨 스코프"이다.

// expectation
// 0, 1, 2

// result
// 3, 3, 3
​
정상 동작을 하도록, 클로저를 활용해보자!
JavaScript
복사
var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs[i] = (function (id) {
        return function () {
            return id;
        };
    }(i));
}

for (var j = 0; j < funcs.length; j++) {
    console.log(funcs[j]());
}
​
더 쉽게?
JavaScript
복사
var funcs = [];

for (let i = 0; i < 3; i++) {
	funcs[i] = function() { return i; };
}

for (let i = 0; i < funcs.length; i++) {
	console.log(funcs[i]()); // 0 1 2
}
​
4. 숙제_ 숫자 맞추기 게임 만들기
숙제 설명
NumGuessGame_Quiz.zip
5.2KB
압축 파일은 세개의 파일로 되어있습니다.
index.html 파일을 라이브 서버로 실행하면, 결과를 볼 수 있습니다.
여러분의 최종 목표 화면은 다음과 같습니다.
구현을 위한 거의 대부분의 코드는 app.js에 들어있으며, 여러분은 app.js만 수정하시면 됩니다.
📚
app.js 외에 파일은 수정하시지 않아도 됩니다.
정답 코드 / 해설 영상
NumGuessGame.zip
4.6KB
JavaScript
복사
let randomNumber = parseInt(Math.random() * 100 + 30);
const $submitButton = document.querySelector("#submitButton");
const $userInput = document.querySelector("#guessField");
const $guessSlot = document.querySelector(".guesses");
const $remainingCount = document.querySelector(".lastResult");
const $startOverGame = document.querySelector(".resultParas");
const $guessingResult = document.querySelector(".guessingResult");
const $newGameGuide = document.createElement("p");
const $circleArea = document.querySelector(".circleArea");
const $answerCircleArea = document.querySelector(".answerCircleArea");
const $guessCircleArea = document.querySelector(".guessCircleArea");

let numGuesses = 1;
let playGame = true;

if (playGame) {
  makeAnswerCircle(randomNumber, "answer");
  $guessingResult.innerHTML = `<h1>숫자를 입력해 주세요.</h1>`;
  $submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt($userInput.value);
    checkGuess(guess);
  });
}

function checkGuess(guess) {
  if (validate(guess)) {
    if (numGuesses === 10 && guess !== randomNumber) {
      displayGuesses(guess);
      displayMessage(`패배했습니다! 정답은 ${randomNumber} 였습니다.`);
      endGame();
    } else {
      displayGuesses(guess);
      clearCircle();
      compareGuess(guess);
    }
  }
}

function validate(guess) {
  if (isNaN(guess)) {
    alert("숫자를 입력해 주세요");
    return false;
  } else if (guess < 20) {
    alert("20 이상의 정수를 입력해 주세요");
    return false;
  } else if (guess > 120) {
    alert("120 이하의 정수를 입력해 주세요");
    return false;
  }

  return true;
}

function clearCircle() {
  if ($guessCircleArea.childElementCount >= 1) {
    $guessCircleArea.removeChild($guessCircleArea.firstChild);
  }
}

function compareGuess(guess) {
  if (guess === randomNumber) {
    makeGuessCircle(guess, "guess");
    displayMessage(`정답입니다!`);
    endGame();
  } else if (guess < randomNumber) {
    makeGuessCircle(guess, "guess");
    displayMessage(`너무 낮아요! 다시 도전해 주세요!`);
  } else if (guess > randomNumber) {
    makeGuessCircle(guess, "guess");
    displayMessage(`너무 높아요! 다시 도전해 주세요!`);
  }
}

function displayGuesses(guess) {
  $userInput.value = "";
  $guessSlot.innerHTML += `${guess}  `;
  numGuesses++;
  $remainingCount.innerHTML = `${11 - numGuesses}  `;
}

function displayMessage(message) {
  $guessingResult.innerHTML = `<h1>${message}</h1>`;
}

function endGame() {
  $userInput.value = "";
  $userInput.setAttribute("disabled", "");
  $submitButton.setAttribute("disabled", "");
  $newGameGuide.classList.add("button");
  $startOverGame.appendChild($newGameGuide);
  playGame = false;
  newGame();
}

function makeAnswerCircle(guess) {
  const CIRCLE_NAME = "answer";
  showCircle(guess, CIRCLE_NAME, $answerCircleArea).then((div) => {
    div.id = "answerCircle";
    div.append(CIRCLE_NAME);
  });
}

function makeGuessCircle(guess) {
  const CIRCLE_NAME = "guess";
  showCircle(guess, CIRCLE_NAME, $guessCircleArea).then((div) => {
    div.id = "guessCircle";
    div.append(CIRCLE_NAME);
  });
}

function showCircle(size, circleName, area) {
  console.log("====================================");
  console.log("맨 처음 쇼 서클");
  console.log("====================================");
  const cx = size + 20;
  const cy = size + 20;
  const radius = size + 20;

  let div = document.createElement("div");
  area.appendChild(div);

  div.id = `${circleName}`;
  div.className = "circle";
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + "px";
  div.style.top = cy + "px";

  return new Promise((resolve) => {
    setTimeout(() => {
      div.style.width = radius * 2 + "px";
      div.style.height = radius * 2 + "px";

      div.addEventListener("transitionend", function handler() {
        div.removeEventListener("transitionend", handler);
        resolve(div);
      });
    }, 10);
  });
}
​
