function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject('error in network connection')
      console.log("I am from register");
      resolve();
    }, 1000);
  });
}

function welcome() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am from welcome");
      resolve();
    }, 1000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am from login");
      resolve();
    }, 1000);
  });
}

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am from fetchData");
      resolve();
    }, 1000);
  });
}

// register().then(welcome).then(login).then(fetchData).catch(error=>console.log("error :",error));

async function authentication(){
  await register();
  await welcome();
}

authentication();