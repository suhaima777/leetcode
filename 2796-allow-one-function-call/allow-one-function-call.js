/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called =false;
    return function(...args){
        if(called === true){
        return undefined;
    }
    called = true;
    return fn(...args)
    }
};

