// 1. 아래 코드의 의미를 설명하고 ES6의 functional programming을 활용해서 변경하세요.

// 의미 설명
// - 각 수입에 따른 부가세와 전체 가격을 계산

let incomes = [1000, 2000, 3000, 4000];

// 부가세 계산: map 으로 변경
let vats = incomes.map(ele => {
  return ele / 11;
});

// 전체 가격 계산: reduce 로 변경
let price = incomes.reduce((pre, next) => {
  return pre + next;
});
