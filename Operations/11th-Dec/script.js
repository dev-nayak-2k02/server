let frm = document.querySelector("form");
let sub = document.querySelector(".submition");
let mn = document.querySelector('.main')
let cardHolder = document.querySelector('.card-holder')
let inputs = document.querySelectorAll('input')
sub.addEventListener("click", (elem) => {
  elem.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let image = document.createElement("img");
  image.setAttribute(
    "src",
    inputs[1].value
  );
  image.classList.add("imgStyle");

  let h3 = document.createElement('h3');
  h3.textContent = inputs[0].value;
  h3.classList.add('cardH3');

  let p = document.createElement('p');
  p.textContent = inputs[2].value;
  p.classList.add('cardPara');

  let h5 = document.createElement('h5');
  h5.textContent = inputs[3].value;
  h5.classList.add('cardH5');

  let h5Two = document.createElement('h5');
  h5Two.textContent = inputs[4].value;
  h5Two.classList.add('cardH5');

  let h4 = document.createElement('h4');
  h4.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, natus illo sed in dolor fugit iste totam quidem voluptatibus. Provident ratione sunt asperiores ut debitis, commodi ipsum alias unde haru'

  profile.appendChild(image)
  card.appendChild(profile);
  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(h5);
  card.appendChild(h5Two);
  card.appendChild(h4);
  cardHolder.appendChild(card)

  frm.reset();

});
