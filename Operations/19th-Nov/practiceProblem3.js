function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register");
      resolve();
    }, 2000);
  });
}
function welcome() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("welcome");
      resolve();
    }, 2000);
  });
}
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login");
      resolve();
    }, 2000);
  });
}

register().then(welcome).then(login)