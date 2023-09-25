function problem6(forms) {
  // 중복된 글자 쌍을 저장할 Set과 해당 글자 쌍에 대한 이메일을 저장할 Map을 초기화
  const set = new Set();
  const map = new Map();

  // 주어진 폼(form) 순회
  for (let i = 0; i < forms.length; i++) {
    // 닉네임 추출
    let nickname = forms[i][1];

    if (nickname.length < 2) {
      // 닉네임이 2글자 미만인 경우, 반복문을 종료
      break;
    }

    // 닉네임에서 글자 쌍을 추출
    for (let j = 0; j < nickname.length - 1; j++) {
      // 연속된 2글자를 추출
      let char = nickname.substring(j, j + 2);

      // Map에 글자 쌍이 이미 존재하는 경우
      if (map.has(char)) {
        // 기존에 저장된 이메일을 가져오기
        let email = map.get(char);

        // 가져온 이메일이 현재의 이메일과 다르다면, 중복된 글자 쌍을 발견한 것임
        if (email !== forms[i][0]) {
          // 중복된 글자 쌍에 대한 이메일을 Set에 추가
          set.add(email);
          // 현재 이메일도 Set에 추가
          set.add(forms[i][0]);
        }
      }

      // 현재 글자 쌍과 이메일을 Map에 저장
      map.set(char, forms[i][0]);
    }
  }
  // 중복된 이메일을 정렬하여 반환
  return [...set].sort();
}

module.exports = problem6;