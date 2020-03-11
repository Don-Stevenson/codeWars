function solution(input, markers) {
  let inputArr = input.split("");
  let forDeletion = markers;
  return inputArr.filter(item => !forDeletion.includes(item)).join("");
}
