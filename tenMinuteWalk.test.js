const isTenMinuteWalk = require("./tenMinuteWalk")

describe('Ten Minutes Walk', () =>{
    xit('Return FALSE if the array is composed by just one elements', () =>{
        expect(isTenMinuteWalk(["n"])).toBe(false)
    })
    it('Return FALSE if the array is composed by just two elements', () =>{
        expect(isTenMinuteWalk(["w", "s"])).toBe(false)
    })
    xit('Return FALSE if the array is composed by just 9 elements', () =>{
        expect(isTenMinuteWalk(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n'])).toBe(false)
    })
    xit('Return TRUE if the array is composed by 10 elements', () =>{
        expect(isTenMinuteWalk(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n','e'])).toBe(true)
    })

    xit('Check if the numbers of "n" are equals to number of "s"', () => {
        expect(isTenMinuteWalk(['n', 's', 'e', 's', 's', 'e', 's', 'w', 'e','n'])).toBe("Same numbers of 'n' and 's'")
    })
    it('Return TRUE if number of n/s are the same of e/w', () => {
        expect(isTenMinuteWalk(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'])).toBe(true)
    })
    it('Return FALSE if number of n/s are not the same of e/w', () => {
        expect(isTenMinuteWalk(['w', 'w', 'w', 'e', 'n', 'n', 'e', 's', 'w', 'w'])).toBe(false)
    })
    it('Return TRUE if number of n/s are the same of e/w', () => {
        expect(isTenMinuteWalk(['w','w', 'e', 'e', 'n', 'n', 'e', 'w', 's', 's'])).toBe(true)
    })


     

})


['w','w', 'e', 'e', 'n', 'n', 'e', 'w', 's', 's']