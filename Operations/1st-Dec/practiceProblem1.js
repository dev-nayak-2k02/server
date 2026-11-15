// function promiseCaller(args){
//     return new Promise((resolve, reject)=>{
//         if(args){
//             resolve('i am response');
//         } else {
//             reject('i am rejection');
//         }
//     })
// }

// promiseCaller(true).then((msg)=>console.log(msg))

// function register(cb){
//     setTimeout(() => {
//         console.log('Welcome to register');
//         cb();
//     }, 2000);
// }

// function welcome(cb){
//     setTimeout(() => {
//         console.log('Welcome to Welcome');
//         cb();
//     }, 2000);
// }

// function login(cb){
//     setTimeout(() => {
//         console.log('Welcome to Login');
//         cb();
//     }, 2000);
// }

// function fetchData(cb){
//     setTimeout(() => {
//         console.log('Welcome to fetchData');
//         cb();
//     }, 2000);
// }

// function displayData(){
//     setTimeout(() => {
//         console.log('Welcome to displayData');
//     }, 2000);
// }

// register(()=>{
//     welcome(()=>{
//         login(()=>{
//             fetchData(()=>{
//                 displayData();
//             })
//         })
//     })
// })

// let h1 = document.createElement("h1");
// h1.textContent = 'Hello ji kaise ho';
// document.body.prepend(h1)

// let h1 = document.querySelector('h1');
// h1.style.color = 'red';
// h1.style.fontFamily = 'sans-serif';
// h1.classList.toggle("colorPicker");

// let body = document.querySelector('body')
// let division = document.querySelector(".hulu");
// let h1 = document.createElement('h1');
// h1.innerText = 'kaise ho doston!';
// division.append(h1);

// let img = document.createElement("img");
// document.body.prepend(img);
// img.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1790028943695-e0b49e9825a6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
// );
// img.removeAttribute("src")



// let li = document.querySelectorAll("li")
// let result = li.forEach((val)=>{
//   console.log(val.innerText)
// })




// let h1 = document.getElementsByClassName('first');
// console.log(h1);




// let  para = document.querySelector("p");
// para.innerHTML = '<b>Updated</b> by js';




// let getSrc = document.querySelector("img");
// console.log(getSrc.getAttribute("src"));
// console.log(getSrc.alt)
// getSrc.setAttribute("src","https://images.unsplash.com/photo-1793131673140-6141e362d35f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D")
// let para = document.querySelector("p");
// para.setAttribute("title","hey hey")
// document.querySelector('button').removeAttribute("disabled")


// let ul = document.querySelector("ul");
// let li = document.createElement("li")
// li.textContent = "hello";
// ul.append(li);

// let newImg = document.createElement("img");
// newImg.setAttribute("src", "https://images.unsplash.com/photo-1792601172692-12cb98afede5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D");
// document.querySelector(".hulu").prepend(newImg);







// let para = document.querySelector("p");
// para.innerHTML = '<b>hey there!, How you doin</b>';
// document.querySelector('button').removeAttribute("disabled");
// document.querySelector('button').style.color = 'red';
// document.querySelector('button').style.backgroundColor = 'yellow';

// let newButton = document.createElement("button");
// newButton.textContent = 'new-to-click';
// document.querySelector("ul").prepend(newButton)

// let anchor = document.createElement('a');
// anchor.setAttribute('href', 'https://google.com');
// anchor.textContent = 'Google';
// newButton.setAttribute("class", "oneBtn")
// document.querySelector('.oneBtn').prepend(anchor);





// let li = document.querySelectorAll("ul li:nth-child(2n)");
// li.forEach((element)=>element.classList.add('highLight'));

// let btn = document.querySelector('button');
// let newBtn = btn.getAttribute('disabled');


// let p = document.querySelectorAll('p');
// p.forEach(elem => elem.style.fontSize = "38px")


// let p = document.querySelector('p');
// p.addEventListener('click', ()=>{
//     p.style.color = 'green';
// });


// let inp = document.querySelector('#inp_one')
// inp.addEventListener('input', (val)=>{
//     if(val.data !== null) console.log(val.data);
// });




// let opt = document.querySelector('select');
// opt.addEventListener("change", (dets)=>{
//     document.querySelector("h1").textContent = `${dets.target.value} is selected`;
// })





// let h1 = document.querySelector('h1');
// window.addEventListener("keydown", (ele)=>{
//     if(ele.key !== " "){
//         h1.textContent = ele.key;
//     }
//     else {
//         h1.textContent = 'space'
//     }
// })





// let sel = document.querySelector('select');
// sel.addEventListener('change', (dets)=>{
//     document.querySelector('h1').textContent = `${dets.target.value} is selected`;
// });


// let h1 = document.querySelector('h1');
// window.addEventListener('keydown', dets=>{
//     if(dets.code !== 'Space'){
//         h1.textContent = dets.key;
//     } else {
//         h1.textContent = 'space'
//     }
    
// })





// let btn = document.querySelector('.btn');
// let inp = document.querySelector('input')
// btn.addEventListener('click', (dets)=>{
//     inp.click();
// })
// inp.addEventListener('change', dets=>{
//     btn.textContent = dets.target?.files[0]?.name;
// })



let frm = document.querySelector('form');
frm.addEventListener('submit', (dets)=>{
    dets.preventDefault();

    let card = document.createElement('div');
    card.classList.add('card')

    let profile = document.createElement('div');
    profile.classList.add('profile');

    let img = document.createElement('img');
    img.setAttribute('src', "https://images.unsplash.com/photo-1750636031853-eab730ee91a9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D")

    let h3 = document.createElement('h3');
    h3.textContent = 'ghoda ghudayia';
    let h5 = document.createElement('h5');
    h5.textContent = 'creative creator';
    let p = document.createElement('p')
    p.textContent = 'this is ghoda, such a nice and cute sa janwaar and in chess its such a behen-ka-lodA'

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p)

    document.querySelector('.main').appendChild(card)
})
