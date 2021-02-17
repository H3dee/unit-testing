const Lodash = require('./sync')

describe('Lodash: compact', () => {
      const _ = new Lodash()

      test('should be defined', () => {
            expect(_.compact).toBeDefined()
            expect(_.compact).not.toBeUndefined()
      })

      test('should remove falsy values', () => {
            const array = new Array(42, 0, false, 'Hello', '')
            const cleanedArr = [42, 'Hello']
            
            expect(_.compact(array)).toEqual(cleanedArr)
      })

      
      test('should not contain falsy values', () => {
            const array = new Array(42, 0, false, 'Hello', '')
            
            expect(_.compact(array)).not.toContain('')
            expect(_.compact(array)).not.toContain(0)
            expect(_.compact(array)).not.toContain(false)
      })
})

