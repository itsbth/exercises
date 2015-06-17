module.exports = function (fn, time, leading) {
    var to;
    return function () {
        if (to)
            clearTimeout(to);
        var _this = this,
            _arguments = [].slice.call(arguments);
        to = setTimeout(function () {
            fn.apply(_this, _arguments);
        }, time);
    };
};
