// let str = 'Apple';
// console.log(str.slice(2,5))

// console.log(myFunc());
// function myFunc(){
//     return 'works'
// }

// var ans = (function testing() {
//     let val = 10;
//     return {
//         set: function (num){
//             val = num;
//         },
//         get: function (){
//             return val
//         }
//     }
// })();
// console.log(ans.get())
// ans.set(12)

// let obj = new Object();
// obj = {
//     num: 13
// }
// console.log(obj)

// for(let i=1; i<=4; i++){
//     let star = '';
//     for(let j=1; j<=i; j++){
//         star += '*';
//     }
//     console.log(star);
// }

// let ans = Math.floor(Math.random()*6)+1
// console.log(ans)

// let arr = [1,2,3,4];
// let ans = arr.reduce((acc, inival) => {
//     return acc+inival;
// })
// console.log(ans);

// let arr = [10, 20, 30, 40]
// let ans = arr.map((item) => {
//     return item;
// })
// console.log(ans)

const productElement = document.querySelector(".header");
function newProductListFront(getProducts){
    productElement.innerHTML = getProducts.map((a)=>`${a.title}`).join(" ")
}
async function getProductLists() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });
    const res = await apiResponse.json();
    if(res?.products?.length > 0 ) newProductListFront(res?.products)
  } catch (error) {
    console.log(error);
  }
}
getProductLists()
