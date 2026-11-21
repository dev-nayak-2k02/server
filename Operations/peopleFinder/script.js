const users = [
  {
    name: "amisha rathore",
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    bio: "lost in my own little world 🌙 | stay curious",
  },
  {
    name: "kiara mehta",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
    bio: "main character energy 🎬 | coffee first ☕",
  },
  {
    name: "aarav sharma",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    bio: "chasing sunsets 🌅 | collecting memories",
  },
  {
    name: "riya kapoor",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
    bio: "soft heart, wild dreams 🦋 | just vibing",
  },
  {
    name: "vivaan malhotra",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    bio: "less perfection, more authenticity 🖤",
  },
  {
    name: "ananya sen",
    pic: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400",
    bio: "creating my own sunshine ☀️ | art & life",
  },
  {
    name: "kabir khanna",
    pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400",
    bio: "midnight thoughts 🌌 | endless possibilities",
  },
  {
    name: "sara fernandes",
    pic: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=400",
    bio: "flowers, books & little things 🌷",
  },
  {
    name: "reyansh verma",
    pic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    bio: "building dreams, one day at a time 🚀",
  },
];

const container = document.querySelector(".cards");
const searchInput = document.querySelector(".inp");

// Function to display users
function showUsers(userArray) {
  container.innerHTML = "";

  userArray.forEach((user) => {
    // Create card
    const card = document.createElement("div");
    card.classList.add("card");

    // Create image
    const img = document.createElement("img");
    img.src = user.pic;
    img.alt = user.name;
    img.classList.add("bg-img");

    // Create blurred layer
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    // Create content
    const content = document.createElement("div");
    content.classList.add("content");

    // Create heading
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    // Create paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = user.bio;

    // Append elements
    content.append(heading, paragraph);
    card.append(img, blurredLayer, content);

    // Add card to container
    container.appendChild(card);
  });
}

// Display all users initially
showUsers(users);

// Search functionality
searchInput.addEventListener("input", () => {
  let newUserArray = users.filter((user) => {
    return user.name.startsWith(searchInput.value);
  });
  showUsers(newUserArray);
});
