const date = new Date();
console.log(date);
const [monthNum, caldendarDateNum, year] = new Date().toLocaleDateString("en-US").split("/");
console.log(monthNum, caldendarDateNum, year);
