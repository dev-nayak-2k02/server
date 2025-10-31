const now = new Date();
const day = now.getDay().toLocaleString();;
const date = now.getDate()
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

console.log(`Todays Date: ${date}`);
console.log(`Todays Day: ${day}`);
console.log(`Time: ${hours}:${min}:${sec}`);