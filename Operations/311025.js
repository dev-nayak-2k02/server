const now = new Date();
const date = now.getDate();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

console.log(`Todays Date: ${date}`);
console.log(`Time: ${hours}:${min}:${sec}`);