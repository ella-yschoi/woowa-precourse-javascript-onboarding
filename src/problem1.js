// 풀이 1 ------------------------------------------------

function problem1(pobi, crong) {
  // 예외사항 처리
  if (pobi.length !== 2 || crong.length !== 2 || pobi[1] !== pobi[0] + 1 || crong[1] !== crong[0] + 1) {
    return -1;
  }

  // 최대값을 저장할 변수 초기화
  let pobiMax = 0;
  let crongMax = 0;

  // pobi의 각 페이지에 대한 최대값 계산
  for (let i = 0; i < pobi.length; i++) {
    const page = pobi[i];
    // 페이지 번호의 각 자리 숫자를 더한 값을 계산
    const pageDigits = String(page).split('');
    const pageSum = pageDigits.reduce((acc, digits) => acc + parseInt(digits), 0);
    // 페이지 번호의 각 자리 숫자를 곱한 값을 계산
    const pageMultiply = pageDigits.reduce((acc, digits) => acc * parseInt(digits), 1);
    // 현재 페이지의 최대값을 pobiMax와 비교하여 가장 큰 값을 pobiMax에 저장
    pobiMax = Math.max(pobiMax, pageSum, pageMultiply);
  }

  // crong의 각 페이지에 대한 최대값 계산
  for (let j = 0; j < crong.length; j++) {
    const page = crong[j];
    // 페이지 번호의 각 자리 숫자를 더한 값을 계산
    const pageDigits = String(page).split('');
    const pageSum = pageDigits.reduce((acc, digits) => acc + parseInt(digits), 0);
    // 페이지 번호의 각 자리 숫자를 곱한 값을 계산
    const pageMultiply = pageDigits.reduce((acc, digits) => acc * parseInt(digits), 1);
    // 현재 페이지의 최대값을 crongMax와 비교하여 가장 큰 값을 crongMax에 저장
    crongMax = Math.max(crongMax, pageSum, pageMultiply);
  }

  // pobiMax와 crongMax를 비교하여 결과를 반환
  if (pobiMax > crongMax) {
    return 1;
  } else if (pobiMax < crongMax) {
    return 2;
  } else {
    return 0;
  }
}

module.exports = problem1;



// 풀이 2 ------------------------------------------------

function problem1(pobi, crong) {
  // 예외사항 처리
  if (!isValid(pobi) || !isValid(crong)) {
    return -1; // 예외사항이 존재하면 -1을 반환하여 처리 종료
  }

  const pobiMax = getMaxScore(pobi); // pobi 배열에 대한 최대 점수 계산
  const crongMax = getMaxScore(crong); // crong 배열에 대한 최대 점수 계산

  if (pobiMax > crongMax) {
    return 1; // pobi가 이길 경우 1 반환
  } else if (pobiMax < crongMax) {
    return 2; // crong이 이길 경우 2 반환
  } else {
    return 0; // 무승부인 경우 0 반환
  }
}

function isValid(pages) {
  return (
    pages.length === 2 && // 배열의 길이가 2여야 함
    pages[0] % 2 === 1 && // 첫 번째 페이지는 홀수여야 함
    pages[1] % 2 === 0 && // 두 번째 페이지는 짝수여야 함
    pages[1] - pages[0] === 1 // 페이지 번호가 연속되어야 함
  );
}

function getMaxScore(pages) {
  const sum = pages.reduce((acc, page) => {
    const pageDigits = String(page).split(''); // 페이지 번호의 각 자릿수 배열로 변환
    // 각 자릿수를 더한 값을 계산하여 누적
    const pageSum = pageDigits.reduce((sum, digits) => sum + parseInt(digits), 0);
    return acc + pageSum; // 더한 값을 누적
  }, 0);

  const multiply = pages.reduce((acc, page) => {
    const pageDigits = String(page).split(''); // 페이지 번호의 각 자릿수 배열로 변환
    // 각 자릿수를 곱한 값을 계산하여 누적
    const pageMultiply = pageDigits.reduce((multiply, digits) => multiply * parseInt(digits), 1);
    return acc * pageMultiply; // 곱한 값을 누적
  }, 1);

  return Math.max(sum, multiply); // 더한 값과 곱한 값 중 최대값 반환
}

module.exports = problem1;
