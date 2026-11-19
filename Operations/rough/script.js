let progress = document.querySelector('.progress');
let perc = document.querySelector('.percentage');
let h2 = document.querySelector('h2');
let count = 0;
let res = setInterval(() => {
  if(count <= 99){
    count++;
    progress.style.width = `${count}%`;
    perc.textContent = `${count}%`;
  } else {
    h2.textContent = 'Downloaded';
    clearInterval(res);
  }
}, 50);