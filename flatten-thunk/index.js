module.exports = function (fn) {
    return function (cb) {
        fn(function thunk(err, data) {
            if (err)
                return cb(err, null);
            if (typeof data === 'function')
                return data(thunk);
            return cb(err, data);
        });
    };
};
