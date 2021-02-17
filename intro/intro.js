const expect = (value) => ({
    toBe: (expectaionValue) => {
        if (value === expectaionValue) {
            console.log('Success');
        } else {
            console.log(`Value is ${value}, but expected ${expectaionValue}`);
        }
    },
});

const sum = (a, b) => a + b;

const nativeNull = () => null;

// console.log(sum(41, 1));
expect(sum(41, 1)).toBe(43);

module.exports = {sum , nativeNull}