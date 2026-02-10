var createCounter = function(n) {
    let ctr = n
    return function() {
        console.log(ctr++)
    };
};
const counter = createCounter(-2)
counter();