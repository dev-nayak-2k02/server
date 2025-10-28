function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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

register().then();
