// in-place quicksort

const assert = require('assert');

module.exports = function sort (arr) {
    'use strict';
    const partition = function partition (a, l, r) {
        if (r <= l)
            return l;
        // use middle (other options: first, last, median(first, middle, last), etc)
        const pivotPos = ~~((r - l) / 2);
        const pivot = a[pivotPos];

        // swap pivot to end
        a[pivotPos] = a[r];
        a[r] = pivot;

        let i = l, j = r - 1;

        while (i < j) {
            // find left > pivot
            while (i < j && a[i] <= pivot)
                i ++;
            // find right <= pivot
            while (i < j && a[j] > pivot)
                j --;
            // swap
            if (i < j) {
                const tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
        }

        // ?
        if (a[i] <= pivot)
            i ++;

        // move pivot
        a[r] = a[i];
        a[i] = pivot;
        console.log("partition(a, " + l + ", " + r + ") = " + a);
        return i;
    };
    const sort = function sort(a, l, r) {
        console.log("sort(a, %d, %d)", l, r);
        if (r <= l)
            return;
        // partition
        const pivot = partition(a, l, r);
        assert(pivot >= l, "pivot >= l");
        assert(pivot <= r, "pivot <= r");
        // sort low part
        sort(a, l, pivot - 1);
        // sort high part
        sort(a, pivot + 1, r);
    };
    sort(arr, 0, arr.length - 1);
    return arr;
};
