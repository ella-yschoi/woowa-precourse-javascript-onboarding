// 풀이 1 ------------------------------------------------
function problem3(number) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    // 현재 숫자를 문자열로 변환하여 저장
    const str = i.toString();

    // 문자열의 각 자릿수를 순회하면서 '3', '6', '9'가 있는 경우 카운트 증가
    for (const digit of str) {
      if (digit === '3' || digit === '6' || digit === '9') {
        count++;
      }
    }
  }

  return count;
}

module.exports = problem3;


// 풀이 2 ------------------------------------------------
function problem3(number) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    // 현재 숫자를 문자열로 변환하여 저장
    const str = i.toString();
    // 문자열을 문자 단위로 분할하고, '3', '6', '9'가 있는 문자를 필터링하여 카운트에 더함
    count += str.split('')
    .filter(digit => digit === '3' || digit === '6' || digit === '9').length;
  }

  return count; // 최종적으로 카운트된 손뼉 칠 횟수 반환
}

module.exports = problem3;


// 문제의 포인트 --------------------------------------------
// 1. 반복문에서 '< number'가 아닌, '<= number'로 써야 함
// 2. 숫자인 number를 문자열로 변경해 손뼉 카운팅 추가해야 함