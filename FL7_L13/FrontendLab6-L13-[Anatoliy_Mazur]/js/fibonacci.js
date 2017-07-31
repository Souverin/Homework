var cache = {1:1, 2:1};
function fibonacci(n) {
    if(!cache[n]) 
       cache[n] = fibonacci(n - 1) + fibonacci(n - 2);

    return cache[n]
}
module.exports = fibonacci;