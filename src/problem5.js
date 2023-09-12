// 풀이 1 ------------------------------------------------
function problem5(money) {
  const currencies = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  // 결과를 넣을 새로운 배열 선언
  const result = [];

  // currencies 배열에서 currency를 연산하기 위한 for문
  for (const currency of currencies) {
    // (1) money를 currency로 나누었을 때 몫의 개수를 카운트
    const count = Math.floor(money / currency);
    // (2) 나머지 금액을 다시 money 변수에 저장해 다시 for문 내의 currency 업데이트
    money %= currency;
    // 결과 배열에 count 넣기
    result.push(count);
  }

  return result;
}

module.exports = problem5;


// 풀이 2 ------------------------------------------------
function problem5(money) {
  const currencies = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  // 결과를 넣을 새로운 배열 안에서 map()로 계산
  const result = currencies.map((currency) => {
    // (1) money를 currency로 나누었을 때 몫의 개수를 카운트
    const count = Math.floor(money / currency);
    // (2) 나머지 금액을 다시 money 변수에 저장해 다시 map 내의 currency 업데이트
    money %= currency;
    // 계산된 갯수를 반환
    return count;
  });

  return result;
}

module.exports = problem5;