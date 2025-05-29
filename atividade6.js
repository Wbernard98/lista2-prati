// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.
const prompt = require('prompt-sync')();

function memoize(fn) {
    const cache = new Map()
    return function(...args) {
        const key = JSON.stringify(args)
        if (cache.has(key)) {
            return cache.get(key)
        }
        const result = fn.apply(this, args)
        cache.set(key, result)
        return result
    
    }
}
function fibonacci(n) {
    if(n<2) return n
    return fibonacci(n-1) + fibonacci(n-2)
}
    const fFib = memoize(function fibonacci(n){
    if(n<2) return n
    return fFib(n-1) + fFib(n-2)

})
console.log(fFib(1000))
