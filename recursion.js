const countDownFromNumToZero = (num) => {
 let baseNum = 0;
 if (num > baseNum){
   console.log(num);
   return countDownFromNumToZero(num - 50);
 } else return baseNum;
}
console.log(countDownFromNumToZero(1000));