


const time = require("./TimeConversion")

describe("time ",function(){

    test("should work of  below  one minite",function(){
        expect(time(7300)).toBe("7 seconds")
    })

    test("should work of   one minite",function(){
        expect(time(60000)).toBe("1 minute")
    })

    
    test("should work of  minites",function(){
        expect(time(300000)).toBe("5 minutes")
    })

      
    test("should work of  hours",function(){
        expect(time(18000000)).toBe("5 hours")
    })

        
    test("should work of  hours",function(){
        expect(time(3620000)).toBe("1 hours 0 minute 20 seconds")
    })

})