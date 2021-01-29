const _ = {
    clamp(num, lowerBound, upperBound) {
        return Math.min(Math.max(num, lowerBound), upperBound);
    },
    inRange(val, start, end) {
        if (!end) {
            end = start;
            start = 0;
        }

        if (start > end) {
            let tmp = start;
            start = end;
            end = tmp;
        }

        return (start <= val && val < end);
    },
    words(str) {
        // Call str.split() using whitespace as separator
        // Return that array
        return str.split(' ');
    },
    pad(str, len) {
        let retStr = str;
        if (len > str.length) {
            const padding = (len - str.length) / 2;
            const startPad = ' '.repeat(Math.floor(padding));
            const endPad = ' '.repeat(Math.ceil(padding));
            retStr = startPad + str + endPad;
        }
        
        return retStr;
    },
    has(obj, key) {
        return obj[key] !== undefined;
    },
    invert(obj) {
        const retObj = {};
        for (let key in obj) {
            retObj[obj[key]] = key;
        }

        return retObj;
    },
    findKey(obj, pred) {
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                if (pred(element)) 
                    return key;
            }
        }

        return undefined;
    },
    drop(array, n=1) {
        return array.length >= n ? array.slice(n, array.length) : [];
    },
    dropWhile(array, predicate) {
        const falsyIndex = array.findIndex((element, index, array) => {
            return !predicate(element, index, array);
        });
        return this.drop(array, falsyIndex);
    },
    chunk(array, n=1) {
        const chunks = [];
        for (let i = 0; i < array.length; i+=n) {
            chunks.push(array.slice(i, i + n));
        }

        return chunks;
    }
};

_.chunk([1, 2, 3, 4], 2);

// Do not write or modify code below this line.
module.exports = _;