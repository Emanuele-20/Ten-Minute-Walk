const walk = require("./tenMinuteWalk")

describe('Ten Minutes Walk', () =>{
    it('Return FALSE if the array is composed by just one elements', () =>{
        expect(walk(["n"])).toBe(false)
    })
    it('Return FALSE if the array is composed by just two elements', () =>{
        expect(walk(["w", "s"])).toBe(false)
    })
    it('Return FALSE if the array is composed by just 9 elements', () =>{
        expect(walk(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n'])).toBe(false)
    })
    it('Return TRUE if the array is composed by 10 elements', () =>{
        expect(walk(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n','e'])).toBe(true)
    })

})


