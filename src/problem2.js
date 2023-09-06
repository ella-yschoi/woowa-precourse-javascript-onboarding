// 풀이 1 ------------------------------------------------
function problem2(cryptogram) {
  let result = [];

  // 주어진 문자열을 순회
  for (let i = 0; i < cryptogram.length; i++) {
    // 결과 배열이 비어있거나 현재 문자가 마지막으로 추가된 문자와 다를 경우에만 추가
    if (result.length === 0 || result[result.length - 1] !== cryptogram[i]) {
      // 현재 문자를 결과 배열에 추가
      result.push(cryptogram[i]);
    } else {
      // 중복된 문자는 결과에서 제외 (마지막으로 추가된 문자를 제거)
      result.pop();
    }
  }

  // 결과 배열을 문자열로 결합하여 반환
  return result.join('');
}

// 풀이 2 ------------------------------------------------
function problem2(cryptogram) {
  // 빈 스택 생성
  let stack = [];
  
  // 문자열의 각 문자를 순회
  for (let char of cryptogram) {
    // 스택이 비어있거나 현재 문자가 스택의 맨 위와 다르면 스택에 추가
    if (stack.length === 0 || char !== stack[stack.length - 1]) {
      stack.push(char);
    } else {
      // 중복된 문자는 스택에서 제외
      stack.pop();
    }
  }
  
  // 스택의 내용을 문자열로 결합하여 반환
  return stack.join('');
}

module.exports = problem2;
