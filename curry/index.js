module.exports = function (fn) {
    return (function curried(fn, args) {
        if (args.length === fn.length)
            return fn.apply(null, args);
        return function () {
            return curried(fn, args.concat([].slice.call(arguments)));
        };
    })(fn, []);
};
