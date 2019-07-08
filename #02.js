// 2. 아래 코드의 의미를 파악해서 설명하고 잠재적으로 발생할 수 있는 문제를 파악해서 설명하고 그 문제가 발생하지 않도록 코드를 수정하세요.

// 의미 설명
// - convertParam 함수를 통해 object 의 property 를 변경
//   1. undefined value 를 가진 property 삭제
//   2. moment로 생성된 value 를 가진 property 의 value 를 ISOString 으로 변경

const Moment = require('moment');

const convertParam = params => {
  for (const key in params) {
    // for ... in 의 경우 object 프로토타입에 어떤 key:value 가 추가될 경우 그것도 key 로 가지게 되는 문제 발생함
    // 따라서 hasOwnProperty 로 params 가 진짜 가지고있는 property 일 때만 변경이 일어나도록 수정
    if (params.hasOwnProperty(key)) {
      // Strict Equal Operator(===) 을 사용하여 형식과 값이 모두 같은지 확인
      if (params[key] === undefined) {
        delete params[key];
      }

      // moment 의 경우 instanceof 로 잡아낼 수 없음
      // isMoment 를 사용해서 확인해야함
      if (Moment.isMoment(params[key])) {
        params[key] = params[key].toISOString();
      }
    }
  }
};

// const 의 경우 값이 변경될 수 없으므로 let 으로 변경
// 위에서 Moment 로 불러왔으므로 b 의 값도 대문자 M 으로 변경
let p = { a: 'test', b: Moment('2019-05-07'), c: undefined };
convertParam(p);
