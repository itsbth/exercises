module.exports = function (fn) {
    const memo = new Map();
    return function () {
        const args = [].slice.call(arguments),
              key = JSON.stringify(args);
        return memo.has(key) ? memo.get(key) : memo.set(key, fn.apply(this, args)).get(key);
    };
};
