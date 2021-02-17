const { sum, nativeNull } = require('./intro');

describe('Sum function: ', () => {
    test('should return sum of two values', () => {
        expect(sum(1, 4)).toBe(5);
        expect(sum(1, 41)).toBe(42);
        expect(sum(1, 2)).toEqual(3);
    });

    test('should return sum of 2 values by correctly comparing to other', () => {
        expect(sum(1, 4)).toBeGreaterThan(4);
        expect(sum(1, 5)).toBeGreaterThanOrEqual(5);
        expect(sum(1, 2)).toBeLessThan(10);
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });
});

describe('Native null function: ', () => {
   test('should return null value', () => {
         expect(nativeNull()).toBe(null)
         expect(nativeNull()).toBeNull()
         expect(nativeNull()).toBeDefined()
         expect(nativeNull()).not.toBeUndefined()
   })   
})

describe('Strings tests: ', () => {
      test('should not contain \'stop\' - word', () => {
            expect('team').not.toMatch(/I/)
      })
})