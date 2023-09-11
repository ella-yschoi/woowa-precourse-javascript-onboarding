// 풀이 1 ------------------------------------------------
function problem4(word) {
  // 엄마와 청개구리의 알파벳 배열을 정의
  const mom = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const frog = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';

  let result = '';

  // 입력된 문자열을 한 글자씩 반복하면서 처리
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    
    // 대소문자 여부를 판별
    const isUpperCase = char === char.toUpperCase();

    // 알파벳인 경우에만 처리
    if (/[A-Za-z]/.test(char)) {
      // 대문자인 경우 해당 문자를 mom 배열에서 찾아 인덱스를 구함
      // 아니라면 대문자로 변환 후 인덱스를 구함
      const index = mom.indexOf(isUpperCase ? char : char.toUpperCase());

      // 대문자와 소문자를 구분하여 결과 문자열에 추가
      if (isUpperCase) {
        result += frog[index];
      } else {
        result += frog[index].toLowerCase();
      }
    } else {
      // 알파벳이 아닌 문자는 그대로 결과 문자열에 추가
      result += char;
    }
  }

  return result;
}
module.exports = problem4;


// 풀이 2 ------------------------------------------------
function problem4(word) {
  // 엄마와 청개구리의 배열을 정의
  const mom = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const frog = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  
  let result = '';

  // 문자열 word를 순회하면서 변환 작업을 수행
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    // 만약 문자가 알파벳이라면 변환을 수행
    if (/[A-Za-z]/.test(char)) {
      const isUpperCase = char === char.toUpperCase(); // 대문자 여부를 확인
      const index = isUpperCase ? mom.indexOf(char) : mom.indexOf(char.toUpperCase()); // 해당 문자의 인덱스를 찾음
      const translatedChar = isUpperCase ? frog[index] : frog[index].toLowerCase(); // 변환된 문자를 얻음
      result += translatedChar; // 결과 문자열에 추가
    } else {
      // 알파벳이 아닌 문자는 그대로 결과 문자열에 추가
      result += char;
    }
  }

  return result;
}

module.exports = problem4;


// 문제의 포인트 --------------------------------------------
// 1. 대소문자 구분해서 분기
// 2. 조건에 따라 결과 문자열에 추가