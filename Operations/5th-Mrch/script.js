// let arr = [1,2,3,4,5,6]
// let newArr = arr.map(a=>{
//     return a*2;
// })
// console.log(newArr)

// let arr = [1,2,3,4,5,6]
// let newArr = arr.filter(a=>{
//     return (a%2==0);
// })
// console.log(newArr);

// function mul(num1=1, num2=2){
//     console.log(num1, num2);
//     return num1*num2;
// }

// console.log(mul())

// function getInfo(a, ...b){
//     console.log(a,b);
// }
// getInfo(1,2,3,4,5,6,7,8,9,10);

// const personsArray = [
//     {
//         name:'dev',
//         surname:'nayak',
//         operation: 'web-dev'
//     }, {
//         name:'shubham',
//         surname:'nayak',
//         operation: 'data-Analysis'
//     }, {
//         name:'durgaPrasad',
//         surname:'nayak',
//         operation: 'data-Analysis'
//     }, {
//         name:'devdutt',
//         surname:'nayak',
//         operation: 'web-dev'
//     }
// ]

// let getData = personsArray.findIndex((val, index)=>{
//     return val.name === 'dev';
// })
// console.log(getData);

let getListOfProductsElement = document.querySelector(".list-of-products");
function renderProducts(getProducts) {
  getListOfProductsElement.innerHTML = getProducts
    .map((a) => 
      `<p>${a.description}</p>`
    )
    .join(" ");
}
async function fetchListOfProducts() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });
    const result = await apiResponse.json();
    console.log(result);
    if (result?.products?.length > 0) renderProducts(result?.products);
  } catch (error) {
    console.log(error);
  }
}
fetchListOfProducts();
