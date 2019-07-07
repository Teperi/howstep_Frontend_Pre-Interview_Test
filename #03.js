// 3. 아래 코드를 class를 이용한 문법으로 변환해보세요. 둘을 비교해보고 어떤 것이 더 나은지 의견을 내보세요.

// 의미 설명

// - Queue 함수
//   - queue 에 contents 데이터 초기 생성
//   - pop 메소드 생성: queue 내의 맨 앞 value 를 내보내고 value 를 queue 에서 삭제

// - PeekableQueue 함수
//   - Queue.apply 를 통해 queue 내에 contents 삽입
//   - inherits 를 통해 Queue 함수 내 pop 프로토타입 상속
//   - peek 메소드 생성: queue 내 맨 앞 요소 return

// Queue 클래스 생성
class Queue {
  // constructor 를 통해 초기 생성
  constructor(contents = []) {
    this.queue = contents;
  }
  // pop 메소드 생성
  pop() {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  }
}

// PeekableQueue 클래스 생성
class PeekableQueue extends Queue {
  // peek 메소드 생성
  peek() {
    return this.queue[0];
  }
}

// 비교에 따른 의견
// class 문법을 사용하면 apply와 inherits 유틸을 사용하지 않고 바로 상속 가능함
// class 내에 어떤 함수가 있는지 한눈에 파악하기 편함

// 기존 코드
const inherits = require('util').inherits;

function Queue(contents = []) {
  this.queue = [...contents];
}
Queue.prototype.pop = function() {
  const value = this.queue[0];
  this.queue.splice(0, 1);
  return value;
};

function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this.queue[0];
};
