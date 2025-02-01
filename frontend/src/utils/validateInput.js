export function validateEmail(email) {
  // 간단한 이메일 정규식 예시
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
